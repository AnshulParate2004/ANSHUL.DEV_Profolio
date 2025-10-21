import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();

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
