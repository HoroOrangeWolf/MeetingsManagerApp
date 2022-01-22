import React, { useState } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useGlobalContext } from '../GlobalContext';

import { Alert } from 'react-native';

const Stack = createNativeStackNavigator();

export default function AddMeeting({navigation, onMeetingAdd}) {

    const {addMeetinng, triggerLoadData} = useGlobalContext();

    const [isModified, setModified] = useState(false);

    const [meeting, setMeeting] = useState({name: '', description: '', calendarDate: new Date(), alarm: new Date(1)});

    const onFinishClick = () => {
        
        
    };



    return (
        <AddMeetingContext value={{meeting, setMeeting, onFinishClick}}>
            <Stack.Navigator initialRouteName="MeetingDetails" >
                <Stack.Screen name="MeetingDetails" component={MeettingDetails} options={{headerShown: false}}/>
                <Stack.Screen name="MeetingSetup" component={MeetingSetup} options={{headerShown: false}}/>
            </Stack.Navigator>
        </AddMeetingContext>
    );
}