import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigation from './src/navigation/Navigation';


export default function App() {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  )
}
