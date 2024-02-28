import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {ButtonText} from '../Text';
import styles from './style';

/**
 * example usage:
  <View>
    <CircleButton icon={<DoubleSoup/>}></CircleButton>
    <CircleButton style={{backgroundColor: "red"}}></CircleButton>
    <SquareButton icon={<DoubleSoup/>}></SquareButton>
    <PillButton text={'Button'}></PillButton>
    <PillButton text={'Long Name Button'}></PillButton>
    <View style={{width: 125}}>
      <PillButton text={'Button'}></PillButton>
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

const CircleButton = ({icon, handler, style, ...rest}) => {
  return (
    <View style={[styles.circleButton, style]} {...rest}>
      <TouchableWithoutFeedback onPress={handler}>
        <View>{icon}</View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SquareButton = ({icon, handler, style, ...rest}) => {
  return (
    <View style={[styles.squareButton, style]} {...rest}>
      <TouchableWithoutFeedback onPress={handler}>
        <View>{icon}</View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const PillButton = ({text, handler, style, icon, ...rest}) => {
  return (
    <View style={[styles.pillButton, style]} {...rest}>
      <TouchableWithoutFeedback onPress={handler}>
        <View style={styles.subContainer}>
          {icon}
          <ButtonText style={[style]}>
            {text}
          </ButtonText>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export {RoundedButton, CircleButton, SquareButton, PillButton};
export default RoundedButton;
