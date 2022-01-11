import React, {useState, useEffect} from 'react';
import { Text } from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../Home';
import Scanner from '../Scanner';
import Help from '../Help/Help';
import LogOut from '../LogOut/LogOut';
import Authors from '../Authors';
import AddMeeting from '../AddMeeting';
import { useGlobalContext } from '../GlobalContext';

const DrawerNav = createDrawerNavigator();



const MainScreen = () => {


  return (
    
      <DrawerNav.Navigator initialRouteName="Home">
        <DrawerNav.Screen name="Home" component={Home} />
        <DrawerNav.Screen name="Dodaj Spotkanie" component={AddMeeting} />
        <DrawerNav.Screen name="Zeskanuj kod QR" component={Scanner} />
        <DrawerNav.Screen name="Pomoc" component={Help} />
        <DrawerNav.Screen name="Autorzy" component={Authors} />
        <DrawerNav.Screen name="Wyloguj" component={LogOut} />
      </DrawerNav.Navigator>
    
  )
}

export default MainScreen;