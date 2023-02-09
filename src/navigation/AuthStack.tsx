import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import OTP from '../screens/OTP';
import AppStack from './AppStack';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OTP" component={OTP} />
    </Stack.Navigator>
  );
};

export default AuthStack;
