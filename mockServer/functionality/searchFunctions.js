import axios from 'axios';

const RecipeSearch = async (userInput) => {
  console.log("ATTEMPTING TO LOAD RECIPES");
  try {
    const response = await axios.get(`http://10.0.2.2:3000/recipes?q=${userInput}`);
    console.log("SUCCESS");
    return response.data;
  } catch (error) {
    console.log("FAILURE");
    console.log(error);
    if (error.response) {
    //   console.log("DATA" + error.response.data);
    //   console.log("STATUS" + error.response.status);
    //   console.log("HEADERS" + error.response.headers);
    } else if (error.request) {
      console.log("REQUEST" + error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
    return error;
  }
};

const CollectionSearch = async (userInput) => {
    console.log("ATTEMPTING TO LOAD COLLECTIONS");
    try {
      const response = await axios.get(`http://10.0.2.2:3000/collections?q=${userInput}`);
      console.log("SUCCESS");
      return response.data;
    } catch (error) {
      console.log("FAILURE");
      console.log(error);
      if (error.response) {
      //   console.log("DATA" + error.response.data);
      //   console.log("STATUS" + error.response.status);
      //   console.log("HEADERS" + error.response.headers);
      } else if (error.request) {
        console.log("REQUEST" + error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
};

const MealPlanSearch = async (userInput) => {
    console.log("ATTEMPTING TO LOAD MEAL PLAN");
    try {
      const response = await axios.get(`http://10.0.2.2:3000/mealplans?q=${userInput}`);
      console.log("SUCCESS");
      return response.data;
    } catch (error) {
      console.log("FAILURE");
      console.log(error);
      if (error.response) {
      //   console.log("DATA" + error.response.data);
      //   console.log("STATUS" + error.response.status);
      //   console.log("HEADERS" + error.response.headers);
      } else if (error.request) {
        console.log("REQUEST" + error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
};

export default RecipeSearch;
export { RecipeSearch, CollectionSearch, MealPlanSearch };