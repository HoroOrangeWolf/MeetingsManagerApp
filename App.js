import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import Login from './Login';

import {
  NativeBaseProvider,
} from 'native-base';

import GlobalContext from './GlobalContext/GlobalContext';
import { NavigationContainer } from '@react-navigation/native';

import AddMeeting from './AddMeeting';


export default function App() {
  return (

    <NativeBaseProvider>
      <NavigationContainer>
        <GlobalContext>

            <AddMeeting/>
        </GlobalContext>
      </NavigationContainer>
    </NativeBaseProvider>
  
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
