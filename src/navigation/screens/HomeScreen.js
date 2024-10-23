import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

// navigation
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header, getHeaderTitle } from '@react-navigation/elements';

// screens
import MapStackScreen from './MapStackScreen';

const HomeScreenII = () => {
  return (
    <View
    style={styles.container}
    >
      <Text>HomeScreen 2</Text>
    </View>
  )
}

const HomeScreenIII = () => {
  return (
    <View
    style={styles.container}
    >
      <Text>HomeScreen 3</Text>
    </View>
  )
}

const HomeScreenIV = () => {
  return (
    <View
    style={styles.container}
    >
      <Text>HomeScreen 4</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Map Screen" component={MapStackScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Home II" component={HomeScreenII} options={{ headerShown: false }} />
      <Tab.Screen name="Home III" component={HomeScreenIII} options={{ headerShown: false }} />
      <Tab.Screen name="Home IV" component={HomeScreenIV} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default MyDrawer