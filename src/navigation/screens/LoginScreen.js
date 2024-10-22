import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
// Navigation
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './HomeScreen';


const LoginScreen = () => {
  // Variable. Para utilizar la navegacion
  const navigation = useNavigation();

  return (    
    <SafeAreaView
      style={styles.container}
    >
      <Text>LoginScreen</Text>
      <Button title="boton" onPress={() => {
               navigation.navigate('HomeScreen')
              }}></Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen