import React from 'react';
import { Text } from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../Home/Home';
import Scanner from '../Scanner/Scanner';
import Help from '../Help/Help';
import LogOut from '../LogOut/LogOut';

const DrawerNav = createDrawerNavigator();

const MainScreen = () => {
  return (
    <DrawerNav.Navigator initialRouteName = "Home">
        <DrawerNav.Screen name="Home" component={Home} />
        <DrawerNav.Screen name="Zeskanuj kod QR" component={Scanner} />
        <DrawerNav.Screen name="Pomoc" component={Help} />
        <DrawerNav.Screen name="Wyloguj" component={LogOut} />
    </DrawerNav.Navigator>
  )
}

export default MainScreen;