import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Notification from '../screens/Notification';
import Details from '../screens/Details';
import { Result } from '../interfaces/NowPlaying';
export type RootStackParams ={
  Home:undefined;
  Details:Result;
}

const Stack = createStackNavigator<RootStackParams>();
export default function Navigation() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false,
      cardStyle:{backgroundColor:"white"}
    }}
    >
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Details' component={Details}></Stack.Screen>
    </Stack.Navigator>
  )
}
