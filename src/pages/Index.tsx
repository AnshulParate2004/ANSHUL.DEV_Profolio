import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Play, Mail, Linkedin, Send, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SearchDialog } from "@/components/SearchDialog";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const skills = {
    "Languages & Frameworks": ["JavaScript", "TypeScript", "Python", "React", "FastAPI", "Node.js"],
    "Databases & Vector": ["MongoDB", "PostgreSQL", "Qdrant", "Chroma", "Neo4j", "Redis"],
    "AI & ML Tools": ["Unstructured.io", "Langfuse", "LangSmith", "OpenCV", "TensorFlow"],
    "DevOps & Tools": ["Docker", "n8n", "MCP Server", "Git", "AWS", "Vercel"],
  };

  const projects = [
    {
      title: "Multi-Modular RAG System",
      category: "GENERATIVE AI",
      description: "Built an end-to-end GenAI system using React, FastAPI, Qdrant, Chroma, PostgreSQL, and Unstructured.io. Extracted text and images from PDFs for intelligent retrieval.",
      tech: ["React", "FastAPI", "Qdrant", "Chroma", "PostgreSQL"],
      github: "https://github.com/AnshulParate2004/MultiModulRag",
      demo: "https://multi-modul-rag.vercel.app/",
      video: "https://youtu.be/a9Haiu-e7ZU",
    },
    {
      title: "Rockfall Detection System",
      category: "AI / DEEP LEARNING",
      description: "AI-integrated safety system using Python, OpenCV, Deep Learning, and FastAPI. Real-time detection, monitoring, and alert generation for open-pit mines.",
      tech: ["Python", "OpenCV", "Deep Learning", "FastAPI"],
      github: "https://github.com/Anuragpathak07/GeoSentinel",
      demo: "https://sih-nu-liart.vercel.app/",
      video: "https://www.youtube.com/watch?v=0eWDi7hRyVU",
    },
    {
      title: "Contextual AI Assistant",
      category: "VECTOR DATABASE",
      description: "Advanced AI assistant powered by Qdrant vector database for semantic search and contextual understanding with high accuracy.",
      tech: ["Qdrant", "FastAPI", "React", "TypeScript"],
    },
    {
      title: "Agentic AI Engine",
      category: "MACHINE LEARNING",
      description: "Custom-built generative AI engine without traditional frameworks. Self-organizing intelligence with magnetic data attraction.",
      tech: ["Python", "Chroma", "FastAPI", "Custom ML"],
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-playfair font-bold text-foreground">ap</span>
            <div className="hidden md:flex gap-8 items-center">
              <button onClick={() => scrollToSection('about')} className="text-sm font-inter text-muted-foreground hover:text-foreground transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-sm font-inter text-muted-foreground hover:text-foreground transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-sm font-inter text-muted-foreground hover:text-foreground transition-colors">Projects</button>
              <Link to="/blogs" className="text-sm font-inter text-muted-foreground hover:text-foreground transition-colors">Blogs</Link>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-inter text-muted-foreground hover:text-foreground transition-colors">Contact</button>
              <SearchDialog />
              <ThemeToggle />
            </div>
            <div className="flex md:hidden items-center gap-4">
              <SearchDialog />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs tracking-[0.3em] text-muted-foreground mb-4 font-inter uppercase">
              Full-Stack & Generative AI Developer
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair text-foreground mb-8 leading-tight">
              Anshul<br />Parate
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl font-inter leading-relaxed mb-8">
              I design purposeful digital experiences and build solutions that are precise, scalable, and user-focused. 
              Specializing in building intelligent systems from first principles using React, FastAPI, and modern AI technologies.
            </p>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-foreground text-background hover:bg-foreground/90 font-inter"
            >
              Get in touch
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] text-muted-foreground mb-4 font-inter uppercase">About</p>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair text-foreground mb-6 leading-snug">
                  I design purposeful digital experiences and build solutions that are precise, scalable, and user-focused.
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-muted-foreground font-inter leading-relaxed">
                  My journey in software development has led me to specialize in creating advanced generative AI systems 
                  that don't rely on conventional frameworks. Instead, I build from the ground up, crafting solutions 
                  that are both powerful and elegant.
                </p>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  What sets my work apart is the focus on AGNETICT AI — magnetic, self-organizing intelligence 
                  that leverages vector databases and deep learning to create systems that truly understand context and relationships.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] text-muted-foreground mb-4 font-inter uppercase">Skills</p>
            <h2 className="text-3xl md:text-4xl font-playfair text-foreground mb-12">What I work with</h2>
            
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items], idx) => (
                <div key={idx} className="grid md:grid-cols-[200px,1fr] gap-4 items-start pb-8 border-b border-border last:border-0">
                  <p className="text-sm text-muted-foreground font-inter">{category}</p>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, i) => (
                      <span key={i} className="px-4 py-2 text-sm font-inter text-foreground border border-border rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] text-muted-foreground mb-4 font-inter uppercase">Projects</p>
            <h2 className="text-3xl md:text-4xl font-playfair text-foreground mb-12">Selected Work</h2>
            
            <div className="space-y-16">
              {projects.map((project, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="grid md:grid-cols-[1fr,2fr] gap-8 items-start pb-16 border-b border-border last:border-0">
                    <div>
                      <p className="text-xs tracking-[0.2em] text-muted-foreground mb-2 font-inter uppercase">
                        {project.category}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-playfair text-foreground mb-4 leading-snug">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mt-6">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-inter">
                            <Github className="w-4 h-4" /><span>View Code</span>
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-inter">
                            <ExternalLink className="w-4 h-4" /><span>Live Demo</span>
                          </a>
                        )}
                        {project.video && (
                          <a href={project.video} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-inter">
                            <Play className="w-4 h-4" /><span>Watch Video</span>
                          </a>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-base text-muted-foreground leading-relaxed mb-6 font-inter">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1.5 text-xs font-inter tracking-wide text-muted-foreground border border-border rounded-full">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] text-muted-foreground mb-4 font-inter uppercase">Contact</p>
            <h2 className="text-3xl md:text-4xl font-playfair text-foreground mb-6">Let's create something amazing together.</h2>
            <p className="text-muted-foreground font-inter mb-12 max-w-xl">
              I'm currently available for freelance projects, consulting work, and full-time opportunities 
              in full-stack development and generative AI.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <p className="text-xs tracking-[0.2em] text-muted-foreground mb-2 font-inter uppercase">Email</p>
                  <a href="mailto:anshulnparate@gmail.com" className="text-lg font-inter text-foreground hover:text-muted-foreground transition-colors">
                    anshulnparate@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] text-muted-foreground mb-2 font-inter uppercase">Socials</p>
                  <div className="flex gap-4">
                    <a href="https://github.com/AnshulParate2004" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors font-inter">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/anshulparate/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors font-inter">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:anshulnparate@gmail.com" className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors font-inter">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs tracking-[0.2em] text-muted-foreground mb-2 font-inter uppercase">Name</label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="border-border bg-background font-inter" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs tracking-[0.2em] text-muted-foreground mb-2 font-inter uppercase">Email</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="border-border bg-background font-inter" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs tracking-[0.2em] text-muted-foreground mb-2 font-inter uppercase">Message</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="border-border bg-background font-inter resize-none" placeholder="Tell me about your project..." />
                </div>
                <Button type="submit" disabled={isSubmitting} className="bg-foreground text-background hover:bg-foreground/90 font-inter">
                  {isSubmitting ? "Sending..." : <><Send className="w-4 h-4 mr-2" />Send Message</>}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm text-muted-foreground font-inter">
            © 2025 Anshul Parate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
