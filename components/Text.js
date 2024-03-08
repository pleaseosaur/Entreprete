import { Text as DefaultText } from 'react-native';
import palette from '../styles/Common.styles';

const Text = ({ style, ...rest }) => {
  return (
    <DefaultText
      style={[
        { color: palette.dark_grey, fontFamily: 'NotoSans-Regular', fontSize: 14 },
        style,
      ]}
      {...rest}
    />
  );
};

const ListText = ({ style, ...rest }) => {
      return (
        <DefaultText
          style={[
            { color: palette.dark_grey, fontFamily: 'NotoSans-Regular', fontSize: 14 , lineHeight: 26},
            style,
          ]}
          {...rest}
        />
      );
    };

const ButtonText = ({ style, ...rest }) => {
  return (
    <DefaultText
      style={[
        { color: '#FEF6E5', fontFamily: 'Nunito-SemiBold', fontSize: 20 },
        style,
      ]}
      {...rest}
    />
  );
};

const ScreenTitleText = ({ style, ...rest }) => {
      return (
        <DefaultText
          style={[
            { color: palette.light_grey, fontFamily: 'Nunito-Bold', fontSize: 32 },
            style,
          ]}
          {...rest}
        />
      );
    };

const HomeTitleText = ({ style, ...rest }) => {
        return (
        <DefaultText
            style={[
            { color: palette.dark_grey, fontFamily: 'Nunito-Black', fontSize: 48 },
            style,
            ]}
            {...rest}
        />
        );
    };

const HeaderText = ({ style, ...rest }) => {
        return (
        <DefaultText
            style={[
            { color: palette.dark_grey, fontFamily: 'Nunito-Bold', fontSize: 20 },
            style,
            ]}
            {...rest}
        />
        );
    };

export { Text, ButtonText, ScreenTitleText, ListText, HomeTitleText, HeaderText };
export default Text;
