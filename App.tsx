import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
// import AsyncStorage from '@react-native-async-storage/async-storage/lib/typescript/AsyncStorage';

const App = async () => {
  // const login = await AsyncStorage.getItem('login') === 'LOGGED_IN';
  return (
    <NavigationContainer>
      <AuthStack />
      {/* <AppStack /> */}
    </NavigationContainer>
  );
};

export default App;
