import {StyleSheet} from "react-native";
import palette from "../../styles/Common.styles";

const style = StyleSheet.create({
    calendarContainer: {
        flex: 1,
        justifyContent: "start",
        backgroundColor: palette.white,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    }
});

export default style;