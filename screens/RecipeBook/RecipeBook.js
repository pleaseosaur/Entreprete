import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import ListItem from '../../components/ListItem/ListItem';
import {SquareButton} from '../../components/Button/Button';
import {PlusCircle, Home} from '../../components/Icons/Icons';
import SearchBar from '../../components/SearchBar/SearchBar';
import style from './style';
import testData from '../../mockServer/db.json';

const RecipeBook = ({navigation, route}) => {
  const recipesIds = route.params?.recipesIds;
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
    if (recipesIds && recipesIds.length > 0) {
      // Check if recipesIds exists and has length
      originalRecipes = testData.recipes.filter(recipe =>
        recipesIds.includes(recipe.id),
      );
      console.log('originalRecipes', originalRecipes);
      setRecipes(originalRecipes);
    } else {
      // If no recipe IDs are provided, set all recipes
      setRecipes(testData.recipes);
    }
  }, [recipesIds]);

  const handleSearch = text => {
    if (text === '') {
      setRecipes(originalRecipes);
      return;
    }
    const filteredRecipes = originalRecipes.filter(recipe =>
      recipe.name.toLowerCase().includes(text.toLowerCase()),
    );
    setRecipes(filteredRecipes);
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

  const deleteRecipe = index => {
    setRecipes(prevRecipes => {
      const newRecipes = prevRecipes.filter((_, i) => i !== index);
      return newRecipes;
    });
  };

  return (
    <BaseScreen
      title={'Recipe Book'}
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
                swipeHandler={() => deleteRecipe(index)}
              />
            );
          })}
        </ScrollView>
      )}

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

export default RecipeBook;
