import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FloatingSkill = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = initialY + Math.sin(state.clock.getElapsedTime() + position[0]) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      <pointLight position={[0, 0, 0]} intensity={1} color={color} distance={3} />
    </mesh>
  );
};

const Skills = () => {
  const skills = [
    { name: "React", color: "#00FFFF", position: [-3, 2, 0] as [number, number, number] },
    { name: "FastAPI", color: "#8A2BE2", position: [3, 2, -2] as [number, number, number] },
    { name: "MongoDB", color: "#00FFFF", position: [0, -1, 2] as [number, number, number] },
    { name: "Qdrant", color: "#8A2BE2", position: [-3, -1, -1] as [number, number, number] },
    { name: "Chroma", color: "#00FFFF", position: [3, 0, 1] as [number, number, number] },
    { name: "Neo4j", color: "#8A2BE2", position: [0, 2, -2] as [number, number, number] },
    { name: "Langfuse", color: "#00FFFF", position: [-2, 0, 2] as [number, number, number] },
    { name: "LangSmith", color: "#8A2BE2", position: [2, -2, 0] as [number, number, number] },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-7xl font-orbitron mb-8 text-center gradient-text">
            Skills & Technologies
          </h1>
          
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Explore my technical expertise through this interactive 3D visualization. 
            Each orb represents a technology I've mastered to build powerful AI-driven applications.
          </p>

          <div className="h-[600px] glass-panel rounded-lg overflow-hidden relative">
            <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
              <ambientLight intensity={0.3} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              {skills.map((skill, index) => (
                <FloatingSkill
                  key={index}
                  position={skill.position}
                  color={skill.color}
                />
              ))}
              <OrbitControls enableZoom autoRotate autoRotateSpeed={1} />
            </Canvas>
            
            {/* Skill Labels as HTML Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div
                        className="px-4 py-2 rounded-lg glass-panel font-orbitron text-sm"
                        style={{ 
                          color: skill.color,
                          textShadow: `0 0 10px ${skill.color}`,
                        }}
                      >
                        {skill.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="glass-panel p-6 rounded-lg hover-glow-purple">
              <h3 className="text-2xl font-orbitron text-primary mb-4">Frontend Excellence</h3>
              <p className="text-muted-foreground">
                Building responsive, performant interfaces with React, TypeScript, and modern web technologies. 
                Creating immersive 3D experiences with Three.js and React Three Fiber.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-lg hover-glow-cyan">
              <h3 className="text-2xl font-orbitron text-secondary mb-4">Backend Mastery</h3>
              <p className="text-muted-foreground">
                Architecting scalable APIs with FastAPI, managing complex data with MongoDB, Qdrant, Chroma, 
                and Neo4j. Building graph-based AI systems and vector databases.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-lg hover-glow-cyan">
              <h3 className="text-2xl font-orbitron text-secondary mb-4">AI Without Frameworks</h3>
              <p className="text-muted-foreground">
                Creating advanced generative AI systems from first principles, without relying on LangChain 
                or LangGraph. Pure, efficient, and customizable intelligence.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-lg hover-glow-purple">
              <h3 className="text-2xl font-orbitron text-primary mb-4">Observability & Monitoring</h3>
              <p className="text-muted-foreground">
                Implementing comprehensive AI system monitoring with Langfuse and LangSmith. 
                Tracking, analyzing, and optimizing AI performance in production.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
