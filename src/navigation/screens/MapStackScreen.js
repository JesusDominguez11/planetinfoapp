// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView,
  StatusBar, FlatList } from 'react-native';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// components
import MapItem from '../../../components/MapItem';

// screens
import MapScreen from './MapScreen';
import TestScreen from './TestScreen';

const DATA = [
  {
    id: '1',
    title: 'Mercurio',
  },
  {
    id: '2',
    title: 'Venus',
  },
  {
    id: '3',
    title: 'Tierra',
  },
  {
    id: '4',
    title: 'Marte',
  },
  {
    id: '5',
    title: 'Jupiter',
  },
  {
    id: '6',
    title: 'Saturno',
  },
  {
    id: '7',
    title: 'Urano',
  },
  {
    id: '8',
    title: 'Neptuno',
  },
  {
    id: '9',
    title: 'Pluton',
  },
  {
    id: '10',
    title: 'Eris',
  },
  {
    id: '11',
    title: 'Sedna',
  },
];

const Stack = createStackNavigator();

// Component
const StackNavigator = () => {
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

const MapStackScreen = () => {
  return (
    <StackNavigator />   

  //   <SafeAreaView style={styles.container}>
  //   <FlatList
  //     data={DATA}
  //     renderItem={({item}) => <MapItem title={item.title} />}
  //     keyExtractor={item => item.id}
  //   />
  // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default MapStackScreen


