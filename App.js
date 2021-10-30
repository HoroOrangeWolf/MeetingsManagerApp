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

export default function App() {
  return (

    <NativeBaseProvider>
      <Box style={styles.container}>
        <Login/>
      </Box>
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
