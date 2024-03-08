import React from 'react';

import {View, ScrollView, Text} from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import style from './style';

const RecipePage = ({navigation, route}) => {
  const goBack = () => {
    navigation.goBack();
  };
  
  const goHome = () => {
    navigation.navigate('Home');
  };

  const recipeData = route.params || null;
  const recipeName = recipeData.recipes.name;
  const recipeIngredients = recipeData.recipes.ingredients;
  const recipeInstructions = recipeData.recipes.instructions;

  console.log(recipeIngredients);

  return (
    <BaseScreen
      title={recipeName}
      canEdit={true}
      canGoBack={true}
      goBack={goBack}>
      <View>
        <View style={style.ingredientContainer}>
          <Text style={style.itemTitle}>Ingredients</Text>
          <View style={style.ingredient}>
            <View style={style.ingredientAmountContainer}>
              {recipeIngredients.map((ingredient, index) => {
                return (
                  <Text key={index} style={style.ingredientAmount}>
                    {ingredient.amount}
                  </Text>
                );
              })}
            </View>
            <View style={style.ingredientNameContainer}>
              {recipeIngredients.map((ingredient, index) => {
                return (
                  <Text key={index} style={style.ingredientName}>
                    {ingredient.ingredients}
                  </Text>
                );
              })}
            </View>
          </View>
        </View>
        <View style={style.instructionsContainer}>
          <Text style={style.itemTitle}>Instructions</Text>
          <View style={style.instructions}>
            {recipeInstructions.map((instruction, index) => {
              return (
                <Text key={index} style={style.instructionText}>
                  {index + 1 + '.'}
                  {instruction}
                </Text>
              );
            })}
          </View>
        </View>
      </View>
      <View style={style.buttonsContainer}>
          <SquareButton handler={goHome} icon={<Home />}></SquareButton>
      </View>
    </BaseScreen>
  );
};

export default RecipePage;
