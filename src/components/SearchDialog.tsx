import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchResult {
  title: string;
  category: string;
  path: string;
  description: string;
}

const searchableContent: SearchResult[] = [
  // Pages
  { title: "Home", category: "Page", path: "/", description: "Welcome page with AGNETICT AI story" },
  { title: "About", category: "Page", path: "/about", description: "About Anshul Parate and skills" },
  { title: "Projects", category: "Page", path: "/projects", description: "Portfolio of AI projects" },
  { title: "Generative AI", category: "Page", path: "/ai", description: "AI demo and capabilities" },
  { title: "Blogs", category: "Page", path: "/blogs", description: "Technical articles and insights" },
  { title: "Contact", category: "Page", path: "/contact", description: "Get in touch" },
  
  // Blog Posts
  { title: "Unstructured.io System Dependencies", category: "Blog", path: "/blogs", description: "Poppler, Tesseract, and libmagic explained" },
  { title: "Future of AI in Web Development", category: "Blog", path: "/blogs", description: "AI reshaping web applications" },
  { title: "Building Scalable AI Systems", category: "Blog", path: "/blogs", description: "Architecture and best practices" },
  
  // Skills & Technologies
  { title: "React", category: "Skill", path: "/about", description: "Frontend framework expertise" },
  { title: "FastAPI", category: "Skill", path: "/about", description: "Backend API development" },
  { title: "MongoDB", category: "Skill", path: "/about", description: "NoSQL database" },
  { title: "Qdrant", category: "Skill", path: "/about", description: "Vector database" },
  { title: "Chroma", category: "Skill", path: "/about", description: "Vector database" },
  { title: "Neo4j", category: "Skill", path: "/about", description: "Graph database" },
  { title: "Langfuse", category: "Skill", path: "/about", description: "AI observability" },
  { title: "LangSmith", category: "Skill", path: "/about", description: "AI monitoring" },
  { title: "Unstructured.io", category: "Skill", path: "/about", description: "Document processing" },
  
  // Projects
  { title: "AGNETICT AI", category: "Project", path: "/projects", description: "Magnetic intelligence system" },
  { title: "Skills & Technologies", category: "Section", path: "/about", description: "Interactive 3D visualization of tech stack" },
];

export const SearchDialog = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const filtered = searchableContent.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery)
    );
    setResults(filtered);
  }, [query]);

  const handleSelect = (path: string) => {
    navigate(path);
    setOpen(false);
    setQuery("");
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className="relative hover:bg-accent"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl p-0 gap-0" hideCloseButton>
          <DialogHeader className="p-4 pb-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, blogs, skills..."
                className="pl-10 pr-10 h-12 text-base border-0 border-b rounded-none focus-visible:ring-0 focus-visible:border-primary"
                autoFocus
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </DialogHeader>

          <div className="max-h-[400px] overflow-y-auto p-4">
            {results.length === 0 && query.trim() !== "" && (
              <div className="text-center py-8 text-muted-foreground">
                No results found for "{query}"
              </div>
            )}

            {results.length === 0 && query.trim() === "" && (
              <div className="text-center py-8 text-muted-foreground">
                <p className="mb-2">Start typing to search...</p>
                <p className="text-sm">
                  Try searching for pages, blogs, skills, or projects
                </p>
              </div>
            )}

            <div className="space-y-1">
              {results.map((result, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(result.path)}
                  className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {result.title}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                          {result.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {result.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {results.length > 0 && (
            <div className="border-t p-3 text-xs text-muted-foreground text-center">
              {results.length} result{results.length !== 1 ? "s" : ""} found
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
