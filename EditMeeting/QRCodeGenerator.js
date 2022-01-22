import React, { useState } from 'react'
import { useGlobalContext } from '../GlobalContext';

export default function MeetingEditor({navigation}) {

    const {addMeetinng, triggerLoadData} = useGlobalContext();

    const [isModified, setModified] = useState(false);

    const [meeting, setMeeting] = useState({name: '', description: '', calendarDate: new Date(), alarm: new Date(1)});


    const {globalStyles: {meetingDetailsScreen, textArea, fatText, input, label, labelText, button, buttonText}} = useGlobalContext();
    const {meeting, setMeeting} = useAddMeetingContext();

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

                    <Input style={input} onChangeText={val=>setMeeting({...meeting, name: val})}/>

                    <FormControl.Label>
                        <Text style={labelText}>Description</Text>
                    </FormControl.Label>

                    <TextArea style={textArea} onChangeText={val=>setMeeting({...meeting, description: val})}/>
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