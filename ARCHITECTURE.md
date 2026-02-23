# Entreprête — Architecture & Planning Document

> This document exists to provide continuity across AI-assisted development sessions.
> Paste this file as context at the start of each new session to resume without back-and-forth catch-up.
> Update this document at the end of every session to reflect new decisions.

---

## Project Overview

**Entreprête** is a recipe and meal planning app with ambitions to grow into a social/community platform ("Instagram for recipes"). Development is intentionally slow and incremental — basic functionality first, more robust features layered in over time.

**Current State:**
- React Native (v0.73.4) prototype — functional but being abandoned in favor of native
- Mock backend using `json-server` pointing at `http://10.0.2.2:3000` (Android emulator localhost)
- No real database, no auth, no user accounts
- All 9 core screens are built and navigable
- CRUD and search functions exist but several screens still pull directly from local `db.json`
- No recipe creation screen (TODO stub)
- No meal plan creation screen (navigates to unregistered `AddMealPlan` route — would crash)
- Calendar screen is a non-functional stub

---

## Decided: Target Stack

### Frontend
| Layer | Technology | Notes |
|---|---|---|
| Shared logic | **Kotlin Multiplatform (KMP)** | Single implementation of data models, API client, repositories, search logic |
| iOS UI | **SwiftUI** | Native, fully independent UI layer |
| Android UI | **Jetpack Compose** | Native, fully independent UI layer |
| iOS/Kotlin bridge | **SKIE** (by Touchlab) | Makes Kotlin coroutines feel like Swift async/await — add from day one |
| Offline caching | **SQLDelight** | KMP-native SQLite, schema defined once, type-safe queries on both platforms |
| Networking (KMP) | **Ktor** | KMP-native HTTP client, replaces Axios/Retrofit |

### Backend
| Layer | Technology | Notes |
|---|---|---|
| Database | **PostgreSQL** | Via Supabase hosted instance |
| Backend platform | **Supabase** | Hosted Postgres + Auth + REST API + Realtime + Storage + Edge Functions |
| Search (future) | **Postgres `tsvector`** initially, **Elasticsearch/Algolia** if needed at scale | Augments Postgres, never replaces it |

### Development Environment
- **Android Studio** — primary IDE (first-class KMP support, JetBrains builds both)
- **Xcode** — required for iOS simulator, device signing, App Store/TestFlight submission
- Any preferred editor for day-to-day Swift/SwiftUI code
- Xcode is Mac-only; iOS development is permanently Mac-dependent

---

## Decided: Architecture Patterns

### KMP Call Chain
```
iOS:     SwiftUI View  →  @ObservableObject ViewModel  →  KMP Repository  →  Ktor (HTTP)
Android: Compose UI    →  Android ViewModel            →  KMP Repository  →  Ktor (HTTP)
```

- **KMP Repository** — contains all business logic, API calls, search filtering. Written once in Kotlin.
- **ViewModels** — thin native wrappers per platform. Translate repository results into observable UI state. Contain almost no logic themselves.
- **UI layers** — consume ViewModel state. No direct database or API knowledge.

### Data Flow (Read Example)
```
User taps a recipe
        ↓
Native onClick (Swift or Kotlin)
        ↓
ViewModel calls shared KMP repository: getRecipe(recipeId)
        ↓
Repository fetches via Ktor → Supabase REST API
        ↓
Response deserialized into shared Kotlin data class: Recipe
        ↓
ViewModel updates UI state
        ↓
SwiftUI / Compose re-renders
```

### Offline Caching
- SQLDelight mirrors the server schema in a local SQLite database
- Repository checks local cache first, falls back to network
- Schema defined once in KMP, generates type-safe query functions for both platforms

---

## Decided: Data Architecture

### Core Design Principles
1. **Split tables, not JSON blobs** — recipes are stored as structured relational rows, never as raw JSON documents. JSON is transport format only (HTTP responses).
2. **Single `recipes` table** with a `visibility` column — no separate table for public vs. private recipes.
3. **Pre-computed metrics** — social counters (likes, saves, comments) are maintained as running totals in a `recipe_metrics` table, updated by background workers when events occur. Raw event tables (`recipe_likes`, etc.) are the source of truth.
4. **Write-through cache pattern** for social feeds — feeds and leaderboards are pre-computed at write time, not aggregated at read time.
5. **`source_meta JSONB` column** for flexible AI-inferred recipe provenance metadata — handles unpredictable shapes (cookbook page numbers, chapter titles, etc.) without rigid columns.

---

## Decided: Schema (Design In Progress)

> Full schema design is the next session's primary task. The following captures decided principles and known tables. Incomplete — do not treat as final.

### Known Tables

```sql
-- Core recipe data
recipes
  id               INTEGER    PRIMARY KEY
  user_id          INTEGER    REFERENCES users(id)
  title            TEXT       NOT NULL
  visibility       TEXT       NOT NULL  -- 'private', 'public', 'unlisted'
  source_type      TEXT                 -- 'manual', 'url', 'ocr', 'shared', 'instagram'
  source_url       TEXT                 -- nullable
  source_citation  TEXT                 -- nullable, honor-system OCR attribution
  source_meta      JSONB                -- flexible AI-inferred provenance (page number, chapter, etc.)
  cuisine_id       INTEGER    REFERENCES cuisines(id)  -- nullable, future AI inference
  created_at       TIMESTAMP
  updated_at       TIMESTAMP

-- Ingredients as rows (enables future ingredient search, shopping lists, substitutions)
ingredients
  id            INTEGER    PRIMARY KEY
  recipe_id     INTEGER    REFERENCES recipes(id)
  amount        TEXT
  name          TEXT
  order_index   INTEGER

-- Steps as rows (enables per-step notes)
steps
  id            INTEGER    PRIMARY KEY
  recipe_id     INTEGER    REFERENCES recipes(id)
  step_number   INTEGER
  instruction   TEXT
  note          TEXT       -- nullable

-- Collections (many-to-many: users → recipes)
collections
  id         INTEGER    PRIMARY KEY
  user_id    INTEGER    REFERENCES users(id)
  name       TEXT

collection_recipes
  collection_id    REFERENCES collections(id)
  recipe_id        REFERENCES recipes(id)

-- Meal plans
meal_plans
  id          INTEGER    PRIMARY KEY
  user_id     INTEGER    REFERENCES users(id)
  name        TEXT
  length      INTEGER
  time_unit   TEXT       -- 'days', 'weeks'

meal_plan_days
  id             INTEGER    PRIMARY KEY
  meal_plan_id   REFERENCES meal_plans(id)
  day_number     INTEGER

meal_plan_day_recipes
  day_id       REFERENCES meal_plan_days(id)
  recipe_id    REFERENCES recipes(id)

-- Calendar events
events
  id             INTEGER    PRIMARY KEY
  user_id        INTEGER    REFERENCES users(id)
  meal_plan_id   INTEGER    REFERENCES meal_plans(id)
  start_date     DATE

-- Cuisine lookup
cuisines
  id      INTEGER    PRIMARY KEY
  name    TEXT

-- Social: saves (adding a public recipe to your own recipe book)
recipe_saves
  id           INTEGER    PRIMARY KEY
  user_id      INTEGER    REFERENCES users(id)
  recipe_id    INTEGER    REFERENCES recipes(id)
  created_at   TIMESTAMP

-- Social: likes
recipe_likes
  id           INTEGER    PRIMARY KEY
  user_id      INTEGER    REFERENCES users(id)
  recipe_id    INTEGER    REFERENCES recipes(id)
  created_at   TIMESTAMP

-- Social: comments (with optional threading)
recipe_comments
  id                INTEGER    PRIMARY KEY
  user_id           INTEGER    REFERENCES users(id)
  recipe_id         INTEGER    REFERENCES recipes(id)
  body              TEXT
  parent_comment_id INTEGER    REFERENCES recipe_comments(id)  -- nullable
  created_at        TIMESTAMP

-- Pre-computed social metrics (fast reads, NOT source of truth)
recipe_metrics
  recipe_id          REFERENCES recipes(id)
  like_count         INTEGER    DEFAULT 0
  save_count         INTEGER    DEFAULT 0
  comment_count      INTEGER    DEFAULT 0
  score_this_month   INTEGER    DEFAULT 0  -- recalculated periodically
  updated_at         TIMESTAMP

-- Social graph
follows
  follower_id     REFERENCES users(id)
  following_id    REFERENCES users(id)
  created_at

-- Pre-computed activity feed per user
feed_items
  id            INTEGER    PRIMARY KEY
  user_id       INTEGER    REFERENCES users(id)   -- feed owner
  actor_id      INTEGER    REFERENCES users(id)   -- who performed the action
  recipe_id     INTEGER    REFERENCES recipes(id)
  event_type    TEXT       -- 'post', 'save', 'like', 'comment'
  created_at    TIMESTAMP

-- P2P chat
conversations
  id           INTEGER    PRIMARY KEY
  created_at   TIMESTAMP

conversation_participants
  conversation_id    REFERENCES conversations(id)
  user_id            REFERENCES users(id)

messages
  id                  INTEGER    PRIMARY KEY
  conversation_id     REFERENCES conversations(id)
  sender_id           REFERENCES users(id)
  body                TEXT
  shared_recipe_id    INTEGER    REFERENCES recipes(id)  -- nullable
  sent_at             TIMESTAMP
```

---

## Decided: KMP Shared Data Models

```kotlin
// shared/src/commonMain/kotlin/models/

data class Recipe(
    val id: Int,
    val userId: Int,
    val title: String,
    val visibility: String,
    val sourceType: String?,
    val sourceUrl: String?,
    val sourceCitation: String?,
    val cuisine: String?,
    val ingredients: List<Ingredient>,
    val steps: List<Step>
)

data class Ingredient(
    val amount: String,
    val name: String
)

data class Step(
    val stepNumber: Int,
    val instruction: String,
    val note: String?
)

data class Collection(
    val id: Int,
    val userId: Int,
    val name: String,
    val recipes: List<Recipe>
)

data class MealPlan(
    val id: Int,
    val userId: Int,
    val name: String,
    val length: Int,
    val timeUnit: String,
    val days: List<MealPlanDay>
)

data class MealPlanDay(
    val dayNumber: Int,
    val recipes: List<Recipe>
)

data class Event(
    val id: Int,
    val userId: Int,
    val mealPlanId: Int,
    val startDate: String
)
```

---

## Deferred Decisions (Next Sessions)

### Immediate Next Session
- [ ] **Full schema stress-test** — walk every described feature through the schema and verify nothing is awkward to model before standing up the database
- [ ] **Stand up Supabase instance** — run schema, verify REST API shape matches expected KMP models
- [ ] **Environment config approach** — how API URLs and keys are managed across dev/staging/prod in KMP

### Near-term
- [ ] **Auth strategy** — Supabase Auth with email/password + OAuth (Google, Apple) is the assumed path but not finalized
- [ ] **Offline-first strategy** — how aggressively SQLDelight caches, conflict resolution if edits are made offline
- [ ] **Recipe scraping architecture** — where URL scraping and OCR processing live (Supabase Edge Functions is the likely answer)
- [ ] **Search strategy** — Postgres `tsvector` for v1, revisit when community recipe library grows large

### Future / Not Yet Scoped
- [ ] Instagram recipe pulling (legal/ToS considerations unresolved)
- [ ] AI cuisine inference
- [ ] Feed ranking algorithm
- [ ] Notification system
- [ ] Recipe photo storage (Supabase Storage is the assumed path)

---

## Current Codebase State (React Native — Being Replaced)

**Screens:** Home, RecipeBook, RecipePage, Collections, CollectionPage, EditCollection, MealPlans, MealPlanPage, Calendar

**What works:**
- Collections loads from API and saves back correctly
- Recipe editing saves via API
- Navigation between all screens

**Known gaps in RN prototype (for reference, not to fix):**
- RecipeBook and MealPlans initialize from local `db.json` instead of API
- Calendar is a non-functional stub
- Recipe creation is a TODO stub
- Meal plan creation navigates to unregistered route
- All API URLs hardcoded to `http://10.0.2.2:3000` (Android emulator only)
- No auth, no user accounts, all users share same data

---

## Session Log

| Date | Summary |
|---|---|
| Session 1 | Full project audit. Decided on KMP + SwiftUI + Compose + Supabase/PostgreSQL stack. Designed schema principles. Established write-through cache pattern for social features. Confirmed single-table recipe visibility approach. Identified full schema design as next task. |