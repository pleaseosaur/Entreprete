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
import {CreateCollection, UpdateCollection} from '../../mockServer/functionality/crudFunctions';

const EditCollection = ({navigation, route}) => {
  const collectionId = route.params?.collectionId;
  const recipesIds = route.params?.recipesIds;
  const newCollection = (route.params?.newCollection == true) ? true : false; //set to false to edit an existing collection
  const pageTitle = newCollection ? "Create Collection" : route.params?.pageTitle;
  let originalRecipes = [];
  const [collectionName, setCollectionName] = useState((route.params?.newCollection == true) ? '' : route.params?.collectionTitle);
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
      setRecipes(testData.recipes);

      if(!newCollection) {
        setCollectionRecipes(recipesIds);
      } else {
        setCollectionRecipes([]);
      }
  }, [recipesIds]);

  const handleSearch = async (text) => {
    if (text === '') {
      setRecipes(originalRecipes);
      return;
    }
      const searchResult = await RecipeSearch(text);
      setRecipes(searchResult);
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
      const result = newCollection ?
        await CreateCollection(collectionName, collectionRecipes)
        : await UpdateCollection(collectionName, collectionRecipes, collectionId);

      //reset states
      setCollectionName('');
      setCollectionRecipes([]);

      //navigate to new collection page
      navigation.navigate('RecipeBook', {recipesIds: result.recipes, isCollection: true, pageTitle: result.name, collectionId: result.id});
    }
    catch (error) {
      console.log(error);
    }
  };

  const cancelEdit = () => {
    goBack();
  }

  const RadioBtn = (recipeId) => {
    const [checked, setChecked] = useState(collectionRecipes.includes(recipeId.recipeId) || false);
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
              {newCollection ?
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
                : null }
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
            {newCollection ? 
              null :
              <PillButton text={"  Cancel  "} handler={cancelEdit} style={[style.submitButton, {backgroundColor: palette.light_grey}]}></PillButton>
            }
            <PillButton text={newCollection ? "Create" : "Save Changes"} handler={submitCollection} style={style.submitButton}></PillButton>
        </View>
      </View>
    </BaseScreen>
  );
};

export default EditCollection;