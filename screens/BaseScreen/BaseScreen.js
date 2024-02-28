import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import styles from 'style.js'; // Import base styles

const BaseScreen = ({ title, children }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            {children}
        </SafeAreaView>
    );
};

export default BaseScreen;
