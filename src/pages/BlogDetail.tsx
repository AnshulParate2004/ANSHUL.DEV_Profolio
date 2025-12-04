import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();

  if (id === "2") {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-8">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
                Database
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-foreground">
              Different type of Vector Databases Compared
            </h1>

            <div className="flex items-center gap-6 mb-8 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">By Anshul Parate</span>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>January 10, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>12 min read</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As AI and machine learning applications become more sophisticated, the need for efficient vector storage and retrieval has never been more critical. Vector databases are purpose-built systems designed to handle high-dimensional embeddings, enabling semantic search, recommendation systems, and RAG (Retrieval-Augmented Generation) architectures.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                In this comprehensive comparison, we'll explore six major players in the vector database ecosystem: Qdrant, Chroma, Pinecone, Weaviate, Milvus, and FAISS. Each has distinct strengths, architectural decisions, and ideal use cases.
              </p>

              <h2 className="text-3xl font-playfair font-semibold mt-12 mb-4 text-foreground">
                1. Qdrant
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Type:</strong> Open-source vector database
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Storage:</strong> Supports both on-disk and in-memory
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Indexing:</strong> HNSW (Hierarchical Navigable Small World)
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Features</h3>
              <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
                <li>Advanced filtering by metadata (structured + vector search)</li>
                <li>Supports batch inserts for efficient data ingestion</li>
                <li>REST and gRPC APIs for flexible integration</li>
                <li>Optimized for real-time applications</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Pros</h3>
              <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
                <li>Open-source and free to self-host</li>
                <li>Strong filtering capabilities for complex queries</li>
                <li>Easy integration with Python and Go ecosystems</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Cons</h3>
              <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
                <li>Less mature cloud offering compared to Pinecone</li>
                <li>Scaling for very large datasets requires manual management</li>
              </ul>

              <h2 className="text-3xl font-playfair font-semibold mt-12 mb-4 text-foreground">
                2. Chroma
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Type:</strong> Open-source embedding database focused on ML/AI workflows
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Storage:</strong> On-disk, persistent storage
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Indexing:</strong> Uses approximate nearest neighbor (ANN) algorithms
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Features</h3>
              <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
                <li>Designed specifically for small-to-medium scale projects</li>
                <li>Python-first experience, ideal for Jupyter notebooks</li>
                <li>Supports embeddings with metadata for enriched search</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Pros</h3>
              <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
                <li>Extremely easy to use locally and get started</li>
                <li>Seamless integration with Python ML stack</li>
                <li>Perfect for prototyping and research</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Cons</h3>
              <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
                <li>Not designed for huge production datasets</li>
                <li>No native distributed setup for cloud-scale deployments</li>
              </ul>

              <h2 className="text-3xl font-playfair font-semibold mt-12 mb-4 text-foreground">
                3. Pinecone
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Type:</strong> Managed vector database (SaaS)
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Storage:</strong> Cloud-managed with automatic scaling
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Indexing:</strong> Custom, highly optimized ANN algorithms
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Features</h3>
              <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
                <li>Fully managed service with high availability</li>
                <li>Advanced filtering and metadata support</li>
                <li>Auto-scaling for millions of vectors</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Pros</h3>
              <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
                <li>Zero maintenance and infrastructure management</li>
                <li>Very fast search performance on large datasets</li>
                <li>Excellent documentation and developer experience</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Cons</h3>
              <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
                <li>Paid service with pricing that can rise for large datasets</li>
                <li>Less control over infrastructure and customization</li>
              </ul>

              <h2 className="text-3xl font-playfair font-semibold mt-12 mb-4 text-foreground">
                4. Weaviate
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Type:</strong> Open-source with cloud SaaS option
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Storage:</strong> On-disk with optional cloud deployment
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Indexing:</strong> HNSW and other ANN methods
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Features</h3>
              <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
                <li>Built-in ML modules (text2vec, image embeddings)</li>
                <li>Graph-like semantic search with advanced filters</li>
                <li>REST and GraphQL APIs for flexible querying</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Pros</h3>
              <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
                <li>Excellent for semantic search applications</li>
                <li>Rich API for both structured and unstructured search</li>
                <li>Multi-modal embedding support out of the box</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Cons</h3>
              <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
                <li>Slightly more complex to self-host and configure</li>
                <li>Cloud option requires paid subscription</li>
              </ul>

              <h2 className="text-3xl font-playfair font-semibold mt-12 mb-4 text-foreground">
                5. Milvus
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Type:</strong> Open-source
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Storage:</strong> Distributed storage designed for big data
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Indexing:</strong> Supports multiple ANN algorithms (IVF, HNSW, PQ)
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Features</h3>
              <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
                <li>Handles billions of vectors efficiently</li>
                <li>Cloud-native deployment architecture</li>
                <li>Integrates with FAISS, ONNX, and other frameworks</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Pros</h3>
              <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
                <li>Scales massively for enterprise use cases</li>
                <li>Flexible indexing options for performance tuning</li>
                <li>Strong community support and active development</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Cons</h3>
              <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
                <li>More complex setup for small projects</li>
                <li>Requires good infrastructure management skills</li>
              </ul>

              <h2 className="text-3xl font-playfair font-semibold mt-12 mb-4 text-foreground">
                6. FAISS
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Type:</strong> Library, not a full database
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Storage:</strong> In-memory only
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Indexing:</strong> Multiple ANN algorithms (HNSW, IVF, PQ, etc.)
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Features</h3>
              <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
                <li>Highly optimized for embedding similarity search</li>
                <li>Used as backend for other databases like Milvus or Qdrant</li>
                <li>Extensive algorithm selection for different use cases</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Pros</h3>
              <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
                <li>Extremely fast for nearest neighbor search</li>
                <li>Fully customizable and flexible</li>
                <li>Battle-tested by Meta AI in production</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Cons</h3>
              <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
                <li>Not a database (no built-in persistence or metadata filtering)</li>
                <li>Requires custom logic for production deployment</li>
              </ul>

              <h2 className="text-3xl font-playfair font-semibold mt-12 mb-4 text-foreground">
                Comparison Table
              </h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Feature / DB</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Qdrant</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Chroma</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Pinecone</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Weaviate</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Milvus</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">FAISS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-semibold text-foreground">Open Source</td>
                      <td className="py-3 px-4 text-muted-foreground">✅</td>
                      <td className="py-3 px-4 text-muted-foreground">✅</td>
                      <td className="py-3 px-4 text-muted-foreground">❌</td>
                      <td className="py-3 px-4 text-muted-foreground">✅</td>
                      <td className="py-3 px-4 text-muted-foreground">✅</td>
                      <td className="py-3 px-4 text-muted-foreground">✅</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-semibold text-foreground">Managed</td>
                      <td className="py-3 px-4 text-muted-foreground">❌</td>
                      <td className="py-3 px-4 text-muted-foreground">❌</td>
                      <td className="py-3 px-4 text-muted-foreground">✅</td>
                      <td className="py-3 px-4 text-muted-foreground">✅</td>
                      <td className="py-3 px-4 text-muted-foreground">❌</td>
                      <td className="py-3 px-4 text-muted-foreground">❌</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-semibold text-foreground">Scales to Billions</td>
                      <td className="py-3 px-4 text-muted-foreground">Moderate</td>
                      <td className="py-3 px-4 text-muted-foreground">Low</td>
                      <td className="py-3 px-4 text-muted-foreground">High</td>
                      <td className="py-3 px-4 text-muted-foreground">High</td>
                      <td className="py-3 px-4 text-muted-foreground">Very High</td>
                      <td className="py-3 px-4 text-muted-foreground">In-memory</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-semibold text-foreground">Filtering / Metadata</td>
                      <td className="py-3 px-4 text-muted-foreground">✅</td>
                      <td className="py-3 px-4 text-muted-foreground">✅</td>
                      <td className="py-3 px-4 text-muted-foreground">✅</td>
                      <td className="py-3 px-4 text-muted-foreground">✅</td>
                      <td className="py-3 px-4 text-muted-foreground">✅</td>
                      <td className="py-3 px-4 text-muted-foreground">❌</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-semibold text-foreground">APIs</td>
                      <td className="py-3 px-4 text-muted-foreground">REST/gRPC</td>
                      <td className="py-3 px-4 text-muted-foreground">Python</td>
                      <td className="py-3 px-4 text-muted-foreground">REST/gRPC</td>
                      <td className="py-3 px-4 text-muted-foreground">REST/GraphQL</td>
                      <td className="py-3 px-4 text-muted-foreground">REST/gRPC</td>
                      <td className="py-3 px-4 text-muted-foreground">Library</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-semibold text-foreground">Ease of Use</td>
                      <td className="py-3 px-4 text-muted-foreground">Easy</td>
                      <td className="py-3 px-4 text-muted-foreground">Very Easy</td>
                      <td className="py-3 px-4 text-muted-foreground">Very Easy</td>
                      <td className="py-3 px-4 text-muted-foreground">Moderate</td>
                      <td className="py-3 px-4 text-muted-foreground">Moderate</td>
                      <td className="py-3 px-4 text-muted-foreground">Hard</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-semibold text-foreground">Cost</td>
                      <td className="py-3 px-4 text-muted-foreground">Free/self-host</td>
                      <td className="py-3 px-4 text-muted-foreground">Free/self-host</td>
                      <td className="py-3 px-4 text-muted-foreground">Paid</td>
                      <td className="py-3 px-4 text-muted-foreground">Free/self-host + Paid Cloud</td>
                      <td className="py-3 px-4 text-muted-foreground">Free/self-host</td>
                      <td className="py-3 px-4 text-muted-foreground">Free</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-playfair font-semibold mt-12 mb-4 text-foreground">
                Summary & Recommendations
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="glass-panel p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Small Projects or Prototypes</h3>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Chroma</strong> or <strong className="text-foreground">Qdrant</strong> — Easy to run locally, lightweight, and perfect for experimentation and research.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Cloud-Managed, Large-Scale Vector Search</h3>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Pinecone</strong> — Fast, easy, and fully managed, though it comes with a price tag.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Semantic Search + ML Integration</h3>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Weaviate</strong> — Especially strong for multi-modal embeddings and graph-based semantic search.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Enterprise, Huge Datasets (Billions of Vectors)</h3>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Milvus</strong> — Built for massive scale with distributed architecture.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">High-Performance ANN Experiments</h3>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">FAISS</strong> — Ideal for research and custom implementations, though it requires extra tooling for persistence.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-playfair font-semibold mt-12 mb-4 text-foreground">Conclusion</h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Choosing the right vector database depends on your specific requirements: project scale, infrastructure preferences, budget constraints, and technical expertise. For rapid prototyping and local development, Chroma and Qdrant offer excellent starting points. Production applications requiring zero maintenance benefit from Pinecone's managed service, while enterprises handling billions of vectors should consider Milvus's distributed architecture.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                As the AI ecosystem continues to evolve, vector databases will play an increasingly critical role in enabling sophisticated semantic search, recommendation systems, and RAG architectures. Understanding the trade-offs between these options ensures you can build scalable, performant AI applications that meet your specific needs.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    );
  }

  if (id !== "1") {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-6 pt-32 pb-20">
          <p className="text-center text-muted-foreground">Blog post not found</p>
          <Link to="/blogs" className="flex items-center gap-2 text-primary hover:underline justify-center mt-4">
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft size={20} />
          Back to Blogs
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-8">
            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
              AI Development
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-foreground">
            Setting Up System Dependencies for Unstructured.io: The Foundation of Multimodal RAG
          </h1>

          <div className="flex items-center gap-6 mb-8 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">By Anshul Parate</span>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>January 20, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>6 min read</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              When building document intelligence or Retrieval-Augmented Generation (RAG) systems, one of the most powerful tools you can use is <strong>Unstructured.io</strong>. It enables seamless parsing of PDFs, Word documents, images, and other unstructured data formats, transforming them into structured text ready for large language models (LLMs) and vector databases such as ChromaDB or Gemini embeddings.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Before implementing RAG pipelines, however, it is important to configure a few system-level dependencies. These tools handle low-level operations such as PDF parsing, Optical Character Recognition (OCR), and file-type detection. This article outlines the essential dependencies required to work effectively with Unstructured.io.
            </p>

            <h2 className="text-3xl font-playfair font-semibold mt-12 mb-4 text-foreground">
              Poppler (poppler-utils)
            </h2>
            
            <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Overview</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Poppler is a collection of command-line utilities for working with PDF files. It can extract text, images, and metadata, and can also convert PDF pages into images for OCR processing.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Why It Matters</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Unstructured.io uses Poppler internally for the following tasks:
            </p>
            <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
              <li>Extracting selectable text from PDFs</li>
              <li>Retrieving embedded images for further processing</li>
              <li>Converting PDF pages into image form for OCR</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Common Poppler Tools</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Tool</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Function</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-mono text-sm text-foreground">pdftotext</td>
                    <td className="py-3 px-4 text-muted-foreground">Extracts text from PDF pages</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-mono text-sm text-foreground">pdfimages</td>
                    <td className="py-3 px-4 text-muted-foreground">Extracts embedded images from a PDF</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-mono text-sm text-foreground">pdftoppm / pdftocairo</td>
                    <td className="py-3 px-4 text-muted-foreground">Converts pages to images for OCR or visualization</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-playfair font-semibold mt-12 mb-4 text-foreground">
              Tesseract (tesseract-ocr)
            </h2>
            
            <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Overview</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tesseract is an open-source Optical Character Recognition (OCR) engine capable of reading text from scanned documents or images and converting it into machine-readable text.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Why It Matters</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tesseract is essential for handling image-based PDFs or documents that contain scanned pages or embedded diagrams with text. It ensures that text is extracted even when the document lacks searchable text layers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">Common use cases include:</p>
            <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
              <li>Extracting text from scanned documents</li>
              <li>Performing OCR on image-based PDFs</li>
              <li>Recognizing text in screenshots, diagrams, and forms</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tesseract often works in combination with Poppler—first converting PDFs to images, and then applying OCR to extract textual data.
            </p>

            <h2 className="text-3xl font-playfair font-semibold mt-12 mb-4 text-foreground">
              libmagic / python-magic-bin
            </h2>
            
            <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Overview</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              libmagic is a file type detection library that identifies files based on their content rather than their extension. This is critical when handling diverse document formats in an automated environment.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">Why It Matters</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When processing multiple file types such as PDFs, DOCX files, or images, Unstructured.io uses libmagic to:
            </p>
            <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
              <li>Automatically detect the correct file type</li>
              <li>Route the file to the appropriate parser</li>
              <li>Prevent errors caused by misleading file extensions</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              On Windows systems, developers can use the <code className="bg-muted px-2 py-1 rounded text-sm">python-magic-bin</code> package, a Python-compatible wrapper for libmagic.
            </p>

            <h2 className="text-3xl font-playfair font-semibold mt-12 mb-4 text-foreground">Summary</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Dependency</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Purpose</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Role in Unstructured.io</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-semibold text-foreground">Poppler</td>
                    <td className="py-3 px-4 text-muted-foreground">PDF parsing</td>
                    <td className="py-3 px-4 text-muted-foreground">Extracts text, images, and metadata</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-semibold text-foreground">Tesseract</td>
                    <td className="py-3 px-4 text-muted-foreground">OCR</td>
                    <td className="py-3 px-4 text-muted-foreground">Extracts text from scanned or image-based documents</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-semibold text-foreground">libmagic</td>
                    <td className="py-3 px-4 text-muted-foreground">File detection</td>
                    <td className="py-3 px-4 text-muted-foreground">Identifies file type and routes it for correct processing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              These tools form the foundation of a robust document-processing pipeline. Once installed, Unstructured.io can handle almost any file type—converting raw data into structured, analyzable text ready for downstream machine learning or retrieval applications.
            </p>

            <h2 className="text-3xl font-playfair font-semibold mt-12 mb-4 text-foreground">
              Implementation: Multimodal RAG with Unstructured.io
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              After configuring the above dependencies, you can begin building and experimenting with Multimodal RAG systems that combine Unstructured.io, ChromaDB, and Gemini models. Below are practical Colab notebooks demonstrating different implementations.
            </p>

            <div className="space-y-6 mb-8">
              <div className="glass-panel p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Example 1</h3>
                <p className="text-muted-foreground mb-3">
                  Implementation of Multimodal RAG with Unstructured.io (API + Local + ChromaDB + Gemini)
                </p>
                <a 
                  href="https://colab.research.google.com/drive/1rFiHgdDW2caqvwKQnC_LK23RusEKC4hE?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  View on Google Colab →
                </a>
              </div>

              <div className="glass-panel p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Example 2</h3>
                <p className="text-muted-foreground mb-3">
                  Implementation of Multimodal RAG with Unstructured.io (Local + ChromaDB + Groq)
                </p>
                <a 
                  href="https://colab.research.google.com/drive/1qakCocPahgGs6tyXNFKLRhJAPn_4t3Fn?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  View on Google Colab →
                </a>
              </div>

              <div className="glass-panel p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Example 3</h3>
                <p className="text-muted-foreground mb-3">
                  Alternative Implementation using Python Dependencies
                </p>
                <a 
                  href="https://colab.research.google.com/drive/1uJWhNzbIu986_zfg58Vj4crnW6wHN5KF?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  View on Google Colab →
                </a>
              </div>
            </div>

            <h2 className="text-3xl font-playfair font-semibold mt-12 mb-4 text-foreground">Conclusion</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Building an effective multimodal RAG system requires more than just connecting a language model and a vector database. It starts with understanding and preparing your data pipeline at the system level.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Poppler provides the capability to handle and extract data from PDFs, Tesseract enables recognition of textual information from images, and libmagic ensures accurate file-type identification. Together, these components give your AI system the ability to process diverse data sources efficiently and accurately.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Once properly configured, you can leverage Unstructured.io to process both structured and unstructured data, integrate OCR and text extraction, and build scalable RAG architectures suitable for real-world document automation and knowledge retrieval.
            </p>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogDetail;
