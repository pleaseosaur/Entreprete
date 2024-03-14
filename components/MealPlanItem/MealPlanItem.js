import React from 'react';
import { View, Text, Pressable } from 'react-native';
import style from './style.js';
import { PlaceHolder, Linear } from '../Icons/Icons';

const MealPlanItem = ({ navigation, mealPlan, onPress }) => {
    const navigateToMealPlan = mealPlans => {
        navigation.navigate('MealPlan', { mealPlans: mealplans });
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
        <Pressable onPress={onPress}>
          <Linear />
        </Pressable>
      </View>
    </View>
    );
}
