import React from 'react';
import {View, Text, Pressable} from 'react-native';
import style from './style.js';
import {PlaceHolder, Linear} from '../Icons/Icons';

const RecipeItem = ({navigation, recipe, onPress}) => {
    const navigateToRecipe = recipes => {
        navigation.navigate('RecipeBook', {recipes: recipes});
    }

    return (
    <View style={style.recipeItemContainer}>
      <View style={style.imagePlaceHolderContainer}>
        <PlaceHolder />
      </View>
      <View style={style.recipeNameContainer}>
        <Text style={style.recipeName}>{recipe ? recipe.name : 'test'}</Text>
      </View>
      <View>
        <Pressable onPress={onPress}>
          <Linear />
        </Pressable>
      </View>
    </View>
    );
};

export default RecipeItem;
