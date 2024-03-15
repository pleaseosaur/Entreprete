import React, {useState} from 'react';
import {View, ScrollView, Text, TextInput} from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import {SquareButton} from '../../components/Button/Button';
import {Home} from '../../components/Icons/Icons';
import style from './style';
import testData from '../../mockServer/db.json';

const RecipePage = ({navigation, route}) => {
  const [isEditing, setIsEditing] = useState(false);
  // console.log('RecipePage', testData);

  const onToggleEdit = () => {
    setIsEditing(!isEditing);
  };
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
  const filteredRecipes = testData.recipes.filter(
    recipe => recipe.id === recipeData.recipes.id,
  );
  console.log('filteredRecipes', filteredRecipes);

  return (
    <BaseScreen
      title={recipeName}
      canEdit={true}
      canGoBack={true}
      goBack={goBack}
      onToggleEdit={onToggleEdit}>
      <ScrollView style={style.scrollContainer}>
        <View style={style.ingredientContainer}>
          <Text style={style.itemTitle}>Ingredients</Text>
          <View style={style.ingredient}>
            <View style={style.ingredientAmountContainer}>
              {recipeIngredients.map((ingredient, index) => {
                return isEditing ? (
                  <TextInput key={index}>{ingredient.amount}</TextInput>
                ) : (
                  <Text key={index} style={style.ingredientAmount}>
                    {ingredient.amount}
                  </Text>
                );
              })}
            </View>
            <View style={style.ingredientNameContainer}>
              {recipeIngredients.map((ingredient, index) => {
                return isEditing ? (
                  <TextInput key={index}>{ingredient.ingredients}</TextInput>
                ) : (
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
      </ScrollView>
      <View style={style.buttonsContainer}>
        <SquareButton handler={goHome} icon={<Home />}></SquareButton>
      </View>
    </BaseScreen>
  );
};

export default RecipePage;
