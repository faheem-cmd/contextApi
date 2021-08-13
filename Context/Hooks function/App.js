/* eslint-disable prettier/prettier */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyProvider from './src/Contexts/MyProvider'

import Navigation from './src/Navigation'




const App = () => {
  return (



    <MyProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </MyProvider>
  );
};


export default App