import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Contextual AI Assistant",
      description: "Advanced AI assistant powered by Qdrant vector database for semantic search and contextual understanding. Handles complex queries with high accuracy.",
      tech: ["Qdrant", "FastAPI", "React", "TypeScript"],
      color: "primary",
    },
    {
      title: "Knowledge Graph Explorer",
      description: "Interactive knowledge graph visualization using Neo4j. Maps relationships between concepts, enabling deep insights and pattern discovery.",
      tech: ["Neo4j", "React Three Fiber", "D3.js", "Python"],
      color: "secondary",
    },
    {
      title: "Langfuse Monitoring Dashboard",
      description: "Real-time AI system monitoring and analytics platform. Tracks model performance, token usage, and system health with beautiful visualizations.",
      tech: ["Langfuse", "React", "Recharts", "MongoDB"],
      color: "primary",
    },
    {
      title: "AGNETICT AI Engine",
      description: "Custom-built generative AI engine without traditional frameworks. Self-organizing intelligence with magnetic data attraction and pattern formation.",
      tech: ["Python", "Chroma", "FastAPI", "Custom ML"],
      color: "secondary",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <h1 className="text-5xl md:text-7xl font-playfair mb-12 gradient-text" style={{ lineHeight: '1.8' }}>
            Featured Projects
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Explore some of my most impactful work in full-stack development and generative AI. 
            Each project showcases unique technical challenges and innovative solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`glass-panel p-8 h-full hover-glow-${project.color} group cursor-pointer`}>
                  <h3 className="text-2xl font-orbitron text-primary mb-4 group-hover:text-primary-glow transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-full bg-muted text-secondary border border-secondary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-primary hover:text-primary-glow transition-colors">
                      <Github className="w-5 h-5" />
                      <span className="font-rajdhani">Code</span>
                    </button>
                    <button className="flex items-center gap-2 text-secondary hover:text-secondary-glow transition-colors">
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-rajdhani">Demo</span>
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
