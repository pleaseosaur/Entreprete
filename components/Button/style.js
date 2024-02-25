import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    circleButton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#727079',
        margin: 5,
    },
    squareButton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#727079',
        borderRadius: 8,
        margin: 5,
    },
    pillButton: {
        backgroundColor: '#727079',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 50,
        margin: 5,
    }
});

export default style;