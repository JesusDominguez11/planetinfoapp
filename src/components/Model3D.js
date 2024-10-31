import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { View, StyleSheet } from 'react-native';

const RotatingCube = () => {
  const meshRef = React.useRef();

  // Rotar el cubo en cada frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02; // Rotación en el eje Y
      meshRef.current.rotation.x += 0.01; // Rotación en el eje X
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} /> {/* Tamaño del cubo */}
      <meshStandardMaterial 
        color="#3498db" 
        metalness={1} 
        roughness={0.4} 
      />
      {/* Material con metalness y roughness para reflejar la luz */}
    </mesh>
  );
};

const Model3D = () => {
  return (
    <View style={styles.canvasContainer}>
      <Canvas>
        <ambientLight intensity={1.0} /> {/* Luz ambiental */}
        <directionalLight position={[0, 0, 5]} intensity={1} color="white" />
        <directionalLight position={[-5, 5, 0]} intensity={0.5} color="yellow" />
        <RotatingCube /> {/* Aquí se usa el componente del cubo rotativo */}
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  canvasContainer: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: 120,
    alignSelf: 'center',
  },
});

export default Model3D;
