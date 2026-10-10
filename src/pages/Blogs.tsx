import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { StagehandNav } from "@/components/StagehandNav";

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
      title: "Building ChunkSmith: Intelligent Multimodal RAG",
      excerpt: "How we built a system that 'sees' PDFs using Unstructured.io and Gemini 2.5. A deep dive into image extraction, 'blind' vision retrieval, and vector optimization cutting token costs by 76%.",
      date: "2025-10-15",
      readTime: "15 min read",
      category: "AI Engineering"
    },
    {
      id: "2",
      title: "How Unstructured.io Works: System Dependencies Explained",
      excerpt: "Understanding the essential system dependencies required for document processing with Unstructured.io - Poppler for PDF extraction, Tesseract OCR for scanned documents, and libmagic for file type detection.",
      date: "2025-08-20",
      readTime: "6 min read",
      category: "AI Infrastructure"
    },
    {
      id: "4",
      title: "Mastering Advanced RAG: GraphRAG with Neo4j & LangChain",
      excerpt: "Moving beyond vector similarity. How to implement GraphRAG to capture structural relationships in your data using Neo4j knowledge graphs and LangChain.",
      date: "2025-11-05",
      readTime: "18 min read",
      category: "Knowledge Graphs"
    },
    {
      id: "3",
      title: "Different Types of Vector Databases Compared: Qdrant vs Chroma vs Pinecone",
      excerpt: "A deep dive into choosing the right vector database for production AI agents. Performance benchmarks, memory overhead, filtering performance, and real-world insights.",
      date: "2025-06-10",
      readTime: "12 min read",
      category: "Database Systems"
    },
    {
      id: "5",
      title: "Building Finacal Adviser: NLP to Algorithmic Trading Pipelines",
      excerpt: "How we architected a system that parses complex financial queries using NLP, generates executable trading DSLs, and backtests strategies against 5+ years of real market data.",
      date: "2026-07-31",
      readTime: "10 min read",
      category: "FinTech & AI"
    }
  ];

  return (
    <div className="min-h-full flex flex-col font-body bg-white text-chrome-ink">
      <SEO
        title="Research & Writing | Anshul Parate"
        description="Deep dives into Multimodal RAG, LangGraph multi-agent orchestration, GraphRAG with Neo4j, and production AI engineering."
      />

      <StagehandNav />

      <main className="relative flex-1 px-6 py-14 sm:px-10 max-w-5xl">
        <div className="mb-12">
          <span className="font-bbmono text-xs lowercase text-chrome-dim block mb-3">
            // research notes & engineering logs
          </span>
          <h1 className="font-brand text-[36px] sm:text-[46px] font-medium tracking-[-0.03em] text-chrome-ink">
            Technical Insights & Benchmarks
          </h1>
          <p className="mt-4 text-base sm:text-lg text-chrome-slate max-w-2xl leading-relaxed">
            First-principles engineering breakdowns covering autonomous agent loops, vector indexing architectures, and scalable full-stack pipelines.
          </p>
        </div>

        {/* Post List */}
        <div className="divide-y divide-chrome-edge border-t border-b border-chrome-edge">
          {blogPosts.map((post) => (
            <article key={post.id} className="py-8 group hover:bg-chrome-field/50 transition-colors px-3 -mx-3">
              <Link to={`/blog/${post.id}`} className="block">
                <div className="flex flex-wrap items-center gap-3 font-bbmono text-xs text-chrome-dim mb-2.5">
                  <span className="text-chrome-green-ink font-bold uppercase">{post.category}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="font-brand text-2xl font-medium text-chrome-ink group-hover:text-chrome-green-ink transition-colors mb-3">
                  {post.title}
                </h2>

                <p className="text-sm text-chrome-slate leading-relaxed font-body max-w-3xl">
                  {post.excerpt}
                </p>

                <div className="mt-4 inline-flex items-center gap-1.5 font-bbmono text-xs text-chrome-green-ink font-bold group-hover:translate-x-1 transition-transform">
                  <span>read analysis</span>
                  <span>→</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blogs;
