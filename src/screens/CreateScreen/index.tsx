import React from 'react';
import {styles} from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import Input from '../../components/Input';
import useInput from '../../hooks/useInput';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators/application.navigator';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';
import {updateList} from '../../store/list/action';

interface Props {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Create'>;
}

const CreateScreen = ({navigation}: Props) => {
    const userName = useInput((e: string) => e.length >= 2 && e.length <= 24);
    const firstName = useInput((e: string) => e.length >= 2 && e.length <= 24);
    const lastName = useInput((e: string) => e.length >= 2 && e.length <= 24);
    const age = useInput((e: string) => e.length >= 2 && e.length <= 24);
    const URL = useInput((e: string) => e.length >= 1);
    const dispatch = useDispatch();

    const onAddPressed = () => {
        dispatch(
            updateList({
                username: userName.value,
                age: age.value,
                image: URL.value,
                firstName: firstName.value,
                lastName: lastName.value,
                id: Math.random(),
            }),
        );
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <Input placeHolder={'User Name'} text={userName.value} setText={userName.setValue} />
            <Input placeHolder={'First Name'} text={firstName.value} setText={firstName.setValue} />
            <Input placeHolder={'Age'} text={age.value} setText={age.setValue} />
            <Input placeHolder={'Last Name'} text={lastName.value} setText={lastName.setValue} />
            <Input placeHolder={'Image Link'} text={URL.value} setText={URL.setValue} />
            <Button
                onPressed={onAddPressed}
                containerStyle={styles.addProductContainer}
                textStyle={styles.addProductText}
                text={'Add User'}
            />
        </SafeAreaView>
    );
};

export default CreateScreen;
