// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView,
  StatusBar, FlatList } from 'react-native';

// components
import MapItem from '../../components/MapItem';
import SolarSystem from '../../components/SolarSystem';

//styles
import { MapStyles } from '../../styles/styles';

const DATA = [
  { id: '1', title: 'Mercurio', description: 'Es el planeta más cercano al sol.' },
  { id: '2', title: 'Venus', description: 'Conocido como el gemelo de la Tierra.' },
  { id: '3', title: 'Tierra', description: 'El único planeta conocido que tiene vida.' },
  { id: '4', title: 'Marte', description: 'El planeta rojo.' },
  { id: '5', title: 'Jupiter', description: 'El planeta más grande del sistema solar.' },
  { id: '6', title: 'Saturno', description: 'Conocido por sus impresionantes anillos.' },
  { id: '7', title: 'Urano', description: 'Un gigante de gas con un color azul.' },
  { id: '8', title: 'Neptuno', description: 'El planeta más lejano del sistema solar.' },
  { id: '9', title: 'Plutón', description: 'Anteriormente considerado el noveno planeta.' },
  { id: '10', title: 'Eris', description: 'Un planeta enano en el cinturón de Kuiper.' },
  { id: '11', title: 'Sedna', description: 'Un objeto transneptuniano.' },
];


const MapScreen = () => {
  // styles = MapStyles

  return (
    <SafeAreaView style={styles.container}>
      <SolarSystem/>
    {/* <FlatList
      data={DATA}
      renderItem={({item}) => <MapItem title={item.title} description={item.description} id={item.id} />}
      keyExtractor={item => item.id}
    /> */}
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

export default MapScreen


