import React from 'react';
import {View, ScrollView} from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import RecipeItem from '../../components/RecipeItem/RecipeItem';
import {SquareButton} from '../../components/Button/Button';
import {PlusCircle, Home} from '../../components/Icons/Icons';
import SearchBar from '../../components/SearchBar/SearchBar';
import style from './style';

const Collections = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  const navigateToRecipe = recipes => {
    navigation.navigate('RecipeBook', {recipes: recipes});
  };

  const testRecipes = [
    {
      name: 'recipe1',
      ingredients: ['ingredient1', 'ingredient2'],
      instructions: ['direction1', 'direction2'],
    },
    {
      name: 'recipe2',
      ingredients: ['ingredient1', 'ingredient2'],
      instructions: ['direction1', 'direction2'],
    },
    {
      name: 'recipe3',
      ingredients: ['ingredient1', 'ingredient2'],
      instructions: ['direction1', 'direction2'],
    },
    {
      name: 'recipe4',
      ingredients: ['ingredient1', 'ingredient2'],
      instructions: ['direction1', 'direction2'],
    },
    {
      name: 'recipe5',
      ingredients: ['ingredient1', 'ingredient2'],
      instructions: ['direction1', 'direction2'],
    },
    {
      name: 'recipe6',
      ingredients: ['ingredient1', 'ingredient2'],
      instructions: ['direction1', 'direction2'],
    },
    {
      name: 'recipe7',
      ingredients: ['ingredient1', 'ingredient2'],
      instructions: ['direction1', 'direction2'],
    },
    {
      name: 'recipe8',
      ingredients: ['ingredient1', 'ingredient2'],
      instructions: ['direction1', 'direction2'],
    },
    {
      name: 'recipe9',
      ingredients: ['ingredient1', 'ingredient2'],
      instructions: ['direction1', 'direction2'],
    },
  ];

  const testCollections = [
    {
      name: 'Thai Cuisine',
      recipes: testRecipes,
    },
    {
      name: 'Italian Cuisine',
      recipes: testRecipes,
    },
    {
      name: 'Mexican Cuisine',
    },
    {
      name: 'American Cuisine',
    },
    {
      name: 'Chinese Cuisine',
    },
    {
      name: 'Japanese Cuisine',
    },
    {
      name: 'Korean Cuisine',
    },
  ];
  return (
    <BaseScreen
      title={'Collections'}
      canEdit={false}
      canGoBack={true}
      goBack={goBack}>
      <ScrollView style={style.scrollContainer}>
        {testCollections.map((collection, index) => {
          return (
            <RecipeItem
              recipe={collection}
              key={index}
              onPress={() => navigateToRecipe(collection.recipes)}
            />
          );
        })}
      </ScrollView>
      <View style={style.collectionsSearchContainer}>
        <View style={style.buttonsContainer}>
          <View>
            <SquareButton icon={<PlusCircle />}></SquareButton>
          </View>
          <View>
            <SquareButton icon={<Home />}></SquareButton>
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

export default Collections;
