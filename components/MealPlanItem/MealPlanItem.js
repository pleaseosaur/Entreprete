import React from 'react';
import { View, Text, Pressable } from 'react-native';
import style from './style.js';
import { PlaceHolder, Linear } from '../Icons/Icons';

const MealPlanItem = ({ navigation, mealPlan, onPress }) => {
    const navigateToMealPlan =() => {
        navigation.navigate('MealPlan', { mealPlan: mealPlan });
    }

    return (
    <View style={style.mealPlanItemContainer}>
      <View style={style.imagePlaceHolderContainer}>
        <PlaceHolder />
      </View>
      <View style={style.mealPlanNameContainer}>
        <Text style={style.mealPlanName}>{mealPlan ? mealPlan.name : 'test'}</Text>
      </View>
      <View>
        <Pressable onPress={() => navigateToMealPlan(mealPlan)}>
          <Linear />
        </Pressable>
      </View>
    </View>
    );
}

export default MealPlanItem;
