import React from 'react';
import {StyleSheet, View} from 'react-native';
import { CircleButton } from './Button/Button';
import { ScreenTitleText } from './Text';

/*
Usage Example: 
    <TopNavBar leftIcon='*' title='Recipe Book' hide='true'></TopNavBar>
 */

const TopNavBar = ({leftIcon, rightIcon, title, hide, style, ...rest}) => {
    return (
        <View style={[styles.container, style]} {...rest}>
            <CircleButton text={leftIcon}></CircleButton>
            <ScreenTitleText>{title}</ScreenTitleText>
            <CircleButton text={rightIcon} style={hide ? styles.hideButton : styles.showButton}></CircleButton>
        </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      padding: 10,
    },
    hideButton: {
        backgroundColor: 'transparent',
        color: 'transparent',
    },
    showButton: {}
  });

export default TopNavBar;