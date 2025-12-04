import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Play, ArrowRight, Sparkles, Code2, Brain } from "lucide-react";
import Navigation from "@/components/Navigation";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Clean Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.2) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground) / 0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-foreground/20 bg-foreground/5"
          >
            <Sparkles className="w-4 h-4 text-foreground" />
            <span className="text-sm font-rajdhani text-muted-foreground">Building the Future with AI</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-6 text-foreground"
            style={{ lineHeight: '1.2' }}
          >
            Anshul Parate
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl font-rajdhani text-foreground/80 mb-6"
          >
            Full-Stack & Generative AI Developer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto mb-12"
          >
            I build intelligent systems that think, evolve, and connect — powered by{" "}
            <span className="text-foreground font-semibold">AGNETICT AI</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button
              onClick={() => navigate("/projects")}
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-orbitron gap-2"
            >
              <Code2 className="w-5 h-5" />
              View Projects
            </Button>
            <Button
              onClick={() => navigate("/ai")}
              size="lg"
              variant="outline"
              className="border-foreground/50 text-foreground hover:bg-foreground hover:text-background font-orbitron gap-2"
            >
              <Brain className="w-5 h-5" />
              AI Demo
            </Button>
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              variant="outline"
              className="border-foreground/50 text-foreground hover:bg-foreground hover:text-background font-orbitron gap-2"
            >
              Contact Me
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Watch Story Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              onClick={() => navigate("/story")}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground font-rajdhani gap-2"
            >
              <Play className="w-4 h-4" />
              Watch Interactive Story
            </Button>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 px-4"
        >
          {[
            {
              icon: Code2,
              title: "Full-Stack Development",
              description: "Modern web applications with React, Node.js, and cloud technologies."
            },
            {
              icon: Brain,
              title: "Generative AI",
              description: "RAG systems, LLM integrations, and intelligent automation solutions."
            },
            {
              icon: Sparkles,
              title: "Vector Databases",
              description: "Expertise in Qdrant, Chroma, Neo4j for semantic search and retrieval."
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="border border-border bg-foreground/5 p-6 rounded-xl text-center group hover:border-foreground/30 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-foreground/10 flex items-center justify-center group-hover:bg-foreground/20 transition-colors">
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-orbitron text-lg mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground font-rajdhani">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
