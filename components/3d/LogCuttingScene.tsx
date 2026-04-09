'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function WoodenLog() {
  const logRef = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={logRef} position={[0, 0, 0]} rotation={[Math.PI / 2.5, 0, 0]} castShadow receiveShadow>
      <cylinderGeometry args={[1.5, 1.5, 4, 64, 32]} />
      <meshStandardMaterial
        color="#8B6F47"
        roughness={0.7}
        metalness={0.1}
      />
    </mesh>
  );
}

function CircularSaw() {
  const bladeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (bladeRef.current) {
      bladeRef.current.rotation.z += 0.3;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={bladeRef} position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[2, 2, 0.1, 64]} />
        <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} />
      </mesh>

      <group>
        {Array.from({ length: 48 }).map((_, i) => {
          const angle = (i / 48) * Math.PI * 2;
          const x = Math.cos(angle) * 2;
          const z = Math.sin(angle) * 2;
          return (
            <mesh key={i} position={[x, 0, z]} castShadow>
              <boxGeometry args={[0.15, 0.15, 0.2]} />
              <meshStandardMaterial color="#A9A9A9" metalness={0.9} roughness={0.1} />
            </mesh>
          );
        })}
      </group>

      <mesh position={[0, -2.5, 0]} castShadow>
        <boxGeometry args={[2, 1.5, 2]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.5} />
      </mesh>
    </group>
  );
}

function SawdustParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 200;

  useFrame(() => {
    if (particlesRef.current && particlesRef.current.geometry) {
      const positions = particlesRef.current.geometry.attributes.position as THREE.BufferAttribute;
      const positionArray = positions.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        positionArray[i * 3] += (Math.random() - 0.5) * 0.02;
        positionArray[i * 3 + 1] -= 0.02;
        positionArray[i * 3 + 2] += (Math.random() - 0.5) * 0.02;

        if (positionArray[i * 3 + 1] < -3) {
          positionArray[i * 3 + 1] = 2;
          positionArray[i * 3] = (Math.random() - 0.5) * 3;
          positionArray[i * 3 + 2] = (Math.random() - 0.5) * 3;
        }
      }

      positions.needsUpdate = true;
    }
  });

  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 3;
    positions[i * 3 + 1] = Math.random() * 2 - 1;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 3;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#D4A574" sizeAttenuation={true} />
    </points>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[4, 3, 5]} fov={50} />
      <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={true} enablePan={true} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
      <directionalLight position={[-5, 4, -5]} intensity={0.5} />
      <WoodenLog />
      <CircularSaw />
      <SawdustParticles />
      <gridHelper args={[8, 8]} />
    </>
  );
}

export function LogCuttingScene() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      <Canvas shadows dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
}
