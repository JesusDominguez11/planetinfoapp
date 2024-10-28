import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
//components
import Background from '../../components/Background';
//styles
import { BackgroundStyles } from '../../styles/styles';

const SigninScreen = () => {

  return (
    <Background>
    <SafeAreaView 
    style={styles.container}
    >
      <Text>SigninScreen</Text>
    </SafeAreaView>
    </Background>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // resizeMode: 'cover', // Ajusta la imagen para cubrir toda la pantalla
    justifyContent: 'center',

  },
  container: {
      flex: 1,
      // backgroundColor: '#121212', // Fondo oscuro
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

export default SigninScreen