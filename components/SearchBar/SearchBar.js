import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Search} from '../Icons/Icons';
import styles from './style';

const SearchBar = ({handleSearch, placeholderText, handleFocused}) => {
  const [search, setSearch] = useState('');
  const [keyboardType, setKeyboardType] = useState('default');

  return (
    <SafeAreaView>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.input}
          value={search}
          onFocus={() => {
            if(handleFocused) {
              handleFocused(true);
            }
          }}
          onBlur={() => {
            if(handleFocused) {
              handleFocused(false);
            }
          }}
          placeholder={placeholderText || 'Search for recipes'}
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
