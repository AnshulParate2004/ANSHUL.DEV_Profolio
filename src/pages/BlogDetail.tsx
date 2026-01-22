import BlogNav from "@/components/BlogNav";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();

  // Blog 2: Vector Databases
  if (id === "2") {
    const tocItems = [
      { id: "qdrant", text: "Qdrant", level: 2 },
      { id: "chroma", text: "Chroma", level: 2 },
      { id: "pinecone", text: "Pinecone", level: 2 },
      { id: "weaviate", text: "Weaviate", level: 2 },
      { id: "milvus", text: "Milvus", level: 2 },
      { id: "faiss", text: "FAISS", level: 2 },
      { id: "comparison", text: "Comparison Table", level: 2 },
      { id: "summary", text: "Summary", level: 2 },
    ];

    return (
      <div className="min-h-screen bg-background">
        <ReadingProgress />
        <BlogNav />
        <TableOfContents items={tocItems} />

        <article className="max-w-2xl mx-auto px-6 pt-32 pb-20">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to blog
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <time>January 10, 2024</time>
              <span>·</span>
              <span>12 min read</span>
              <span>·</span>
              <span>Database</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight leading-tight mb-4">
              Different type of Vector Databases Compared
            </h1>

            <p className="text-muted-foreground">By Anshul Parate</p>
          </header>

          <div className="prose-custom">
            <p className="lead">
              As AI and machine learning applications become more sophisticated, the need for efficient vector storage and retrieval has never been more critical. Vector databases are purpose-built systems designed to handle high-dimensional embeddings, enabling semantic search, recommendation systems, and RAG architectures.
            </p>

            <p>
              In this comprehensive comparison, we'll explore six major players in the vector database ecosystem: Qdrant, Chroma, Pinecone, Weaviate, Milvus, and FAISS. Each has distinct strengths, architectural decisions, and ideal use cases.
            </p>

            <h2 id="qdrant">1. Qdrant</h2>
            
            <p><strong>Type:</strong> Open-source vector database</p>
            <p><strong>Storage:</strong> Supports both on-disk and in-memory</p>
            <p><strong>Indexing:</strong> HNSW (Hierarchical Navigable Small World)</p>

            <h3>Features</h3>
            <ul>
              <li>Advanced filtering by metadata (structured + vector search)</li>
              <li>Supports batch inserts for efficient data ingestion</li>
              <li>REST and gRPC APIs for flexible integration</li>
              <li>Optimized for real-time applications</li>
            </ul>

            <h3>Pros</h3>
            <ul>
              <li>Open-source and free to self-host</li>
              <li>Strong filtering capabilities for complex queries</li>
              <li>Easy integration with Python and Go ecosystems</li>
            </ul>

            <h3>Cons</h3>
            <ul>
              <li>Less mature cloud offering compared to Pinecone</li>
              <li>Scaling for very large datasets requires manual management</li>
            </ul>

            <h2 id="chroma">2. Chroma</h2>
            
            <p><strong>Type:</strong> Open-source embedding database focused on ML/AI workflows</p>
            <p><strong>Storage:</strong> On-disk, persistent storage</p>
            <p><strong>Indexing:</strong> Uses approximate nearest neighbor (ANN) algorithms</p>

            <h3>Features</h3>
            <ul>
              <li>Designed specifically for small-to-medium scale projects</li>
              <li>Python-first experience, ideal for Jupyter notebooks</li>
              <li>Supports embeddings with metadata for enriched search</li>
            </ul>

            <h3>Pros</h3>
            <ul>
              <li>Extremely easy to use locally and get started</li>
              <li>Seamless integration with Python ML stack</li>
              <li>Perfect for prototyping and research</li>
            </ul>

            <h3>Cons</h3>
            <ul>
              <li>Not designed for huge production datasets</li>
              <li>No native distributed setup for cloud-scale deployments</li>
            </ul>

            <h2 id="pinecone">3. Pinecone</h2>
            
            <p><strong>Type:</strong> Managed vector database (SaaS)</p>
            <p><strong>Storage:</strong> Cloud-managed with automatic scaling</p>
            <p><strong>Indexing:</strong> Custom, highly optimized ANN algorithms</p>

            <h3>Features</h3>
            <ul>
              <li>Fully managed service with high availability</li>
              <li>Advanced filtering and metadata support</li>
              <li>Auto-scaling for millions of vectors</li>
            </ul>

            <h3>Pros</h3>
            <ul>
              <li>Zero maintenance and infrastructure management</li>
              <li>Very fast search performance on large datasets</li>
              <li>Excellent documentation and developer experience</li>
            </ul>

            <h3>Cons</h3>
            <ul>
              <li>Paid service with pricing that can rise for large datasets</li>
              <li>Less control over infrastructure and customization</li>
            </ul>

            <h2 id="weaviate">4. Weaviate</h2>
            
            <p><strong>Type:</strong> Open-source with cloud SaaS option</p>
            <p><strong>Storage:</strong> On-disk with optional cloud deployment</p>
            <p><strong>Indexing:</strong> HNSW and other ANN methods</p>

            <h3>Features</h3>
            <ul>
              <li>Built-in ML modules (text2vec, image embeddings)</li>
              <li>Graph-like semantic search with advanced filters</li>
              <li>REST and GraphQL APIs for flexible querying</li>
            </ul>

            <h3>Pros</h3>
            <ul>
              <li>Excellent for semantic search applications</li>
              <li>Rich API for both structured and unstructured search</li>
              <li>Multi-modal embedding support out of the box</li>
            </ul>

            <h3>Cons</h3>
            <ul>
              <li>Slightly more complex to self-host and configure</li>
              <li>Cloud option requires paid subscription</li>
            </ul>

            <h2 id="milvus">5. Milvus</h2>
            
            <p><strong>Type:</strong> Open-source</p>
            <p><strong>Storage:</strong> Distributed storage designed for big data</p>
            <p><strong>Indexing:</strong> Supports multiple ANN algorithms (IVF, HNSW, PQ)</p>

            <h3>Features</h3>
            <ul>
              <li>Handles billions of vectors efficiently</li>
              <li>Cloud-native deployment architecture</li>
              <li>Integrates with FAISS, ONNX, and other frameworks</li>
            </ul>

            <h3>Pros</h3>
            <ul>
              <li>Scales massively for enterprise use cases</li>
              <li>Flexible indexing options for performance tuning</li>
              <li>Strong community support and active development</li>
            </ul>

            <h3>Cons</h3>
            <ul>
              <li>More complex setup for small projects</li>
              <li>Requires good infrastructure management skills</li>
            </ul>

            <h2 id="faiss">6. FAISS</h2>
            
            <p><strong>Type:</strong> Library, not a full database</p>
            <p><strong>Storage:</strong> In-memory only</p>
            <p><strong>Indexing:</strong> Multiple ANN algorithms (HNSW, IVF, PQ, etc.)</p>

            <h3>Features</h3>
            <ul>
              <li>Highly optimized for embedding similarity search</li>
              <li>Used as backend for other databases like Milvus or Qdrant</li>
              <li>Extensive algorithm selection for different use cases</li>
            </ul>

            <h3>Pros</h3>
            <ul>
              <li>Extremely fast for nearest neighbor search</li>
              <li>Fully customizable and flexible</li>
              <li>Battle-tested by Meta AI in production</li>
            </ul>

            <h3>Cons</h3>
            <ul>
              <li>Not a database (no built-in persistence or metadata filtering)</li>
              <li>Requires custom logic for production deployment</li>
            </ul>

            <h2 id="comparison">Comparison Table</h2>
            
            <div className="overflow-x-auto -mx-6 px-6">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Qdrant</th>
                    <th>Chroma</th>
                    <th>Pinecone</th>
                    <th>Weaviate</th>
                    <th>Milvus</th>
                    <th>FAISS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Open Source</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>❌</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Managed</td>
                    <td>❌</td>
                    <td>❌</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>❌</td>
                    <td>❌</td>
                  </tr>
                  <tr>
                    <td>Scale</td>
                    <td>Moderate</td>
                    <td>Low</td>
                    <td>High</td>
                    <td>High</td>
                    <td>Very High</td>
                    <td>In-memory</td>
                  </tr>
                  <tr>
                    <td>Filtering</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>❌</td>
                  </tr>
                  <tr>
                    <td>APIs</td>
                    <td>REST/gRPC</td>
                    <td>Python</td>
                    <td>REST/gRPC</td>
                    <td>REST/GraphQL</td>
                    <td>REST/gRPC</td>
                    <td>Library</td>
                  </tr>
                  <tr>
                    <td>Ease of Use</td>
                    <td>Easy</td>
                    <td>Very Easy</td>
                    <td>Very Easy</td>
                    <td>Moderate</td>
                    <td>Moderate</td>
                    <td>Hard</td>
                  </tr>
                  <tr>
                    <td>Cost</td>
                    <td>Free</td>
                    <td>Free</td>
                    <td>Paid</td>
                    <td>Free/Paid</td>
                    <td>Free</td>
                    <td>Free</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="summary">Summary & Recommendations</h2>
            
            <div className="not-prose space-y-4 my-8">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-semibold text-foreground mb-1">Small Projects or Prototypes</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Chroma</strong> or <strong>Qdrant</strong> — Easy to run locally, lightweight, and perfect for experimentation.
                </p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-semibold text-foreground mb-1">Cloud-Managed, Large-Scale</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Pinecone</strong> — Fast, easy, and fully managed, though it comes with a price tag.
                </p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-semibold text-foreground mb-1">Semantic Search + ML Integration</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Weaviate</strong> — Strong for multi-modal embeddings and graph-based semantic search.
                </p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-semibold text-foreground mb-1">Enterprise Scale (Billions of Vectors)</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Milvus</strong> — Built for massive scale with distributed architecture.
                </p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-semibold text-foreground mb-1">High-Performance Research</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>FAISS</strong> — Ideal for research and custom implementations.
                </p>
              </div>
            </div>

            <h2>Conclusion</h2>
            
            <p>
              Choosing the right vector database depends on your specific requirements: project scale, infrastructure preferences, budget constraints, and technical expertise. For rapid prototyping and local development, Chroma and Qdrant offer excellent starting points. Production applications requiring zero maintenance benefit from Pinecone's managed service, while enterprises handling billions of vectors should consider Milvus's distributed architecture.
            </p>

            <p>
              As the AI ecosystem continues to evolve, vector databases will play an increasingly critical role in enabling sophisticated semantic search, recommendation systems, and RAG architectures.
            </p>
          </div>
        </article>
      </div>
    );
  }

  // Blog not found
  if (id !== "1") {
    return (
      <div className="min-h-screen bg-background">
        <BlogNav />
        <div className="max-w-2xl mx-auto px-6 pt-32 pb-20 text-center">
          <h1 className="text-2xl font-semibold text-foreground mb-4">Blog post not found</h1>
          <Link to="/blogs" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft size={16} />
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  // Blog 1: Unstructured.io
  const tocItems = [
    { id: "poppler", text: "Poppler", level: 2 },
    { id: "tesseract", text: "Tesseract", level: 2 },
    { id: "libmagic", text: "libmagic", level: 2 },
    { id: "summary", text: "Summary", level: 2 },
    { id: "implementation", text: "Implementation", level: 2 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <BlogNav />
      <TableOfContents items={tocItems} />

      <article className="max-w-2xl mx-auto px-6 pt-32 pb-20">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <time>January 20, 2024</time>
            <span>·</span>
            <span>6 min read</span>
            <span>·</span>
            <span>AI Development</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight leading-tight mb-4">
            Setting Up System Dependencies for Unstructured.io
          </h1>

          <p className="text-muted-foreground">By Anshul Parate</p>
        </header>

        <div className="prose-custom">
          <p className="lead">
            When building document intelligence or Retrieval-Augmented Generation (RAG) systems, one of the most powerful tools you can use is <strong>Unstructured.io</strong>. It enables seamless parsing of PDFs, Word documents, images, and other unstructured data formats, transforming them into structured text ready for LLMs and vector databases.
          </p>

          <p>
            Before implementing RAG pipelines, however, it is important to configure a few system-level dependencies. These tools handle low-level operations such as PDF parsing, Optical Character Recognition (OCR), and file-type detection.
          </p>

          <h2 id="poppler">Poppler (poppler-utils)</h2>
          
          <h3>Overview</h3>
          <p>
            Poppler is a collection of command-line utilities for working with PDF files. It can extract text, images, and metadata, and can also convert PDF pages into images for OCR processing.
          </p>

          <h3>Why It Matters</h3>
          <p>Unstructured.io uses Poppler internally for:</p>
          <ul>
            <li>Extracting selectable text from PDFs</li>
            <li>Retrieving embedded images for further processing</li>
            <li>Converting PDF pages into image form for OCR</li>
          </ul>

          <h3>Common Poppler Tools</h3>
          <table>
            <thead>
              <tr>
                <th>Tool</th>
                <th>Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>pdftotext</code></td>
                <td>Extracts text from PDF pages</td>
              </tr>
              <tr>
                <td><code>pdfimages</code></td>
                <td>Extracts embedded images from a PDF</td>
              </tr>
              <tr>
                <td><code>pdftoppm</code></td>
                <td>Converts pages to images for OCR</td>
              </tr>
            </tbody>
          </table>

          <h2 id="tesseract">Tesseract (tesseract-ocr)</h2>
          
          <h3>Overview</h3>
          <p>
            Tesseract is an open-source Optical Character Recognition (OCR) engine capable of reading text from scanned documents or images and converting it into machine-readable text.
          </p>

          <h3>Why It Matters</h3>
          <p>
            Tesseract is essential for handling image-based PDFs or documents that contain scanned pages. It ensures text extraction even when documents lack searchable text layers.
          </p>
          <ul>
            <li>Extracting text from scanned documents</li>
            <li>Performing OCR on image-based PDFs</li>
            <li>Recognizing text in screenshots, diagrams, and forms</li>
          </ul>

          <h2 id="libmagic">libmagic / python-magic-bin</h2>
          
          <h3>Overview</h3>
          <p>
            libmagic is a file type detection library that identifies files based on their content rather than their extension. This is critical when handling diverse document formats.
          </p>

          <h3>Why It Matters</h3>
          <p>When processing multiple file types, Unstructured.io uses libmagic to:</p>
          <ul>
            <li>Automatically detect the correct file type</li>
            <li>Route the file to the appropriate parser</li>
            <li>Prevent errors caused by misleading file extensions</li>
          </ul>

          <h2 id="summary">Summary</h2>
          <table>
            <thead>
              <tr>
                <th>Dependency</th>
                <th>Purpose</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Poppler</td>
                <td>PDF parsing</td>
                <td>Extracts text, images, metadata</td>
              </tr>
              <tr>
                <td>Tesseract</td>
                <td>OCR</td>
                <td>Extracts text from scanned docs</td>
              </tr>
              <tr>
                <td>libmagic</td>
                <td>File detection</td>
                <td>Identifies file type for routing</td>
              </tr>
            </tbody>
          </table>

          <p>
            These tools form the foundation of a robust document-processing pipeline. Once installed, Unstructured.io can handle almost any file type—converting raw data into structured, analyzable text.
          </p>

          <h2 id="implementation">Implementation: Multimodal RAG</h2>
          
          <p>
            After configuring the above dependencies, you can begin building Multimodal RAG systems. Below are practical Colab notebooks demonstrating different implementations.
          </p>

          <div className="not-prose space-y-4 my-8">
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-semibold text-foreground mb-1">Example 1</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Multimodal RAG with Unstructured.io (API + Local + ChromaDB + Gemini)
              </p>
              <a 
                href="https://colab.research.google.com/drive/1rFiHgdDW2caqvwKQnC_LK23RusEKC4hE?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground hover:text-muted-foreground"
              >
                View on Google Colab →
              </a>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-semibold text-foreground mb-1">Example 2</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Multimodal RAG with Unstructured.io (Local + ChromaDB + Groq)
              </p>
              <a 
                href="https://colab.research.google.com/drive/1qakCocPahgGs6tyXNFKLRhJAPn_4t3Fn?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground hover:text-muted-foreground"
              >
                View on Google Colab →
              </a>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-semibold text-foreground mb-1">Example 3</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Multimodal RAG with Unstructured.io (Local + Gemini Embeddings + ChromaDB)
              </p>
              <a 
                href="https://colab.research.google.com/drive/1fIwuZlB5vxkKmVDwYFtKKqLPBqQ9N2L4?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground hover:text-muted-foreground"
              >
                View on Google Colab →
              </a>
            </div>
          </div>

          <h2>Conclusion</h2>
          
          <p>
            With these dependencies in place, you are ready to explore and implement advanced Multimodal RAG architectures that combine document understanding with powerful language models.
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
