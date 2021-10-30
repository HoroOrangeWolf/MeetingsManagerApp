
import React from 'react'
import { useGlobalContext } from '../GlobalContext/GlobalContext';

import {
  Text,
  Box,
  Button,
  Input,
} from 'native-base';

export default function RegisterSecondScreen({navigation}) {

    const {globalStyles} = useGlobalContext();

    return (
        <Box style={globalStyles.logRegScreen}>
            <Text style={globalStyles.fatText}>Password</Text>
            <Input style={globalStyles.Input}  placeholder="Password"/>
            <Input style={globalStyles.Input}  placeholder="Confirm Password"/>
            <Button style={globalStyles.button} >
                <Text style={globalStyles.buttonText}>
                    Register
                </Text>
            </Button>
        </Box>
    );
}