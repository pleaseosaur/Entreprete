import React, {useState} from 'react';
import { View, ScrollView } from 'react-native';
import BaseScreen from "../BaseScreen/BaseScreen";
import {SquareButton} from "../../components/Button/Button";
import {PlusCircle, Home} from "../../components/Icons/Icons";
import ListItem from '../../components/ListItem/ListItem';
import style from './style';
import testData from '../../mockServer/db.json';
import SearchBar from '../../components/SearchBar/SearchBar';

const MealPlans = ({navigation, mealPlanName}) => {
    const [plans, setPlans] = useState(testData.mealplans);

    const goBack = () => {
        navigation.goBack();
    };

    const goHome = () => {
        navigation.navigate('Home');
    };

    const selectMealPlan = () => {
        navigation.navigate('MealPlan');
    };

    const handleSearch = async (text) => {
        if (text === '') {
          setCollections(testData.collections);
          return;
        }
        const filteredPlans = testData.mealplans.filter(plan =>
          plan.name.toLowerCase().includes(text.toLowerCase()),
        );
        setPlans(filteredPlans);
      };

    const deletePlan = index => {
        setPlans(prev => {
            const newPlans = prev.filter((_, i) => i !== index);
            return newPlans;
        });
    };

    return (
        <BaseScreen 
            title="Meal Plans" 
            canGoBack={true} 
            canEdit={false} 
            goBack = {goBack}>
            <ScrollView style={style.scrollContainer}>
                {plans.map((plan, index) => {
                    return (
                        <ListItem
                        name={mealPlanName || plan.id}
                        key={index}
                        onPress={selectMealPlan}
                        swipeHandler={() => deletePlan(index)}
                        />
                    );
                })}
            </ScrollView>
            <View style={style.plansSearchContainer}>
                <View style={style.buttonsContainer}>
                    <View>
                        <SquareButton icon={<PlusCircle />}></SquareButton>
                    </View>
                    <View>
                        <SquareButton handler={goHome} icon={<Home />}></SquareButton>
                    </View>
                    <View style={style.buttonPlaceHolder}></View>
                </View>
                <View>
                    <SearchBar handleSearch={handleSearch} />
                </View>
            </View>
        </BaseScreen>
    );
}

export default MealPlans;