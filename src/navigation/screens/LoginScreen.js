import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

// Navigation
import { useNavigation } from '@react-navigation/native'

//reanimated
import Animated from 'react-native-reanimated';

//styles
import { GlobalStyles } from '../../styles/styles';

const LoginScreen = () => {

  // styles = GlobalStyles
  const navigation = useNavigation();  

  return (    
    <SafeAreaView
      style={styles.container}>

      <Text style={styles.title}>Iniciar sesion</Text>

      <Text style={styles.title}>Usuario:</Text>
      <TextInput style={styles.title}
          placeholder="Usuario"
        />

      <Text style={styles.title}>Contraseña:</Text>
      <TextInput style={styles.title}       
          placeholder="Contraseña"
        />

      <Button style={styles.title} title="Iniciar sesión"/>
      <Button style={styles.title} title="Entrar como invitado" onPress={() => {
               navigation.navigate('HomeScreen')
              }} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#121212', // Fondo oscuro
      padding: 20,
  },
  title: {
      fontSize: 24,
      color: '#ffffff', // Texto blanco
      fontWeight: 'bold',
      marginBottom: 20,
  },
  item: {
      backgroundColor: '#1e1e1e', // Fondo de los ítems
      padding: 15,
      borderRadius: 10,
      marginVertical: 5,
      // Sombras
      shadowColor: '#000', // Color de la sombra
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25, // Opacidad de la sombra
      shadowRadius: 3.5, // Radio de la sombra
      elevation: 5, // Elevación para Android
  },
  itemTitle: {
      fontSize: 16,
      color: '#ffffff', // Texto blanco para ítems
  },
  imgPlanet: {
      width: 400,
      height: 400,
      resizeMode: 'contain',
      alignSelf: 'center',
  },
});

export default LoginScreen