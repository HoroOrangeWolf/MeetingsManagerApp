import React, {useState, useEffect} from "react"

import { Box,FlatList,Heading,Avatar,HStack,VStack,Text,Spacer,Center,NativeBaseProvider, Spinner} from "native-base"
import { Alert,SafeAreaView, ScrollView } from "react-native";
import { useGlobalContext } from "../GlobalContext";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import List from "./List";

import Scanner from '../Scanner';
import HomeTab from "./HomeTab";

const TabNav = createBottomTabNavigator();

export default function Home({navigation})  {

  return (

    <TabNav.Navigator
    screenOptions={({ route }) => ({

      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'Home':
            return (
              <FontIcon
                name="home"
                size={20}
                solid />
            );
          case 'Scanner':
            return (
              <FontIcon
                name="camera"
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
    initialRouteName="Home"
    swipeEnabled={false}
    >
      <TabNav.Screen name="Home" component={HomeTab} options={{headerShown: false}}/>
      <TabNav.Screen name="Scanner" component={Scanner} options={{headerShown: false}}/>
    </TabNav.Navigator>
    
  )
}

