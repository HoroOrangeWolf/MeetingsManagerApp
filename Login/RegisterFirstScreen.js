
import React from 'react'
import { useGlobalContext } from '../GlobalContext/GlobalContext';

import {
  Text,
  Box,
  Button,
  Input,
} from 'native-base';

export default function RegisterFirstScreen({navigation}) {

    const {globalStyles} = useGlobalContext();

    return (
        <Box style={globalStyles.logRegScreen}>
            <Text style={globalStyles.fatText}>Login</Text>
            <Input style={globalStyles.Input}  placeholder="Login"/>
            <Input style={globalStyles.Input}  placeholder="Email"/>
            <Button style={globalStyles.button} onPress={()=>navigation.navigate("ConfirmPassword")}>
                <Text style={globalStyles.buttonText}>
                    Next
                </Text>
            </Button>
        </Box>
    );
}