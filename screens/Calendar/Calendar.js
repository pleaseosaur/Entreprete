import React from 'react';
import {View} from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import {Calendar} from 'react-native-calendars';
import {SquareButton} from '../../components/Button/Button';
import {Home} from '../../components/Icons/Icons';
import style from './style';

const CalendarScreen = ({navigation}) => {
  const dayPress = () => {
    console.log('Day Pressed');
    navigation.navigate('Home');
  };

  const goHome = () => {
    navigation.navigate('Home');
  };

  return (
    <BaseScreen
      title="Calendar"
      canGoBack={true}
      goBack={() => navigation.goBack()}>
      <View style={style.calendarContainer}>
        <Calendar onDayPress={dayPress} />
      </View>
      <View style={style.buttonsContainer}>
        <SquareButton handler={goHome} icon={<Home />}></SquareButton>
      </View>
    </BaseScreen>
  );
};

export default CalendarScreen;
