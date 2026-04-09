'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface MachineSceneProps {
  machineType: 'bandsaw' | 'circularsaw' | 'planer' | 'thicknessplaner' | 'tablesaw' | 'sanding';
}

function BandSawMachine() {
  const bladeRef = useRef<THREE.Mesh>(null);
  const wheelTopRef = useRef<THREE.Mesh>(null);
  const wheelBottomRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (bladeRef.current && wheelTopRef.current && wheelBottomRef.current) {
      wheelTopRef.current.rotation.x += 0.05;
      wheelBottomRef.current.rotation.x += 0.05;
    }
  });

  return (
    <group>
      {/* Main frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.2, 2.5, 0.8]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Top wheel */}
      <mesh ref={wheelTopRef} position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#3a3a3a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Bottom wheel */}
      <mesh ref={wheelBottomRef} position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#3a3a3a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Blade guard */}
      <mesh position={[0, 0, -0.45]}>
        <boxGeometry args={[0.15, 1.5, 0.1]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Cutting table */}
      <mesh position={[0, -1.5, 0.6]}>
        <boxGeometry args={[1.3, 0.1, 1]} />
        <meshStandardMaterial color="#5a5a5a" metalness={0.5} roughness={0.6} />
      </mesh>
    </group>
  );
}

function CircularSawMachine() {
  const bladeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (bladeRef.current) {
      bladeRef.current.rotation.y += 0.08;
    }
  });

  return (
    <group>
      {/* Base platform */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[1.5, 0.2, 1.5]} />
        <meshStandardMaterial color="#3a3a3a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Blade housing */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.6, 32]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Cutting blade */}
      <mesh ref={bladeRef} position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.1, 64]} />
        <meshStandardMaterial color="#C0C0C0" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Fence/guide */}
      <mesh position={[0.8, 0, 0]}>
        <boxGeometry args={[0.1, 1.2, 1.5]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Motor housing */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[0.6, 0.8, 0.6]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.5} />
      </mesh>
    </group>
  );
}

function WoodPlanerMachine() {
  const rollerRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (rollerRef.current) {
      rollerRef.current.rotation.z += 0.1;
    }
  });

  return (
    <group>
      {/* Main body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.2, 1]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Feed roller */}
      <mesh ref={rollerRef} position={[-0.5, 0.3, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 1.8, 32]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Cutterhead */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 1.8, 32]} />
        <meshStandardMaterial color="#A9A9A9" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Pressure roller */}
      <mesh position={[0.5, 0.3, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 1.8, 32]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Support legs */}
      {[-0.8, 0.8].map((x, i) => (
        <mesh key={i} position={[x, -0.6, 0]}>
          <boxGeometry args={[0.3, 1.2, 0.3]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function ThicknessPlanerMachine() {
  const topRollerRef = useRef<THREE.Mesh>(null);
  const bottomRollerRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (topRollerRef.current && bottomRollerRef.current) {
      topRollerRef.current.rotation.z += 0.08;
      bottomRollerRef.current.rotation.z -= 0.08;
    }
  });

  return (
    <group>
      {/* Main frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.8, 1.4, 1.2]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Top feed roller */}
      <mesh ref={topRollerRef} position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 1.6, 32]} />
        <meshStandardMaterial color="#5a5a5a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Bottom support roller */}
      <mesh ref={bottomRollerRef} position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 1.6, 32]} />
        <meshStandardMaterial color="#5a5a5a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Thickness adjustment dial */}
      <mesh position={[0.9, 0, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 0.1, 32]} />
        <meshStandardMaterial color="#A9A9A9" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Feed table */}
      <mesh position={[0, -0.7, 0]}>
        <boxGeometry args={[1.9, 0.15, 1.3]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.6} roughness={0.4} />
      </mesh>
    </group>
  );
}

function TableSawMachine() {
  const bladeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (bladeRef.current) {
      bladeRef.current.rotation.x += 0.1;
    }
  });

  return (
    <group>
      {/* Base cabinet */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[2, 0.8, 2]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Work table */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[2.2, 0.08, 2.2]} />
        <meshStandardMaterial color="#5a5a5a" metalness={0.5} roughness={0.6} />
      </mesh>

      {/* Blade */}
      <mesh ref={bladeRef} position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.08, 64]} />
        <meshStandardMaterial color="#C0C0C0" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Blade guard */}
      <mesh position={[0, 0.9, 0]}>
        <boxGeometry args={[0.15, 0.8, 0.6]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Fence */}
      <mesh position={[1, 0.4, 0]}>
        <boxGeometry args={[0.08, 0.8, 2.3]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Height adjustment wheel */}
      <mesh position={[-0.8, -0.4, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
        <meshStandardMaterial color="#A9A9A9" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

function SandingMachineMachine() {
  const sandingWheelRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (sandingWheelRef.current) {
      sandingWheelRef.current.rotation.y += 0.12;
    }
  });

  return (
    <group>
      {/* Main frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 2, 1]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Sanding wheel */}
      <mesh ref={sandingWheelRef} position={[0.5, 0.8, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
        <meshStandardMaterial color="#9a7a4a" metalness={0.4} roughness={0.7} />
      </mesh>

      {/* Wheel mounting */}
      <mesh position={[0.5, 0.8, 0]}>
        <cylinderGeometry args={[0.58, 0.58, 0.5, 32]} />
        <meshStandardMaterial color="#3a3a3a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Work support table */}
      <mesh position={[-0.3, -0.5, 0]}>
        <boxGeometry args={[0.8, 0.1, 1]} />
        <meshStandardMaterial color="#5a5a5a" metalness={0.5} roughness={0.6} />
      </mesh>

      {/* Motor housing */}
      <mesh position={[0.5, 1.5, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.6, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.5} />
      </mesh>

      {/* Support post */}
      <mesh position={[0.5, 0, 0]}>
        <boxGeometry args={[0.2, 1.5, 0.2]} />
        <meshStandardMaterial color="#3a3a3a" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  );
}

function MachineScene({ machineType }: MachineSceneProps) {
  const [hovering, setHovering] = useState(false);

  const renderMachine = () => {
    switch (machineType) {
      case 'bandsaw':
        return <BandSawMachine />;
      case 'circularsaw':
        return <CircularSawMachine />;
      case 'planer':
        return <WoodPlanerMachine />;
      case 'thicknessplaner':
        return <ThicknessPlanerMachine />;
      case 'tablesaw':
        return <TableSawMachine />;
      case 'sanding':
        return <SandingMachineMachine />;
      default:
        return null;
    }
  };

  return (
    <>
      <PerspectiveCamera makeDefault position={[2.5, 1.5, 2.5]} fov={50} />
      <OrbitControls
        autoRotate={!hovering}
        autoRotateSpeed={3}
        enableZoom={false}
        enablePan={false}
      />

      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, 3, -5]} intensity={0.4} />

      {renderMachine()}

      <gridHelper args={[6, 6]} position={[0, -1.2, 0]} />
    </>
  );
}

interface MachineCardProps {
  title: string;
  description: string;
  machineType: 'bandsaw' | 'circularsaw' | 'planer' | 'thicknessplaner' | 'tablesaw' | 'sanding';
}

export function MachineCard({ title, description, machineType }: MachineCardProps) {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="w-full h-64 bg-gradient-to-b from-gray-100 to-gray-50">
        <Canvas>
          <MachineScene machineType={machineType} />
        </Canvas>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function MachinesGrid() {
  const machines: MachineCardProps[] = [
    {
      title: 'Band Saw Machine',
      description: 'Vertical blade cutting with smooth, efficient operation for precision cuts.',
      machineType: 'bandsaw',
    },
    {
      title: 'Circular Saw Machine',
      description: 'High-speed spinning blade for fast, clean cuts through timber.',
      machineType: 'circularsaw',
    },
    {
      title: 'Wood Planer',
      description: 'Precision surface flattening and thickness adjustment.',
      machineType: 'planer',
    },
    {
      title: 'Thickness Planer',
      description: 'Industrial-grade planer with dual roller feed system.',
      machineType: 'thicknessplaner',
    },
    {
      title: 'Table Saw',
      description: 'Horizontal cutting blade with adjustable fence and blade height.',
      machineType: 'tablesaw',
    },
    {
      title: 'Sanding Machine',
      description: 'High-speed rotating sanding wheel for fine surface finishing.',
      machineType: 'sanding',
    },
  ];

  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2 text-primary">
          Industrial Woodworking Machines
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Professional-grade equipment built for precision and durability
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {machines.map((machine) => (
            <MachineCard
              key={machine.machineType}
              title={machine.title}
              description={machine.description}
              machineType={machine.machineType}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
