
import React from 'react';

import {
  NativeBaseProvider,
} from 'native-base';

import GlobalContext from './GlobalContext';
import { NavigationContainer } from '@react-navigation/native';

import Main from './Main';



export default function App() {

  
  return (

    <NativeBaseProvider>
      <NavigationContainer>
        <GlobalContext>
            <Main/>
        </GlobalContext>
      </NavigationContainer>
    </NativeBaseProvider>
  
  );
}
