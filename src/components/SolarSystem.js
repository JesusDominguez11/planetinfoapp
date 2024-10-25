import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';

//components
import Planet from './Planet';
import Orbit from './Orbit';

const { width } = Dimensions.get('window'); // Obtener el ancho de la pantalla

const SolarSystem = () => {
  const factorAceleration = 60;

// Jupiter (69.911 km de radio) – 1.120% el tamaño de la Tierra.
// Saturno (58.232 km de radio) – 945% el tamaño de la Tierra.
// Urano (25.362 km de radio) - 400% el tamaño de la Tierra.
// Neptuno (24.622 km de radio) – 388% el tamaño de la Tierra.
// Tierra (6,371 km de radio).
// Venus (6,052 km de radio) – 95% el tamaño de la Tierra.
// Marte (3,390 km de radio) – 53% el tamaño de la Tierra.
// Mercurio (2,440 km de radio) – 38% el tamaño de la Tierra.

  // return (
  //   <View style={styles.container}>
  //     {/* Sol */}
  //     <Animated.View style={styles.sun} />

  //     {/* Planetas internos */}
  //     {/* rotationSpeed={88 * factorAceleration} */}
  //     <Planet name="Mercurio" radius={width * 0.08} size={12} color="gray" rotationSpeed={88 * factorAceleration} /> 
  //     <Planet name="Venus" radius={width * 0.12} size={16} color="#e1ad01" rotationSpeed={225 * factorAceleration} /> 
  //     <Planet name="Tierra" radius={width * 0.165} size={16} color="#3b82f6" rotationSpeed={365.25 * factorAceleration} /> 
  //     <Planet name="Marte" radius={width * 0.205} size={12} color="#d14c32" rotationSpeed={687 * factorAceleration} /> 

  //     {/* Planetas externos */}
  //     <Planet 
  //       name="Júpiter" 
  //       radius={width * 0.260} 
  //       size={28} 
  //       color="#d1a760" 
  //       rotationSpeed={(4333 * factorAceleration) / 10} 
  //       hasRings={true} 
  //     />
  //     <Planet 
  //       name="Saturno" 
  //       radius={width * 0.335} 
  //       size={28} 
  //       color="#f4c542" 
  //       rotationSpeed={(10759 * factorAceleration) / 10} 
  //       hasRings={true} 
  //     />
  //     <Planet 
  //       name="Urano" 
  //       radius={width * 0.400} 
  //       size={20} 
  //       color="#5f9cf5" 
  //       rotationSpeed={(30687 * factorAceleration) / 10} 
  //       hasRings={true} 
  //     />
  //     <Planet 
  //       name="Neptuno" 
  //       radius={width * 0.450} 
  //       size={20} 
  //       color="#4b7fff" 
  //       rotationSpeed={(60190 * factorAceleration) / 10} 
  //     />
  //     <Planet 
  //       name="Plutón" 
  //       radius={width * 0.490} 
  //       size={8} 
  //       color="#c0c0c0" 
  //       rotationSpeed={(90560 * factorAceleration) / 100} 
  //     />
  //     <Planet 
  //       name="Eris" 
  //       radius={width * 0.520} 
  //       size={8} 
  //       color="#a8a8a8" 
  //       rotationSpeed={203100 * factorAceleration / 100} 
  //     />
  //     <Planet 
  //       name="Sedna" 
  //       radius={width * 0.540} 
  //       size={8} 
  //       color="#b0b0b0" 
  //       rotationSpeed={4559000 * factorAceleration / 100} 
  //     />
  //   </View>
  // );


  return (
    <View style={styles.container}>
      {/* Sol */}
      <Animated.View style={styles.sun} />

      {/* Planetas internos */}
      <Orbit radius={width * 0.08} /> 
      <Planet name="Mercurio" radius={width * 0.08} size={12} color="gray" rotationSpeed={88 * factorAceleration} /> 
      
      <Orbit radius={width * 0.12} />
      <Planet name="Venus" radius={width * 0.12} size={16} color="#e1ad01" rotationSpeed={225 * factorAceleration} /> 
      
      <Orbit radius={width * 0.165} /> 
      <Planet name="Tierra" radius={width * 0.165} size={16} color="#3b82f6" rotationSpeed={365.25 * factorAceleration} /> 
      
      <Orbit radius={width * 0.205} /> 
      <Planet name="Marte" radius={width * 0.205} size={12} color="#d14c32" rotationSpeed={687 * factorAceleration} /> 

      {/* Planetas externos */}
      <Orbit radius={width * 0.260} /> 
      <Planet name="Júpiter" radius={width * 0.260} size={28} color="#d1a760" rotationSpeed={(4333 * factorAceleration) / 10} hasRings={true} />
      
      <Orbit radius={width * 0.335} /> 
      <Planet name="Saturno" radius={width * 0.335} size={28} color="#f4c542" rotationSpeed={(10759 * factorAceleration) / 10} hasRings={true} />
      
      <Orbit radius={width * 0.400} /> 
      <Planet name="Urano" radius={width * 0.400} size={20} color="#5f9cf5" rotationSpeed={(30687 * factorAceleration) / 10} hasRings={true} />
      
      <Orbit radius={width * 0.450} /> 
      <Planet name="Neptuno" radius={width * 0.450} size={20} color="#4b7fff" rotationSpeed={(60190 * factorAceleration) / 10} />

      <Orbit radius={width * 0.490} /> 
      <Planet name="Plutón" radius={width * 0.490} size={8} color="#c0c0c0" rotationSpeed={(90560 * factorAceleration) / 100} />

      <Orbit radius={width * 0.520} /> 
      <Planet name="Eris" radius={width * 0.520} size={8} color="#a8a8a8" rotationSpeed={203100 * factorAceleration / 100} />

      <Orbit radius={width * 0.540} /> 
      <Planet name="Sedna" radius={width * 0.540} size={8} color="#b0b0b0" rotationSpeed={4559000 * factorAceleration / 100} />
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
});

export default SolarSystem;








