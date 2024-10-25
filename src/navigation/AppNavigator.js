import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

//screens
import MapScreen from './screens/MapScreen';
import PlanetScreen from './screens/PlanetScreen';
import TestScreen from './screens/TestScreen';

// navigation
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderTitle } from '@react-navigation/elements';

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
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
          backgroundColor: '#000000', // Color de fondo negro
          borderTopWidth: 0, // Quita el borde superior
      },
      tabBarActiveTintColor: '#FFFFFF', // Color del texto y iconos activos
      tabBarInactiveTintColor: '#FFFFFF', // Color del texto y iconos inactivos
      tabBarLabelStyle: {
          fontSize: 14, // Tamaño de fuente de las etiquetas
      },
      tabBarIconStyle: {
          shadowColor: '#fff', // Color de sombra blanca
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 5, // Elevación para Android
      },
  }}
    >
      <Tab.Screen name="Map Screen" component={MapStackNavigator} options={{ headerShown: false, tabBarShowLabel:false }}> 
        {/* <MapStackNavigator></MapStackNavigator> */}
      </Tab.Screen>
      <Tab.Screen name="Home II" component={TestScreen} options={{ headerShown: false, tabBarShowLabel:false }} />
      <Tab.Screen name="Home III" component={TestScreen} options={{ headerShown: false, tabBarShowLabel:false }} />
      <Tab.Screen name="Home IV" component={TestScreen} options={{ headerShown: false, tabBarShowLabel:false }} />
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
      <Stack.Screen
        name='PlanetScreen'
        component={PlanetScreen}
        options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default function AppNavigator() {
  return (
    <AppDrawerNavigator/>
  );
}