import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import {SquareButton} from '../../components/Button/Button';
import {PlusCircle, Home} from '../../components/Icons/Icons';
import ListItem from '../../components/ListItem/ListItem';
import style from './style';
import testData from '../../mockServer/db.json';
import SearchBar from '../../components/SearchBar/SearchBar';
import {MealPlanSearch} from '../../mockServer/functionality/searchFunctions';
import MealPlanItem from '../../components/MealPlanItem/MealPlanItem';

const MealPlans = ({navigation, mealPlanName}) => {
  const [plans, setPlans] = useState(testData.mealplans);

  const goBack = () => {
    navigation.goBack();
  };

  const goHome = () => {
    navigation.navigate('Home');
  };

  const selectMealPlan = plan => {
    navigation.navigate('MealPlan', {mealPlan: plan});
  };

  const handleSearch = async text => {
    if (text === '') {
      setPlans(testData.mealplans);
      return;
    }
    const searchResult = await MealPlanSearch(text);
    setPlans(searchResult);
  };

  const addPlan = () => {
    navigation.navigate('AddMealPlan');
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
      goBack={goBack}>
      <ScrollView style={style.scrollContainer}>
        {plans.map((plan, index) => {
          return (
            <ListItem
              name={mealPlanName ? mealPlanName : plan.name}
              id={plan.id}
              key={index}
              onPress={() => selectMealPlan(plan)}
              swipeHandler={() => deletePlan(index)}
            />
          );
        })}
      </ScrollView>
      <View style={style.plansSearchContainer}>
        <View style={style.buttonsContainer}>
          <View>
            <SquareButton
              icon={<PlusCircle />}
              handler={addPlan}></SquareButton>
          </View>
          <View>
            <SquareButton handler={goHome} icon={<Home />}></SquareButton>
          </View>
          <View style={style.buttonPlaceHolder}></View>
        </View>
        <View>
          <SearchBar
            placeholderText={'Search meal plans'}
            handleSearch={handleSearch}
          />
        </View>
      </View>
    </BaseScreen>
  );
};

export default MealPlans;
