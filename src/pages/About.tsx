import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { useRef, Suspense, lazy, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Lightweight sphere with reduced geometry
const FloatingSkill = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.008;
      meshRef.current.position.y = initialY + Math.sin(state.clock.getElapsedTime() + position[0]) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} />
    </mesh>
  );
};

// Lightweight loading fallback
const CanvasLoader = () => (
  <div className="w-full h-full flex items-center justify-center bg-background/50">
    <div className="text-primary animate-pulse font-playfair">Loading 3D...</div>
  </div>
);

const About = () => {
  const skills = [
    { name: "React", color: "#00FFFF", position: [-3, 2, 0] as [number, number, number] },
    { name: "FastAPI", color: "#8A2BE2", position: [3, 2, -2] as [number, number, number] },
    { name: "MongoDB", color: "#00FFFF", position: [0, -1, 2] as [number, number, number] },
    { name: "Qdrant", color: "#8A2BE2", position: [-3, -1, -1] as [number, number, number] },
    { name: "Chroma", color: "#00FFFF", position: [3, 0, 1] as [number, number, number] },
    { name: "Neo4j", color: "#8A2BE2", position: [0, 2, -2] as [number, number, number] },
    { name: "Langfuse", color: "#00FFFF", position: [-2, 0, 2] as [number, number, number] },
    { name: "LangSmith", color: "#8A2BE2", position: [2, -2, 0] as [number, number, number] },
    { name: "Unstructured.io", color: "#00FFFF", position: [-1, 1, -1] as [number, number, number] },
    { name: "n8n", color: "#8A2BE2", position: [1, 1, 2] as [number, number, number] },
    { name: "MCP Server", color: "#00FFFF", position: [-2, -2, -2] as [number, number, number] },
    { name: "Docker", color: "#8A2BE2", position: [2, 1, -1] as [number, number, number] },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-playfair mb-8 gradient-text">
            About Me
          </h1>
          
          <div className="glass-panel p-8 rounded-lg space-y-6 mb-16">
            <p className="text-xl text-foreground leading-relaxed">
              I'm <span className="text-primary font-bold">Anshul Parate</span>, a Full-Stack and Generative AI Developer 
              driven by deep technical curiosity and a passion for building intelligent systems from first principles.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in software development has led me to specialize in creating advanced generative AI systems 
              that don't rely on conventional frameworks. Instead, I build from the ground up, crafting solutions 
              that are both powerful and elegant.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise in <span className="text-secondary">React</span>, <span className="text-secondary">FastAPI</span>, 
              and modern databases like <span className="text-secondary">MongoDB</span>, <span className="text-secondary">Qdrant</span>, 
              <span className="text-secondary"> Chroma</span>, and <span className="text-secondary">Neo4j</span>, I create 
              full-stack applications that seamlessly integrate AI capabilities.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              What sets my work apart is the focus on <span className="text-primary font-bold">AGNETICT AI</span> — 
              magnetic, self-organizing intelligence that leverages vector databases and deep learning 
              to create systems that truly understand context and relationships.
            </p>

            <div className="pt-6 border-t border-border">
              <h3 className="text-2xl font-playfair text-primary mb-4">Philosophy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in building AI that thinks naturally, connects meaningfully, and evolves continuously. 
                My approach combines deep technical knowledge with creative problem-solving to deliver practical, 
                intelligent solutions that make a real impact.
              </p>
            </div>
          </div>

          {/* Skills Visualization Section */}
          <h2 className="text-4xl md:text-5xl font-playfair mb-12 gradient-text text-center" style={{ lineHeight: '1.8' }}>
            Skills & Technologies
          </h2>
          
          <p className="text-xl text-center text-muted-foreground mb-12">
            Explore my technical expertise through this interactive 3D visualization. 
            Each orb represents a technology I've mastered to build powerful AI-driven applications.
          </p>

          <div className="h-[600px] glass-panel rounded-lg overflow-hidden relative mb-12">
            <Suspense fallback={<CanvasLoader />}>
              <Canvas 
                camera={{ position: [0, 0, 8], fov: 75 }} 
                dpr={[1, 1.5]}
                performance={{ min: 0.5 }}
              >
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                {skills.map((skill, index) => (
                  <FloatingSkill
                    key={index}
                    position={skill.position}
                    color={skill.color}
                  />
                ))}
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
              </Canvas>
            </Suspense>
            
            {/* Skill Labels as HTML Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-8">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div
                        className="px-4 py-2 rounded-lg glass-panel font-playfair text-sm"
                        style={{ 
                          color: skill.color,
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

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-lg hover-glow-purple">
              <h3 className="text-2xl font-playfair text-primary mb-4">Frontend Excellence</h3>
              <p className="text-muted-foreground">
                Building responsive, performant interfaces with React, TypeScript, and modern web technologies. 
                Creating immersive 3D experiences with Three.js and React Three Fiber.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-lg hover-glow-cyan">
              <h3 className="text-2xl font-playfair text-secondary mb-4">Backend Mastery</h3>
              <p className="text-muted-foreground">
                Architecting scalable APIs with FastAPI, managing complex data with MongoDB, Qdrant, Chroma, 
                and Neo4j. Building graph-based AI systems and vector databases.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-lg hover-glow-cyan">
              <h3 className="text-2xl font-playfair text-secondary mb-4">Vector-Powered Intelligence</h3>
              <p className="text-muted-foreground">
                Building sophisticated AI systems using Qdrant and Chroma for semantic search, 
                contextual understanding, and intelligent data retrieval with high accuracy.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-lg hover-glow-purple">
              <h3 className="text-2xl font-playfair text-primary mb-4">Observability & Monitoring</h3>
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

export default About;
