import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const RecipeBook = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Recipe Book</Text>
      </View>
      <Button title="Go back" onPress={goBack} />
    </SafeAreaView>
  );
};

export default RecipeBook;
