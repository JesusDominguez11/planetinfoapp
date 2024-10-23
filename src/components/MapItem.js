import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, StatusBar, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

// navigation
import { useNavigation } from '@react-navigation/native';

// screen
import TestScreen from '../navigation/screens/TestScreen';
import PlanetScreen from '../navigation/screens/PlanetScreen';
  
  const MapItem = ({title, id }) => {
    const navigation = useNavigation();

    return(
    <View style={styles.item}>
      <TouchableOpacity onPress={() => navigation.navigate('PlanetScreen', { planetId: id } )} // Navega a la pantalla de prueba
      >
      <Text style={styles.title}>{title}</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#2e3247',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
});

  export default MapItem