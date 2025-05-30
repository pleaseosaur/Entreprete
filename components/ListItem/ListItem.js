import { useRef } from 'react';
import { Animated, View, Image, TouchableWithoutFeedback, TouchableOpacity} from "react-native";
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import { Linear, Trash } from "../Icons/Icons";
import { HeaderText } from "../Text";
import TestImage from '../../assets/testAssets/anh-nguyen-unsplash.jpg'
import palette from "../../styles/Common.styles";
import styles from "./style";

const ListItem = ({navigation, img, name, rightIcon, style, onPress, swipeIcon, swipeHandler, noImg, ...rest}) => {
    const defaultImg = TestImage;
    const defaultIcon = <Linear color={palette.dark_grey} width={35} height={40}/>;
    const defaultSwipeIcon = <Trash color={palette.cream}/>;
    const ref = useRef(null);

    const deleteHandler = () => {
      swipeHandler();
      ref.current.close();
    };

    const renderRightActions = (_, dragX) => {
        const transX = dragX.interpolate({
          inputRange: [-60, 0],
          outputRange: [0, 60],
          extrapolate: 'clamp',
        });
    
        return (
          <RectButton style={styles.deleteButton} onPress={deleteHandler}>
            <Animated.Text style={[styles.buttonText, { transform: [{ translateX: transX }] }]}>
              <View>{swipeIcon ? swipeIcon : defaultSwipeIcon}</View>
            </Animated.Text>
          </RectButton>
        );
    };

    return (
        <Swipeable renderRightActions={renderRightActions} ref={ref} {...rest}>
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.container, style]}>
                    <View style={[styles.subContainer]}>
                        {!noImg ? (<Image style={[styles.img]} source={img ? img : defaultImg}></Image>) : null}
                    </View>
                    <HeaderText style={{flex: 1, paddingLeft: 25, margin: 1}} adjustsFontSizeToFit={true}>{name}</HeaderText>
                    <View style={[styles.iconContainer]}>{rightIcon ? rightIcon : defaultIcon}</View>
                </View>
            </TouchableOpacity>
        </Swipeable>
    );
};

export default ListItem;