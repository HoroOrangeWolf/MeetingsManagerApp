import React from 'react'
import {
  Text,
  Box,
  Button,
  Input,
  FormControl,
  Stack,
} from 'native-base';

import { useGlobalContext } from '../GlobalContext/GlobalContext';
import { useLoginComponentContext } from './LoginComponentProvider';


export default function LogScreen({navigation}) {

    const {globalStyles: {label, input, labelText, button, logRegScreen, buttonText}, loginUser} = useGlobalContext();

    const {logInData, setLogInData, onLogIn} = useLoginComponentContext();
    
    return (
        
        <Box style={logRegScreen}>
            <FormControl>
                <Stack space={2}>
                    
                    <FormControl.Label style={label}>
                        <Text style={labelText}>Login</Text>
                    </FormControl.Label>
                    
                    <Input style={input} onChangeText={(value)=>setLogInData({...logInData, login: value})} type="text"/>
                    
                    <FormControl.Label style={label}>
                        <Text style={labelText}>Password</Text>
                    </FormControl.Label>

                    <Input style={input} onChangeText={(value)=>setLogInData({...logInData, password: value})} type="password"/>
                    
                    <Box style={{marginTop: 25}}>
                    
                        <Button style={button} type="submit" onPress={()=>onLogIn(logInData.login, logInData.password)}>
                            <Text style={buttonText}>
                                 Login
                            </Text>
                         </Button>

                         <Button style={button} onPress={()=>navigation.navigate("RegisterScreen")}>
                             <Text style={buttonText}>
                                 Register
                             </Text>
                         </Button>

                    </Box>

                </Stack>
            </FormControl>
        </Box>
    );
}

