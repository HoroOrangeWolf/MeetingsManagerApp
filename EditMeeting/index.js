import React, { useState } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useGlobalContext } from '../GlobalContext';
import MeetingEditor from './MeetingEditor';
import { Alert } from 'react-native';
import QRCodeGenerator from './QRCodeGenerator';

const Stack = createNativeStackNavigator();

export default function EditMeeting({navigation}) {

    const {addMeetinng, triggerLoadData} = useGlobalContext();

    const [isModified, setModified] = useState(false);

    const [meeting, setMeeting] = useState({name: '', description: '', calendarDate: new Date(), alarm: new Date(1)});

    const onFinishClick = () => {
        
        
    };

    return (
        
            <Stack.Navigator initialRouteName="MeetingEditor" >
                <Stack.Screen name="MeetingEditor" component={MeetingEditor} options={{headerShown: false}}/>
                <Stack.Screen name="QRCodeGenerator" component={QRCodeGenerator} options={{headerShown: false}}/>
            </Stack.Navigator>
      
    );
}