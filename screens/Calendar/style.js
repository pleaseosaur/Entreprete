import {StyleSheet} from "react-native";
import palette from "../../styles/Common.styles";

const style = StyleSheet.create({
    container: {
        marginVertical: 5,
        marginHorizontal: 5,
        paddingHorizontal: '5%',
        flexDirection: 'column',
        flex: 1
    },   
    calendarContainer: {
        flex: 1,
        justifyContent: "start",
        backgroundColor: palette.white,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    buttonPlaceHolder: {
        width: 50,
        margin: 5,
    },
});

export default style;