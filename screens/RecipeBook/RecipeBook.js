import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import RecipeItem from '../../components/RecipeItem/RecipeItem';
import {SquareButton} from '../../components/Button/Button';
import {PlusCircle, Home} from '../../components/Icons/Icons';
import SearchBar from '../../components/SearchBar/SearchBar';
import style from './style';

const RecipeBook = ({navigation, route}) => {
  const goBack = () => {
    navigation.goBack();
  };
  const {recipes = []} = route.params || [];
  return (
    <BaseScreen
      title={'Recipe Book'}
      canEdit={false}
      canGoBack={true}
      goBack={goBack}>
      {recipes.length === 0 ? (
        <View style={style.emptyRecipes}>
          <Text>No recipes found</Text>
        </View>
      ) : (
        <ScrollView style={style.scrollContainer}>
          {recipes.map((recipe, index) => {
            return <RecipeItem recipe={recipe} key={index} />;
          })}
        </ScrollView>
      )}

      <View style={style.recipeSearchContainer}>
        <View style={style.buttonsContainer}>
          <View>
            <SquareButton icon={<PlusCircle />}></SquareButton>
          </View>
          <View>
            <SquareButton icon={<Home />}></SquareButton>
          </View>
          <View style={style.buttonPlaceHolder}></View>
        </View>
        {/* Search bar */}
        <View>
          <SearchBar />
        </View>
      </View>
    </BaseScreen>
  );
};

export default RecipeBook;
