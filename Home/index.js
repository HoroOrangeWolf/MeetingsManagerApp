import React, {useState, useEffect} from "react"

import { Box,FlatList,Heading,Avatar,HStack,VStack,Text,Spacer,Center,NativeBaseProvider, Spinner} from "native-base"
import { Alert,SafeAreaView, ScrollView } from "react-native";
import { useGlobalContext } from "../GlobalContext";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import List from "./List";

import Scanner from '../Scanner';
import Help from '../Help/Help';

const TabNav = createBottomTabNavigator();

export default function Home({navigation})  {

  return (

    <TabNav.Navigator
    screenOptions={({ route }) => ({

      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'Help':
            return (
              <FontIcon
                name="Help"
                size={20}
                solid />
            );
          case 'Scanner':
            return (
              <FontIcon
                name="user"
                size={20}
                solid />
            );
          default:
            return <View />;
        }
      },
    })}
    tabBarOptions={{
      style: {
        // backgroundColor: 'white',
        // borderTopColor: 'gray',
        // borderTopWidth: 1,
        // paddingBottom: 5,
        // paddingTop: 5,
      },
    }}
    initialRouteName="Help"
    swipeEnabled={false}
    >
      <TabNav.Screen name="Help" component={Help} />
      <TabNav.Screen name="Scanner" component={Scanner} />
    </TabNav.Navigator>
    
  )
}

