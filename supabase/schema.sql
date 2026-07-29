-- Entreprête database schema
--
-- Run this in the Supabase SQL editor (or `supabase db push`) against a
-- fresh project before running seed.sql. Mirrors the entities the React
-- Native app currently manages: recipes, collections, meal plans, events.
--
-- Split-tables-not-JSON-blobs per ARCHITECTURE.md: ingredients and
-- instructions are rows, not JSON columns, so they can be searched/edited
-- individually later.
--
-- SECURITY NOTE: the app has no auth yet (see ARCHITECTURE.md "Deferred
-- Decisions"), so every table is open to the anon key below. This must be
-- replaced with per-user policies once auth ships — do not treat this as
-- a production-ready posture.

create table if not exists recipes (
  id           bigint generated always as identity primary key,
  name         text not null,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create table if not exists recipe_ingredients (
  id           bigint generated always as identity primary key,
  recipe_id    bigint not null references recipes(id) on delete cascade,
  amount       text,
  name         text not null,
  order_index  integer not null default 0
);

create index if not exists recipe_ingredients_recipe_id_idx on recipe_ingredients(recipe_id);

create table if not exists recipe_instructions (
  id           bigint generated always as identity primary key,
  recipe_id    bigint not null references recipes(id) on delete cascade,
  step_number  integer not null,
  instruction  text not null
);

create index if not exists recipe_instructions_recipe_id_idx on recipe_instructions(recipe_id);

create table if not exists collections (
  id           bigint generated always as identity primary key,
  name         text not null,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create table if not exists collection_recipes (
  collection_id  bigint not null references collections(id) on delete cascade,
  recipe_id      bigint not null references recipes(id) on delete cascade,
  order_index    integer not null default 0,
  primary key (collection_id, recipe_id)
);

create table if not exists meal_plans (
  id           bigint generated always as identity primary key,
  name         text not null,
  length       integer not null,
  time_unit    text not null default 'days',
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create table if not exists meal_plan_days (
  id             bigint generated always as identity primary key,
  meal_plan_id   bigint not null references meal_plans(id) on delete cascade,
  day_number     integer not null
);

create index if not exists meal_plan_days_meal_plan_id_idx on meal_plan_days(meal_plan_id);

-- Surrogate key (not a composite PK on day_id+recipe_id) because a single
-- day can list the same recipe more than once (e.g. leftovers).
create table if not exists meal_plan_day_recipes (
  id           bigint generated always as identity primary key,
  day_id       bigint not null references meal_plan_days(id) on delete cascade,
  recipe_id    bigint not null references recipes(id) on delete cascade,
  order_index  integer not null default 0
);

create index if not exists meal_plan_day_recipes_day_id_idx on meal_plan_day_recipes(day_id);

create table if not exists events (
  id             bigint generated always as identity primary key,
  start_date     date not null,
  meal_plan_id   bigint references meal_plans(id) on delete cascade
);

-- Keep updated_at current on edits
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists recipes_set_updated_at on recipes;
create trigger recipes_set_updated_at before update on recipes
  for each row execute function set_updated_at();

drop trigger if exists collections_set_updated_at on collections;
create trigger collections_set_updated_at before update on collections
  for each row execute function set_updated_at();

drop trigger if exists meal_plans_set_updated_at on meal_plans;
create trigger meal_plans_set_updated_at before update on meal_plans
  for each row execute function set_updated_at();

-- Row Level Security: enabled everywhere, but wide open (anon + authenticated)
-- until the app has real accounts. Tighten to `user_id = auth.uid()` policies
-- when auth lands.
alter table recipes enable row level security;
alter table recipe_ingredients enable row level security;
alter table recipe_instructions enable row level security;
alter table collections enable row level security;
alter table collection_recipes enable row level security;
alter table meal_plans enable row level security;
alter table meal_plan_days enable row level security;
alter table meal_plan_day_recipes enable row level security;
alter table events enable row level security;

do $$
declare
  t text;
begin
  foreach t in array array[
    'recipes', 'recipe_ingredients', 'recipe_instructions',
    'collections', 'collection_recipes',
    'meal_plans', 'meal_plan_days', 'meal_plan_day_recipes',
    'events'
  ]
  loop
    execute format(
      'drop policy if exists "no_auth_full_access" on %I;
       create policy "no_auth_full_access" on %I
         for all to anon, authenticated using (true) with check (true);',
      t, t
    );
  end loop;
end $$;
