import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ApplicationNavigator} from './src/navigators/application.navigator';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <ApplicationNavigator />
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;
