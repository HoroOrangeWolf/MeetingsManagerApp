
import React from 'react'
import { useGlobalContext } from '../GlobalContext';

import {
  Text,
  Box,
  Button,
  Input,
  FormControl,
  Stack,
} from 'native-base';
import { useLoginComponentContext } from './LoginComponentProvider';

export default function RegisterSecondScreen({navigation}) {

    const {globalStyles: {input, button, labelText, label ,logRegScreen, buttonText}} = useGlobalContext();
    const {registerData, setRegisterData, onRegister} = useLoginComponentContext();

    return (
        <Box style={logRegScreen}>
            <FormControl>
                <Stack space={2}>
                    <FormControl.Label style={label}>
                        <Text style={labelText}>Password</Text>
                    </FormControl.Label>
                    
                    <Input style={input} onChangeText={(value)=>setRegisterData({...registerData, password: value})} type="password"/>

                    <FormControl.Label style={label}>
                        <Text style={labelText}>ConfirmPassword</Text>
                    </FormControl.Label>
                    
                    <Input style={input} type="password"/>

                    <Box style={{marginTop: 25}}>
                        <Button style={button} type="submit" onPress={onRegister}>
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