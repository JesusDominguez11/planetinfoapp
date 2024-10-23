// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView,
  StatusBar, FlatList } from 'react-native';

// components
import MapItem from '../../components/MapItem';

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
  styles = MapStyles

  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={({item}) => <MapItem title={item.title} description={item.description} id={item.id} />}
      keyExtractor={item => item.id}
    />
  </SafeAreaView>
  )
}

export default MapScreen


