import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import {Search} from '../Icons/Icons';
import styles from './style';

const SearchBar = ({handleSearch, placeholderText, test}) => {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.input}
          value={search}
          placeholder={placeholderText || "Search for recipes"}
          keyboardType="default"
          onChangeText={text => {
            setSearch(text);
          }}
          onSubmitEditing={() => handleSearch(search)}
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
