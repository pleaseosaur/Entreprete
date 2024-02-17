import React from "react";
import { PillButton } from '../components/Buttons';
import palette from "../styles/Colors.styles";
import { View, Text } from "react-native";
import styles from "../styles/Common.styles";

// filler code, replace with implementation
export const HomeScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.defaultText}>Welcome to the Home Screen</Text>
            <PillButton title="Go to Details" color={palette.dark_purple} onPress={() => alert('Button Pressed')} />
        </View>
    )
}