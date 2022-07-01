import React from 'react';
import {Text, View, Image, useWindowDimensions, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';

interface Props {
    image: string;
    name: string;
    age: number;
    id: string;
}

const UserItem = (props: Props) => {
    const navigation = useNavigation();
    const {height} = useWindowDimensions();

    const onItemPressed = (id: string) => {
        navigation.navigate(
            'Detail' as never,
            {
                itemId: id,
            } as never,
        );
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => onItemPressed(props.id)}
                activeOpacity={0.8}
                style={[styles.subContainer, {height: height * 0.2}]}>
                <Image style={styles.image} source={{uri: props.image}} />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.text}>{props.name},</Text>
                    <Text style={[styles.text, {marginLeft: 4}]}>{props.age}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default UserItem;
