import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
// Componentes personalizados
import Background from '../../components/Background';
import ThemedTextInput from '../../components/Themed/ThemedTextInput';
import ThemedButton from '../../components/Themed/ThemedButton';

const SigninScreen = () => {
  const { colors, dark } = useTheme();
  
  return (
    <Background>
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.title, { color: colors.text }]}>Crear una Cuenta</Text>
        
        <ThemedTextInput placeholder="Nombre de usuario" />
        <ThemedTextInput placeholder="Correo electrónico" keyboardType="email-address" />
        <ThemedTextInput placeholder="Contraseña" secureTextEntry />
        
        <ThemedButton title="Registrarse" onPress={() => alert('Registro exitoso')} />
        
        <Text style={[styles.footerText, { color: colors.text }]}>¿Ya tienes una cuenta? Inicia sesión</Text>
      </SafeAreaView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
  },
});

export default SigninScreen;
