import axios from 'axios';

/*
* basic create, read, update, delete functionality for:
*     - recipes
*     - collections
*     - meal plans
*     - events
*/

/***************************************************
 *                   GENERIC
 ****************************************************/

//generic create function
const create = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//generic read function
const read = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//generic update function
const update = async (url, data) => {
  try {
    const response = await axios.patch(url, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//generic delete function
const remove = async (url) => {
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}


/****************************************************
 *                    RECIPES
 ****************************************************/
//get all recipes
const GetRecipes = async () => await read(`http://10.0.2.2:3000/recipes`);

//get recipe by ID
const GetRecipeByID = async (id) => await read(`http://10.0.2.2:3000/recipes/${id}`);

//make a new recipe
const CreateRecipe = async (name, ingredients, instructions) => await create(`http://10.0.2.2:3000/recipes`, {name: name, ingredients: ingredients, instructions: instructions});


//edit a recipe
const UpdateRecipe = async (name, ingredients, instructions, id) => await update(`http://10.0.2.2:3000/recipes/${id}`, {name: name, ingredients: ingredients, instructions: instructions});

//delete a recipe
const DeleteRecipe = async (id) => await remove(`http://10.0.2.2:3000/recipes/${id}`);

/*****************************************************
 *                  COLLECTIONS
 ****************************************************/

//get all collections
const GetCollections = async () => await read(`http://10.0.2.2:3000/collections`);

//get collection by ID
const GetCollectionById = async (id) => await read(`http://10.0.2.2:3000/collections/${id}`);

//make a new collection
const CreateCollection = async (name, recipes) => await create(`http://10.0.2.2:3000/collections`, {name: name, recipes: recipes});


//edit a collection
const UpdateCollection = async (name, recipes, id) => await update(`http://10.0.2.2:3000/collections/${id}`, {name: name, recipes: recipes});

//delete a collection
const DeleteCollection = async (id) => await remove(`http://10.0.2.2:3000/collections/${id}`);


/***************************************************
 *                  MEAL PLANS
 ****************************************************/
//get all mealplans
const GetMealPlans = async () => await read(`http://10.0.2.2:3000/mealplans`);

//get meal plan by ID
const GetMealPlanById = async (id) => await read(`http://10.0.2.2:3000/mealplans/${id}`);

//make a new meal plan
const CreateMealPlan = async (name, recipes, length, time) => await create(`http://10.0.2.2:3000/mealplans`, {name: name, recipes: recipes, length: length, time: time});


//edit a meal plan
const UpdateMealPlan = async (name, recipes, length, time, id) => await update(`http://10.0.2.2:3000/mealplans/${id}`, {name: name, recipes: recipes, length: length, time: time});

//delete a meal plan
const DeleteMealPlan = async (id) => await remove(`http://10.0.2.2:3000/mealplans/${id}`);

/***************************************************
 *                   EVENTS
 ****************************************************/
//get all events
const GetEvents = async () => await read(`http://10.0.2.2:3000/events`);

//get event by ID
const GetEventById = async (id) => await read(`http://10.0.2.2:3000/events/${id}`);

//make a new event
const CreateEvent = async (startDate, mealplanId) => await create(`http://10.0.2.2:3000/events`, {startDate: startDate, mealplanId: mealplanId});

//edit a event
const UpdateEvent = async (startDate, mealplanId, id) => await update(`http://10.0.2.2:3000/events/${id}`, {startDate: startDate, mealplanId: mealplanId});

//delete a event
const DeleteEvent = async (id) => await remove(`http://10.0.2.2:3000/events/${id}`);

export {
  GetRecipes,
  GetRecipeByID,
  CreateRecipe,
  UpdateRecipe,
  DeleteRecipe,
  GetCollections,
  GetCollectionById,
  CreateCollection,
  UpdateCollection,
  DeleteCollection,
  GetEvents,
  GetEventById,
  CreateEvent,
  UpdateEvent,
  DeleteEvent,
  GetMealPlans,
  GetMealPlanById,
  CreateMealPlan,
  UpdateMealPlan,
  DeleteMealPlan
};