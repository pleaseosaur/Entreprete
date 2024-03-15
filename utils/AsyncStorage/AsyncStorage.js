import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import testData from './../../mockServer/db.json';

const storeMockData = async () => {
  try {
    const mockData = {data: testData};
    await AsyncStorage.setItem('@mockData', JSON.stringify(mockData));
    console.log('Mock data stored successfully.');
  } catch (error) {
    console.error('Error storing mock data:', error);
  }
};

const getMockData = async () => {
  try {
    const mockData = await AsyncStorage.getItem('@mockData');
    if (mockData !== null) {
      console.log('Mock data:', JSON.parse(mockData));
    }
  } catch (error) {
    console.error('Error retrieving mock data:', error);
  }
};

const updateMockData = async () => {
  try {
    const mockData = {data: testData};
    await AsyncStorage.setItem('@mockData', JSON.stringify(mockData));
    console.log('Mock data updated successfully.');
  } catch (error) {
    console.error('Error updating mock data:', error);
  }
};

export {storeMockData, getMockData, updateMockData};
