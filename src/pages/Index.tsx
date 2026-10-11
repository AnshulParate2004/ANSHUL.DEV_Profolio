import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Play, ArrowUpRight, BookOpen } from "lucide-react";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { StagehandNav } from "@/components/StagehandNav";
import { AgentBenchmarkChart } from "@/components/AgentBenchmarkChart";

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data?.error || "Failed to send message. Please try again.");
      }
    } catch {
      window.location.href = `mailto:anshulnparateweb@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = {
    "Generative AI & Agentic": ["LangGraph", "LangChain", "OpenAI SDK", "Unstructured.io", "MCP Servers", "RAG Arch"],
    "Machine Learning & Vision": ["PyTorch", "Computer Vision", "YOLOv8", "Scikit-learn", "OpenCV", "TensorFlow"],
    "Backend & Distributed": ["FastAPI", "Python 3.11", "PostgreSQL", "Docker", "AsyncIO", "Django"],
    "Vector & Graph Databases": ["Qdrant", "Neo4j (GraphRAG)", "MongoDB", "ChromaDB", "MySQL", "Redis"],
    "Frontend & Interfaces": ["React.js", "TypeScript", "TailwindCSS", "Framer Motion", "Vite", "Zod"],
  };

  const projects = [
    {
      title: "ChunkSmith (Multi-Modular RAG)",
      articleTag: "chunksmith",
      category: "Generative AI / Research",
      headline: "High-accuracy multimodal document RAG pipeline cutting token consumption by 76%",
      description: "Document-indexing research ecosystem with ChunkSmith CLI V2 and multimodal web RAG. Extracted text, tables, and schematics with 94% accuracy using Unstructured.io, Qdrant, and Gemini 2.5.",
      tech: ["FastAPI", "React", "Unstructured.io", "Qdrant", "Python", "RAG"],
      github: "https://github.com/AnshulParate2004/ChunkSmith",
      demo: "https://multi-modul-rag.vercel.app/",
      video: "https://www.youtube.com/watch?v=a9Haiu-e7ZU",
      metrics: "94% Layout Accuracy · -76% Tokens",
      blog: "/blog/1",
    },
    {
      title: "Renewal Upsell Advisor",
      articleTag: "renewal advisor",
      category: "Autonomous AI Agents",
      headline: "Autonomous revenue agent for churn prediction, renewal workflows, and voice triggers",
      description: "Stateful LangGraph multi-agent system executing customer health scoring, dynamic upsell recommendation generation, real-time voice call triggers, and automated payment gateway routing.",
      tech: ["LangGraph", "Python", "FastAPI", "PostgreSQL", "AI/ML"],
      github: "https://github.com/AnshulParate2004/Renewal-Upsell-Advisor",
      demo: "https://renewal-upsell-advisor.services.ailifebot.com/",
      video: "https://drive.google.com/file/d/1ZNv2-3Wv_tDpjZ5S-4ZkviUXODQQLWpL/view?usp=sharing",
      metrics: "+35% Conversion Lift · Zero Hallucinations",
    },
    {
      title: "Finacal Adviser",
      articleTag: "finacal adviser",
      category: "FinTech & Algorithmic Trading",
      headline: "Natural language query to executable algorithmic trading DSL generator",
      description: "Python-based trading engine converting financial queries into typed execution pipelines with backtesting against 5+ years of real historical market data.",
      tech: ["React", "FastAPI", "NLP", "Python", "TailwindCSS"],
      github: "https://github.com/AnshulParate2004/Finacal_Adviser",
      demo: "https://finacal-adviser.vercel.app/",
      video: "https://www.youtube.com/watch?v=3HzlPeKsfqM",
      metrics: "5+ Years Market Backtesting · Sub-second DSL Gen",
      blog: "/blog/5",
    },
    {
      title: "GeoSentinel Rockfall Detection",
      articleTag: "geosentinel",
      category: "Deep Learning & Geospatial",
      headline: "PINN-based multi-sensor analysis and YOLOv8 real-time mine safety alerts",
      description: "AI-integrated hazardous zone safety system using Physics-Informed Neural Networks and computer vision. Real-time geospatial alert dashboard deployed for open-pit mines.",
      tech: ["YOLOv8", "PyTorch", "OpenCV", "FastAPI", "React"],
      github: "https://github.com/AnshulParate2004/GeoSentinel",
      demo: "https://sih-nu-liart.vercel.app/",
      video: "https://www.youtube.com/watch?v=0eWDi7hRyVU",
      metrics: "Real-time Edge Video Inference · SIH Finalist",
    },
  ];

  const handleExtract = (proj: typeof projects[0]) => {
    const data = JSON.stringify(
      {
        project: proj.title,
        category: proj.category,
        headline: proj.headline,
        metrics: proj.metrics,
        tech: proj.tech,
        github: proj.github,
        demo: proj.demo,
      },
      null,
      2
    );
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(data);
    }
    toast.success(`Extracted architecture schema for ${proj.title}! Copied to clipboard.`);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-full flex flex-col font-body bg-white text-chrome-ink">
      <SEO
        title="Anshul Parate | Autonomous AI & Full-Stack Engineer"
        description="Full-Stack and Generative AI Developer specializing in LangGraph, Multimodal RAG, FastAPI, React, Qdrant, and Neo4j."
      />

      <StagehandNav
        onProjectsClick={() => scrollTo('projects')}
        onSkillsClick={() => scrollTo('skills')}
        onContactClick={() => scrollTo('contact')}
      />

      <main className="relative flex-1">
        {/* Stagehand Hero Section */}
        <section className="grid grid-cols-1 gap-12 px-6 pt-14 pb-20 sm:px-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div>
            <Link
              to="/blog/1"
              className="group font-bbmono text-xs lowercase text-chrome-dim transition-colors hover:text-chrome-green-ink inline-block"
            >
              // <span className="underline decoration-chrome-mute decoration-1 underline-offset-4 transition-colors group-hover:decoration-chrome-green-ink">
                from the lab: building chunkSmith multimodal rag →
              </span>
            </Link>

            <h1 className="mt-8 max-w-[800px] font-brand text-[38px] sm:text-[50px] xl:text-[58px] leading-[1.06] tracking-[-0.03em] font-medium text-chrome-ink">
              Anshul builds autonomous AI agents & scalable full-stack engines.
            </h1>

            <p className="mt-7 max-w-[580px] text-base sm:text-lg leading-[1.6]">
              <span className="font-medium text-chrome-ink">
                Traditional apps wait for input. Autonomous agents observe, reason, and act.
              </span>{" "}
              <span className="text-chrome-slate">
                Specializing in LangGraph multi-agent workflows, multimodal RAG architectures, FastAPI backends, and low-latency interactive React frontends.
              </span>
            </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 font-bbmono text-xs text-chrome-dim">
                <button
                  onClick={() => scrollTo('contact')}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-chrome-ink cursor-pointer"
                >
                  <span>contact anshul</span>
                  <span>→</span>
                </button>
                <span>·</span>
                <a
                  href="/Resume_AnshulParate.pdf"
                  download
                  className="transition-colors hover:text-chrome-ink"
                >
                  download resume
                </a>
                <span>·</span>
                <a
                  href="https://github.com/AnshulParate2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-chrome-ink"
                >
                  github profile
                </a>
              </div>
            </div>

          {/* Benchmark comparison card */}
          <div className="lg:pt-2">
            <AgentBenchmarkChart />
          </div>
        </section>

        {/* Crosshair Divider */}
        <div className="relative mx-6 h-px">
          <span className="absolute inset-x-3 top-0 h-px bg-black/15"></span>
          <span className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 font-bbmono text-xs text-black/50">+</span>
          <span className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 font-bbmono text-xs text-black/50">+</span>
        </div>



        {/* Selected Work (Stagehand Grid) */}
        <section id="projects" className="px-6 py-16 sm:px-10">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="font-brand text-[28px] tracking-[-0.02em] font-medium text-chrome-ink">
              Selected Deployments & Systems
            </h2>
            <p className="font-bbmono text-xs lowercase text-chrome-dim">
              real-world generative ai & distributed systems in production
            </p>
          </div>

          <div className="pt-8">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
              {projects.map((proj, idx) => (
                <article
                  key={idx}
                  className="group relative border border-chrome-edge bg-white p-6 hover:border-chrome-ink transition-colors flex flex-col justify-between"
                >
                  {/* Subtle green tint overlay on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0 bg-chrome-green/[0.06] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity"
                  ></span>

                  {/* Stagehand Signature Green Box + extract() tab above card */}
                  <span className="pointer-events-none absolute z-20 flex h-6 items-stretch opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity left-3 -top-px -translate-y-full">
                    <span
                      aria-hidden="true"
                      className="flex items-center bg-chrome-green px-2 font-bbmono text-[11px] whitespace-nowrap text-white font-medium select-none"
                    >
                      article "{proj.articleTag || proj.title.toLowerCase()}"
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleExtract(proj);
                      }}
                      aria-label={`extract data from ${proj.title}`}
                      className="pointer-events-auto flex items-center bg-chrome-ink px-2.5 font-bbmono text-[11px] whitespace-nowrap text-white transition-opacity hover:opacity-85 cursor-pointer"
                    >
                      extract()
                    </button>
                  </span>

                  {/* Corner markers on hover: Top-Left (Black), Bottom-Right (Green) */}
                  <span className="pointer-events-none absolute size-2.5 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity -top-px -left-px border-t-2 border-l-2 border-chrome-ink z-10"></span>
                  <span className="pointer-events-none absolute size-2.5 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity -bottom-px -right-px border-b-2 border-r-2 border-chrome-green-ink z-10"></span>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between font-bbmono text-[11px] mb-3">
                      <span className="text-chrome-green-ink font-bold lowercase">{proj.category}</span>
                      <span className="bg-chrome-canvas text-chrome-slate px-2 py-0.5 border border-chrome-edge rounded">
                        {proj.metrics}
                      </span>
                    </div>

                    <h3 className="font-brand text-xl font-medium text-chrome-ink mb-2 transition-colors">
                      {proj.blog ? (
                        <Link to={proj.blog} className="hover:text-chrome-green-ink inline-flex items-center gap-1.5 transition-colors">
                          <span>{proj.title}</span>
                          <ArrowUpRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity text-chrome-green-ink" />
                        </Link>
                      ) : (
                        <span className="group-hover:text-chrome-green-ink transition-colors">{proj.title}</span>
                      )}
                    </h3>

                    <p className="font-bbmono text-xs text-chrome-slate font-medium mb-3">
                      {proj.headline}
                    </p>

                    <p className="text-xs text-chrome-dim leading-relaxed mb-6 font-body">
                      {proj.description}
                    </p>
                  </div>

                  <div className="relative z-10">
                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5 font-bbmono text-[10px]">
                      {proj.tech.map((t, i) => (
                        <span key={i} className="border px-2 py-0.5 border-chrome-edge text-chrome-dim bg-chrome-field">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-3 border-t border-chrome-rule font-bbmono text-xs">
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-chrome-dim hover:text-chrome-ink transition-colors"
                        >
                          <Github className="size-3.5" /> code
                        </a>
                      )}
                      {proj.demo && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-chrome-dim hover:text-chrome-green-ink transition-colors"
                        >
                          <ExternalLink className="size-3.5" /> live demo
                        </a>
                      )}
                      {proj.video && (
                        <a
                          href={proj.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-chrome-dim hover:text-chrome-ink transition-colors"
                        >
                          <Play className="size-3.5" /> watch
                        </a>
                      )}
                      {proj.blog && (
                        <Link
                          to={proj.blog}
                          className="inline-flex items-center gap-1.5 text-chrome-dim hover:text-chrome-green-ink transition-colors"
                        >
                          <BookOpen className="size-3.5" /> blog
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Crosshair Divider */}
        <div className="relative mx-6 h-px">
          <span className="absolute inset-x-3 top-0 h-px bg-black/15"></span>
          <span className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 font-bbmono text-xs text-black/50">+</span>
          <span className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 font-bbmono text-xs text-black/50">+</span>
        </div>

        {/* Technical Stack Section */}
        <section id="skills" className="px-6 py-16 sm:px-10">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="font-brand text-[28px] tracking-[-0.02em] font-medium text-chrome-ink">
              Core Engineering Stack
            </h2>
            <p className="font-bbmono text-xs lowercase text-chrome-dim">
              technologies, libraries, and frameworks honed through production deployments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="border border-chrome-edge bg-white p-5 hover:border-chrome-ink transition-colors">
                <span className="font-bbmono text-xs text-chrome-dim uppercase tracking-wider block mb-3">
                  {category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item, i) => (
                    <span
                      key={i}
                      className="border border-chrome-edge bg-chrome-field px-2.5 py-1 font-bbmono text-xs text-chrome-ink rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Crosshair Divider */}
        <div className="relative mx-6 h-px">
          <span className="absolute inset-x-3 top-0 h-px bg-black/15"></span>
          <span className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 font-bbmono text-xs text-black/50">+</span>
          <span className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 font-bbmono text-xs text-black/50">+</span>
        </div>

        {/* Contact Section */}
        <section id="contact" className="px-6 py-16 sm:px-10">
          <div className="max-w-2xl">
            <h2 className="font-brand text-[28px] tracking-[-0.02em] font-medium text-chrome-ink mb-2">
              Let's Build Something Intelligent
            </h2>
            <p className="font-bbmono text-xs lowercase text-chrome-dim mb-8">
              open for remote ai/ml roles, full-stack contracts, and forward-deployed agent engineering
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bbmono text-xs text-chrome-dim mb-1.5 lowercase">
                    name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-chrome-edge bg-chrome-field px-3.5 py-2.5 font-bbmono text-xs text-chrome-ink outline-none focus:border-chrome-ink"
                    placeholder="Ada Lovelace"
                  />
                </div>
                <div>
                  <label className="block font-bbmono text-xs text-chrome-dim mb-1.5 lowercase">
                    email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-chrome-edge bg-chrome-field px-3.5 py-2.5 font-bbmono text-xs text-chrome-ink outline-none focus:border-chrome-ink"
                    placeholder="ada@domain.com"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bbmono text-xs text-chrome-dim mb-1.5 lowercase">
                  message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-chrome-edge bg-chrome-field px-3.5 py-2.5 font-bbmono text-xs text-chrome-ink outline-none focus:border-chrome-ink resize-none"
                  placeholder="Tell me about your AI architecture or project requirements..."
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="font-bbmono text-[11px] text-chrome-dim">
                  direct: anshulnparateweb@gmail.com
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-10 items-center justify-center font-bbmono text-xs bg-chrome-ink text-white px-6 hover:opacity-85 transition-opacity cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "transmitting..." : "send message →"}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Stagehand Footer */}
        <footer className="border-t border-chrome-edge px-6 py-10 sm:px-10 bg-white">
          <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 font-bbmono text-xs text-chrome-dim">
            <div>
              <span className="text-chrome-ink font-bold">anshul parate</span> · b.tech cse (aiml) 2023-2027 · shri ramdeobaba college
            </div>

            <div className="flex gap-6 lowercase">
              <a href="https://github.com/AnshulParate2004" target="_blank" rel="noopener noreferrer" className="hover:text-chrome-ink">
                github
              </a>
              <a href="https://www.linkedin.com/in/anshulparate/" target="_blank" rel="noopener noreferrer" className="hover:text-chrome-ink">
                linkedin
              </a>
              <a href="mailto:anshulnparateweb@gmail.com" className="hover:text-chrome-ink">
                email
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
