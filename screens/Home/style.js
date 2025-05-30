import {StyleSheet} from 'react-native';
import palette from '../../styles/Common.styles';

const style = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: palette.white,
  },
  homeTitleContainer: {
    paddingHorizontal: 62,
    paddingVertical: 30,
  },
  homeTitle: {
    color: '#48474B',
    textAlign: 'center',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 48,
  },
  homeIconContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeNavigationContainer: {
    flex: 1.5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '10%',
  },
});

export default style;
