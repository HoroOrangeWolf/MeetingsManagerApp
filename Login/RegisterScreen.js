
import { Box } from 'native-base';
import React from 'react'

import { useGlobalContext } from '../GlobalContext/GlobalContext';
import RegisterFirstScreen from './RegisterFirstScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterSecondScreen from './RegisterSecondScreen';

const Stack = createNativeStackNavigator();

export default function RegisterScreen({navigation}) {

    const {globalStyles} = useGlobalContext();


    return (
        
            <Box width="100%" height="100%">
                <Stack.Navigator initialRouteName="LogEmail">
                    <Stack.Screen name="LogEmail" component={RegisterFirstScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="ConfirmPassword" component={RegisterSecondScreen} options={{headerShown: false}}/>
                </Stack.Navigator>
            </Box>
    );
}