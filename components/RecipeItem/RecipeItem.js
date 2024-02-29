import React from 'react';
import {View, Text} from 'react-native';
import style from './style.js';
import {PlaceHolder, Linear} from '../Icons/Icons';

const RecipeItem = ({navigation, recipe}) => {
  return (
    <View style={style.recipeItemContainer}>
      <View style={style.imagePlaceHolderContainer}>
        <PlaceHolder />
      </View>
      <View style={style.recipeNameContainer}>
        <Text style={style.recipeName}>{recipe ? recipe.name : 'test'}</Text>
      </View>
      <View>
        <Linear />
      </View>
    </View>
  );
};

export default RecipeItem;
