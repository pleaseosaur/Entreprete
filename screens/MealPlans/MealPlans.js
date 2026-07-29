import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import {SquareButton} from '../../components/Button/Button';
import {PlusCircle, Home} from '../../components/Icons/Icons';
import ListItem from '../../components/ListItem/ListItem';
import style from './style';
import SearchBar from '../../components/SearchBar/SearchBar';
import {MealPlanSearch} from '../../lib/api/search';
import {GetMealPlans, DeleteMealPlan} from '../../lib/api/crud';
import MealPlanItem from '../../components/MealPlanItem/MealPlanItem';

const MealPlans = ({navigation, mealPlanName}) => {
  const [allPlans, setAllPlans] = useState([]);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    loadMealPlans();
  }, []);

  const loadMealPlans = async () => {
    try {
      const result = await GetMealPlans();
      setAllPlans(result);
      setPlans(result);
    } catch (error) {
      console.log(error);
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  const goHome = () => {
    navigation.navigate('Home');
  };

  const selectMealPlan = plan => {
    // navigation.navigate('MealPlan', {mealPlan: plan});
    navigation.navigate('MealPlanPage', {mealPlan: plan});
  };

  const handleSearch = async text => {
    if (text === '') {
      setPlans(allPlans);
      return;
    }
    const searchResult = await MealPlanSearch(text);
    setPlans(searchResult);
  };

  const addPlan = () => {
    navigation.navigate('AddMealPlan');
  };

  const deletePlan = async (index, id) => {
    setPlans(prev => prev.filter((_, i) => i !== index));
    setAllPlans(prev => prev.filter(plan => plan.id !== id));

    try {
      await DeleteMealPlan(id);
    } catch (e) {
      console.log(e);
    }
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
              swipeHandler={() => deletePlan(index, plan.id)}
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
