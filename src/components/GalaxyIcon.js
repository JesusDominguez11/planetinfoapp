import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { withSpring, useSharedValue, useAnimatedStyle, withRepeat, withTiming, interpolateColor } from 'react-native-reanimated';

import Svg, { Path, Circle } from 'react-native-svg';

const GalaxyIcon = ({ focused }) => {
  const rotation = useSharedValue(0);
  const scale = useSharedValue(1);
  const color = useSharedValue(0);

  useEffect(() => {
    if (focused) {
      rotation.value = withRepeat(withTiming(360, { duration: 6000 }), -1, false);
      scale.value = withRepeat(withSpring(1.1, { damping: 2, stiffness: 100 }), -1, true);
      color.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true);
    } else {
      rotation.value = withTiming(0, { duration: 500 });
      scale.value = withTiming(1, { duration: 300 });
      color.value = withTiming(0, { duration: 500 });
    }
  }, [focused]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { rotate: `${rotation.value}deg` },
      { scale: scale.value },
    ],
  }));

  const spiralColor = interpolateColor(color.value, [0, 1], ['#800080', '#FF00FF']); // Cambiar el color de las espirales

  return (
    <Animated.View style={[{ width: 50, height: 50 }, animatedStyle]}>
      <Svg width="50" height="50" viewBox="0 0 50 50">
        {/* Background spiral arms */}
        <Path
          d="M25 5 C15 10, 10 20, 20 30 S35 40, 45 25"
          stroke={spiralColor}
          strokeWidth="2"
          fill="none"
        />
        <Path
          d="M25 5 C35 10, 40 20, 30 30 S15 40, 5 25"
          stroke={spiralColor}
          strokeWidth="2"
          fill="none"
        />

        {/* Inner spiral rings */}
        <Circle cx="25" cy="25" r="2" fill="#FFD700" />
        <Circle cx="25" cy="25" r="6" stroke="#FFD700" strokeWidth="1.5" fill="none" />
        <Circle cx="25" cy="25" r="10" stroke="#FFD700" strokeWidth="1.5" fill="none" />
        <Circle cx="25" cy="25" r="14" stroke="#FFD700" strokeWidth="1.5" fill="none" />

        {/* Outer spiral points */}
        <Circle cx="10" cy="15" r="1.5" fill="#FFD700" />
        <Circle cx="20" cy="40" r="1.5" fill="#FFD700" />
        <Circle cx="35" cy="10" r="1.5" fill="#FFD700" />
        <Circle cx="40" cy="35" r="1.5" fill="#FFD700" />
      </Svg>
    </Animated.View>
  );
};

export default GalaxyIcon;
