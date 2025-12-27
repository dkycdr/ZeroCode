import React, { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrthographicCamera, Line, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const ElectricPulse = ({ path, color, delay = 0, size = 0.12 }) => {
    const meshRef = useRef();
    const curve = useMemo(() => new THREE.CatmullRomCurve3(path), [path]);
    const speed = 0.8 + Math.random() * 0.5; // High speed

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const t = ((time * speed + delay) % 1);
        const point = curve.getPoint(t);

        // Jitter for electric feel
        const jitter = new THREE.Vector3(
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 5,
            0
        );

        if (meshRef.current) {
            meshRef.current.position.copy(point).add(jitter);
            meshRef.current.scale.setScalar((1 + Math.random()) * size); // Flicker size
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[size, 4, 4]} /> {/* Low poly for jagged look */}
            <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
        </mesh>
    );
};

const Spark = ({ position, color }) => {
    const ref = useRef();
    const [velocity] = useState(() => new THREE.Vector3(
        (Math.random() - 0.5) * 20, // Explosive velocity
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
    ));

    useFrame((state, delta) => {
        if (!ref.current) return;
        ref.current.position.add(velocity.clone().multiplyScalar(delta));
        ref.current.material.opacity -= delta * 3; // Fade out fast
        ref.current.scale.subScalar(delta * 2);
        if (ref.current.material.opacity <= 0) {
            // Reset for loop effect or remove (simplified for now: just vanish)
            ref.current.visible = false;
        }
    });

    return (
        <mesh ref={ref} position={position} scale={[0.8, 0.8, 0.8]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="#ffff00" transparent opacity={1} />
        </mesh>
    );
};

const ConnectionLine = ({ from, to, active, type }) => {
    const { points } = useMemo(() => {
        const start = new THREE.Vector3(from.x, from.y, 0);
        const end = new THREE.Vector3(to.x, to.y, 0);

        const isHorizontal = type === 'horizontal';
        const dist = start.distanceTo(end);

        // Cable-Like Physics Logic
        const sag = isHorizontal ? -dist * 0.1 : 0;
        const tensionX = isHorizontal ? 0 : (from.x < to.x ? -dist * 0.15 : dist * 0.15);

        const mid1 = start.clone().lerp(end, 0.33).add(new THREE.Vector3(tensionX, sag, 0));
        const mid2 = start.clone().lerp(end, 0.66).add(new THREE.Vector3(tensionX, sag, 0));

        // Subtle noise
        mid1.add(new THREE.Vector3((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5, 0));
        mid2.add(new THREE.Vector3((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5, 0));

        const curve = new THREE.CatmullRomCurve3([start, mid1, mid2, end]);
        return { points: curve.getPoints(64) };
    }, [from, to, active, type]);

    const color = active ? "#22d3ee" : "#0c4a6e";
    const glowColor = active ? "#06b6d4" : "#083344";

    return (
        <group>
            {/* Soft Glow */}
            <Line
                points={points}
                color={glowColor}
                lineWidth={active ? 12 : 5}
                transparent
                opacity={active ? 0.3 : 0.1}
                blending={THREE.AdditiveBlending}
            />
            {/* Core Cable */}
            <Line
                points={points}
                color={color}
                lineWidth={active ? 2.5 : 1.5}
                transparent
                opacity={active ? 0.9 : 0.5}
            />
            {/* Electric Pulse Effect */}
            {active && (
                <>
                    <ElectricPulse path={points} color="#ffffff" delay={Math.random()} />
                    <ElectricPulse path={points} color="#06b6d4" delay={Math.random() + 0.5} />
                    {/* Sparks at endpoints */}
                    {[...Array(3)].map((_, i) => (
                        <Spark key={i} position={[to.x, to.y, 0]} color="#ffff00" />
                    ))}
                </>
            )}
        </group>
    );
};

const NeuralScene = ({ connections, containerWidth, containerHeight }) => {
    const groupRef = useRef();
    const { mouse } = useThree();

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, mouse.x * 10, 0.05);
            groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, mouse.y * 10, 0.05);
        }
    });

    const mappedConnections = useMemo(() => {
        if (!containerWidth || !containerHeight || !connections) return [];

        return connections.map(conn => ({
            from: {
                x: conn.from.x - containerWidth / 2,
                y: -(conn.from.y - containerHeight / 2)
            },
            to: {
                x: conn.to.x - containerWidth / 2,
                y: -(conn.to.y - containerHeight / 2)
            },
            active: conn.active,
            type: conn.type || 'synapse'
        }));
    }, [connections, containerWidth, containerHeight]);

    return (
        <>
            <OrthographicCamera
                makeDefault
                position={[0, 0, 100]}
                zoom={1}
                left={-containerWidth / 2}
                right={containerWidth / 2}
                top={containerHeight / 2}
                bottom={-containerHeight / 2}
                near={0.1}
                far={1000}
            />
            <ambientLight intensity={1} />

            <group ref={groupRef}>
                {mappedConnections.map((conn, i) => (
                    <ConnectionLine key={`${i}-${conn.active}-${conn.type}`} {...conn} />
                ))}
            </group>

            <Sparkles count={150} scale={[containerWidth, containerHeight, 10]} size={4} speed={0.2} opacity={0.2} color="#06b6d4" />
        </>
    );
};

export default function NeuralConnections3D({ connections }) {
    const parentRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    React.useEffect(() => {
        if (!parentRef.current) return;

        const update = () => {
            const rect = parentRef.current.getBoundingClientRect();
            setDimensions({ width: rect.width, height: rect.height });
        };

        const observer = new ResizeObserver(update);
        observer.observe(parentRef.current);
        update();

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={parentRef} className="absolute inset-0 pointer-events-none z-0" style={{ width: '100%', height: '100%' }}>
            {dimensions.width > 0 && dimensions.height > 0 && (
                <Canvas
                    alpha
                    dpr={[1, 2]}
                    gl={{ antialias: true, alpha: true, stencil: false, preserveDrawingBuffer: true }}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                >
                    <NeuralScene
                        connections={connections}
                        containerWidth={dimensions.width}
                        containerHeight={dimensions.height}
                    />
                </Canvas>
            )}
        </div>
    );
}
