import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {styles} from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fetchService} from '../../utils/fetchService';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {getUserList} from '../../store/list/action';
import UserItem from '../../components/UserItem';
import Button from '../../components/Button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators/application.navigator';

interface Props {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

const HomeScreen = ({navigation}: Props) => {
    const userList = useSelector(state => state.list.userList);
    const dispatch = useDispatch();

    const onPlusPressed = () => {
        navigation.navigate('Create');
    };

    useEffect(() => {
        fetchService('users', 'GET').then((response: any) => {
            dispatch(getUserList(response.users));
        });
    }, []);

    console.log('----');

    console.log(userList);
    console.log('----');

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.productContainer}
                data={userList}
                numColumns={2}
                renderItem={({item}) => (
                    <UserItem id={item.id} name={item.username} age={item.age} image={item.image} />
                )}
                keyExtractor={item => item.id}
            />
            <Button
                onPressed={onPlusPressed}
                containerStyle={styles.plusContainer}
                textStyle={styles.plusText}
                text={'Add User'}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
