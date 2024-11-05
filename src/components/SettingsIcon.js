import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';
import Svg, { G, Circle, Path } from 'react-native-svg';

const SettingsIcon = ({ focused }) => {
  const rotationBig = useSharedValue(0);
  const rotationSmall = useSharedValue(0);

  useEffect(() => {
    if (focused) {
      // Rota los engranajes en direcciones opuestas
      rotationBig.value = withRepeat(withTiming(360, { duration: 5000 }), -1, true);
      rotationSmall.value = withRepeat(withTiming(-360, { duration: 5000 }), -1, true);
    } else {
      rotationBig.value = withTiming(0, { duration: 500 });
      rotationSmall.value = withTiming(0, { duration: 500 });
    }
  }, [focused]);

  const animatedStyleBig = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationBig.value}deg` }],
  }));

  const animatedStyleSmall = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationSmall.value}deg` }],
  }));

  return (
    <View style={{ width: 50, height: 50, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View style={[{ position: 'absolute', width: 50, height: 50 }, animatedStyleBig]}>
        <Svg width="50" height="50" viewBox="0 0 50 50">
          <G fill="#800080">
            {/* Dientes del engranaje grande */}
            <Path d="M25 12 L27 15 L35 15 L37 12 L40 17 L37 20 L37 28 L40 32 L35 35 L27 35 L25 38 L23 35 L15 35 L12 32 L15 28 L15 20 L12 17 L15 12 L23 15 Z" />
          </G>
          <Circle cx="25" cy="25" r="5" fill="#FFD700" />
        </Svg>
      </Animated.View>

      <Animated.View style={[{ position: 'absolute', width: 30, height: 30 }, animatedStyleSmall]}>
        <Svg width="30" height="30" viewBox="0 0 30 30">
          <G fill="#4B0082">
            {/* Dientes del engranaje pequeño */}
            <Path d="M15 5 L16 7 L22 7 L23 5 L25 8 L23 10 L23 15 L25 18 L22 20 L16 20 L15 22 L14 20 L8 20 L5 18 L8 15 L8 10 L5 8 L8 5 L14 7 Z" />
          </G>
          <Circle cx="15" cy="15" r="3" fill="#FFD700" />
        </Svg>
      </Animated.View>
    </View>
  );
};

export default SettingsIcon;
