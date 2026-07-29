import {supabase} from '../supabaseClient';

export const COLLECTION_SELECT =
  'id, name, collection_recipes(recipe_id, order_index)';

export const toCollection = row => ({
  id: row.id,
  name: row.name,
  recipes: (row.collection_recipes || [])
    .sort((a, b) => a.order_index - b.order_index)
    .map(cr => cr.recipe_id),
});

const writeCollectionRecipes = async (collectionId, recipeIds) => {
  if (!recipeIds?.length) {
    return;
  }
  const rows = recipeIds.map((recipeId, index) => ({
    collection_id: collectionId,
    recipe_id: recipeId,
    order_index: index,
  }));
  const {error} = await supabase.from('collection_recipes').insert(rows);
  if (error) {
    console.log(error);
  }
};

const GetCollections = async () => {
  const {data, error} = await supabase
    .from('collections')
    .select(COLLECTION_SELECT)
    .order('id');
  if (error) {
    console.log(error);
    return [];
  }
  return data.map(toCollection);
};

const GetCollectionById = async id => {
  const {data, error} = await supabase
    .from('collections')
    .select(COLLECTION_SELECT)
    .eq('id', id)
    .single();
  if (error) {
    console.log(error);
    return null;
  }
  return toCollection(data);
};

const CreateCollection = async (name, recipes) => {
  const {data: collection, error} = await supabase
    .from('collections')
    .insert({name})
    .select()
    .single();
  if (error) {
    console.log(error);
    return null;
  }
  await writeCollectionRecipes(collection.id, recipes);
  return GetCollectionById(collection.id);
};

const UpdateCollection = async (name, recipes, id) => {
  const {error} = await supabase
    .from('collections')
    .update({name})
    .eq('id', id);
  if (error) {
    console.log(error);
    return null;
  }
  await supabase.from('collection_recipes').delete().eq('collection_id', id);
  await writeCollectionRecipes(id, recipes);
  return GetCollectionById(id);
};

const DeleteCollection = async id => {
  const {error} = await supabase.from('collections').delete().eq('id', id);
  if (error) {
    console.log(error);
  }
};

export {
  GetCollections,
  GetCollectionById,
  CreateCollection,
  UpdateCollection,
  DeleteCollection,
};
