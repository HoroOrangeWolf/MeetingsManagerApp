import React, { useRef, useState } from 'react'
import {
  Text,
  Box,
  Button,
  Input,
  FormControl,
  Stack,
} from 'native-base';

import { useGlobalContext } from '../GlobalContext/GlobalContext';

export default function LogScreen({navigation, onLogIn}) {

    const {globalStyles: {label, input, labelText, button, logRegScreen, buttonText}} = useGlobalContext();
    const [logData, setLogData] = useState({name: '', password: ''});
    
    return (
        <Box style={logRegScreen}>
            <FormControl>
                <Stack space={2}>
                    
                    <FormControl.Label style={label}>
                        <Text style={labelText}>Login</Text>
                    </FormControl.Label>
                    
                    <Input style={input} onChangeText={(value)=>setLogData({...logData, name: value})} type="text" placeholder="Login"/>
                    
                    <FormControl.Label style={label}>
                        <Text style={labelText}>Password</Text>
                    </FormControl.Label>

                    <Input style={input} onChangeText={(value)=>setLogData({...logData, password: value})} type="password" placeholder="Password"/>
                    
                    <Box style={{marginTop: 25}}>
                    
                        <Button style={button} type="submit" onPress={()=>onLogIn(logData)}>
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

