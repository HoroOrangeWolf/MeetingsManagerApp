import React, { useState } from 'react'
import MeettingDetails from './MeetingDetails';
import MeetingAlarm from './MeetingAlarm';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MeetingSetup from './MeetingSetup';
import AddMeetingContext from './AddMeetingContext';

const Stack = createNativeStackNavigator();

export default function AddMeeting({navigation, onMeetingAdd}) {

    const [meeting, setMeeting] = useState({name: '', description: '', calendarDate: new Date(), alarm: new Date(1)});

    const onFinishClick = () => onMeetingAdd(meeting);

    return (
        <AddMeetingContext value={{meeting, setMeeting, onFinishClick}}>
            <Stack.Navigator initialRouteName="MeetingDetails" >
                <Stack.Screen name="MeetingDetails" component={MeettingDetails} options={{headerShown: false}}/>
                <Stack.Screen name="MeetingSetup" component={MeetingSetup} options={{headerShown: false}}/>
                <Stack.Screen name="MeetingAlarm" component={MeetingAlarm} options={{headerShown: false}}/>
            </Stack.Navigator>
        </AddMeetingContext>
    );
}