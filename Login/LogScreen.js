import React, { useRef, useState } from 'react'

import {
  Text,
  Box,
  Button,
  Input,
} from 'native-base';

import { useGlobalContext } from '../GlobalContext/GlobalContext';

export default function LogScreen({navigation}) {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const refLogin = useRef(null);
    const refPassword = useRef(null);

    const {globalStyles} = useGlobalContext();

    return (
        <Box style={globalStyles.logRegScreen}>

            <Text style={globalStyles.fatText}>Login</Text>
            <Input style={globalStyles.Input} ref={refLogin} value={login} onChangeText={()=>setLogin(refLogin.current.Text)} placeholder="Login"/>
            <Input style={globalStyles.Input} ref={refPassword} value={password} onChangeText={()=>setPassword(refPassword.current.Text)} placeholder="Password"/>

            <Button style={globalStyles.button}>
                    <Text style={globalStyles.buttonText}>
                        Login
                    </Text>
            </Button>
            
            <Button style={globalStyles.button} onPress={()=>navigation.navigate('RegisterScreen')}>
                    <Text style={globalStyles.buttonText}>
                        Register
                    </Text>
            </Button>
        </Box>
    );
}

