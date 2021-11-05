import React from 'react';
import { Text } from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';

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

function Home() {
  return (
    <Text>
        Home drawer
    </Text>
  );
}

function Scanner() {
  return (
    <Text>
        Scanner drawer
    </Text>
  );
}

function Help() {
  return (
    <Text>
        Help drawer
    </Text>
  );
}

function LogOut() {
  return (
    <Text>
        LogOut drawer
    </Text>
  );
}

export default MainScreen;