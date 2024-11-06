import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber/native';
import { useGLTF } from '@react-three/drei/native';
import { View } from 'react-native';

function Model({ modelPath, scale, ...props }) {
    const mesh = useRef();
    const { scene } = useGLTF(modelPath);

    // Rotación continua en el eje Y
    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.y += delta / 10;
        }
    });

    return (
        <primitive
            ref={mesh}
            object={scene}
            {...props}
            scale={scale} // Aplicamos la escala recibida como prop
            dispose={null} // Evita la limpieza automática
        />
    );
}

export default function PlanetModel({ modelPath, scale }) {
    return (
        <View style={{ width: '100%', height: '30%', alignSelf: 'center' }}>
            <Canvas>
                <ambientLight intensity={0.1} /> {/* Luz ambiental */}
                <directionalLight position={[20, 10, 5]} intensity={4} /> {/* Luz direccional */}
                <Suspense fallback={null}>
                    <Model modelPath={modelPath} scale={scale} position={[0, 0, 0]} rotation={[0.3333, 0, 0.3333]} />
                </Suspense>
            </Canvas>
        </View>
    );
}
