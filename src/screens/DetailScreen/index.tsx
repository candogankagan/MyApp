import React from 'react';
import {useWindowDimensions, Text, Image, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigators/application.navigator';
import {useSelector} from 'react-redux';

type Props = {
    route: RouteProp<RootStackParamList, 'Detail'>;
};

const DetailScreen = ({route}: Props) => {
    const {itemId} = route.params;
    const {height, width} = useWindowDimensions();
    const userList = useSelector(state => state.list.userList);

    const findUser = userList.find((item: {id: number}) => item.id == itemId);

    return (
        <SafeAreaView edges={['top']} style={styles.container}>
            <Image style={{height: height * 0.5, width: width}} source={{uri: findUser.image}} />
            <View style={styles.bottomContainer}>
                <ScrollView>
                    <Text style={styles.detailParagh}>{findUser.firstName}</Text>
                    <Text style={styles.detailParagh}>{findUser.lastName}</Text>
                    <Text style={styles.detailParagh}>{findUser.age}</Text>
                    <Text style={styles.detailParagh}>{findUser.email}</Text>
                    <Text style={styles.detailParagh}>{findUser.gender}</Text>
                    <Text style={styles.detailParagh}>{findUser.university}</Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default DetailScreen;
