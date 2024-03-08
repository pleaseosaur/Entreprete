import {StyleSheet} from 'react-native';
import palette from "../../styles/Common.styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'rgb(237, 231, 228)',
        maxHeight: 50,
        marginBottom: 15,
        borderRadius: 5
    },
    subContainer: {
        maxWidth: 60,
        alignItems: 'center',
    },
    iconContainer: {
        margin: 15,
        flexDirection: 'row',
    },
    img: {
        maxHeight: 50,
        resizeMode: 'contain',
    },
    deleteButton: {
        width: 60,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.dark_purple,
      },
});

export default styles;