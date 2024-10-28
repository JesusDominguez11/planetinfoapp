// themeStyles.js
import { StyleSheet } from 'react-native';

const commonStyles = {
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  normalText: {
    fontSize: 12,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  textInputContainer: {
    width: '90%',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  textInput: {
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },
};

const lightTheme = {
  ...commonStyles,
  container: {
    ...commonStyles.container,
    backgroundColor: '#F0F0F0',
  },
  title: {
    ...commonStyles.title,
    color: '#c2c0c0',
  },
  normalText: {
    ...commonStyles.normalText,
    color: '#333',
  },
  button: {
    ...commonStyles.button,
    backgroundColor: '#FFFFFF',
    borderColor: '#D3D3D3',
    borderWidth: 1,
  },
  buttonText: {
    ...commonStyles.buttonText,
    color: '#333',
  },
  textInputContainer: {
    ...commonStyles.textInputContainer,
    backgroundColor: '#e0e0e0',
  },
  textInput: {
    ...commonStyles.textInput,
    backgroundColor: '#fff',
    color: '#333',
    borderColor: '#ddd',
    borderWidth: 1,
  },

    // Estilos específicos para la navegación en modo claro
    tabBarBackgroundColor: '#f2f2f2',
    tabBarActiveTintColor: '#333333',
    tabBarInactiveTintColor: '#888888',
    tabBarIconShadowColor: '#333',
    headerBackgroundColor: '#f2f2f2',
    headerTintColor: '#333333',
};

const darkTheme = {
  ...commonStyles,
  container: {
    ...commonStyles.container,
    backgroundColor: '#1C1C1C',
  },
  title: {
    ...commonStyles.title,
    color: '#F0F0F0',
  },
  normalText: {
    ...commonStyles.normalText,
    color: '#F0F0F0',
  },
  button: {
    ...commonStyles.button,
    backgroundColor: '#333333',
    borderColor: '#444',
    borderWidth: 1,
  },
  buttonText: {
    ...commonStyles.buttonText,
    color: '#FFFFFF',
  },
  textInputContainer: {
    ...commonStyles.textInputContainer,
    backgroundColor: '#333333',
  },
  textInput: {
    ...commonStyles.textInput,
    backgroundColor: '#444',
    color: '#fff',
    borderColor: '#555',
    borderWidth: 1,
  },

    // Estilos específicos para la navegación en modo oscuro
    tabBarBackgroundColor: '#121212',
    tabBarActiveTintColor: '#FFFFFF',
    tabBarInactiveTintColor: '#888888',
    tabBarIconShadowColor: '#FFFFFF',
    headerBackgroundColor: '#121212',
    headerTintColor: '#FFFFFF',
};

export const getThemeStyles = (isDarkMode) => (isDarkMode ? darkTheme : lightTheme);
