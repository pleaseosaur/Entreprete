import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import {SquareButton} from '../../components/Button/Button';
import {PlusCircle, Home} from '../../components/Icons/Icons';
import SearchBar from '../../components/SearchBar/SearchBar';
import style from './style';
import ListItem from '../../components/ListItem/ListItem';
import testData from '../../mockServer/db.json';

const Collections = ({navigation}) => {
  const [collections, setCollections] = useState(testData.collections);

  const goBack = () => {
    navigation.goBack();
  };
  const navigateToRecipe = (recipes, name) => {
    navigation.navigate('RecipeBook', {recipesIds: recipes, isCollection: true, pageTitle: name});
  };

  const goHome = () => {
    navigation.navigate('Home');
  };

  const handleSearch = async (text) => {
    if (text === '') {
      setCollections(testData.collections);
      return;
    }
    const filteredCollections = testData.collections.filter(collection =>
      collection.name.toLowerCase().includes(text.toLowerCase()),
    );
    setCollections(filteredCollections);
  };

  const deleteCollection = index => {
    setCollections(prev => {
        const newPlans = prev.filter((_, i) => i !== index);
        return newPlans;
    });
  };

  return (
    <BaseScreen
      title={'Collections'}
      canEdit={false}
      canGoBack={true}
      goBack={goBack}>
      <ScrollView style={style.scrollContainer}>
        {collections.map((collection, index) => {
          return (
            <ListItem
              name={collection.name}
              recipe={collection}
              key={index}
              onPress={() => navigateToRecipe(collection.recipes, collection.name)}
              swipeHandler={() => deleteCollection(index)}
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
          <SearchBar placeholderText={"Search collections"} handleSearch={handleSearch} />
        </View>
      </View>
    </BaseScreen>
  );
};

export default Collections;
