import BlogNav from "@/components/BlogNav";
import { ArrowRight } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-background">
      <BlogNav />
      
      <main className="max-w-2xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Thoughts on AI development, system architecture, and building intelligent applications.
          </p>
        </header>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <Link to={`/blog/${post.id}`} className="block">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                  <span>·</span>
                  <span>{post.category}</span>
                </div>

                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-muted-foreground transition-colors tracking-tight">
                  {post.title}
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all">
                  Read more <ArrowRight size={16} />
                </span>
              </Link>
            </article>
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            More articles coming soon.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Blogs;
