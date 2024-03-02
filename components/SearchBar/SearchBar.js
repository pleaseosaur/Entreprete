import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  TextInput,
  Text,
} from 'react-native';
import {Search} from '../Icons/Icons';
import styles from './style';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.input}
          value={search}
          placeholder="Search for recipes"
          keyboardType="default"
        />
        <TouchableWithoutFeedback>
          <View>
            <Search />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};
export default SearchBar;
