import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
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
         <Checkbox
        value="Jacek test"
        accessibilityLabel="This is a dummy checkbox"
        defaultIsChecked
      />
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
