import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

// navigation
import { useNavigation } from '@react-navigation/native';

// screen
import TestScreen from '../src/navigation/screens/TestScreen';
  
  const MapItem = ({title}) => {
    const navigation = useNavigation();

    return(
    <View style={styles.item}>
      <TouchableOpacity  onPress={() => navigation.navigate('TestScreen')} // Navega a la pantalla de prueba
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