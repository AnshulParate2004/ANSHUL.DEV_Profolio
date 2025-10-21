import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const Blogs = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "How Unstructured.io Works: System Dependencies Explained",
      excerpt: "Understanding the essential system dependencies required for document processing with Unstructured.io - Poppler for PDF extraction, Tesseract OCR for scanned documents, and libmagic for file type detection.",
      date: "2024-01-20",
      readTime: "6 min read",
      category: "AI Development"
    },
    {
      id: "2",
      title: "Building AI Systems Without LangChain: A First Principles Approach",
      excerpt: "Exploring how to create powerful generative AI systems from scratch, without relying on heavy frameworks. Learn the core concepts and build truly customizable intelligence.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI Development"
    },
    {
      id: "3",
      title: "Vector Databases Compared: Qdrant vs Chroma for Production",
      excerpt: "A deep dive into choosing the right vector database for your AI application. Performance benchmarks, use cases, and real-world insights.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Database"
    },
    {
      id: "4",
      title: "FastAPI + React: Building Modern Full-Stack Applications",
      excerpt: "A comprehensive guide to building scalable, performant full-stack applications using FastAPI backend and React frontend with TypeScript.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Web Development"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 pt-[calc(4rem+10vh)] pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-7xl font-playfair mb-12 text-center gradient-text" style={{ lineHeight: '1.6' }}>
            Blog & Insights
          </h1>

          <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto pt-3 leading-relaxed">
            Thoughts on AI development, system architecture, and building intelligent applications from first principles.
          </p>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <Link to={`/blog/${post.id}`} key={post.id}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-panel p-8 rounded-lg hover-glow-purple group cursor-pointer"
                >
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-secondary group-hover:gap-4 transition-all">
                  <span className="font-medium">Read Article</span>
                  <ArrowRight size={20} />
                </div>
              </motion.article>
              </Link>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground text-lg">
              More articles coming soon. Stay tuned for deep dives into AI, architecture, and engineering excellence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;
