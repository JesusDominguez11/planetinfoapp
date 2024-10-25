// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView,
  StatusBar, FlatList } from 'react-native';

// components
import SolarSystem from '../../components/SolarSystem';

//styles

import { useNavigation } from '@react-navigation/native';
import TestScreen from './TestScreen';


const MapScreen = () => {
  // styles = MapStyles
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <SolarSystem navigation={navigation}/>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#121212', // Fondo oscuro
      padding: 20,
  },
});

export default MapScreen


