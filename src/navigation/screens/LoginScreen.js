import React from 'react'
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
//components
import Background from '../../components/Background';
import ThemedButton from '../../components/Themed/ThemedButton';
import ThemedTextInput from '../../components/Themed/ThemedTextInput';
// Navigation
import { useNavigation } from '@react-navigation/native'
//reanimated
import Animated from 'react-native-reanimated';
//context
import { useTheme } from '../../context/ThemeContext';
//styles
import { getThemeStyles } from '../../styles/themeStyles';

const LoginScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const styles = getThemeStyles(isDarkMode); 
  const navigation = useNavigation();  

  return (    
    <Background>
    <SafeAreaView
      style={styles.background}>
        
      <Text style={styles.title}>Iniciar sesion</Text>

      {/* <Text style={styles.title}>Usuario:</Text> */}
      {/* <TextInput style={styles.title}
          placeholder="Usuario"
        /> */}
                      <ThemedTextInput
        placeholder="Usuario..."
      />


      {/* <Text style={styles.title}>Contraseña:</Text> */}
      {/* <TextInput style={styles.title}       
          placeholder="Contraseña"
        /> */}
              <ThemedTextInput
        placeholder="Contraseña..."
      />
        

      {/* <Button style={styles.title} title="Iniciar sesión"/> */}
      <ThemedButton title="Iniciar Sesion" onPress={() => { /* Cambia el tema aquí */ }} />
      {/* <Button style={styles.title} title="Entrar como invitado" onPress={() => {
               navigation.navigate('HomeScreen')
              }} /> */}
      <ThemedButton title="Entrar como invitado" onPress={() => {
               navigation.navigate('HomeScreen')
              }} />



    </SafeAreaView>
    </Background>
  )
}

export default LoginScreen