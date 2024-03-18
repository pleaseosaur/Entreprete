import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import ListItem from '../../components/ListItem/ListItem';
import {SquareButton} from '../../components/Button/Button';
import {PlusCircle, Home} from '../../components/Icons/Icons';
import SearchBar from '../../components/SearchBar/SearchBar';
import style from './style';
import { GetRecipes, UpdateCollection } from '../../mockServer/functionality/crudFunctions';


const ListContainer = ({recipeIds, deleteHandler, navigation}) => {
    const [recipes, setRecipes] = useState([]);

    /*load recipes using the id passed by the route params. 
    * runs on the first render and every time recipe ids changes*/
    useEffect(() => {
        loadRecipes();
    }, [recipeIds]);


  const loadRecipes = async () => {
    try {
      const result = await GetRecipes();
      setRecipes(result.filter((recipe) => recipeIds.includes(recipe.id)));
    } catch(error) {
      console.log(error);
    }
  };

  const navigateToRecipePage = recipes => {
    navigation.navigate('RecipePage', {recipes: recipes});
  };

  const deleteRecipe = async (index, id) => {
    //update screen
    setRecipes(recipes.filter((recipe) => recipe.id !== id));

    //update the database
    deleteHandler();
    // try {
    //   const newRecipes = recipeIds.recipes.filter((recipeId) => recipeId !== id);
    //   const result = await UpdateCollection(collection.name, newRecipes, collection.id);
    // } catch(e) {
    //   console.log(e);
    // }
  };

  return (
        <View>
        {recipes.length === 0 ? (
            <View style={style.emptyRecipes}>
              <Text>No recipes found</Text>
            </View>
        ) : (
            <View style={style.scrollContainer}>
              {recipes.map((recipe, index) => {
                return (
                    <ListItem
                        name={recipe.name}
                        recipe={recipe}
                        key={index}
                        onPress={() => navigateToRecipePage(recipe)}
                        swipeHandler={() => deleteRecipe(index, recipe.id)}
                    />
                );
              })}
            </View>
        )}
    </View>
  );
};

export default ListContainer;