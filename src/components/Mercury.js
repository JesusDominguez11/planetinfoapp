import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from 'react-native-reanimated';

const Mercury = () => {
  const angle = useSharedValue(0);  // Controla el ángulo de rotación

  // Animación de rotación alrededor del Sol
  const mercuryStyle = useAnimatedStyle(() => {
    const radius = 100;  // Radio de la órbita de Mercurio
    const x = Math.cos(angle.value) * radius;
    const y = Math.sin(angle.value) * radius;

    return {
      transform: [
        { translateX: x }, 
        { translateY: y }
      ],
    };
  });

  // Repetimos la rotación indefinidamente
  useEffect(() => {
    angle.value = withRepeat(
      withTiming(Math.PI * 2, { duration: 4000, easing: Easing.linear }),  // Un giro completo en 4 segundos
      -1  // Repetición infinita
    );
  }, []);

  return (
    <Animated.View style={[styles.mercury, mercuryStyle]} />
  );
};

const styles = StyleSheet.create({
  mercury: {
    width: 20,  // Tamaño de Mercurio
    height: 20,
    borderRadius: 10,  // Círculo perfecto
    backgroundColor: 'gray',  // Color grisáceo para Mercurio
    position: 'absolute',  // Para que se posicione en la órbita
  },
});

export default Mercury;
