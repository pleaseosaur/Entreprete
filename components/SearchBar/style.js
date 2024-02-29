import {StyleSheet} from 'react-native';
import palette from '../../styles/Common.styles';

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    height: 50,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: '2%',
    marginBottom: '5%',
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: palette.light_grey,
  },
});
export default styles;
