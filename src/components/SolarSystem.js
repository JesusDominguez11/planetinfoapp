import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from 'react-native-reanimated';
import Mercury from './Mercury';  // Componente de Mercurio

const SolarSystem = () => {
  const sunScale = useSharedValue(1);
  const sunOpacity = useSharedValue(1);

  const sunStyle = useAnimatedStyle(() => ({
    transform: [{ scale: sunScale.value }],
    opacity: sunOpacity.value,
  }));

  React.useEffect(() => {
    sunScale.value = withRepeat(
      withTiming(1.2, { duration: 1500, easing: Easing.ease }),
      -1,
      true
    );
    sunOpacity.value = withRepeat(
      withTiming(0.8, { duration: 1500, easing: Easing.ease }),
      -1,
      true
    );
  }, []);

  return (
    <View style={styles.container}>
      {/* Añadimos la órbita de Mercurio */}
      <View style={styles.orbit} />
      
      {/* Sol animado */}
      <Animated.View style={[styles.sun, sunStyle]} />

      {/* Componente Mercurio */}
      <Mercury />
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
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'orange',
    shadowColor: 'yellow',
    shadowOpacity: 1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 },
    borderColor: 'red',
    borderWidth: 3,
  },
  orbit: {
    width: 200,  // El diámetro de la órbita de Mercurio
    height: 200,
    borderRadius: 100,  // Hace que sea un círculo perfecto
    borderWidth: 0.5,  // Grosor de la órbita (línea delgada)
    borderColor: 'gray',  // Color de la órbita
    position: 'absolute',  // Para superponer el círculo alrededor del sol
  },
});

export default SolarSystem;
