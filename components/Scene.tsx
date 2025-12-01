'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import Building from './Building';
import { FloorData } from '@/lib/data';

interface SceneProps {
    onFloorClick: (floor: FloorData) => void;
}

export default function Scene({ onFloorClick }: SceneProps) {
    return (
        <div className="w-full h-screen bg-gray-50">
            <Canvas camera={{ position: [10, 10, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
                <Environment preset="city" />

                <group position={[0, -1, 0]}>
                    <Building onFloorClick={onFloorClick} />
                    <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={20} blur={2} far={4.5} />
                </group>

                <OrbitControls
                    autoRotate
                    autoRotateSpeed={0.5}
                    enablePan={false}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 2}
                />
            </Canvas>
        </div>
    );
}
