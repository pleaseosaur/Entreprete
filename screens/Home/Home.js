import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {HomeTitleText} from '../../components/Text';
import {PillButton} from '../../components/Button/Button';
import {
  BookOpened,
  DoubleSoup,
  Calendar,
  ClipBoardList,
} from '../../components/Icons/Icons';
import style from './style';

const Home = () => {
  return (
    <SafeAreaView style={style.homeContainer}>
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
          <PillButton icon={<BookOpened />} text={' Recipe Book'}></PillButton>
        </View>
        <View>
          <PillButton icon={<DoubleSoup />} text={'  Collections'}></PillButton>
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
    </SafeAreaView>
  );
};

export default Home;
