// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView,
  StatusBar, FlatList, 
  ImageBackground} from 'react-native';
//navigation
import { useNavigation } from '@react-navigation/native';
// components
import SolarSystem from '../../components/SolarSystem';
import Background from '../../components/Background';

const MapScreen = () => {
  // styles = MapStyles
  const navigation = useNavigation();

  return (
    <Background>
    <SafeAreaView style={styles.container}>
      <SolarSystem navigation={navigation}/>
  </SafeAreaView>
  </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)', // Filtro oscuro (opcional)
  },
});

export default MapScreen


