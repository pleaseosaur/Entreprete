import { Text as DefaultText } from 'react-native';

const Text = ({ style, ...rest }) => {
//   const { colors } = useThemeColors();

  return (
    <DefaultText
      style={[
        { color: '#48474B', fontFamily: 'NotoSans-Regular', fontSize: 14 },
        style,
      ]}
      {...rest}
    />
  );
};

const ListText = ({ style, ...rest }) => {
    //   const { colors } = useThemeColors();
    
      return (
        <DefaultText
          style={[
            { color: '#48474B', fontFamily: 'NotoSans-Regular', fontSize: 14 , lineHeight: 26},
            style,
          ]}
          {...rest}
        />
      );
    };

const ButtonText = ({ style, ...rest }) => {
//   const { colors } = useThemeColors();

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
    //   const { colors } = useThemeColors();
    
      return (
        <DefaultText
          style={[
            { color: '#9C99A6', fontFamily: 'Nunito-Bold', fontSize: 32 },
            style,
          ]}
          {...rest}
        />
      );
    };

const HomeTitleText = ({ style, ...rest }) => {
    //   const { colors } = useThemeColors();
    
        return (
        <DefaultText
            style={[
            { color: '#48474B', fontFamily: 'Nunito-Black', fontSize: 48 },
            style,
            ]}
            {...rest}
        />
        );
    };

const HeaderText = ({ style, ...rest }) => {
    //   const { colors } = useThemeColors();
    
        return (
        <DefaultText
            style={[
            { color: '#48474B', fontFamily: 'Nunito-Bold', fontSize: 20 },
            style,
            ]}
            {...rest}
        />
        );
    };

export { Text, ButtonText, ScreenTitleText, ListText, HomeTitleText, HeaderText };
export default Text;
