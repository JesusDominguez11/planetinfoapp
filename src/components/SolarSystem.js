import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';

//components
import Planet from './Planet';

const { width } = Dimensions.get('window'); // Obtener el ancho de la pantalla

const SolarSystem = () => {
  return (
    <View style={styles.container}>
      {/* Órbitas para cada planeta */}
      {/* <View style={[styles.orbit, { width: width * 0.2, height: width * 0.2, borderRadius: width * 0.1 }]} />  
      <View style={[styles.orbit, { width: width * 0.25, height: width * 0.25, borderRadius: width * 0.125 }]} />  
      <View style={[styles.orbit, { width: width * 0.3, height: width * 0.3, borderRadius: width * 0.15 }]} />  
      <View style={[styles.orbit, { width: width * 0.35, height: width * 0.35, borderRadius: width * 0.175 }]} />  
      <View style={[styles.orbit, { width: width * 0.4, height: width * 0.4, borderRadius: width * 0.2 }]} />  
      <View style={[styles.orbit, { width: width * 0.45, height: width * 0.45, borderRadius: width * 0.225 }]} />  
      <View style={[styles.orbit, { width: width * 0.5, height: width * 0.5, borderRadius: width * 0.25 }]} />  
      <View style={[styles.orbit, { width: width * 0.55, height: width * 0.55, borderRadius: width * 0.275 }]} />  
      <View style={[styles.orbit, { width: width * 0.6, height: width * 0.6, borderRadius: width * 0.3 }]} />  
      <View style={[styles.orbit, { width: width * 0.65, height: width * 0.65, borderRadius: width * 0.325 }]} />  
      <View style={[styles.orbit, { width: width * 0.7, height: width * 0.7, borderRadius: width * 0.35 }]} />  
      <View style={[styles.orbit, { width: width * 0.75, height: width * 0.75, borderRadius: width * 0.375 }]} />  
      <View style={[styles.orbit, { width: width * 0.8, height: width * 0.8, borderRadius: width * 0.4 }]} />   */}

      {/* Sol */}
      <Animated.View style={styles.sun} />

      {/* Planetas internos */}
      <Planet name="Mercurio" radius={width * 0.1} size={15} color="gray" rotationSpeed={4000} />
      <Planet name="Venus" radius={width * 0.125} size={20} color="#e1ad01" rotationSpeed={6000} />
      <Planet name="Tierra" radius={width * 0.15} size={25} color="#3b82f6" rotationSpeed={7000} />
      <Planet name="Marte" radius={width * 0.175} size={20} color="#d14c32" rotationSpeed={8000} />
      
      {/* Planetas externos */}
      <Planet 
        name="Júpiter" 
        radius={width * 0.225} 
        size={40} 
        color="#d1a760" 
        rotationSpeed={10000} 
        hasRings={true} 
      />
      <Planet 
        name="Saturno" 
        radius={width * 0.275} 
        size={35} 
        color="#f4c542" 
        rotationSpeed={12000} 
        hasRings={true} 
      />
      <Planet 
        name="Urano" 
        radius={width * 0.325} 
        size={30} 
        color="#5f9cf5" 
        rotationSpeed={14000} 
        hasRings={true} 
      />
      <Planet 
        name="Neptuno" 
        radius={width * 0.375} 
        size={30} 
        color="#4b7fff" 
        rotationSpeed={16000} 
      />
      <Planet 
        name="Plutón" 
        radius={width * 0.425} 
        size={15} 
        color="#c0c0c0" 
        rotationSpeed={18000} 
      />
      <Planet 
        name="Eris" 
        radius={width * 0.475} 
        size={20} 
        color="#a8a8a8" 
        rotationSpeed={20000} 
      />
      <Planet 
        name="Sedna" 
        radius={width * 0.525} 
        size={25} 
        color="#b0b0b0" 
        rotationSpeed={22000} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  sun: {
    position: 'absolute',
    width: 30, // Reducido para dar más espacio
    height: 30,
    borderRadius: 25,
    backgroundColor: 'orange',
    shadowColor: 'yellow',
    shadowOpacity: 1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 },
    borderColor: 'red',
    borderWidth: 2,
  },
  orbit: {
    position: 'absolute',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
});

export default SolarSystem;











