import { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import ThemedButton from './Themed/ThemedButton';

//context
import { useTheme } from '../context/ThemeContext';
//styles
import { getThemeStyles } from '../styles/themeStyles';

export default function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const styles = getThemeStyles(isDarkMode); 
  
  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../../sounstrack/dream.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View>
      <ThemedButton title="Play Sound" onPress={playSound} />
    </View>
  );
}