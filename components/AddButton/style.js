import {StyleSheet} from 'react-native';
import palette from "../../styles/Common.styles";

const styles = StyleSheet.create({
    button: {
        backgroundColor: palette.dark_purple,
    },
    primaryButton: {
        backgroundColor: palette.light_purple,
    },

    overlayContainer: {
        backgroundColor: 'transparent',
        shadowColor: 'transparent',
        alignSelf: "flex-start",
        flexDirection: 'column',
        justifyContent: 'flex-end',
        flex: 1
    },

    row: {
        flexDirection: 'row',
    },

    buttonContainer: {

    },
    overlayBackdrop: {
        // backgroundColor: 'rgba(253, 248, 239, 0.8)',
        backgroundColor: 'rgba(72, 71, 75, 0.7)',
    },
    buffer: {
        height: 50,
        marginTop: '2%',
        marginBottom: '3%',
    },
});

export default styles;