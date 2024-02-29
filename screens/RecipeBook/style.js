import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  scrollContainer: {
    marginBottom: '5%',
  },
  recipeSearchContainer: {
    marginHorizontal: '5%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonPlaceHolder: {
    width: 50,
    margin: 5,
  },
  emptyRecipes: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default style;
