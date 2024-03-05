import React from 'react';
import BaseScreen from "../BaseScreen/BaseScreen";
import {SquareButton} from "../../components/Button/Button";
import {PlusCircle} from "../../components/Icons/Icons";
import RecipeItem from "../../components/RecipeItem/RecipeItem";


const MealPlans = ({navigation, mealPlanName}) => {
    const goBack = () => {
        navigation.goBack();
    };

    const selectMealPlan = () => {
        navigation.navigate('MealPlan');
    };

    return (
        <BaseScreen title="Meal Plans" canGoBack={true} goBack = {goBack}>
            <SquareButton icon={<PlusCircle />} />
            <RecipeItem name={mealPlanName} handler={selectMealPlan} />
        </BaseScreen>
    );
}