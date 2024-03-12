import React from 'react';
import {SafeAreaView, View, Image, KeyboardAvoidingView} from 'react-native';
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

const Home = ({navigation}) => {
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

  const axios = require('axios').default;

  const handleSearch = async (userInput) => {
    console.log("ATTEMPTING TO LOAD RECIPES");
    try {
      const response = await axios.get(`http://10.0.2.2:3000/recipes?q=${userInput}`);

      console.log("success");
      console.log(response);

    } catch (error) {
      console.log(error);
      if (error.response) {
        console.log("DATA" + error.response.data);
        console.log("STATUS" + error.response.status);
        console.log("HEADERS" + error.response.headers);
      } else if (error.request) {
        console.log("REQUEST" + error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  }

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
            <PillButton handler={navigateToCalendar} icon={<Calendar />} text={'    Calendar'}></PillButton>
          </View>
          <View>
            <PillButton
              handler={navigateToMealPlan}
              icon={<ClipBoardList />}
              text={' Meal Plans'}></PillButton>
          </View>
        </View>
        {/* <View>
          <SquareButton icon={<PlusCircle />}></SquareButton>
        </View> */}
        <AddButton></AddButton>
        {/* Search bar */}
        <View>
          <SearchBar handleSearch={handleSearch}/>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Home;
