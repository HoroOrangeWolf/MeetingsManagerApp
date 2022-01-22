import { Box, Button, FormControl, HStack, Input, Stack, Text, TextArea } from 'native-base';
import React, { useState } from 'react'
import { useGlobalContext } from '../GlobalContext';

export default function MeetingEditor({navigation}) {

    const {triggerLoadData} = useGlobalContext();

    const [isModified, setModified] = useState(false);

    const [meeting, setMeeting] = useState({name: '', description: '', calendarDate: new Date(), alarm: new Date(1)});


    const {globalStyles: {meetingDetailsScreen, textArea, fatText, input, label, labelText, button, buttonText}} = useGlobalContext();
    
    return (
        <Box style={meetingDetailsScreen}>

            <HStack style={{marginBottom: 50}}>
                <Text style={fatText}>Edit meeting</Text>
            </HStack>

            <FormControl>
                <Stack space={2}>

                    <FormControl.Label style={label}>
                        <Text style={labelText}>Meeting </Text>
                    </FormControl.Label>

                    <Input style={input} />

                    <FormControl.Label>
                        <Text style={labelText}>Description</Text>
                    </FormControl.Label>

                    <TextArea style={textArea} />
                </Stack>

                <Box>
                    <Button style={button} >
                        <Text style={buttonText}>Next</Text>
                    </Button>
                </Box>


            </FormControl>
        </Box>
    );

}