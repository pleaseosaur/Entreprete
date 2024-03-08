import {StyleSheet} from 'react-native';
import palette from '../../styles/Common.styles';

const style = StyleSheet.create({
    mealPlanItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: palette.light_grey,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 2,
        shadowRadius: 2,
        margin: '5%',
    },
    imagePlaceHolderContainer: {
        justifyContent: 'flex-start',
    },
    mealPlanNameContainer: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 10,
    },
    mealPlanName: {
        fontFamily: 'Nunito',
        fontSize: 30,
        fontWeight: "700",
    },
});

export default style;
