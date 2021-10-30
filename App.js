import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import Login from './Login/Login';

import {
  NativeBaseProvider,
  Box,
  Body,
  ListItem,
  Text,
  Checkbox,
} from 'native-base';

import GlobalContext from './GlobalContext/GlobalContext';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (

    <NativeBaseProvider>
      <NavigationContainer>
        <GlobalContext>
            <Login/>
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
