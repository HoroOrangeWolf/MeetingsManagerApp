
import { Box } from 'native-base';
import React from 'react'

import { useGlobalContext } from '../GlobalContext/GlobalContext';


export default function RegisterScreen({navigation}) {

    const {globalStyles} = useGlobalContext();


    return (
        <Box style={globalStyles.logRegScreen}>

        </Box>
    );
}