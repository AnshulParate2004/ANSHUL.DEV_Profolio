import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Play, Mail, Linkedin, Send, ArrowRight, ArrowUpRight, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SearchDialog } from "@/components/SearchDialog";
import SEO from "@/components/SEO";
import { Download } from "lucide-react";

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

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const skills = {
    "Generative AI": ["OpenAI SDK", "LangGraph", "LangChain", "Unstructured.io", "MCP Server"],
    "Machine Learning": ["Computer Vision", "Scikit-learn", "Numpy", "Pandas", "TensorFlow"],
    "Backend": ["FastAPI", "Django", "Flask"],
    "Database": ["PostgreSQL", "MySQL", "MongoDB", "Qdrant", "Chroma", "Neo4j"],
    "Frontend": ["React.js", "Framer Motion", "TailwindCSS", "Figma"],
    "Cloud & DevOps": ["Git", "GitHub", "Render", "Vercel"],
  };

  const projects = [
    {
      title: "NLP-to-Strategy Trading Engine",
      category: "FinTech & AI",
      description: "Convert natural language trading rules into executable backtested strategies using AI-powered parsing. Features backtesting engine and custom DSL.",
      tech: ["React", "FastAPI", "NLP", "AST", "DSL", "PostgreSQL"],
      github: "https://github.com/AnshulParate2004/Finacal_Adviser",
      video: "https://www.youtube.com/watch?v=3HzlPeKsfqM",
    },
    {
      title: "Multi-Modular RAG System",
      category: "Generative AI",
      description: "Built an end-to-end GenAI system using React, FastAPI, Qdrant, Chroma, PostgreSQL, and Unstructured.io. Extracted text and images from PDFs for intelligent retrieval.",
      tech: ["React", "FastAPI", "Qdrant", "PostgreSQL", "Unstructured.io", "LangChain"],
      github: "https://github.com/AnshulParate2004/MultiModulRag",
      demo: "https://multi-modul-rag.vercel.app/",
      video: "https://youtu.be/a9Haiu-e7ZU",
    },
    {
      title: "Rockfall Detection System",
      category: "AI / Deep Learning",
      description: "AI-integrated safety system using Python, OpenCV, Deep Learning, and FastAPI. Real-time detection, monitoring, and alert generation for open-pit mines.",
      tech: ["Python", "OpenCV", "Deep Learning", "FastAPI"],
      github: "https://github.com/AnshulParate2004/GeoSentinel",
      demo: "https://sih-nu-liart.vercel.app/",
      video: "https://www.youtube.com/watch?v=0eWDi7hRyVU",
    },
    {
      title: "Contextual AI Assistant",
      category: "Vector Database",
      description: "Advanced AI assistant powered by Qdrant vector database for semantic search and contextual understanding with high accuracy.",
      tech: ["Qdrant", "FastAPI", "React", "TypeScript"],
    },
    {
      title: "Agentic AI Engine",
      category: "Machine Learning",
      description: "Custom-built generative AI engine without traditional frameworks. Self-organizing intelligence with magnetic data attraction.",
      tech: ["Python", "Chroma", "FastAPI", "Custom ML"],
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-background selection:bg-orange-light/30 selection:text-orange-dark"
    >
      <SEO
        title="Home"
        description="Full-Stack and Generative AI Developer specializing in React, FastAPI, MongoDB, Qdrant, and Neo4j. Building intelligent systems."
      />
      {/* Navigation */}
      <motion.nav
        variants={fadeInUp}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40"
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xl font-bold tracking-tight text-foreground hover:text-orange transition-colors">
            ap.
          </Link>

          <div className="hidden md:flex gap-8 items-center text-sm font-medium text-muted-foreground">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-foreground transition-colors"
              >
                {item}
              </button>
            ))}
            <a
              href="/Resume_AnshulParate.pdf"
              download
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center gap-4">
            <SearchDialog />
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="pt-40 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-orange"></span>
              <span className="text-sm font-medium text-orange tracking-wide">FULL-STACK & GEN AI</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight leading-tight">
              Anshul Parate
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              I build <span className="text-foreground">intelligent systems</span> from first principles.
              Specializing in Generative AI, agentic workflows, and scalable web applications that feel precise and human.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-foreground text-background hover:bg-foreground/90 h-10 px-6 rounded-full font-medium transition-all"
              >
                Get in touch
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('projects')}
                className="border-border hover:bg-muted text-foreground h-10 px-6 rounded-full font-medium transition-all"
              >
                View work
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-border hover:bg-muted text-foreground h-10 px-6 rounded-full font-medium transition-all"
              >
                <a href="/Resume_AnshulParate.pdf" download>
                  Download Resume <Download className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section - Dedicated */}
      <section id="about" className="py-24 px-6 border-t border-border/40">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mb-8">About Me</motion.h2>
            <motion.div variants={fadeInUp} className="prose prose-lg text-muted-foreground leading-relaxed">
              <p className="mb-6">
                I am a passionate developer focusing on the intersection of <span className="text-foreground font-medium">Full-Stack Engineering</span> and <span className="text-foreground font-medium">Artificial Intelligence</span>. My work involves creating systems that can understand, reason, and act—moving beyond simple automation to genuine intelligence.
              </p>
              <p>
                From building complex RAG pipelines to designing intuitive user interfaces, I believe in craftsmanship at every level of the stack. I enjoy solving hard problems, optimizing performance, and exploring the frontiers of what's possible with LLMs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 border-t border-border/40">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mb-12">Technical Skills</motion.h2>

            <div className="grid gap-10">
              {Object.entries(skills).map(([category, items], idx) => (
                <motion.div variants={fadeInUp} key={idx} className="group">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 group-hover:text-orange transition-colors">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, i) => (
                      <span key={i} className="px-3 py-1 text-sm text-foreground bg-secondary/50 border border-transparent hover:border-orange/30 hover:bg-orange/5 rounded-md transition-all cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 border-t border-border/40 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mb-12">Selected Work</motion.h2>

            <div className="grid gap-8">
              {projects.map((project, index) => (
                <motion.article
                  variants={fadeInUp}
                  key={index}
                  className="group relative bg-card p-8 rounded-xl border border-border hover:border-orange/40 transition-all hover:shadow-soft"
                >
                  <div className="absolute top-8 right-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-orange" />
                  </div>

                  <div className="mb-6">
                    <span className="text-xs font-semibold text-orange tracking-wider uppercase mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-medium text-muted-foreground px-2 py-1 bg-secondary rounded">{tech}</span>
                    ))}
                  </div>

                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-orange transition-colors">
                        <Github className="w-4 h-4" /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-orange transition-colors">
                        <ExternalLink className="w-4 h-4" /> Demo
                      </a>
                    )}
                    {project.video && (
                      <a href={project.video} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-orange transition-colors">
                        <Play className="w-4 h-4" /> Watch
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-border/40">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mb-6">Contact Me</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground mb-12 text-lg">
              Open for freelance projects, consulting, and full-time opportunities.
            </motion.p>

            <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-background border-border focus:border-orange transition-colors" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-background border-border focus:border-orange transition-colors" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="bg-background border-border focus:border-orange resize-none transition-colors" placeholder="How can I help you?" />
              </div>

              <div className="flex items-center justify-end pt-4">
                <Button type="submit" disabled={isSubmitting} className="bg-orange text-white hover:bg-orange-dark transition-colors px-6">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/40 bg-secondary/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground font-medium">
              © {new Date().getFullYear()} Anshul Parate.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">Built with React, Tailwind & Motion.</p>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/AnshulParate2004" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-orange transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/anshulparate/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-orange transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:anshulnparate@gmail.com" className="text-muted-foreground hover:text-orange transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Index;
