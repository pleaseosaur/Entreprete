import {StyleSheet} from 'react-native';
import palette from "../../styles/Common.styles";

const styles = StyleSheet.create({
    button: {
        backgroundColor: palette.light_purple,
    },
    primaryButton: {
        backgroundColor: palette.dark_purple,
    },
    overlayContainer: {
        // position added to fix add button overlay
        position: 'relative',
        backgroundColor: 'blur(20px)',
        shadowColor: 'blur(20px)',
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
        backgroundColor: 'rgba(72, 71, 75, 0.7)'
    },
    buffer: {
        // height adjusted from 50 to 83 to fix add button overlay
        height: 83,
        marginTop: '2%',
        marginBottom: '3%',
    },
});

export default styles;