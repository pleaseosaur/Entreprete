import React from 'react';
import {View} from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import {Calendar} from 'react-native-calendars';
import {SquareButton} from '../../components/Button/Button';
import {Home, PlusCircle} from '../../components/Icons/Icons';
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
      <View style={style.container}>
        <View style={style.calendarContainer}>
          <Calendar onDayPress={dayPress} />
        </View>
        {/* <View style={style.buttonsContainer}>
              <View>
                  <SquareButton icon={<PlusCircle />}></SquareButton>
              </View>
          <SquareButton handler={goHome} icon={<Home />}></SquareButton>
        </View> */}
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
    </BaseScreen>
  );
};

export default CalendarScreen;
