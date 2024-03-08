import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import ListItem from '../../components/ListItem/ListItem';
import {SquareButton} from '../../components/Button/Button';
import {PlusCircle, Home} from '../../components/Icons/Icons';
import SearchBar from '../../components/SearchBar/SearchBar';
import style from './style';

const RecipeBook = ({navigation, route}) => {
  const goBack = () => {
    navigation.goBack();
  };
  const navigateToRecipePage = recipes => {
    navigation.navigate('RecipePage', {recipes: recipes});
  };

  const goHome = () => {
    navigation.navigate('Home');
  };

  // const {recipes = []} = route.params || [];
  const recipes = [
    {
      name: 'Recipe',
      ingredients: [{amount: "4 tbsp", ingredients: "ingredient 1"}, {amount: "1 handful", ingredients: "ingredient 2  "}, {amount: "10 cups", ingredients: "ingredient 3"}],
      instructions: ['direction 1', 'direction 2'],
    },
    {
      name: 'Super Long Recipe Name',
      ingredients: [{amount: "4 tbsp", ingredients: "ingredient 1"}, {amount: "1 handful", ingredients: "ingredient 2  "}, {amount: "10 cups", ingredients: "ingredient 3"}],
      instructions: ['direction 1', 'direction 2'],
    },
    {
      name: 'Recipe',
      ingredients: [{amount: "4 tbsp", ingredients: "ingredient 1"}, {amount: "1 handful", ingredients: "ingredient 2  "}, {amount: "10 cups", ingredients: "ingredient 3"}],
      instructions: ['direction 1', 'direction 2'],
    },
    {
      name: 'Even Longer Super Long Recipe Name Literally So Long',
      ingredients: [{amount: "4 tbsp", ingredients: "ingredient 1"}, {amount: "1 handful", ingredients: "ingredient 2  "}, {amount: "10 cups", ingredients: "ingredient 3"}],
      instructions: ['direction 1', 'direction 2'],
    },
    {      name: 'Recipe',
    ingredients: [{amount: "4 tbsp", ingredients: "ingredient 1"}, {amount: "1 handful", ingredients: "ingredient 2  "}, {amount: "10 cups", ingredients: "ingredient 3"}],
    instructions: ['direction 1', 'direction 2'],
  },
  {
    name: 'Super Long Recipe Name',
    ingredients: [{amount: "4 tbsp", ingredients: "ingredient 1"}, {amount: "1 handful", ingredients: "ingredient 2  "}, {amount: "10 cups", ingredients: "ingredient 3"}],
    instructions: ['direction 1', 'direction 2'],
  },
  {
    name: 'Recipe',
    ingredients: [{amount: "4 tbsp", ingredients: "ingredient 1"}, {amount: "1 handful", ingredients: "ingredient 2  "}, {amount: "10 cups", ingredients: "ingredient 3"}],
    instructions: ['direction 1', 'direction 2'],
  },
  {
    name: 'Even Longer Super Long Recipe Name Literally So Long',
    ingredients: [{amount: "4 tbsp", ingredients: "ingredient 1"}, {amount: "1 handful", ingredients: "ingredient 2  "}, {amount: "10 cups", ingredients: "ingredient 3"}],
    instructions: ['direction 1', 'direction 2'],
  },
  {      
    name: 'Recipe',
    ingredients: [{amount: "4 tbsp", ingredients: "ingredient 1"}, {amount: "1 handful", ingredients: "ingredient 2  "}, {amount: "10 cups", ingredients: "ingredient 3"}],
    instructions: ['direction 1', 'direction 2'],
  },
  {
    name: 'Super Long Recipe Name',
    ingredients: [{amount: "4 tbsp", ingredients: "ingredient 1"}, {amount: "1 handful", ingredients: "ingredient 2  "}, {amount: "10 cups", ingredients: "ingredient 3"}],
    instructions: ['direction 1', 'direction 2'],
  },
  {
    name: 'Recipe',
    ingredients: [{amount: "4 tbsp", ingredients: "ingredient 1"}, {amount: "1 handful", ingredients: "ingredient 2  "}, {amount: "10 cups", ingredients: "ingredient 3"}],
    instructions: ['direction 1', 'direction 2'],
  },
  {
    name: 'Even Longer Super Long Recipe Name Literally So Long',
    ingredients: [{amount: "4 tbsp", ingredients: "ingredient 1"}, {amount: "1 handful", ingredients: "ingredient 2  "}, {amount: "10 cups", ingredients: "ingredient 3"}],
    instructions: ['direction 1', 'direction 2'],
  }];

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
                swipeIcon={<Home/>}
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
          <SearchBar />
        </View>
      </View>
    </BaseScreen>
  );
};

export default RecipeBook;
