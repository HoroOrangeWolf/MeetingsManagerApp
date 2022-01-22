import React, { useState } from 'react'
import { useGlobalContext } from '../GlobalContext';

export default function MeetingEditor({navigation}) {

    const {addMeetinng, triggerLoadData} = useGlobalContext();

    const [isModified, setModified] = useState(false);

    const [meeting, setMeeting] = useState({name: '', description: '', calendarDate: new Date(), alarm: new Date(1)});

}