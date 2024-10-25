// import React from 'react';
// import { View, StyleSheet, Dimensions } from 'react-native';
// import Animated from 'react-native-reanimated';

// //components
// import Planet from './Planet';

// const { width } = Dimensions.get('window'); // Obtener el ancho de la pantalla

// const SolarSystem = () => {
//   return (
//     <View style={styles.container}>
//       {/* Órbitas para cada planeta */}
//       {/* <View style={[styles.orbit, { width: width * 0.2, height: width * 0.2, borderRadius: width * 0.1 }]} />  
//       <View style={[styles.orbit, { width: width * 0.25, height: width * 0.25, borderRadius: width * 0.125 }]} />  
//       <View style={[styles.orbit, { width: width * 0.3, height: width * 0.3, borderRadius: width * 0.15 }]} />  
//       <View style={[styles.orbit, { width: width * 0.35, height: width * 0.35, borderRadius: width * 0.175 }]} />  
//       <View style={[styles.orbit, { width: width * 0.4, height: width * 0.4, borderRadius: width * 0.2 }]} />  
//       <View style={[styles.orbit, { width: width * 0.45, height: width * 0.45, borderRadius: width * 0.225 }]} />  
//       <View style={[styles.orbit, { width: width * 0.5, height: width * 0.5, borderRadius: width * 0.25 }]} />  
//       <View style={[styles.orbit, { width: width * 0.55, height: width * 0.55, borderRadius: width * 0.275 }]} />  
//       <View style={[styles.orbit, { width: width * 0.6, height: width * 0.6, borderRadius: width * 0.3 }]} />  
//       <View style={[styles.orbit, { width: width * 0.65, height: width * 0.65, borderRadius: width * 0.325 }]} />  
//       <View style={[styles.orbit, { width: width * 0.7, height: width * 0.7, borderRadius: width * 0.35 }]} />  
//       <View style={[styles.orbit, { width: width * 0.75, height: width * 0.75, borderRadius: width * 0.375 }]} />  
//       <View style={[styles.orbit, { width: width * 0.8, height: width * 0.8, borderRadius: width * 0.4 }]} />   */}

//       {/* Sol */}
//       <Animated.View style={styles.sun} />

//       {/* Planetas internos */}
//       <Planet name="Mercurio" radius={width * 0.1} size={15} color="gray" rotationSpeed={4000} />
//       <Planet name="Venus" radius={width * 0.125} size={20} color="#e1ad01" rotationSpeed={6000} />
//       <Planet name="Tierra" radius={width * 0.15} size={25} color="#3b82f6" rotationSpeed={7000} />
//       <Planet name="Marte" radius={width * 0.175} size={20} color="#d14c32" rotationSpeed={8000} />
      
//       {/* Planetas externos */}
//       <Planet 
//         name="Júpiter" 
//         radius={width * 0.225} 
//         size={40} 
//         color="#d1a760" 
//         rotationSpeed={10000} 
//         hasRings={true} 
//       />
//       <Planet 
//         name="Saturno" 
//         radius={width * 0.275} 
//         size={35} 
//         color="#f4c542" 
//         rotationSpeed={12000} 
//         hasRings={true} 
//       />
//       <Planet 
//         name="Urano" 
//         radius={width * 0.325} 
//         size={30} 
//         color="#5f9cf5" 
//         rotationSpeed={14000} 
//         hasRings={true} 
//       />
//       <Planet 
//         name="Neptuno" 
//         radius={width * 0.375} 
//         size={30} 
//         color="#4b7fff" 
//         rotationSpeed={16000} 
//       />
//       <Planet 
//         name="Plutón" 
//         radius={width * 0.425} 
//         size={15} 
//         color="#c0c0c0" 
//         rotationSpeed={18000} 
//       />
//       <Planet 
//         name="Eris" 
//         radius={width * 0.475} 
//         size={20} 
//         color="#a8a8a8" 
//         rotationSpeed={20000} 
//       />
//       <Planet 
//         name="Sedna" 
//         radius={width * 0.525} 
//         size={25} 
//         color="#b0b0b0" 
//         rotationSpeed={22000} 
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black',
//   },
//   sun: {
//     position: 'absolute',
//     width: 30, // Reducido para dar más espacio
//     height: 30,
//     borderRadius: 25,
//     backgroundColor: 'orange',
//     shadowColor: 'yellow',
//     shadowOpacity: 1,
//     shadowRadius: 20,
//     shadowOffset: { width: 0, height: 0 },
//     borderColor: 'red',
//     borderWidth: 2,
//   },
//   orbit: {
//     position: 'absolute',
//     borderWidth: 0.5,
//     borderColor: 'gray',
//   },
// });

// export default SolarSystem;








import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';

//components
import Planet from './Planet';

const { width } = Dimensions.get('window'); // Obtener el ancho de la pantalla

const SolarSystem = () => {
  const factorAceleration = 30;

// Jupiter (69.911 km de radio) – 1.120% el tamaño de la Tierra.
// Saturno (58.232 km de radio) – 945% el tamaño de la Tierra.
// Urano (25.362 km de radio) - 400% el tamaño de la Tierra.
// Neptuno (24.622 km de radio) – 388% el tamaño de la Tierra.
// Tierra (6,371 km de radio).
// Venus (6,052 km de radio) – 95% el tamaño de la Tierra.
// Marte (3,390 km de radio) – 53% el tamaño de la Tierra.
// Mercurio (2,440 km de radio) – 38% el tamaño de la Tierra.

  return (
    <View style={styles.container}>
      {/* Sol */}
      <Animated.View style={styles.sun} />

      {/* Planetas internos */}
      {/* rotationSpeed={88 * factorAceleration} */}
      <Planet name="Mercurio" radius={width * 0.08} size={12} color="gray" rotationSpeed={88 * factorAceleration} /> 
      <Planet name="Venus" radius={width * 0.12} size={16} color="#e1ad01" rotationSpeed={225 * factorAceleration} /> 
      <Planet name="Tierra" radius={width * 0.165} size={16} color="#3b82f6" rotationSpeed={365.25 * factorAceleration} /> 
      <Planet name="Marte" radius={width * 0.205} size={12} color="#d14c32" rotationSpeed={687 * factorAceleration} /> 

      {/* Planetas externos */}
      <Planet 
        name="Júpiter" 
        radius={width * 0.260} 
        size={28} 
        color="#d1a760" 
        rotationSpeed={(4333 * factorAceleration) / 20} 
        hasRings={true} 
      />
      <Planet 
        name="Saturno" 
        radius={width * 0.335} 
        size={28} 
        color="#f4c542" 
        rotationSpeed={(10759 * factorAceleration) / 20} 
        hasRings={true} 
      />
      <Planet 
        name="Urano" 
        radius={width * 0.400} 
        size={20} 
        color="#5f9cf5" 
        rotationSpeed={(30687 * factorAceleration) / 20} 
        hasRings={true} 
      />
      <Planet 
        name="Neptuno" 
        radius={width * 0.450} 
        size={20} 
        color="#4b7fff" 
        rotationSpeed={(60190 * factorAceleration) / 20} 
      />
      <Planet 
        name="Plutón" 
        radius={width * 0.490} 
        size={8} 
        color="#c0c0c0" 
        rotationSpeed={(90520 * factorAceleration) / 100} 
      />
      <Planet 
        name="Eris" 
        radius={width * 0.520} 
        size={8} 
        color="#a8a8a8" 
        rotationSpeed={55800 * factorAceleration / 100} 
      />
      <Planet 
        name="Sedna" 
        radius={width * 0.540} 
        size={8} 
        color="#b0b0b0" 
        rotationSpeed={117500 * factorAceleration / 100} 
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
});

export default SolarSystem;








