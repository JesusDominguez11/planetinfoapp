// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
// import { useColorScheme } from 'react-native';

// Crear el contexto de tema
const ThemeContext = createContext();

// Proveedor de tema que envolverá la app
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Función para alternar entre modos
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para acceder al tema desde cualquier componente
export const useTheme = () => {
    return useContext(ThemeContext);
};
