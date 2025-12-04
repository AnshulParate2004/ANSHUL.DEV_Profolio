import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

const MagneticOrb = () => {
  const orbRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.y += 0.01;
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
      orbRef.current.scale.set(scale, scale, scale);
    }
    if (glowRef.current) {
      const glowScale = 1.3 + Math.sin(state.clock.getElapsedTime() * 1.5) * 0.2;
      glowRef.current.scale.set(glowScale, glowScale, glowScale);
    }
  });

  return (
    <group>
      {/* Outer glow */}
      <Sphere ref={glowRef} args={[2, 32, 32]}>
        <meshBasicMaterial color="#8A2BE2" transparent opacity={0.2} />
      </Sphere>
      
      {/* Main orb */}
      <Sphere ref={orbRef} args={[1.5, 64, 64]}>
        <meshStandardMaterial
          color="#00FFFF"
          emissive="#8A2BE2"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
      
      {/* Point light */}
      <pointLight position={[0, 0, 0]} intensity={2} color="#00FFFF" distance={10} />
    </group>
  );
};

export default MagneticOrb;
