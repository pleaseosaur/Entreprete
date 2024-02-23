import React from 'react';
import {View, Text} from 'react-native';
import { ButtonText } from '../Text';
import styles from './style';

const RoundedButton = () => {
  return (
    <View>
      <Text>RoundedButton</Text>
    </View>
  );
};

const CircleButton = ({text, handler, style, ...rest}) => {
  return (
    <View style={[styles.circleButton, style]} {...rest}>
      <ButtonText style={[style]}>{text}</ButtonText>
    </View>
  )
}

export { RoundedButton, CircleButton };
export default RoundedButton;
