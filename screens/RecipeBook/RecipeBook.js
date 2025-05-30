import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import ListItem from '../../components/ListItem/ListItem';
import {SquareButton} from '../../components/Button/Button';
import {PlusCircle, Home} from '../../components/Icons/Icons';
import SearchBar from '../../components/SearchBar/SearchBar';
import style from './style';
import testData from '../../mockServer/db.json';
import {RecipeSearch} from '../../mockServer/functionality/searchFunctions';
import { DeleteRecipe } from '../../mockServer/functionality/crudFunctions';

const RecipeBook = ({navigation, route}) => {
  const collectionId = route.params?.collectionId;
  const recipesIds = route.params?.recipesIds;
  const isCollection = route.params?.isCollection || false; //set to true to search within the collection only
  const pageTitle = route.params?.pageTitle || 'Recipe Book';
  let originalRecipes = [];

  if (recipesIds) {
    originalRecipes = testData.recipes.filter(recipe =>
        recipesIds.includes(recipe.id),
    );
  } else {
    originalRecipes = testData.recipes;
  }

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (recipesIds === undefined) {
      setRecipes(testData.recipes);
      return;
    }
    if (recipesIds && recipesIds.length > 0) {
      // Check if recipesIds exists and has length
      originalRecipes = testData.recipes.filter(recipe =>
          recipesIds.includes(recipe.id),
      );
      setRecipes(originalRecipes);
    } else {
      // If no recipe IDs are provided, set all recipes
      setRecipes([]);
      originalRecipes = [];
    }
  }, [recipesIds]);

  const handleSearch = async (text) => {
    if (text === '') {
      setRecipes(originalRecipes);
      return;
    }

    if(isCollection) {
      const filteredRecipes = originalRecipes.filter(recipe =>
          recipe.name.toLowerCase().includes(text.toLowerCase()),
      );
      setRecipes(filteredRecipes);
    }
    else {
      const searchResult = await RecipeSearch(text);
      setRecipes(searchResult);
    }
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
    navigation.navigate('EditCollection', {recipesIds: recipesIds, newCollection: false, pageTitle: pageTitle, collectionTitle: pageTitle, collectionId: collectionId});
  }

  const createRecipe = () => {
    //TODO: navigate to recipe creation page
  }

  const deleteRecipe = async (index, id) => {
    setRecipes(prevRecipes => {
      const newRecipes = prevRecipes.filter((_, i) => i !== index);
      return newRecipes;
    });

    try {
      const result = await DeleteRecipe(id);
    } catch(e) {
      console.log(e);
    }
  };

  return (
      <BaseScreen
          title={pageTitle}
          canEdit={false}
          canGoBack={true}
          goBack={goBack}>
        {recipes.length === 0 ? (
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
        )}

        <View style={style.recipeSearchContainer}>
          <View style={style.buttonsContainer}>
            <View>
              <SquareButton handler={isCollection ? editCollection : createRecipe} icon={<PlusCircle />}></SquareButton>
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

export default RecipeBook;