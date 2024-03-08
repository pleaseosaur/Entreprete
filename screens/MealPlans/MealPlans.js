import React from 'react';
import { View } from 'react-native';
import BaseScreen from "../BaseScreen/BaseScreen";
import {SquareButton} from "../../components/Button/Button";
import {PlusCircle, Home} from "../../components/Icons/Icons";
import RecipeItem from "../../components/RecipeItem/RecipeItem";
import style from './style';


const MealPlans = ({navigation, mealPlanName}) => {
    const goBack = () => {
        navigation.goBack();
    };

    const goHome = () => {
        navigation.navigate('Home');
    };

    const selectMealPlan = () => {
        navigation.navigate('MealPlan');
    };

    return (
        <BaseScreen title="Meal Plans" canGoBack={true} goBack = {goBack}>
            <RecipeItem name={mealPlanName} handler={selectMealPlan} />
            <View style={style.buttonsContainer}>
                <View>
                    <SquareButton icon={<PlusCircle />}></SquareButton>
                </View>
                <View>
                    <SquareButton handler={goHome} icon={<Home />}></SquareButton>
                </View>
                <View style={style.buttonPlaceHolder}></View>
            </View>
        </BaseScreen>
    );
}

export default MealPlans;