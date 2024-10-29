import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// Componentes personalizados
import Background from '../../components/Background';
import ThemedButton from '../../components/Themed/ThemedButton';
import ThemedTextInput from '../../components/Themed/ThemedTextInput';
// Navegación
import { useNavigation } from '@react-navigation/native';
// Contexto de tema
import { useTheme } from '../../context/ThemeContext';
// Estilos
import { getThemeStyles } from '../../styles/themeStyles';

const LoginScreen = () => {
  const { isDarkMode } = useTheme();
  const styles = getThemeStyles(isDarkMode); 
  const navigation = useNavigation();

  return (
    <Background>
      <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#f0f0f0' }]}>
        <Text style={[styles.title, { color: isDarkMode ? '#ffffff' : '#333333' }]}>Iniciar sesión</Text>
        
        <ThemedTextInput placeholder="Usuario..." />
        <ThemedTextInput placeholder="Contraseña..." secureTextEntry />
        
        <ThemedButton title="Iniciar Sesión" onPress={() => alert('Sesión iniciada')} />
        <ThemedButton title="Entrar como invitado" onPress={() => navigation.navigate('HomeScreen')} />

        <Text style={[styles.footerText, { color: isDarkMode ? '#aaaaaa' : '#666666' }]}>
          ¿Olvidaste tu contraseña?
        </Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  footerText: {
    marginTop: 15,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
