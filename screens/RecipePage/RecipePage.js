import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, TextInput, Alert} from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import {SquareButton, PillButton} from '../../components/Button/Button';
import {Home} from '../../components/Icons/Icons';
import style from './style';
import {
  GetRecipeByID,
  UpdateRecipe,
} from '../../mockServer/functionality/crudFunctions';
import palette from '../../styles/Common.styles';

const RecipePage = ({navigation, route}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedIngredients, setEditedIngredients] = useState([]);
  const [editedInstructions, setEditedInstructions] = useState([]);
  const [name, setName] = useState('');
  const [Ingredients, setIngredients] = useState([]);
  const [Instructions, setInstructions] = useState([]);
  const recipeData = route.params || null;
  const recipeId = recipeData.recipes.id;

  const GetRecipe = async () => {
    const recipe = await GetRecipeByID(recipeId);
    setName(recipe.name);
    setIngredients(recipe.ingredients);
    setInstructions(recipe.instructions);
    setEditedIngredients(Ingredients);
    setEditedInstructions(Instructions);
  };

  useEffect(() => {
    GetRecipe();
  }, []);

  const onToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const onSave = async () => {
    try {
      console.log('editedIngredients', editedIngredients);
      console.log('editedInstructions', editedInstructions);
      await UpdateRecipe(name, editedIngredients, editedInstructions, recipeId);
      setIsEditing(false);
      GetRecipe();
    } catch (error) {
      console.log(error);
    }
  };

  const onCancel = () => {
    // Reset edited data
    setEditedIngredients(Ingredients);
    setEditedInstructions(Instructions);

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
      title={name}
      canEdit={true}
      canGoBack={true}
      goBack={goBack}
      onToggleEdit={onToggleEdit}>
      <ScrollView style={style.scrollContainer}>
        {/* Ingredients */}
        <View style={style.ingredientContainer}>
          <Text style={style.itemTitle}>Ingredients</Text>
          {Ingredients.map((ingredient, index) => (
            <View key={index} style={style.ingredient}>
              <View style={style.ingredientAmountContainer}>
                {isEditing ? (
                  <TextInput
                    style={style.textInput}
                    value={editedIngredients[index]?.amount}
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
                    style={style.textInput}
                    value={editedIngredients[index]?.ingredients}
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
          {Instructions.map((instruction, index) =>
            isEditing ? (
              <TextInput
                style={style.instructionsTextInput}
                key={index}
                multiline={true}
                value={isEditing ? editedInstructions[index] : instruction}
                onChangeText={text => {
                  const newInstructions = [...editedInstructions];
                  newInstructions[index] = text;
                  setEditedInstructions(newInstructions);
                  console.log('newInstructions', newInstructions);
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
      {/* {isEditing && (
        <View style={style.buttonsContainer}>
          <PillButton text={'Save'} handler={onSave} />
          <PillButton text={'Cancel'} handler={onCancel} />
        </View>
      )} */}

      {/* Other components */}
      <View style={style.buttonsContainer}>
        {isEditing ? (
          <PillButton
            text={'Save'}
            handler={onSave}
            style={{
              backgroundColor: palette.dark_purple,
            }}
          />
        ) : null}
        {!isEditing ? <SquareButton handler={goHome} icon={<Home />} /> : null}
        {isEditing ? <PillButton text={'Cancel'} handler={onCancel} /> : null}
      </View>
    </BaseScreen>
  );
};

export default RecipePage;
