import React from 'react';
import { View } from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import { Calendar } from "../../components/Icons/Icons";
import style from './style';

const CalendarScreen = ({navigation}) => {
    const dayPress = () => {
        navigation.navigate('Day');
    };

    return (
        <BaseScreen title="Calendar" canGoBack={true} goBack = {() => navigation.goBack()} >
            <View style={style.calendarContainer}>
                <Calendar
                dayPress={dayPress}
                />
            </View>
        </BaseScreen>
    );
}


export default CalendarScreen;