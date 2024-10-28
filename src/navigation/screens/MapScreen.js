// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView,
  StatusBar, FlatList, 
  ImageBackground} from 'react-native';

// components
import SolarSystem from '../../components/SolarSystem';

//styles

import { useNavigation } from '@react-navigation/native';
import TestScreen from './TestScreen';


const MapScreen = () => {
  // styles = MapStyles
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={require('../../img/bg/bg_9098131.png')}  // Asegúrate de tener la imagen en la ruta especificada
      style={styles.background}
    >
    <SafeAreaView style={styles.container}>
      <SolarSystem navigation={navigation}/>
  </SafeAreaView>
  </ImageBackground>
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
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)', // Filtro oscuro (opcional)
  },
});

export default MapScreen


