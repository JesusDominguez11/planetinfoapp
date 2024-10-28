// SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
//context
import { useTheme } from '../../context/ThemeContext';
//styles
import { getThemeStyles } from '../../styles/themeStyles';

const SettingsScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const styles = getThemeStyles(isDarkMode); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajustes</Text>
      <View>
        <Text style={styles.normalText}>{isDarkMode ? 'Modo Oscuro' : 'Modo Claro'}</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          thumbColor={isDarkMode ? '#fff' : '#121212'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;