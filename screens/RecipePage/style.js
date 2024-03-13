import {StyleSheet} from 'react-native';
import palette from '../../styles/Common.styles';

const style = StyleSheet.create({
  scrollContainer: {},
  ingredientContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginHorizontal: '5%',
  },
  itemTitle: {
    color: '#48474B',
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Nunito-Bold',
  },
  ingredient: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  ingredientAmountContainer: {
    flex: 1,
    margin: 5,
  },
  ingredientNameContainer: {
    flex: 2,
    margin: 5,
  },
  ingredientName: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
  },
  ingredientAmount: {
    color: palette.med_grey,
    fontSize: 16,
    fontWeight: '700',
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default style;
