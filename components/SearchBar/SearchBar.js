import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput} from 'react-native';
import styles from './style';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.input}
          value={search}
          placeholder="Search for recipes"
          keyboardType="default"
        />
      </View>
    </SafeAreaView>
  );
};
export default SearchBar;
