import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, TextInput, Alert} from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import {SquareButton, PillButton} from '../../components/Button/Button';
import {Home} from '../../components/Icons/Icons';
import style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecipePage = ({navigation, route}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedIngredients, setEditedIngredients] = useState([]);
  const [editedInstructions, setEditedInstructions] = useState([]);
  const recipeData = route.params || null;
  const recipeName = recipeData.recipes.name;
  const recipeId = recipeData.recipes.id;
  const recipeIngredients = recipeData.recipes.ingredients;
  const recipeInstructions = recipeData.recipes.instructions;

  useEffect(() => {
    setEditedIngredients(recipeIngredients);
    setEditedInstructions(recipeInstructions);
  }, []);

  const onToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const onSave = async () => {
    try {
      // Retrieve data from storage
      const data = await AsyncStorage.getItem('@mockData');
      if (data === null) {
        console.error('Data not found.');
        return;
      }

      // Parse the JSON data
      const recipesData = JSON.parse(data);

      // Find the recipe to update
      const recipeIndex = recipesData.data.recipes.findIndex(
        recipe => recipe.id === recipeId,
      );
      if (recipeIndex === -1) {
        console.error('Recipe not found.');
        return;
      }

      // Update the ingredients and instructions of the recipe
      recipesData.data.recipes[recipeIndex].ingredients = editedIngredients;
      recipesData.data.recipes[recipeIndex].instructions = editedInstructions;

      // Save the updated data back to storage
      await AsyncStorage.setItem('@mockData', JSON.stringify(recipesData));

      setIsEditing(false);
      console.log('Recipe updated successfully.');
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  const onCancel = () => {
    // Reset edited data
    setEditedIngredients([]);
    setEditedInstructions([]);

    // Revert to non-editing state
    setIsEditing(false);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const goHome = () => {
    navigation.navigate('Home');
  };

  return (
    <BaseScreen
      title={recipeName}
      canEdit={true}
      canGoBack={true}
      goBack={goBack}
      onToggleEdit={onToggleEdit}>
      <ScrollView style={style.scrollContainer}>
        {/* Ingredients */}
        <View style={style.ingredientContainer}>
          <Text style={style.itemTitle}>Ingredients</Text>
          {recipeIngredients.map((ingredient, index) => (
            <View key={index} style={style.ingredient}>
              <View style={style.ingredientAmountContainer}>
                {isEditing ? (
                  <TextInput
                    value={
                      editedIngredients[index]?.amount || ingredient.amount
                    }
                    onChangeText={text => {
                      const newIngredients = [...editedIngredients];
                      newIngredients[index] = {
                        ...newIngredients[index],
                        amount: text,
                      };
                      setEditedIngredients(newIngredients);
                    }}
                  />
                ) : (
                  <Text style={style.ingredientAmount}>
                    {ingredient.amount}
                  </Text>
                )}
              </View>
              <View style={style.ingredientNameContainer}>
                {isEditing ? (
                  <TextInput
                    value={
                      editedIngredients[index]?.ingredients ||
                      ingredient.ingredients
                    }
                    onChangeText={text => {
                      const newIngredients = [...editedIngredients];
                      newIngredients[index] = {
                        ...newIngredients[index],
                        ingredients: text,
                      };
                      console.log('newIngredients', newIngredients[index]);
                      setEditedIngredients(newIngredients);
                    }}
                  />
                ) : (
                  <Text style={style.ingredientName}>
                    {ingredient.ingredients}
                  </Text>
                )}
              </View>
            </View>
          ))}
        </View>

        {/* Instructions */}
        <View style={style.instructionsContainer}>
          <Text style={style.itemTitle}>Instructions</Text>
          {recipeInstructions.map((instruction, index) =>
            isEditing ? (
              <TextInput
                key={index}
                multiline={true}
                value={isEditing ? editedInstructions[index] : instruction}
                onChangeText={text => {
                  const newInstructions = [...editedInstructions];
                  newInstructions[index] = text;
                  setEditedInstructions(newInstructions);
                }}
              />
            ) : (
              <Text key={index} style={style.instructionText}>
                {index + 1}.{instruction}
              </Text>
            ),
          )}
        </View>
      </ScrollView>

      {/* Save and Cancel buttons */}
      {isEditing && (
        <View>
          <PillButton text={'Save'} handler={onSave} />
          <PillButton text={'Cancel'} handler={onCancel} />
        </View>
      )}

      {/* Other components */}
      <View style={style.buttonsContainer}>
        <SquareButton handler={goHome} icon={<Home />} />
      </View>
    </BaseScreen>
  );
};

export default RecipePage;
