import {StyleSheet} from 'react-native';
import palette from '../../styles/Common.styles';

const style = StyleSheet.create({
  circleButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: palette.med_grey,
    margin: 5,
  },
  squareButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.med_grey,
    borderRadius: 8,
    margin: 5,
  },
  pillButton: {
    backgroundColor: palette.med_grey,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 50,
    margin: 5,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default style;
