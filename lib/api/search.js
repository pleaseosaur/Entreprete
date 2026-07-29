import {supabase} from '../supabaseClient';
import {RECIPE_SELECT, toRecipe} from './recipes';
import {COLLECTION_SELECT, toCollection} from './collections';
import {MEAL_PLAN_SELECT, toMealPlan} from './mealPlans';

const RecipeSearch = async userInput => {
  const {data, error} = await supabase
    .from('recipes')
    .select(RECIPE_SELECT)
    .ilike('name', `%${userInput}%`)
    .order('id');
  if (error) {
    console.log(error);
    return [];
  }
  return data.map(toRecipe);
};

const CollectionSearch = async userInput => {
  const {data, error} = await supabase
    .from('collections')
    .select(COLLECTION_SELECT)
    .ilike('name', `%${userInput}%`)
    .order('id');
  if (error) {
    console.log(error);
    return [];
  }
  return data.map(toCollection);
};

const MealPlanSearch = async userInput => {
  const {data, error} = await supabase
    .from('meal_plans')
    .select(MEAL_PLAN_SELECT)
    .ilike('name', `%${userInput}%`)
    .order('id');
  if (error) {
    console.log(error);
    return [];
  }
  return data.map(toMealPlan);
};

export default RecipeSearch;
export {RecipeSearch, CollectionSearch, MealPlanSearch};
