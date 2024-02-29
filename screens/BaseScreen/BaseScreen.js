import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import style from './style.js'; // Import base styles

const BaseScreen = ({title, children}) => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <Text style={style.headerText}>{title}</Text>
      </View>
      {children}
    </SafeAreaView>
  );
};

export default BaseScreen;
