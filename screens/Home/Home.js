import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import {HomeTitleText} from '../../components/Text';
import {PillButton} from '../../components/Button/Button';
import {
  BookOpened,
  DoubleSoup,
  Calendar,
  ClipBoardList,
  PlusCircle,
} from '../../components/Icons/Icons';
import SearchBar from '../../components/SearchBar/SearchBar';
import style from './style';
import AddButton from '../../components/AddButton/AddButton';
import {RecipeSearch} from '../../mockServer/functionality/searchFunctions';
import palette from '../../styles/Common.styles';

const Home = ({navigation}) => {
  const [searchResult, setSearchResult] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const navigateToRecipeBook = () => {
    navigation.navigate('RecipeBook');
  };
  const navigateToCollections = () => {
    navigation.navigate('Collections');
  };
  const navigateToCalendar = () => {
    navigation.navigate('Calendar');
  };
  const navigateToMealPlan = () => {
    navigation.navigate('MealPlan');
  };

  const handleSearch = async userInput => {
    const x = await RecipeSearch(userInput);
    setSearchResult(x);
    navigation.navigate('RecipeBook', {searchResult: x});
  };

  return (
    <SafeAreaView style={style.homeContainer}>
      <StatusBar
        backgroundColor={palette.white}
        barStyle={'dark-content'}></StatusBar>
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
        {!isFocused ? (
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
              <PillButton
                handler={navigateToCalendar}
                icon={<Calendar />}
                text={'    Calendar'}></PillButton>
            </View>
            <View>
              <PillButton
                handler={navigateToMealPlan}
                icon={<ClipBoardList />}
                text={' Meal Plans'}></PillButton>
            </View>
          </View>
        ) : null}
        {/* <View>
          <SquareButton icon={<PlusCircle />}></SquareButton>
        </View> */}
        <AddButton></AddButton>
        {/* Search bar */}
        <View>
          <SearchBar handleSearch={handleSearch} handleFocused={setIsFocused} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Home;
