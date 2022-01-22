
import React, {useState} from 'react'
import { useGlobalContext } from '../GlobalContext';

import {
  Text,
  Box,
  Button,
  Input,
  FormControl,
  Stack,
  Spinner,
  Center,
} from 'native-base';


import { Alert } from 'react-native';

import { useLoginComponentContext } from './LoginComponentProvider';

export default function RegisterSecondScreen({navigation}) {

    const {globalStyles: {input, button, labelText, label ,logRegScreen, buttonText}} = useGlobalContext();
    const {registerData, setRegisterData, handleRegister} = useLoginComponentContext();
    const [isLoading, setLoading] = useState(false);

    const regFunction = () =>{
        if(registerData.password.trim() === registerData.confirmPassword.trim()){
             setLoading(true);
            handleRegister(registerData.email, registerData.password)
                .then(()=>{
                    navigation.navigate("LogScreen");
                    Alert.alert(
                        "Registered successfully!",
                        "You can login now!",
                        [
                        { text: "OK" }
                    ]);
                })
                .catch(exc=>{
                    setLoading(false);
                    Alert.alert(
                        "Error!",
                        "Invalid email/password",
                        [
                        { text: "OK" }
                    ]);
                });
        }else{
            Alert.alert(
                        "Error!",
                        "Passwords needs to be equal!",
                        [
                        { text: "OK" }
                    ]);
        }
       
    }

    return (
        isLoading ? <Center flex={1} px="3">
            <Spinner size="lg" accessibilityLabel="Loading"/>
        </Center>:<Box style={logRegScreen}>
            <FormControl>
                <Stack space={2}>
                    <FormControl.Label style={label}>
                        <Text style={labelText}>Password</Text>
                    </FormControl.Label>
                    
                    <Input style={input} onChangeText={(value)=>setRegisterData({...registerData, password: value})} type="password" InputLeftElement={<Icon as={<MaterialIcons name="email"/>}/>}/>

                    <FormControl.Label style={label}>
                        <Text style={labelText}>ConfirmPassword</Text>
                    </FormControl.Label>
                    
                    <Input style={input} type="password" onChangeText={(value)=>setRegisterData({...registerData, confirmPassword: value})} InputLeftElement={<Icon as={<MaterialIcons name="password"/>}/>}/>

                    <Box style={{marginTop: 25}}>
                        <Button style={button} type="submit" onPress={regFunction}>
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