import { View, Image, Text, StyleSheet } from "react-native";
import { DoubleSoup } from "./Icons/Icons";
import { HeaderText } from "./Text";

/**
 * example usage:
 *  <View style={{marginLeft: 35, marginRight: 35}}>
        <ListItem name={'Recipe'} rightIcon={<DoubleSoup />}></ListItem>
        <ListItem name={'Super Long Recipe Name '} rightIcon={<DoubleSoup />}></ListItem>
        <ListItem name={'Recipe'} rightIcon={<DoubleSoup />}></ListItem>
        <ListItem name={'Even Longer Super Long Recipe Name Literally So Long'}></ListItem>
        <ListItem name={'Recipe'}></ListItem>
    </View>
 */
const ListItem = ({img, name, rightIcon, style, ...rest}) => {
    const defaultImg = '../assets/testAssets/anh-nguyen-unsplash.jpg';
    const defaultIcon = <DoubleSoup/>; //TODO: update to hamburger menu

    return (
        <View style={[styles.container, style]} {...rest}>
            <View style={[styles.subContainer]}>
                <Image style={[styles.img]} source={require(`${defaultImg}`)}></Image>
            </View>
            <HeaderText style={{flex: 1, paddingLeft: 25, margin: 1}} adjustsFontSizeToFit={true}>{name}</HeaderText>
            <View style={[styles.iconContainer]}>{rightIcon}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      backgroundColor: 'rgba(202, 201, 205, 0.35)',
      maxHeight: 50,
      marginBottom: 15,
      borderRadius: 5
    },
    subContainer: {
        maxWidth: 60,
        alignItems: 'center',
    },
    iconContainer: {
        margin: 15
    },
    img: {
        maxHeight: 50,
        resizeMode: 'contain',
    }
  });

export default ListItem;