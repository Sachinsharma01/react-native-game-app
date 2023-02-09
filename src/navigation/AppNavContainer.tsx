import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../context/authContext';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const AppNavContainer = () => {
  const {login, token} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {token !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
