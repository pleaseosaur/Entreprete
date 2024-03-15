import React from 'react';
import {SafeAreaView, View, Text, Pressable, StatusBar} from 'react-native';
import style from './style.js'; // Import base styles
import {CircleButton} from '../../components/Button/Button.js';
import {ArrowLeft, EditMessage} from '../../components/Icons/Icons.js';
import {ScreenTitleText} from '../../components/Text.js';
import palette from '../../styles/Common.styles';

const BaseScreen = ({
  title,
  children,
  goBack,
  canEdit,
  canGoBack,
  onToggleEdit,
}) => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar
        backgroundColor={palette.white}
        barStyle={'dark-content'}></StatusBar>
      <View style={style.topContainer}>
        {canGoBack ? (
          <View>
            <CircleButton
              icon={<ArrowLeft />}
              handler={goBack}
              style={style.leftButton}
            />
          </View>
        ) : (
          <View style={style.topGoBackContainer}></View>
        )}
        <View style={style.topTitleContainer}>
          <ScreenTitleText
            style={style.topTitleText}
            adjustsFontSizeToFit={true}>
            {title}
          </ScreenTitleText>
        </View>
        {canEdit ? (
          <View style={style.EditMessageContainer}>
            <CircleButton
              handler={onToggleEdit}
              style={style.rightButton}
              icon={<EditMessage height={30} width={30} />}></CircleButton>
          </View>
        ) : (
          <View style={style.EditMessageContainer}></View>
        )}
      </View>
      {children}
    </SafeAreaView>
  );
};

export default BaseScreen;
