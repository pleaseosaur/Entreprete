import {StyleSheet} from 'react-native';
import palette from '../../styles/Common.styles'; // Import the common styles

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: palette.white, // Use a common background color
    paddingTop: 15
  },
  topContainer: {
    marginHorizontal: '2%',
    flexDirection: 'row',
    marginBottom: '3%',
    alignItems: 'center',
    height: 50,
  },
  topGoBackContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  topTitleText: {
    paddingLeft: 5,
    margin: 1,
  },
  EditMessageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  leftButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  rightButton: {
    backgroundColor: "transparent",
  }
});

export default style;
