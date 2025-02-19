import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Float } from '@react-three/drei';
import { useMemo } from 'react';
import * as THREE from 'three';

function ParticleField() {
  const count = 2000;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#60A5FA"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

function FloatingSpheres() {
  return (
    <>
      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.8, 32, 32]} position={[-4, 2, -2]}>
          <meshStandardMaterial color="#60A5FA" wireframe transparent opacity={0.2} />
        </Sphere>
      </Float>
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
        <Sphere args={[1.2, 32, 32]} position={[4, -2, -3]}>
          <meshStandardMaterial color="#3B82F6" wireframe transparent opacity={0.2} />
        </Sphere>
      </Float>
      <Float speed={2.2} rotationIntensity={2} floatIntensity={1}>
        <Sphere args={[0.6, 32, 32]} position={[2, 3, -4]}>
          <meshStandardMaterial color="#2563EB" wireframe transparent opacity={0.2} />
        </Sphere>
      </Float>
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      className="absolute inset-0 -z-10"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <FloatingSpheres />
      <ParticleField />
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}