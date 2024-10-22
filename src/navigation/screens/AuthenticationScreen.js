import { View, Text, Button } from 'react-native'
import React from 'react'
// Navigation
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './LoginScreen'
import SigninScreen from './SigninScreen'

const Tab = createBottomTabNavigator();

function AuthenticationScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="LogIn" component={LoginScreen} />
      <Tab.Screen name="SignIn" component={SigninScreen} />
    </Tab.Navigator>
  );
}

export default AuthenticationScreen