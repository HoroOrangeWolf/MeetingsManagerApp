import RNDateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { Box, Button, FormControl, HStack, Input, Stack, Text, TextArea } from 'native-base';
import React, {useState} from 'react'
import { useGlobalContext } from '../GlobalContext/GlobalContext';

//https://github.com/react-native-datetimepicker/datetimepicker

export default function MeetingSetup({navigation}) {
    const {globalStyles: {meetingDetailsScreen, textArea, fatText, input, label, labelText, button, buttonText}} = useGlobalContext();

    const [calendarDate, setCalendarDate] = useState(new Date());

    const [isDatePicker, setIsDatePicker] = useState(false);

    const [iTimerPicker, setIsTimePicker] = useState(false);

    const onDatePick = (event, date) => {
        setIsDatePicker(false);
        if(date === undefined)
            return;
        setCalendarDate(date);
    };

    const onTimePick = (event, date) => {
        setIsTimePicker(false);
        if(date === undefined)
            return;
        setCalendarDate(date);
    };



    return (
        <Box style={meetingDetailsScreen}>

            <HStack style={{marginBottom: 50}}>
                <Text style={{...fatText, fontSize: 40}}>Meeting Time</Text>
            </HStack>

            <FormControl>
                <Stack space={2}>

                    <FormControl.Label style={label}>
                        <Text style={labelText}>Pick Date</Text>
                    </FormControl.Label>

                    <Input  style={input} onPressIn={()=>setIsDatePicker(!isDatePicker)} editable={!isDatePicker} value={moment(calendarDate).format('DD/MM/YYYY')} type="text"/>

                    {isDatePicker && <RNDateTimePicker value={calendarDate} mode="date" onChange={onDatePick}/>}

                    <FormControl.Label style={label}>
                        <Text style={labelText}>Pick Hour</Text>
                    </FormControl.Label>

                    <Input  style={input} onPressIn={()=>setIsTimePicker(!iTimerPicker)} editable={!iTimerPicker} value={moment(calendarDate).format('HH:mm')} type="text"/>

                    {iTimerPicker &&<RNDateTimePicker value={calendarDate} mode="time" onChange={onTimePick}/>}


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