import React, { useEffect, useState } from 'react';
import { Box, Text, View } from 'native-base';
import { useGlobalContext } from '../GlobalContext';
import { marginBottom, overflow, paddingBottom } from 'styled-system';
import { SafeAreaView, ScrollView } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';

function CalendarTab({meetings}) {
    const {globalStyles: { headerText, paragraphText, titleText }, meetingBuff} = useGlobalContext();

    const [object, setObject] = useState({});

    useEffect(()=>{
            meetingBuff.forEach((element)=>{
            const {timeDate} = element;
            const buff = moment(timeDate).format('YYYY-MM-DD').toString();
            const obj = {};
            obj[buff] = {marked: true, selected: true};

            setObject({...object, obj});
            
        })
    },[meetingBuff]);

    
    return (
        <Box style={{marginTop: 0}}>
            <Calendar style={{height: "100%"}}
        // Initially visible month. Default = now
        current={moment(new Date()).format('YYYY-MM-DD')}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2012-05-10'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2030-05-30'}

        monthFormat={'yyyy MM'}

        markedDates={object}
            
        hideArrows={false}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
    
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={false}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={true}
        // Show week numbers to the left. Default = false
        showWeekNumbers={true}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={subtractMonth => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        // Disable left arrow. Default = false
        disableArrowLeft={false}
        // Disable right arrow. Default = false
        disableArrowRight={false}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        // Replace default month and year title with custom one. the function receive a date as parameter
    
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
        />
        </Box>
        
    );
}

export default CalendarTab;