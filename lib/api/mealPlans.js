import {supabase} from '../supabaseClient';

export const MEAL_PLAN_SELECT =
  'id, name, length, time_unit, meal_plan_days(day_number, meal_plan_day_recipes(recipe_id, order_index))';

export const toMealPlan = row => ({
  id: row.id,
  name: row.name,
  length: row.length,
  time: row.time_unit,
  recipes: (row.meal_plan_days || [])
    .sort((a, b) => a.day_number - b.day_number)
    .map(day => ({
      day: day.day_number,
      recipes: (day.meal_plan_day_recipes || [])
        .sort((a, b) => a.order_index - b.order_index)
        .map(r => r.recipe_id),
    })),
});

const writeMealPlanDays = async (mealPlanId, days) => {
  if (!days?.length) {
    return;
  }
  for (const day of days) {
    const {data: dayRow, error} = await supabase
      .from('meal_plan_days')
      .insert({meal_plan_id: mealPlanId, day_number: day.day})
      .select()
      .single();
    if (error) {
      console.log(error);
      continue;
    }
    if (day.recipes?.length) {
      const rows = day.recipes.map((recipeId, index) => ({
        day_id: dayRow.id,
        recipe_id: recipeId,
        order_index: index,
      }));
      const {error: recipeError} = await supabase
        .from('meal_plan_day_recipes')
        .insert(rows);
      if (recipeError) {
        console.log(recipeError);
      }
    }
  }
};

const GetMealPlans = async () => {
  const {data, error} = await supabase
    .from('meal_plans')
    .select(MEAL_PLAN_SELECT)
    .order('id');
  if (error) {
    console.log(error);
    return [];
  }
  return data.map(toMealPlan);
};

const GetMealPlanById = async id => {
  const {data, error} = await supabase
    .from('meal_plans')
    .select(MEAL_PLAN_SELECT)
    .eq('id', id)
    .single();
  if (error) {
    console.log(error);
    return null;
  }
  return toMealPlan(data);
};

const CreateMealPlan = async (name, recipes, length, time) => {
  const {data: mealPlan, error} = await supabase
    .from('meal_plans')
    .insert({name, length, time_unit: time})
    .select()
    .single();
  if (error) {
    console.log(error);
    return null;
  }
  await writeMealPlanDays(mealPlan.id, recipes);
  return GetMealPlanById(mealPlan.id);
};

const UpdateMealPlan = async (name, recipes, length, time, id) => {
  const {error} = await supabase
    .from('meal_plans')
    .update({name, length, time_unit: time})
    .eq('id', id);
  if (error) {
    console.log(error);
    return null;
  }
  // cascades to meal_plan_day_recipes via FK
  await supabase.from('meal_plan_days').delete().eq('meal_plan_id', id);
  await writeMealPlanDays(id, recipes);
  return GetMealPlanById(id);
};

const DeleteMealPlan = async id => {
  const {error} = await supabase.from('meal_plans').delete().eq('id', id);
  if (error) {
    console.log(error);
  }
};

export {
  GetMealPlans,
  GetMealPlanById,
  CreateMealPlan,
  UpdateMealPlan,
  DeleteMealPlan,
};
