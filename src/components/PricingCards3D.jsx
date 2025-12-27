import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function Card3D({ position, color, scale = 1, isPopular }) {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            // Gentle auto-rotation
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;

            // Floating animation
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.15;

            // Scale on hover
            const targetScale = hovered ? scale * 1.15 : scale;
            meshRef.current.scale.lerp(
                new THREE.Vector3(targetScale, targetScale, targetScale),
                0.1
            );
        }
    });

    return (
        <group position={position}>
            {/* Main card */}
            <mesh
                ref={meshRef}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                castShadow
                receiveShadow
            >
                <boxGeometry args={[2, 3, 0.2]} />
                <meshStandardMaterial
                    color={color}
                    metalness={0.8}
                    roughness={0.2}
                    emissive={color}
                    emissiveIntensity={hovered ? 0.4 : isPopular ? 0.3 : 0.1}
                />
            </mesh>

            {/* Glow background */}
            <mesh position={[0, 0, -0.15]}>
                <boxGeometry args={[2.2, 3.2, 0.1]} />
                <meshStandardMaterial
                    color={color}
                    transparent
                    opacity={hovered ? 0.5 : 0.2}
                    emissive={color}
                    emissiveIntensity={0.6}
                />
            </mesh>

            {/* Popular badge */}
            {isPopular && (
                <mesh position={[0, 1.7, 0.15]}>
                    <boxGeometry args={[1.2, 0.25, 0.1]} />
                    <meshStandardMaterial
                        color="#a855f7"
                        emissive="#a855f7"
                        emissiveIntensity={0.8}
                    />
                </mesh>
            )}

            {/* Decorative elements */}
            {[0.8, 0.3, -0.2, -0.7, -1.2].map((y, i) => (
                <mesh key={i} position={[-0.7, y, 0.15]}>
                    <sphereGeometry args={[0.04, 16, 16]} />
                    <meshStandardMaterial
                        color="#22c55e"
                        emissive="#22c55e"
                        emissiveIntensity={0.8}
                    />
                </mesh>
            ))}
        </group>
    );
}

function Scene() {
    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight
                position={[5, 5, 5]}
                intensity={1.5}
                castShadow
                color="#6366f1"
            />
            <pointLight position={[-5, 3, 2]} intensity={1} color="#a78bfa" />
            <pointLight position={[5, -3, -2]} intensity={0.8} color="#818cf8" />

            {/* Cards */}
            <Card3D
                position={[-3, 0, 0]}
                color="#1e3a8a"
                scale={0.95}
                isPopular={false}
            />
            <Card3D
                position={[0, 0, 0]}
                color="#6d28d9"
                scale={1.1}
                isPopular={true}
            />
            <Card3D
                position={[3, 0, 0]}
                color="#1e40af"
                scale={0.95}
                isPopular={false}
            />

            {/* Floor reflection */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial
                    color="#0a0a0a"
                    metalness={0.9}
                    roughness={0.1}
                    opacity={0.5}
                    transparent
                />
            </mesh>
        </>
    );
}

export default function PricingCards3D() {
    return (
        <div className="w-full h-[500px] bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent rounded-2xl overflow-hidden border border-indigo-500/20">
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 0, 9]} fov={50} />
                <OrbitControls
                    enableZoom={true}
                    enablePan={false}
                    minDistance={6}
                    maxDistance={12}
                    maxPolarAngle={Math.PI / 1.8}
                    minPolarAngle={Math.PI / 2.5}
                    autoRotate
                    autoRotateSpeed={1}
                />
                <Scene />
            </Canvas>
        </div>
    );
}
