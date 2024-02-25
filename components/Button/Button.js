import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import { ButtonText } from '../Text';
import styles from './style';

/**
 * example usage:
  <View>
    <CircleButton style={{backgroundColor: "red"}}></CircleButton>
    <SquareButton text={'%'}></SquareButton>
    <PillButton text={'Button'}></PillButton>
    <PillButton text={'Long Name Button'}></PillButton>
    <View style={{width: 125}}>
      <PillButton text={'Button'} handler={test}></PillButton>
    </View>
  </View>
 */

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
      <TouchableWithoutFeedback  onPress={handler}>
        <ButtonText style={[style]}>{text}</ButtonText>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SquareButton = ({text, handler, style, ...rest}) => {
  return (
    <View style={[styles.squareButton, style]} {...rest}>
      <TouchableWithoutFeedback  onPress={handler}>
        <ButtonText style={[style]}>{text}</ButtonText>
      </TouchableWithoutFeedback>
    </View>
  );
};

const PillButton = ({text, handler, style, ...rest}) => {
  return (
    <View style={[styles.pillButton, style]} {...rest}>
      <TouchableWithoutFeedback  onPress={handler}>
        <ButtonText style={[style]}>{text}</ButtonText>
      </TouchableWithoutFeedback>
    </View>
  );
};

export { RoundedButton, CircleButton, SquareButton, PillButton };
export default RoundedButton;
