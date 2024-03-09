import React from 'react';
import {View, ScrollView} from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import {SquareButton} from '../../components/Button/Button';
import {PlusCircle, Home} from '../../components/Icons/Icons';
import SearchBar from '../../components/SearchBar/SearchBar';
import style from './style';
import ListItem from '../../components/ListItem/ListItem';
import testData from '../../mockServer/db.json';

const Collections = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  const navigateToRecipe = recipes => {
    navigation.navigate('RecipeBook', {recipesIds: recipes});
  };

  const goHome = () => {
    navigation.navigate('Home');
  };

  return (
    <BaseScreen
      title={'Collections'}
      canEdit={false}
      canGoBack={true}
      goBack={goBack}>
      <ScrollView style={style.scrollContainer}>
        {testData.collections.map((collection, index) => {
          return (
            <ListItem
              name={collection.name}
              recipe={collection}
              key={index}
              onPress={() => navigateToRecipe(collection.recipes)}
              swipeHandler={() => deleteRecipe(index)}
            />
          );
        })}
      </ScrollView>
      <View style={style.collectionsSearchContainer}>
        <View style={style.buttonsContainer}>
          <View>
            <SquareButton icon={<PlusCircle />}></SquareButton>
          </View>
          <View>
            <SquareButton handler={goHome} icon={<Home />}></SquareButton>
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

export default Collections;
