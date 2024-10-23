// import { StyleSheet, Text, View, StatusBar } from 'react-native';

//navigation
import { NavigationContainer } from '@react-navigation/native'; //<NavigationContainer>

//screen controllers
import AuthenticationNavigator from './src/navigation/AuthenticationNavigator';

export default function App() {
  return (
      <NavigationContainer>
        <AuthenticationNavigator />        
      </NavigationContainer>
  );
}
