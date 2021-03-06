
import React from 'react'
import { useGlobalContext } from '../GlobalContext';

import {
  Text,
  Box,
  Button,
  Input,
  FormControl,
  Stack,
  Icon,
} from 'native-base';
import { useLoginComponentContext } from './LoginComponentProvider';

import { MaterialIcons } from "@expo/vector-icons";

export default function RegisterFirstScreen({navigation}) {

    const {globalStyles: {input, button, label, labelText,logRegScreen, buttonText}} = useGlobalContext();

    const {registerData, setRegisterData} = useLoginComponentContext();

    return (
        <Box style={logRegScreen}>

            <FormControl>
                <Stack space={2}>

                    <FormControl.Label style={label}>
                        <Text style={labelText}>Email</Text>
                    </FormControl.Label>

                    <Input style={input} onChangeText={(value)=>setRegisterData({...registerData, email: value})} InputLeftElement={<Icon style={{color: "gray"}} as={<MaterialIcons name="email"/>}/>}/>

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