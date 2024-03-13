import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import ListItem from '../../components/ListItem/ListItem';
import {PillButton, SquareButton} from '../../components/Button/Button';
import {PlusCircle, Home} from '../../components/Icons/Icons';
import SearchBar from '../../components/SearchBar/SearchBar';
import style from './style';
import testData from '../../mockServer/db.json';
import {RecipeSearch} from '../../mockServer/functionality/searchFunctions';
import { HeaderText } from '../../components/Text';

const EditCollection = ({navigation, route}) => {
  const recipesIds = route.params?.recipesIds;
  const limitSearch = route.params?.limitSearch || false; //set to true to search within the collection only
  const newCollection = route.params?.newCollection || true; //set to false to edit an existing collection
  const pageTitle = newCollection ? "Create Collection" : "Edit Collection";
  let originalRecipes = [];
  const [collectionName, setCollectionName] = useState('');

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
      console.log('originalRecipes', originalRecipes);
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

    if(limitSearch) {
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

  const selectRecipe = recipes => {
    //add recipe to new collection
  };

  const submitCollection = () => {
    //submit form
  }

  return (
    <BaseScreen
      title={pageTitle}
      canEdit={false}
      canGoBack={true}
      goBack={goBack}>
        <View style={style.container}>
            <View style={style.textEntryContainer}>
                <View style={style.titleInput}>
                    <TextInput
                    style={style.input}
                    value={collectionName}
                    placeholder={"Collection Name"}
                    keyboardType="default"
                    onChangeText={text => {
                        setCollectionName(text);
                    }}
                    // onSubmitEditing={() => handleSearch(search)}
                    />
                    <TouchableWithoutFeedback>
                    <View>
                        {/* <Search /> */}
                    </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <HeaderText>Add Recipes To Collection</HeaderText>
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
                            onPress={() => selectRecipe(recipe)}
                        />
                        );
                    })}
                    </ScrollView>
            )}
        <View style={style.recipeSearchContainer}>
            {/* <View style={style.buttonsContainer}>
            <View>
                <SquareButton icon={<PlusCircle />}></SquareButton>
            </View>
            <View>
                <SquareButton handler={goHome} icon={<Home />}></SquareButton>
            </View>
            <View style={style.buttonPlaceHolder}></View>
            </View> */}
            {/* Search bar */}
            <View>
                <SearchBar handleSearch={handleSearch} test="testing" />
            </View>
        </View>
        <View style={style.bottomButtonContainer}>
            <PillButton text={newCollection ? "Create" : "Save Changes"} handler={submitCollection} style={style.submitButton}></PillButton>
        </View>
      </View>
    </BaseScreen>
  );
};

export default EditCollection;