import React, {useState, useRef} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {Overlay} from 'react-native-elements';
import {SquareButton} from '../../components/Button/Button';
import {PlusCircle} from '../../components/Icons/Icons';
import style from './style';

const AddButton = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    const addRecipe = () => {

    };

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View>
            <SquareButton handler={toggleOverlay} icon={<PlusCircle />}></SquareButton>
            <Overlay overlayStyle={style.overlayContainer} backdropStyle={style.overlayBackdrop} isVisible={visible}>
                <View style={style.buttonContainer}>
                    <View style={style.row}>
                        <SquareButton style={[style.button]} icon={<PlusCircle />}></SquareButton>
                        <SquareButton style={[style.button]} icon={<PlusCircle />}></SquareButton>
                    </View>
                    <View style={style.row}>
                        <SquareButton style={[style.button, style.primaryButton]} handler={toggleOverlay} icon={<PlusCircle />}></SquareButton>
                        <SquareButton style={[style.button]} icon={<PlusCircle />}></SquareButton>
                    </View>
                </View>
                <View style={style.buffer}></View>
            </Overlay>
        </View>
    );
};

export default AddButton;