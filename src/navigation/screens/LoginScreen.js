import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

// Navigation
import { useNavigation } from '@react-navigation/native'

//styles
import { GlobalStyles } from '../../styles/styles';

const LoginScreen = () => {

  styles = GlobalStyles
  const navigation = useNavigation();  

  return (    
    <SafeAreaView
      style={styles.container}>

      <Text>LoginScreen</Text>

      <Button title="boton" onPress={() => {
               navigation.navigate('HomeScreen')
              }} />

    </SafeAreaView>
  )
}

export default LoginScreen