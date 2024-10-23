import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticationScreen from './src/navigation/screens/AuthenticationScreen';
import HomeScreen from './src/navigation/screens/HomeScreen';

const Stack = createStackNavigator();

// Component
const StackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName='AuthenticationScreen'>
      <Stack.Screen
        name='AuthenticationScreen'
        component={AuthenticationScreen}
        options={{ headerShown: false }}/>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
      <NavigationContainer>
        <StackNavigator />        
      </NavigationContainer>
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
