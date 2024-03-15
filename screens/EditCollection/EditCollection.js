import React, {useState, useEffect, useRef} from 'react';
import {View, ScrollView, Text, TextInput, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import ListItem from '../../components/ListItem/ListItem';
import {PillButton} from '../../components/Button/Button';
import {RadioIconChecked, RadioIconUnchecked} from '../../components/Icons/Icons';
import SearchBar from '../../components/SearchBar/SearchBar';
import style from './style';
import testData from '../../mockServer/db.json';
import {RecipeSearch} from '../../mockServer/functionality/searchFunctions';
import { HeaderText } from '../../components/Text';
import palette from '../../styles/Common.styles';
import {CreateCollection} from '../../mockServer/functionality/crudFunctions';

const EditCollection = ({navigation, route}) => {
  const recipesIds = route.params?.recipesIds;
  const limitSearch = route.params?.limitSearch || false; //set to true to search within the collection only
  const newCollection = route.params?.newCollection || true; //set to false to edit an existing collection
  const pageTitle = newCollection ? "Create Collection" : "Edit Collection";
  let originalRecipes = [];
  const [collectionName, setCollectionName] = useState('');
  const [collectionRecipes, setCollectionRecipes] = useState([]);

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

  const selectRecipe = (r) => {
    //add clicked recipe to new collection
    setCollectionRecipes((prev) => {
        return [...prev, r.recipeId];
    });
  };

  const removeRecipe = (r) => {
    //remove clicked recipe from collection
    setCollectionRecipes((prev) => {
        return prev.filter((id) => id !== r.recipeId);
      });
  };

  const submitCollection = async () => {
    //submit form
    try {
      const result = await CreateCollection(collectionName, collectionRecipes);
      
      //navigate to new collection page
      navigation.navigate('RecipeBook', {recipesIds: collectionRecipes, isCollection: true, pageTitle: collectionName});
    }
    catch (error) {
      console.log(error);
    }
  };

  const RadioBtn = (recipeId) => {
    const [checked, setChecked] = useState(collectionRecipes.includes(recipeId.recipeId));
    const [init, setInit] = useState(true);

    useEffect(() => {
      if(init) {
        setInit(false);
      } else {
        if(checked) {
          selectRecipe(recipeId);
        }
        else {
          removeRecipe(recipeId);
        }
      }
    }, [checked]);

    return (
    <View>
        <TouchableWithoutFeedback onPress={() => setChecked(!checked)}>
          {collectionRecipes.includes(recipeId.recipeId) ?
              <RadioIconChecked color={palette.med_grey} height="30" width="30"/>
              : <RadioIconUnchecked color={palette.med_grey} height="30" width="30"/>
          }
        </TouchableWithoutFeedback>
    </View>)
  };

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
                            rightIcon={<RadioBtn recipeId={recipe.id}/>}
                        />
                        );
                    })}
                    </ScrollView>
            )}
        <View style={style.recipeSearchContainer}>
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