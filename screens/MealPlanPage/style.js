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
  subContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  scrollContainer: {
    // marginBottom: '5%',
    // marginTop: '5%',
    // marginLeft: '7%',
    // marginRight: '7%',
    paddingVertical: 5,
  },
  recipeSearchContainer: {
    // marginHorizontal: '5%',
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
