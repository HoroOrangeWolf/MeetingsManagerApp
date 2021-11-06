import React from 'react'
import MeettingDetails from './MeetingDetails';
import MeetingAlarm from './MeetingAlarm';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MeetingSetup from './MeetingSetup';

const Stack = createNativeStackNavigator();

export default function AddMeeting({navigation}) {

    

    return (
        <Stack.Navigator initialRouteName="MeetingDetails" >
            <Stack.Screen name="MeetingDetails" component={MeettingDetails} options={{headerShown: false}}/>
            <Stack.Screen name="MeetingSetup" component={MeetingSetup} options={{headerShown: false}}/>
            <Stack.Screen name="MeetingAlarm" component={MeetingAlarm} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}