import React from 'react';
import {SafeAreaView, View, Text, Pressable} from 'react-native';
import style from './style.js'; // Import base styles
import {CircleButton} from '../../components/Button/Button.js';
import {ArrowLeft, EditMessage} from '../../components/Icons/Icons.js';

const BaseScreen = ({title, children, goBack, canEdit, canGoBack}) => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.topContainer}>
        {canGoBack ? (
          <View>
            <CircleButton icon={<ArrowLeft />} handler={goBack} />
          </View>
        ) : (
          <View style={style.topGoBackContainer}></View>
        )}
        <View style={style.topTitleContainer}>
          <Text style={style.topTitle}>{title}</Text>
        </View>
        {canEdit ? (
          <View style={style.EditMessageContainer}>
            <Pressable>
              <EditMessage />
            </Pressable>
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
