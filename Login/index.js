import React from 'react';

import LogScreen from './LogScreen';
import RegisterScreen from './RegisterScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function Login({onLogin, onRegister}){
    
    const onLogIn = (value) =>{
        console.log(value);
    }


    return (
             <Stack.Navigator initialRouteName="LogScreen" >
                <Stack.Screen name="LogScreen" options={{headerShown: false}}>
                    {(props)=><LogScreen {...props} onLogIn={onLogIn}/>}
                </Stack.Screen>
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false}}/>
             </Stack.Navigator>
    );
}