import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-orbitron mb-8 gradient-text">
            About Me
          </h1>
          
          <div className="glass-panel p-8 rounded-lg space-y-6">
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
              magnetic, self-organizing intelligence that learns and evolves without the constraints of traditional 
              AI frameworks like LangChain or LangGraph.
            </p>

            <div className="pt-6 border-t border-border">
              <h3 className="text-2xl font-orbitron text-primary mb-4">Philosophy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in building AI that thinks naturally, connects meaningfully, and evolves continuously. 
                My approach combines deep technical knowledge with creative problem-solving to deliver practical, 
                intelligent solutions that make a real impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
