import React, { useEffect } from 'react';
import { StyleSheet, Alert, TouchableWithoutFeedback } from 'react-native';
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

  // Animación continua para la rotación sin "saltos"
  useEffect(() => {
    angle.value = withRepeat(
      withTiming(angle.value + Math.PI * 2, { duration: 4000, easing: Easing.linear }),
      -1,
      false  // Sin revertir la animación, aumentando el ángulo continuamente
    );
  }, []);

  // Función que se activa al hacer clic en Mercurio
  const handleMercuryPress = () => {
    Alert.alert("¡Mercurio!", "Has tocado Mercurio.");
  };

  return (
    <TouchableWithoutFeedback onPress={handleMercuryPress}>
      <Animated.View style={[styles.mercury, mercuryStyle]} />
    </TouchableWithoutFeedback>
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
