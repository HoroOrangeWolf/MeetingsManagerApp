
import React from 'react'
import { useGlobalContext } from '../GlobalContext/GlobalContext';

import {
  Text,
  Box,
  Button,
  Input,
} from 'native-base';

export default function RegisterSecondScreen({navigation}) {

    const {globalStyles: {input, button, fatText,logRegScreen, buttonText}} = useGlobalContext();

    return (
        <Box style={logRegScreen}>
            <Text style={fatText}>Password</Text>
            <Input style={input}  placeholder="Password"/>
            <Input style={input}  placeholder="Confirm Password"/>
            <Button style={button} >
                <Text style={buttonText}>
                    Register
                </Text>
            </Button>
        </Box>
    );
}