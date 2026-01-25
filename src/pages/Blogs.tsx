import BlogNav from "@/components/BlogNav";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      title: "Different type of Vector Databases Compared",
      excerpt: "A deep dive into choosing the right vector database for your AI application. Performance benchmarks, use cases, and real-world insights.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Database"
    },
    {
      id: "3",
      title: "FastAPI + React: Building Modern Full-Stack Applications",
      excerpt: "A comprehensive guide to building scalable, performant full-stack applications using FastAPI backend and React frontend with TypeScript.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Web Development"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-background selection:bg-orange-light/30 selection:text-orange-dark">
      <BlogNav />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-orange"></span>
            <span className="text-sm font-medium text-orange tracking-wide uppercase">Writing</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Explorations in AI development, system architecture, and intelligent software.
          </p>
        </motion.header>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-16"
        >
          {blogPosts.map((post) => (
            <motion.article variants={item} key={post.id} className="group border-b border-border/40 pb-12 last:border-0 relative">
              <Link to={`/blog/${post.id}`} className="block">
                <div className="flex flex-col md:flex-row gap-6 md:items-baseline mb-4">
                  <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground uppercase tracking-wider shrink-0">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground group-hover:text-orange transition-colors duration-300">
                    {post.title}
                  </h2>
                </div>

                <div className="md:pl-[8.5rem]">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      <span className="text-orange">•</span>
                      <span>{post.readTime}</span>
                      <span className="text-orange">•</span>
                      <span>{post.category}</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-orange transition-colors ml-auto md:ml-0">
                      Read <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-32 pt-12 border-t border-border/40 text-center"
        >
          <p className="text-sm text-muted-foreground font-medium">
            More articles coming soon.
          </p>
        </motion.footer>
      </main>
    </div>
  );
};

export default Blogs;
