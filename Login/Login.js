import React from 'react';

import LogScreen from './LogScreen';
import RegisterScreen from './RegisterScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function Login(){
    return (
             <Stack.Navigator initialRouteName="LogScreen" >
                <Stack.Screen name="LogScreen" component={LogScreen} options={{headerShown: false}}/>
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false}}/>
             </Stack.Navigator>
    );
}