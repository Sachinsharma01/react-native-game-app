import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import {loginState} from './src/utils/auth';
import {AuthProvider} from './src/context/authContext';

import AppNavContainer from './src/navigation/AppNavContainer';

const App = () => {
  return (
    <AuthProvider>
      <AppNavContainer />
      {/* <AppStack /> */}
    </AuthProvider>
  );
};

export default App;
