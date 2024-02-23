import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import { HomeTitleText } from '../../components/Text';
import style from './style';

const Home = () => {
  return (
    <SafeAreaView style={style.homeContainer}>
      <View style={style.homeTitleContainer}>
        <HomeTitleText>Entreprête</HomeTitleText>
      </View>
      <View style={style.homeIconContainer}>
        <View>
          <Text>Icon</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
