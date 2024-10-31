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
      <boxGeometry args={[3, 3, 3]} /> {/* Tamaño del cubo */}
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
      <View style={[ { width:'80%', height:'30%', alignSelf:'center' }]}>
        <Canvas>
          <ambientLight intensity={1.0} /> {/* Luz ambiental */}
          <directionalLight position={[0, 0, 5]} intensity={1} color="white" />
          <directionalLight position={[-5, 5, 0]} intensity={0.5} color="yellow" />
          <RotatingCube /> {/* Aquí se usa el componente del cubo rotativo */}
        </Canvas>
      </View>
  );
};

export default Model3D;
