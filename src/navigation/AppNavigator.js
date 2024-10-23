import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

//screens
import MapScreen from './screens/MapScreen';
import TestScreen from './screens/TestScreen';

// navigation
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

function AppDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={AppTabNavigator} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function AppTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Map Screen" component={MapStackNavigator} options={{ headerShown: false }}> 
        {/* <MapStackNavigator></MapStackNavigator> */}
      </Tab.Screen>
      <Tab.Screen name="Home II" component={TestScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Home III" component={TestScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Home IV" component={TestScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

// Component
const MapStackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName='MapScreen'>
      <Stack.Screen
        name='MapScreen'
        component={MapScreen}
        options={{ headerShown: false }}/>
      <Stack.Screen
        name='TestScreen'
        component={TestScreen}
        options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default function AppNavigator() {
  return (
    <AppDrawerNavigator/>
  );
}