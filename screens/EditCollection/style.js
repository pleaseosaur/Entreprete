import {StyleSheet} from 'react-native';
import palette from '../../styles/Common.styles';

const style = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 5,
    paddingHorizontal: '5%',
    flexDirection: 'column',
    flex: 1
  },
  scrollContainer: {
    paddingVertical: 5,
  },
  recipeSearchContainer: {
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
  textEntryContainer: {
    paddingVertical: '2%',
    // marginBottom: 25
  },
  titleInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    height: 50,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 25
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: palette.light_grey,
  },
  bottomButtonContainer: {
    paddingHorizontal: '10%',
    marginTop: 20,
    marginBottom: 10,
    paddingBottom: '5%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  submitButton: {
    backgroundColor: palette.dark_purple,
    paddingHorizontal: 1
  }
});

export default style;