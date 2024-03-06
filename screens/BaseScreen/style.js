import {StyleSheet} from 'react-native';
import palette from '../../styles/Common.styles'; // Import the common styles

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: palette.white, // Use a common background color
  },
  topContainer: {
    marginHorizontal: '2%',
    flexDirection: 'row',
    marginBottom: '3%',
  },
  topGoBackContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    margin: 5,
  },
  topTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topTitle: {
    fontSize: 32,
    fontWeight: 700,
    fontFamily: 'Nunito-Bold',
    color: palette.light_grey,
  },
  EditMessageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    margin: 5,
  },
});

export default style;
