import React from 'react';
import {SafeAreaView, View, Text, KeyboardAvoidingView} from 'react-native';
import {HomeTitleText} from '../../components/Text';
import {PillButton} from '../../components/Button/Button';
import {SquareButton} from "../../components/Button/Button";
import {
  BookOpened,
  DoubleSoup,
  Calendar,
  ClipBoardList,
} from '../../components/Icons/Icons';
import SearchBar from '../../components/SearchBar/SearchBar';
import style from './style';
import BaseScreen from '../BaseScreen/BaseScreen';

const Home = ({navigation}) => {
  const navigateToRecipeBook = () => {
    navigation.navigate('RecipeBook');
  };
  const navigateToCollections = () => {
    navigation.navigate('Collections');
  };

  /*
  * refactor to incorporate BaseScreen wrapper for common screen structure
  * may need to refactor the Home/style.js to move common styles to BaseScreen/style.js
  */
  return (
    <SafeAreaView style={style.homeContainer}>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        {/* Home Page Title */}
        <View style={style.homeTitleContainer}>
          <HomeTitleText>Entreprête</HomeTitleText>
        </View>
        {/* Home Page Icon */}
        <View style={style.homeIconContainer}>
          <Text>icon</Text>
        </View>
        {/* Home Page Navigation */}
        <View style={style.homeNavigationContainer}>
          <View>
            <PillButton
              handler={navigateToRecipeBook}
              icon={<BookOpened />}
              text={' Recipe Book'}></PillButton>
          </View>
          <View>
            <PillButton
              handler={navigateToCollections}
              icon={<DoubleSoup />}
              text={'  Collections'}></PillButton>
          </View>
          <View>
            <PillButton icon={<Calendar />} text={'    Calendar'}></PillButton>
          </View>
          <View>
            <PillButton
              icon={<ClipBoardList />}
              text={' Meal Plans'}></PillButton>
          </View>
        </View>
        {/* Search bar */}
        <View>
          <SearchBar />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Home;
