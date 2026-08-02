"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function CoreOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15;
      meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
      meshRef.current.scale.setScalar(1 + Math.sin(t * 1.2) * 0.03);
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = -t * 0.08;
      wireRef.current.rotation.z = t * 0.05;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.3, 4]} />
        <meshStandardMaterial
          color="#7C3AED"
          emissive="#38BDF8"
          emissiveIntensity={0.35}
          roughness={0.25}
          metalness={0.6}
          wireframe={false}
          transparent
          opacity={0.85}
        />
      </mesh>
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshBasicMaterial color="#06B6D4" wireframe transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

function OrbitingParticles() {
  const groupRef = useRef<THREE.Group>(null);
  const count = 60;

  const positions = useMemo(() => {
    const pts = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.4 + Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      pts[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pts[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pts[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pts;
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.035} color="#B5C2D8" transparent opacity={0.7} sizeAttenuation />
      </points>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#8B5CF6" />
      <pointLight position={[-4, -3, -2]} intensity={0.8} color="#06B6D4" />
      <CoreOrb />
      <OrbitingParticles />
    </Canvas>
  );
}
