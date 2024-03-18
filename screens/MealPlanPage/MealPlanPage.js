import React, {useState, useEffect} from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import ListItem from '../../components/ListItem/ListItem';
import {SquareButton} from '../../components/Button/Button';
import {PlusCircle, Home, PlaceHolder, MinusCircle} from '../../components/Icons/Icons';
import style from './style';
import { HeaderText, ListText, Text } from '../../components/Text';
import palette from '../../styles/Common.styles';
import ListContainer from '../../components/ListContainer/ListContainer';

/**This component displays a meal plan**/

const MealPlanPage = ({navigation, route}) => {
    const mealPlan = route.params?.mealPlan;
    const [days, setDays] = useState([]);

    /*load meal plan data using the meal plan passed by the route params. 
    * runs on the first render and every time collection changes*/
    useEffect(() => {
        setDays(mealPlan.recipes);
    }, [mealPlan]);

  const goBack = () => {
    navigation.goBack();
  };

  const goHome = () => {
    navigation.navigate('Home');
  };

  const CollapsibleListItem = ({item}) => {
    const [active, setActive] = useState(false);

    const toggleActive = () => {
        setActive(!active);
    };

    return (
        <View>
            <ListItem 
                onPress={toggleActive} 
                style={{backgroundColor: 'transparent'}}
                name={`Day ${item.day}`}
                rightIcon={active ? <MinusCircle color={palette.dark_grey}/> : <PlusCircle color={palette.dark_grey}/>}
                noImg={true}
                active={active}
            />
            <View>
                { active ?
                    <ListContainer
                        recipeIds={item.recipes}
                        navigation={navigation}
                        route={route}
                    ></ListContainer>
                    : null
                }
            </View>
        </View>
    );
  };

  return (
    <BaseScreen
        title={mealPlan.name || "Meal Plan"}
        canEdit={false}
        canGoBack={true}
        goBack={goBack}>
        { mealPlan ? (
        <View style={style.container}>
            <View style={[style.subContainer]}>
                <HeaderText style={{color: palette.light_grey}}>Duration</HeaderText>
                <ListText style={{fontSize: 22, color: palette.light_grey}}>{`${mealPlan.length} ${mealPlan.time.toUpperCase()}`}</ListText>
            </View>
            <ScrollView style={[style.scrollContainer, {flex: 1}]}>
                <View>
                {days.map((day, index) => {
                    return (
                        <CollapsibleListItem
                            key={index}
                            item={day}
                        />
                    )
                })}
                </View>
            </ScrollView>
        <View style={style.recipeSearchContainer}>
            <View style={style.buttonsContainer}>
            <View>
                <SquareButton icon={<PlusCircle />}></SquareButton>
            </View>
            <View>
                <SquareButton handler={goHome} icon={<Home />}></SquareButton>
            </View>
            <View style={style.buttonPlaceHolder}></View>
            </View>
        </View>
     </View>
    ) : (<View>
            <HeaderText>Error Loading Meal Plan</HeaderText>
        </View>)}
    </BaseScreen>
  );
};

export default MealPlanPage;