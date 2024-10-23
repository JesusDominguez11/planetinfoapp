import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
  
  const MapItem = ({title}) => (
    <View style={styles.item}>
      <TouchableOpacity><Text style={styles.title}>{title}</Text></TouchableOpacity>
    </View>
  );

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