import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber/native';
import { useGLTF, useProgress } from '@react-three/drei/native';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

function Model({ modelPath, scale, onLoaded, ...props }) {
    const mesh = useRef();
    const { scene } = useGLTF(modelPath, true);

    // Rotación continua en el eje Y
    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.y += delta / 10;
        }
    });

    // Llama a onLoaded cuando el modelo ha terminado de cargarse
    onLoaded();

    return (
        <primitive
            ref={mesh}
            object={scene}
            {...props}
            scale={scale}
            dispose={null}
        />
    );
}

export default function PlanetModel({ modelPath, scale }) {
    const { progress } = useProgress();
    const [isLoaded, setIsLoaded] = useState(false);

    const handleModelLoaded = () => {
        setIsLoaded(true);
    };

    // Verificamos si `modelPath` y `scale` están definidos
    if (!modelPath || !scale) {
        return (
            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholderText}>
                    Modelo o escala no definidos
                </Text>
            </View>
        );
    }

    return (
        <View style={{ width: '100%', height: '30%', alignSelf: 'center' }}>
            {!isLoaded && (
                <View style={styles.loaderContainer}>
                    <Text style={styles.loaderText}>Cargando: {Math.round(progress)}%</Text>
                    <ActivityIndicator size="large" color="#ffffff" />
                </View>
            )}
            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight position={[20, 10, 5]} intensity={4} />
                <Suspense fallback={null}>
                    <Model
                        modelPath={modelPath}
                        scale={scale}
                        position={[0, 0, 0]}
                        rotation={[0.3333, 0, 0.3333]}
                        onLoaded={handleModelLoaded}
                    />
                </Suspense>
            </Canvas>
        </View>
    );
}

const styles = StyleSheet.create({
    loaderContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    loaderText: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
    },
    placeholderContainer: {
        width: '100%',
        height: '30%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});
