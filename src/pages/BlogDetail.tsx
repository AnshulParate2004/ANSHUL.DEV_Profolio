import BlogNav from "@/components/BlogNav";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";
import { ArrowLeft } from "lucide-react";
import Mermaid from "@/components/Mermaid";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const { id } = useParams();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Blog 3: Vector Databases
  if (id === "3") {
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
      <div className="min-h-screen bg-background selection:bg-orange-light/30 selection:text-orange-dark">
        <ReadingProgress />
        <BlogNav />
        <TableOfContents items={tocItems} />

        <motion.article
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-3xl mx-auto px-6 pt-32 pb-20"
        >
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-orange mb-8 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to blog
          </Link>

          <header className="mb-12 border-b border-border/40 pb-8">
            <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground mb-6 uppercase tracking-wider">
              <time>January 10, 2024</time>
              <span className="text-orange">•</span>
              <span>12 min read</span>
              <span className="text-orange">•</span>
              <span className="text-foreground">Database</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">
              Different type of Vector Databases Compared
            </h1>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-foreground font-bold border border-border">AP</div>
              <div>
                <p className="text-sm font-medium text-foreground">Anshul Parate</p>
                <p className="text-xs text-muted-foreground">Author</p>
              </div>
            </div>
          </header>

          <div className="prose-custom prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-lg prose-p:leading-relaxed prose-a:text-orange prose-a:no-underline hover:prose-a:underline">
            <p className="lead text-xl text-foreground/90 mb-8 border-l-4 border-orange pl-6 py-1">
              As AI and machine learning applications become more sophisticated, the need for efficient vector storage and retrieval has never been more critical. Vector databases are purpose-built systems designed to handle high-dimensional embeddings, enabling semantic search, recommendation systems, and RAG architectures.
            </p>

            <p>
              In this comprehensive comparison, we'll explore six major players in the vector database ecosystem: Qdrant, Chroma, Pinecone, Weaviate, Milvus, and FAISS. Each has distinct strengths, architectural decisions, and ideal use cases.
            </p>

            <h2 id="qdrant" className="flex items-center gap-3"><span className="text-orange">#1</span> Qdrant</h2>

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

            <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
              <div className="bg-green-500/5 border border-green-500/20 p-4 rounded-lg">
                <h4 className="text-green-600 font-bold text-sm uppercase mb-2">Pros</h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                  <li>Open-source and free to self-host</li>
                  <li>Strong filtering capabilities</li>
                  <li>Easy Python/Go integration</li>
                </ul>
              </div>
              <div className="bg-red-500/5 border border-red-500/20 p-4 rounded-lg">
                <h4 className="text-red-600 font-bold text-sm uppercase mb-2">Cons</h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                  <li>Less mature cloud offering</li>
                  <li>Manual management for large scale</li>
                </ul>
              </div>
            </div>

            <h2 id="chroma" className="flex items-center gap-3"><span className="text-orange">#2</span> Chroma</h2>

            <p><strong>Type:</strong> Open-source embedding database focused on ML/AI workflows</p>
            <p><strong>Storage:</strong> On-disk, persistent storage</p>
            <p><strong>Indexing:</strong> Uses approximate nearest neighbor (ANN) algorithms</p>

            <h3>Features</h3>
            <ul>
              <li>Designed specifically for small-to-medium scale projects</li>
              <li>Python-first experience, ideal for Jupyter notebooks</li>
              <li>Supports embeddings with metadata for enriched search</li>
            </ul>

            <h2 id="pinecone" className="flex items-center gap-3"><span className="text-orange">#3</span> Pinecone</h2>

            <p><strong>Type:</strong> Managed vector database (SaaS)</p>
            <p><strong>Storage:</strong> Cloud-managed with automatic scaling</p>
            <p><strong>Indexing:</strong> Custom, highly optimized ANN algorithms</p>

            <h2 id="weaviate" className="flex items-center gap-3"><span className="text-orange">#4</span> Weaviate</h2>

            <p><strong>Type:</strong> Open-source with cloud SaaS option</p>
            <p><strong>Storage:</strong> On-disk with optional cloud deployment</p>
            <p><strong>Indexing:</strong> HNSW and other ANN methods</p>

            <h2 id="milvus" className="flex items-center gap-3"><span className="text-orange">#5</span> Milvus</h2>

            <p><strong>Type:</strong> Open-source</p>
            <p><strong>Storage:</strong> Distributed storage designed for big data</p>
            <p><strong>Indexing:</strong> Supports multiple ANN algorithms (IVF, HNSW, PQ)</p>

            <h2 id="faiss" className="flex items-center gap-3"><span className="text-orange">#6</span> FAISS</h2>

            <p><strong>Type:</strong> Library, not a full database</p>
            <p><strong>Storage:</strong> In-memory only</p>
            <p><strong>Indexing:</strong> Multiple ANN algorithms (HNSW, IVF, PQ, etc.)</p>

            <h2 id="comparison">Comparison Table</h2>

            <div className="overflow-x-auto my-8 not-prose border border-border rounded-lg">
              <table className="w-full text-sm">
                <thead className="bg-secondary/50">
                  <tr>
                    <th className="p-3 text-left font-medium text-foreground">Feature</th>
                    <th className="p-3 text-left font-medium text-foreground">Qdrant</th>
                    <th className="p-3 text-left font-medium text-foreground">Chroma</th>
                    <th className="p-3 text-left font-medium text-foreground">Pinecone</th>
                    <th className="p-3 text-left font-medium text-foreground">Weaviate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-medium">Open Source</td>
                    <td className="p-3 text-muted-foreground">✅</td>
                    <td className="p-3 text-muted-foreground">✅</td>
                    <td className="p-3 text-muted-foreground">❌</td>
                    <td className="p-3 text-muted-foreground">✅</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Managed</td>
                    <td className="p-3 text-muted-foreground">❌</td>
                    <td className="p-3 text-muted-foreground">❌</td>
                    <td className="p-3 text-muted-foreground">✅</td>
                    <td className="p-3 text-muted-foreground">✅</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Scale</td>
                    <td className="p-3 text-muted-foreground">Moderate</td>
                    <td className="p-3 text-muted-foreground">Low</td>
                    <td className="p-3 text-muted-foreground">High</td>
                    <td className="p-3 text-muted-foreground">High</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="summary">Summary & Recommendations</h2>

            <div className="not-prose space-y-4 my-8">
              <div className="p-6 border border-border rounded-xl bg-card hover:border-orange/30 transition-colors">
                <h4 className="font-bold text-foreground mb-2">Small Projects or Prototypes</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Chroma</strong> or <strong>Qdrant</strong> — Easy to run locally, lightweight, and perfect for experimentation.
                </p>
              </div>
              <div className="p-6 border border-border rounded-xl bg-card hover:border-orange/30 transition-colors">
                <h4 className="font-bold text-foreground mb-2">Cloud-Managed, Large-Scale</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Pinecone</strong> — Fast, easy, and fully managed, though it comes with a price tag.
                </p>
              </div>
            </div>

            <h2>Conclusion</h2>

            <p>
              Choosing the right vector database depends on your specific requirements: project scale, infrastructure preferences, budget constraints, and technical expertise. For rapid prototyping and local development, Chroma and Qdrant offer excellent starting points.
            </p>
          </div>
        </motion.article>
      </div>
    );
  }

  // Blog 1: ChunkSmith (The Multimodal RAG)
  if (id === "1") {
    const tocItems = [
      { id: "overview", text: "The Blind Spot in RAG", level: 2 },
      { id: "multimodal", text: "Multimodal Extraction", level: 2 },
      { id: "cost-hack", text: "The Cost-Efficiency Hack", level: 2 },
      { id: "semantic-net", text: "Semantic Safety Net", level: 2 },
      { id: "visual-proof", text: "Visual Experience", level: 2 },
    ];

    return (
      <div className="min-h-screen bg-background selection:bg-orange-light/30 selection:text-orange-dark">
        <ReadingProgress />
        <BlogNav />
        <TableOfContents items={tocItems} />

        <motion.article
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-3xl mx-auto px-6 pt-32 pb-20"
        >
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-orange mb-8 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to blog
          </Link>



          <header className="mb-12 border-b border-border/40 pb-8">
            <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground mb-6 uppercase tracking-wider">
              <time>February 15, 2024</time>
              <span className="text-orange">•</span>
              <span>15 min read</span>
              <span className="text-orange">•</span>
              <span className="text-foreground">AI Engineering</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">
              Building ChunkSmith: Intelligent Multimodal RAG without the Massive Costs
            </h1>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-foreground font-bold border border-border">AP</div>
              <div>
                <p className="text-sm font-medium text-foreground">Anshul Parate</p>
                <p className="text-xs text-muted-foreground">Author</p>
              </div>
            </div>
            <div className="mb-12 rounded-xl overflow-hidden border border-border/40 bg-secondary/20 mt-8">
              <img
                src="https://img.youtube.com/vi/a9Haiu-e7ZU/maxresdefault.jpg"
                alt="ChunkSmith Architecture"
                className="w-full h-auto object-cover opacity-90 transition-opacity hover:opacity-100"
              />
            </div>
          </header>

          <div className="prose-custom prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-lg prose-p:leading-relaxed prose-a:text-orange prose-a:no-underline hover:prose-a:underline">
            <p className="lead text-xl text-foreground/90 mb-8 border-l-4 border-orange pl-6 py-1">
              Most "Chat with PDF" tools are fundamentally broken. They blindly strip text from documents, discarding the charts, tables, and diagrams that often contain the most critical insights. ChunkSmith was built to solve this—giving AI the ability to "see" documents while maintaining widespread accessibility and low costs.
            </p>

            <h2 id="overview" className="flex items-center gap-3"><span className="text-orange">#1</span> The Blind Spot in Modern RAG</h2>
            <p>
              Retrieval-Augmented Generation (RAG) has revolutionized how we interact with data. However, standard implementation has a massive flaw: it treats a rich, visual PDF report as if it were a simple TXT file.
            </p>
            <p>
              When a financial report shows a "Usage Growth" chart without a text caption, standard RAG systems ignore it completely. If a user asks "Whare are the usage trends?", the AI says "I don't know" because the data was locked in pixels, not text.
            </p>

            <div className="my-8 p-4 bg-secondary/30 rounded-lg border border-border">
              <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-4">Architecture Overview</h4>
              <div className="my-8 p-4 bg-secondary/30 rounded-lg border border-border flex justify-center">
                <Mermaid chart={`graph TD
    A[PDF Document] --> B(Extraction w/ Unstructured.io)
    B --> C{Split Content}
    C -->|Text| D[Text Chunks]
    C -->|Images| E[AI Vision Analysis]
    C -->|Tables| F[HTML Tables]
    E -->|Generates Description| G[Text Summary of Image]
    D -->|Generates Questions| K[Semantic Questions]
    G --> K
    F --> K
    D --> H[Vector Store]
    K --> H
    G --> H
    F --> H
    H -->|Retrieval| I[RAG Agent]
    I -->|Answers + Visuals| J[User Chat]`} />
              </div>
            </div>

            <h2 id="multimodal" className="flex items-center gap-3"><span className="text-orange">#2</span> True Multimodal Extraction</h2>
            <p>
              ChunkSmith departs from simple parsing by using an intelligent partitioning strategy (powered by Unstructured.io). Instead of reading line-by-line, the system looks at the document layout like a human would.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Narrative Text</strong> is kept readable and flowing.</li>
              <li><strong>Tables</strong> are not flattened into messiness; they are preserved as structural HTML.</li>
              <li><strong>Images</strong> are carefully snipped out of the page and processed separately.</li>
            </ul>

            <h2 id="cost-hack" className="flex items-center gap-3"><span className="text-orange">#3</span> The Cost-Efficiency Hack: Image Summarization</h2>
            <p>
              Here lies the biggest challenge in Multimodal AI: <strong>Cost</strong>. Sending thousands of image tokens to an embedding model or an LLM for every query is astronomically expensive and slow.
            </p>
            <p>
              ChunkSmith uses a clever workaround. Instead of embedding the raw image pixels, we use a high-intelligence model (Google Gemini 2.5 Pro) during the ingestion phase to "look" at every image and write a detailed, descriptive summary. We then index this <strong>text description</strong>.
            </p>
            <p>
              This is a game-changer. It means we can use standard, fast, and cheap text-based vector search to find visual content. When a user asks "Show me the revenue growth," the system matches the <em>description</em> of the chart.
            </p>

            <h2 id="semantic-net" className="flex items-center gap-3"><span className="text-orange">#4</span> The Semantic Safety Net: Question Generation</h2>
            <p>
              ChunkSmith proactively solves "keyword mismatch" by <strong>generating questions</strong>. Before indexing a chunk of text, our AI analyzes it and predicts: <em>"What questions would a user ask that this text answers?"</em>
            </p>
            <p>
              We index these questions alongside the content. This creates a massive "Semantic Safety Net." Now, if a user asks a question, it's highly likely to match one of our pre-generated questions almost perfectly.
            </p>

            <h2 id="visual-proof" className="flex items-center gap-3"><span className="text-orange">#5</span> Visual Proof & Experience</h2>
            <p>
              Because ChunkSmith maintains that link to the original image file (hosted securely), when the system retrieves a chart based on its description, it doesn't just describe it back to you. <strong>It shows you the actual image.</strong>
            </p>
            <p>
              The result is a chat experience that feels almost magical. You ask a question, and the specific chart from page 42 appears in the chat to validate the answer.
            </p>

            <div className="my-12 p-6 bg-orange/10 rounded-xl border border-orange/20">
              <h3 className="text-xl font-bold text-orange mb-2">Conclusion</h3>
              <p className="mb-0">
                ChunkSmith proves that with the right architecture, you don't need the most expensive infrastructure to build top-tier AI experiences. By leveraging "Blind Retrieval" strategies and proactive semantic enrichment, we've built a system that is robust, cost-effective, and visually aware.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    );
  }

  // Blog not found
  if (id !== "2") {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <BlogNav />
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Blog post not found</h1>
          <Link to="/blogs" className="inline-flex items-center gap-2 text-muted-foreground hover:text-orange transition-colors">
            <ArrowLeft size={16} />
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  // Blog 2: Unstructured.io (Full Content Restored)
  if (id === "2") {
    const tocItems = [
      { id: "poppler", text: "Poppler", level: 2 },
      { id: "tesseract", text: "Tesseract", level: 2 },
      { id: "libmagic", text: "libmagic", level: 2 },
      { id: "summary", text: "Summary", level: 2 },
      { id: "implementation", text: "Implementation", level: 2 },
    ];

    return (
      <div className="min-h-screen bg-background selection:bg-orange-light/30 selection:text-orange-dark">
        <ReadingProgress />
        <BlogNav />
        <TableOfContents items={tocItems} />

        <motion.article
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-2xl mx-auto px-6 pt-32 pb-20"
        >
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-orange mb-12 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to blog
          </Link>

          <header className="mb-12 border-b border-border/40 pb-8">
            <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground mb-6 uppercase tracking-wider">
              <time>January 20, 2024</time>
              <span className="text-orange">•</span>
              <span>6 min read</span>
              <span className="text-orange">•</span>
              <span className="text-foreground">AI Development</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">
              Setting Up System Dependencies for Unstructured.io
            </h1>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-foreground font-bold border border-border">AP</div>
              <div>
                <p className="text-sm font-medium text-foreground">Anshul Parate</p>
                <p className="text-xs text-muted-foreground">Author</p>
              </div>
            </div>
          </header>

          <div className="prose-custom prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-lg prose-p:leading-relaxed prose-a:text-orange prose-a:no-underline hover:prose-a:underline">
            <p className="lead text-xl text-foreground/90 mb-8 border-l-4 border-orange pl-6 py-1">
              When building document intelligence or Retrieval-Augmented Generation (RAG) systems, one of the most powerful tools you can use is <strong>Unstructured.io</strong>. It enables seamless parsing of PDFs, Word documents, images, and other unstructured data formats, transforming them into structured text ready for LLMs and vector databases.
            </p>

            <p>
              Before implementing RAG pipelines, however, it is important to configure a few system-level dependencies. These tools handle low-level operations such as PDF parsing, Optical Character Recognition (OCR), and file-type detection.
            </p>

            <h2 id="poppler" className="flex items-center gap-3"><span className="text-orange">#1</span> Poppler</h2> (poppler-utils)

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
            <div className="not-prose my-4 overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead className="bg-secondary/50">
                  <tr>
                    <th className="p-3 text-left font-medium text-foreground">Tool</th>
                    <th className="p-3 text-left font-medium text-foreground">Function</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-mono">pdftotext</td>
                    <td className="p-3 text-muted-foreground">Extracts text from PDF pages</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">pdfimages</td>
                    <td className="p-3 text-muted-foreground">Extracts embedded images from a PDF</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">pdftoppm</td>
                    <td className="p-3 text-muted-foreground">Converts pages to images for OCR</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="tesseract" className="flex items-center gap-3"><span className="text-orange">#2</span> Tesseract</h2> (tesseract-ocr)

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

            <h2 id="libmagic" className="flex items-center gap-3"><span className="text-orange">#3</span> libmagic</h2> python-magic-bin

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
            <div className="not-prose my-8 overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-secondary/50">
                  <tr>
                    <th className="p-3 text-left font-medium text-foreground">Dependency</th>
                    <th className="p-3 text-left font-medium text-foreground">Purpose</th>
                    <th className="p-3 text-left font-medium text-foreground">Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-medium">Poppler</td>
                    <td className="p-3 text-muted-foreground">PDF parsing</td>
                    <td className="p-3 text-muted-foreground">Extracts text, images, metadata</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Tesseract</td>
                    <td className="p-3 text-muted-foreground">OCR</td>
                    <td className="p-3 text-muted-foreground">Extracts text from scanned docs</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">libmagic</td>
                    <td className="p-3 text-muted-foreground">File detection</td>
                    <td className="p-3 text-muted-foreground">Identifies file type for routing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              These tools form the foundation of a robust document-processing pipeline. Once installed, Unstructured.io can handle almost any file type—converting raw data into structured, analyzable text.
            </p>

            <h2 id="implementation">Implementation: Multimodal RAG</h2>
            <p>
              After configuring the above dependencies, you can begin building Multimodal RAG systems. Below are practical Colab notebooks demonstrating different implementations.
            </p>

            <div className="not-prose space-y-4 my-8">
              <div className="p-6 border border-border rounded-xl bg-card hover:border-orange/30 transition-colors group">
                <h4 className="font-bold text-foreground mb-1">Example 1: Unstructured.io + Gemini</h4>
                <p className="text-sm text-muted-foreground mb-3">Multimodal RAG with API + Local + ChromaDB</p>
                <a href="https://colab.research.google.com/drive/1rFiHgdDW2caqvwKQnC_LK23RusEKC4hE?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-orange group-hover:underline">
                  View on Google Colab →
                </a>
              </div>

              <div className="p-6 border border-border rounded-xl bg-card hover:border-orange/30 transition-colors group">
                <h4 className="font-bold text-foreground mb-1">Example 2: Unstructured.io + Groq</h4>
                <p className="text-sm text-muted-foreground mb-3">Multimodal RAG with Local + ChromaDB</p>
                <a href="https://colab.research.google.com/drive/1qakCocPahgGs6tyXNFKLRhJAPn_4t3Fn?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-orange group-hover:underline">
                  View on Google Colab →
                </a>
              </div>

              <div className="p-6 border border-border rounded-xl bg-card hover:border-orange/30 transition-colors group">
                <h4 className="font-bold text-foreground mb-1">Example 3: Unstructured.io + Gemini Embeddings</h4>
                <p className="text-sm text-muted-foreground mb-3">Multimodal RAG with Local + ChromaDB</p>
                <a href="https://colab.research.google.com/drive/1fIwuZlB5vxkKmVDwYFtKKqLPBqQ9N2L4?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-orange group-hover:underline">
                  View on Google Colab →
                </a>
              </div>
            </div>

            <h2>Conclusion</h2>

            <p>
              With these dependencies in place, you are ready to explore and implement advanced Multimodal RAG architectures that combine document understanding with powerful language models.
            </p>
          </div>
        </motion.article>
      </div>
    );
  }

  return null;
};

export default BlogDetail;
