import { Box, Button, FormControl, HStack, Input, Stack, Text, TextArea } from 'native-base';
import React, {useState} from 'react'
import { useGlobalContext } from '../GlobalContext/GlobalContext';

//https://github.com/react-native-datetimepicker/datetimepicker

export default function MeetingSetup({navigation}) {
    const {globalStyles: {meetingDetailsScreen, textArea, fatText, input, label, labelText, button, buttonText}} = useGlobalContext();

    return (
        <Box style={meetingDetailsScreen}>

            <HStack style={{marginBottom: 50}}>
                <Text style={fatText}>Add Meeting</Text>
            </HStack>

            <FormControl>
                <Stack space={2}>

                    <FormControl.Label style={label}>
                        <Text style={labelText}>Meeting </Text>
                    </FormControl.Label>

                    <FormControl.Label>
                        <Text style={labelText}>Description</Text>
                    </FormControl.Label>

                    <TextArea style={textArea}/>
                </Stack>

                <Box>
                    <Button style={button}>
                        <Text style={buttonText}>Next</Text>
                    </Button>
                </Box>


            </FormControl>
        </Box>
    );
}
