import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const Collections = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Collections</Text>
      </View>
      <Button title="Go back" onPress={goBack} />
    </SafeAreaView>
  );
};

export default Collections;
