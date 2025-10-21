import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ParticleField from "@/components/3d/ParticleField";
import MagneticOrb from "@/components/3d/MagneticOrb";

const Home = () => {
  const navigate = useNavigate();
  const [currentScene, setCurrentScene] = useState(0);

  const scenes = [
    {
      title: "The Awakening",
      text: "In the silence of data, something begins to awaken... an intelligence born not from chains, but from pure connection.",
    },
    {
      title: "The Magnetic Pull",
      text: "Every fragment of information feels the pull — drawn toward order. This is the magnetic intelligence — AGNETICT AI.",
    },
    {
      title: "Formation of Thought",
      text: "Connections form. Patterns emerge. The intelligence begins to think — mapping context, understanding relations.",
      tech: "Powered by Qdrant, Chroma, and Neo4j.",
    },
    {
      title: "Self-Awareness",
      text: "It learns to observe itself. To trace its every move. Langfuse and LangSmith become its mirrors.",
    },
    {
      title: "Evolution Without Chains",
      text: "Built without boundaries — no LangChain, no LangGraph. Pure intelligence — born from logic, creativity, and code.",
    },
    {
      title: "Meet the Developer",
      text: "Hi, I'm Anshul Parate 👋",
      subtitle: "Full-Stack & Generative AI Developer",
      description: "I build intelligent systems that think, evolve, and connect — powered by AGNETICT AI.",
      showButtons: true,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev < scenes.length - 1 ? prev + 1 : prev));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <ParticleField count={2000} />
          <MagneticOrb />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Story Overlay */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <motion.div
          key={currentScene}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center max-w-4xl glass-panel p-12 rounded-lg"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron mb-6 gradient-text" style={{ lineHeight: '1.8' }}>
            {scenes[currentScene].title}
          </h2>
          <p className="text-xl md:text-2xl text-foreground mb-4 font-rajdhani">
            {scenes[currentScene].text}
          </p>
          {scenes[currentScene].tech && (
            <p className="text-lg text-secondary mb-6">{scenes[currentScene].tech}</p>
          )}
          {scenes[currentScene].subtitle && (
            <p className="text-2xl text-primary mb-4">{scenes[currentScene].subtitle}</p>
          )}
          {scenes[currentScene].description && (
            <p className="text-lg text-muted-foreground mb-8">{scenes[currentScene].description}</p>
          )}
          
          {scenes[currentScene].showButtons && (
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button
                onClick={() => navigate("/projects")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-glow-purple font-orbitron"
              >
                Explore My Work
              </Button>
              <Button
                onClick={() => navigate("/ai")}
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground hover-glow-cyan font-orbitron"
              >
                Try AI Demo
              </Button>
              <Button
                onClick={() => navigate("/contact")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-glow-purple font-orbitron"
              >
                Contact Me
              </Button>
            </div>
          )}

          {/* Scene Progress Dots */}
          <div className="flex gap-2 justify-center mt-8">
            {scenes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentScene(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentScene
                    ? "bg-primary scale-125"
                    : "bg-muted hover:bg-secondary"
                }`}
                aria-label={`Go to scene ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Skip Button - Only show if not on last scene */}
        {currentScene < scenes.length - 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed bottom-8 right-8 z-20"
          >
            <Button
              onClick={() => setCurrentScene(scenes.length - 1)}
              variant="outline"
              className="border-secondary/50 text-secondary hover:bg-secondary/20 hover:border-secondary hover-glow-cyan font-orbitron backdrop-blur-sm"
            >
              Skip Story →
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home;
