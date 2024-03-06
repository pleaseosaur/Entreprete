import {StyleSheet} from 'react-native';
import palette from '../../styles/Common.styles';

const style = StyleSheet.create({
  ingredientContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginHorizontal: '5%',
  },
  itemTitle: {
    color: '#48474B',
    fontSize: 22,
    fontWeight: 700,
    fontFamily: 'Nunito-Bold',
  },
  ingredient: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  ingredientAmountContainer: {
    margin: 5,
  },
  ingredientNameContainer: {
    margin: 5,
  },
  ingredientName: {
    color: '#000',
    fontSize: 16,
    fontWeight: 700,
    marginTop: '2.5%',
  },
  ingredientAmount: {
    color: palette.med_grey,
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    fontWeight: 700,
  },
  instructionsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginHorizontal: '5%',
  },
  instructions: {
    margin: 5,
  },
  instructionText: {
    fontSize: 16,
    color: '#000',
  },
});

export default style;
