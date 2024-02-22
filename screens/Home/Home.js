import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import style from './style';

const Home = () => {
  return (
    <SafeAreaView style={style.homeContainer}>
      <View style={style.homeTitleContainer}>
        <Text style={style.homeTitle}>Entreprête</Text>
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
