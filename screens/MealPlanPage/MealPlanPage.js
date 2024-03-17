import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import ListItem from '../../components/ListItem/ListItem';
import {SquareButton} from '../../components/Button/Button';
import {PlusCircle, Home} from '../../components/Icons/Icons';
import SearchBar from '../../components/SearchBar/SearchBar';
import style from './style';
import {RecipeSearch} from '../../mockServer/functionality/searchFunctions';
import { GetRecipes, UpdateCollection } from '../../mockServer/functionality/crudFunctions';

/**This component displays a meal plan**/

const MealPlanPage = ({navigation, route}) => {
    const mealPlan = route.params?.collection;
    // const [recipes, setRecipes] = useState([]);

    /*load meal plan data using the meal plan passed by the route params. 
    * runs on the first render and every time collection changes*/
    useEffect(() => {
        loadMealPlan();
    }, [mealPlan]);


  const loadMealPlan = async () => {
    try {
      const result = await GetRecipes();
      setRecipes(result.filter((recipe) => collection.recipes.includes(recipe.id)));
    } catch(error) {
      console.log(error);
    }
  };

  const handleSearch = async (text) => {
    // if (text === '') {
    //   //load all collection recipes and set recipe state
    //   loadCollectionRecipes();
    // }
    // else {
    //   const searchResult = await RecipeSearch(text);
    //   setRecipes(searchResult);
    // }
  };

  const goBack = () => {
    navigation.goBack();
  };

  const navigateToRecipePage = recipes => {
    navigation.navigate('RecipePage', {recipes: recipes});
  };

  const goHome = () => {
    navigation.navigate('Home');
  };

  const editCollection = () => {
    //navigate to create collection screen
    navigation.navigate('EditCollection', {collection: collection, newCollection: false});
  }

//   const deleteRecipe = async (index, id) => {
//     //update screen
//     setRecipes(recipes.filter((recipe) => recipe.id !== id));

//     //update the collection in the database
//     try {
//       const newRecipes = collection.recipes.filter((recipeId) => recipeId !== id);
//       const result = await UpdateCollection(collection.name, newRecipes, collection.id);
//     } catch(e) {
//       console.log(e);
//     }
//   };

  return (
      <BaseScreen
          title={collection.name}
          canEdit={false}
          canGoBack={true}
          goBack={goBack}>
        {/* {recipes.length === 0 ? (
            <View style={style.emptyRecipes}>
              <Text>No recipes found</Text>
            </View>
        ) : (
            <ScrollView style={style.scrollContainer}>
              {recipes.map((recipe, index) => {
                return (
                    <ListItem
                        name={recipe.name}
                        recipe={recipe}
                        key={index}
                        onPress={() => navigateToRecipePage(recipe)}
                        swipeHandler={() => deleteRecipe(index, recipe.id)}
                    />
                );
              })}
            </ScrollView>
        )} */}

        <View style={style.recipeSearchContainer}>
          <View style={style.buttonsContainer}>
            <View>
              <SquareButton icon={<PlusCircle />}></SquareButton>
            </View>
            <View>
              <SquareButton handler={goHome} icon={<Home />}></SquareButton>
            </View>
            <View style={style.buttonPlaceHolder}></View>
          </View>
          {/* Search bar */}
          <View>
            <SearchBar handleSearch={handleSearch} test="testing" />
          </View>
        </View>
      </BaseScreen>
  );
};

export default MealPlanPage;