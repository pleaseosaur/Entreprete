import {supabase} from '../supabaseClient';

export const RECIPE_SELECT =
  'id, name, recipe_ingredients(amount, name, order_index), recipe_instructions(step_number, instruction)';

export const toRecipe = row => ({
  id: row.id,
  name: row.name,
  ingredients: (row.recipe_ingredients || [])
    .sort((a, b) => a.order_index - b.order_index)
    .map(i => ({amount: i.amount, ingredients: i.name})),
  instructions: (row.recipe_instructions || [])
    .sort((a, b) => a.step_number - b.step_number)
    .map(i => i.instruction),
});

const writeIngredientsAndInstructions = async (
  recipeId,
  ingredients,
  instructions,
) => {
  if (ingredients?.length) {
    const rows = ingredients.map((ing, index) => ({
      recipe_id: recipeId,
      amount: ing.amount,
      name: ing.ingredients,
      order_index: index,
    }));
    const {error} = await supabase.from('recipe_ingredients').insert(rows);
    if (error) {
      console.log(error);
    }
  }
  if (instructions?.length) {
    const rows = instructions.map((instruction, index) => ({
      recipe_id: recipeId,
      step_number: index + 1,
      instruction,
    }));
    const {error} = await supabase.from('recipe_instructions').insert(rows);
    if (error) {
      console.log(error);
    }
  }
};

const GetRecipes = async () => {
  const {data, error} = await supabase
    .from('recipes')
    .select(RECIPE_SELECT)
    .order('id');
  if (error) {
    console.log(error);
    return [];
  }
  return data.map(toRecipe);
};

const GetRecipeByID = async id => {
  const {data, error} = await supabase
    .from('recipes')
    .select(RECIPE_SELECT)
    .eq('id', id)
    .single();
  if (error) {
    console.log(error);
    return null;
  }
  return toRecipe(data);
};

const CreateRecipe = async (name, ingredients, instructions) => {
  const {data: recipe, error} = await supabase
    .from('recipes')
    .insert({name})
    .select()
    .single();
  if (error) {
    console.log(error);
    return null;
  }
  await writeIngredientsAndInstructions(recipe.id, ingredients, instructions);
  return GetRecipeByID(recipe.id);
};

const UpdateRecipe = async (name, ingredients, instructions, id) => {
  const {error} = await supabase.from('recipes').update({name}).eq('id', id);
  if (error) {
    console.log(error);
    return null;
  }
  await supabase.from('recipe_ingredients').delete().eq('recipe_id', id);
  await supabase.from('recipe_instructions').delete().eq('recipe_id', id);
  await writeIngredientsAndInstructions(id, ingredients, instructions);
  return GetRecipeByID(id);
};

const DeleteRecipe = async id => {
  const {error} = await supabase.from('recipes').delete().eq('id', id);
  if (error) {
    console.log(error);
  }
};

export {GetRecipes, GetRecipeByID, CreateRecipe, UpdateRecipe, DeleteRecipe};
