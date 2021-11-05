
import React from 'react'
import { useGlobalContext } from '../GlobalContext/GlobalContext';

import {
  Text,
  Box,
  Button,
  Input,
  FormControl,
  Stack,
} from 'native-base';

export default function RegisterFirstScreen({navigation}) {

    const {globalStyles: {input, button, label, labelText,logRegScreen, buttonText}} = useGlobalContext();

    return (
        <Box style={logRegScreen}>

            <FormControl>
                <Stack space={2}>
                    <FormControl.Label style={label}>
                        <Text style={labelText}>Login</Text>
                    </FormControl.Label>
                    
                    <Input style={input} type="text" placeholder="Login"/>

                    <FormControl.Label style={label}>
                        <Text style={labelText}>Email</Text>
                    </FormControl.Label>

                    <Input style={input}  placeholder="Email"/>

                    <Box style={{marginTop: 25}}>
                    
                        <Button style={button} onPress={()=>navigation.navigate("ConfirmPassword")}>
                            <Text style={buttonText}>
                                 Next
                            </Text>
                         </Button>
                    </Box>
                </Stack> 
            </FormControl>
        </Box>
    );
}