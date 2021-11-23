import React, { useContext, useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LogScreen from './LogScreen';
import RegisterScreen from './RegisterScreen';
import LoginComponentProvider from './LoginComponentProvider';

const Stack = createNativeStackNavigator();

import { useGlobalContext } from '../GlobalContext/GlobalContext';

export default function Login({handleLogin, handleRegister}){
    
    
    const [logInData, setLogInData] = useState({login: '', password: ''});

    const [registerData, setRegisterData] = useState({email: '', password: '', login: ''});

    const {registerUser, loginUser} = useGlobalContext();

    const onLogIn = () =>{
        loginUser(logInData.login, logInData.password)
        .then(v=>console.log(v))
        .catch(v=>console.log(v));
    };

    const onRegister = () =>{
        registerUser(registerData.email, registerData.password)
            .then((c)=>{
                console.log(c);
            })
            .catch(er=>{
                console.log(er);
            })
    };

    return (
        <LoginComponentProvider value={{logInData, registerData,setLogInData, setRegisterData, onLogIn, onRegister}}>

             <Stack.Navigator initialRouteName="LogScreen" >
                <Stack.Screen name="LogScreen" component={LogScreen} options={{headerShown: false}}/>
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false}}/>
             </Stack.Navigator>

        </LoginComponentProvider>
    );
}

