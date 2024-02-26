import {StyleSheet} from 'react-native';
import {palette} from '../../styles/Common.styles';

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
    // backgroundColor: 'red',
    paddingVertical: 30,
    paddingHorizontal: 62,
  },
});

export default style;
