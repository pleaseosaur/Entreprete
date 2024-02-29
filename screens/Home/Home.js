import React from 'react';
import {SafeAreaView, View, Image, KeyboardAvoidingView} from 'react-native';
import {HomeTitleText} from '../../components/Text';
import {PillButton} from '../../components/Button/Button';
import {SquareButton} from '../../components/Button/Button';
import {
  BookOpened,
  DoubleSoup,
  Calendar,
  ClipBoardList,
  PlusCircle,
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

  return (
    <SafeAreaView style={style.homeContainer}>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        {/* Home Page Title */}
        <View style={style.homeTitleContainer}>
          <HomeTitleText>Entreprête</HomeTitleText>
        </View>
        {/* Home Page Icon */}
        <View style={style.homeIconContainer}>
          <Image source={require('../../assets/icon.png')} />
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
        <View>
          <SquareButton icon={<PlusCircle />}></SquareButton>
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
