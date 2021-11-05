
import React from 'react'
import { useGlobalContext } from '../GlobalContext/GlobalContext';

import {
  Text,
  Box,
  Button,
  Input,
} from 'native-base';

export default function RegisterFirstScreen({navigation}) {

    const {globalStyles: {input, button, fatText,logRegScreen, buttonText}} = useGlobalContext();

    return (
        <Box style={logRegScreen}>

            <Text style={fatText}>Login</Text>

            <Input style={input}  placeholder="Login"/>
            
            <Input style={input}  placeholder="Email"/>

            <Button style={button} onPress={()=>navigation.navigate("ConfirmPassword")}>
                
                <Text style={buttonText}>
                    Next
                </Text>
            </Button>
        </Box>
    );
}