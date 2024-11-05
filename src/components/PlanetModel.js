import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber/native';
import { useGLTF } from '@react-three/drei/native';
import modelPath from '../models/saturn.gltf';
import { View } from 'react-native';

function Model(props) {

    const mesh = useRef();

    useFrame((state, delta) => (
        mesh.current.rotation.y += delta / 2
    ));

    const gltf = useGLTF(modelPath)
    return (
        <mesh
            ref={mesh}>
            <primitive {...props} object={gltf.scene} />
        </mesh>
    );
}

export default function PlanetModel() {
    return (
        <View style={{ width: '100%', height: '30%', alignSelf: 'center' }}>
        <Canvas>
            <ambientLight />
            <directionalLight position={[10,10,10]} intensity={2}/>
            <Suspense>
                <Model scale={1} rotation={[0.333333, 0, 0]}/>
            </Suspense>
        </Canvas>
        </View>
    )
}