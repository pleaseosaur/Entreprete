import { Text as DefaultText } from 'react-native';

const Text = ({ style, ...rest }) => {
//   const { colors } = useThemeColors();

  return (
      <DefaultText/>
    // <DefaultText
    //   style={[
    //     { color: colors.text, fontFamily: 'SpaceMono-Regular', fontSize: 16 },
    //     style,
    //   ]}
    //   {...rest}
    // />
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

export { Text, ButtonText, ScreenTitleText };
export default Text;
