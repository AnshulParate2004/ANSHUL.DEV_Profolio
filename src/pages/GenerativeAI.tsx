import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Sparkles, RotateCcw } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import ParticleField from "@/components/3d/ParticleField";
import { useToast } from "@/hooks/use-toast";

const API_BASE_URL = "https://anshul-protfolio-backend.onrender.com";

// Format message content with headers, bold, links, bullet points, and horizontal rules
const formatMessageContent = (content: string) => {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];
  let inList = false;

  const formatInlineText = (text: string, keyPrefix: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    // Match links [text](url), bold *text*, and standalone URLs
    const regex = /(\[([^\]]+)\]\(([^)]+)\)|\*([^*]+)\*|(https?:\/\/[^\s]+))/g;
    let lastIndex = 0;
    let match;
    let partIndex = 0;

    while ((match = regex.exec(text)) !== null) {
      // Add text before match
      if (match.index > lastIndex) {
        parts.push(<span key={`${keyPrefix}-text-${partIndex++}`}>{text.slice(lastIndex, match.index)}</span>);
      }

      if (match[2] && match[3]) {
        // Link: [text](url)
        parts.push(
          <a
            key={`${keyPrefix}-link-${partIndex++}`}
            href={match[3]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-secondary/80 underline underline-offset-2 transition-colors break-all"
          >
            {match[2]}
          </a>
        );
      } else if (match[4]) {
        // Bold: *text*
        parts.push(
          <strong key={`${keyPrefix}-bold-${partIndex++}`} className="text-primary font-semibold">
            {match[4]}
          </strong>
        );
      } else if (match[5]) {
        // Standalone URL
        parts.push(
          <a
            key={`${keyPrefix}-url-${partIndex++}`}
            href={match[5]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-secondary/80 underline underline-offset-2 transition-colors break-all"
          >
            {match[5]}
          </a>
        );
      }

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(<span key={`${keyPrefix}-text-${partIndex++}`}>{text.slice(lastIndex)}</span>);
    }

    return parts.length > 0 ? parts : [<span key={`${keyPrefix}-text-0`}>{text}</span>];
  };

  const closeList = (lineIndex: number) => {
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key={`ul-${lineIndex}`} className="list-disc list-outside ml-5 my-2 space-y-1 text-muted-foreground">
          {listItems}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  lines.forEach((line, lineIndex) => {
    const trimmedLine = line.trim();
    
    // Horizontal rule (--- or more dashes)
    if (/^-{3,}$/.test(trimmedLine)) {
      closeList(lineIndex);
      elements.push(
        <hr key={`hr-${lineIndex}`} className="my-4 border-border/50" />
      );
      return;
    }

    // Headers (### Header)
    const headerMatch = trimmedLine.match(/^(#{1,6})\s+(.+)$/);
    if (headerMatch) {
      closeList(lineIndex);
      const level = headerMatch[1].length;
      const headerText = headerMatch[2];
      const headerClasses = {
        1: "text-xl font-bold text-primary mt-4 mb-2",
        2: "text-lg font-bold text-primary mt-3 mb-2",
        3: "text-base font-semibold text-secondary mt-3 mb-1",
        4: "text-sm font-semibold text-secondary mt-2 mb-1",
        5: "text-sm font-medium text-muted-foreground mt-2 mb-1",
        6: "text-xs font-medium text-muted-foreground mt-2 mb-1",
      }[level] || "text-base font-semibold";
      
      elements.push(
        <div key={`h-${lineIndex}`} className={headerClasses}>
          {formatInlineText(headerText, `h-${lineIndex}`)}
        </div>
      );
      return;
    }

    // Bullet points (starts with * or -)
    if (/^[\*\-]\s+/.test(trimmedLine)) {
      const bulletContent = trimmedLine.replace(/^[\*\-]\s+/, '');
      listItems.push(
        <li key={`li-${lineIndex}`} className="mb-1">
          {formatInlineText(bulletContent, `li-${lineIndex}`)}
        </li>
      );
      inList = true;
      return;
    }

    // Close list if we were in one and this line isn't a list item
    closeList(lineIndex);

    // Handle empty lines
    if (trimmedLine === '') {
      elements.push(<div key={`br-${lineIndex}`} className="h-2" />);
      return;
    }

    // Regular paragraph
    elements.push(
      <p key={`p-${lineIndex}`} className="mb-1 text-foreground/90">
        {formatInlineText(line, `p-${lineIndex}`)}
      </p>
    );
  });

  // Close any remaining list
  closeList(lines.length);

  return elements;
};

const GenerativeAI = () => {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    {
      role: "assistant",
      content: "Hello! I'm powered by AGNETICT AI with Google Gemini. Ask me anything about AI, technology, or Anshul's work.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}`);
  const { toast } = useToast();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          session_id: sessionId,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      
      const aiResponse = {
        role: "assistant" as const,
        content: data.response,
      };
      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMsg = error instanceof Error ? error.message : "Unknown error";
      
      // Check if it's likely a CORS error
      const isCorsError = errorMsg.includes("Failed to fetch") || errorMsg.includes("NetworkError");
      
      toast({
        title: "Connection Error",
        description: isCorsError 
          ? "CORS error - Backend needs to allow this domain in CORS_ORIGINS"
          : errorMsg,
        variant: "destructive",
      });
      
      const errorResponse = {
        role: "assistant" as const,
        content: isCorsError 
          ? "CORS error: The backend needs to add this domain to its CORS_ORIGINS setting. Please update your backend config."
          : `Error: ${errorMsg}`,
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = async () => {
    try {
      await fetch(`${API_BASE_URL}/reset?session_id=${sessionId}`, {
        method: "POST",
      });
      
      setMessages([
        {
          role: "assistant",
          content: "Hello! I'm powered by AGNETICT AI with Google Gemini. Ask me anything about AI, technology, or Anshul's work.",
        },
      ]);
      
      toast({
        title: "Conversation Reset",
        description: "The conversation history has been cleared.",
      });
    } catch (error) {
      console.error("Error resetting conversation:", error);
      toast({
        title: "Error",
        description: "Failed to reset conversation.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* 3D Background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <Canvas>
          <ParticleField count={500} />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-orbitron mb-6 gradient-text flex items-center justify-center gap-4">
              <Sparkles className="w-12 h-12 text-primary" />
              Generative AI
            </h1>
            <p className="text-xl text-muted-foreground">
              Experience AGNETICT AI in action. Powered by Google Gemini with conversation memory.
            </p>
          </div>

          {/* Chat Interface */}
          <Card className="glass-panel p-6 mb-6 h-[500px] flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-muted-foreground">Session: {sessionId.slice(-8)}</p>
              <Button
                onClick={handleReset}
                variant="outline"
                size="sm"
                className="glass-panel hover-glow-cyan"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>

            <div ref={chatContainerRef} className="flex-1 overflow-y-auto mb-4 space-y-4 scroll-smooth">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: message.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "glass-panel border border-secondary/30"
                    }`}
                  >
                    <div className="font-rajdhani">
                      {message.role === "assistant" 
                        ? formatMessageContent(message.content)
                        : <p className="whitespace-pre-wrap">{message.content}</p>
                      }
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="glass-panel border border-secondary/30 p-4 rounded-lg">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </motion.div>
              )}
              
            </div>

            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 glass-panel border-secondary/30 text-foreground placeholder:text-muted-foreground"
                disabled={isLoading}
              />
              <Button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-primary hover:bg-primary-glow text-primary-foreground hover-glow-purple"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </Card>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-panel p-6 hover-glow-purple">
              <h3 className="text-xl font-orbitron text-primary mb-3">Google Gemini Pro</h3>
              <p className="text-sm text-muted-foreground">
                Powered by Google's latest Gemini 2.0 Flash model for fast and intelligent responses.
              </p>
            </Card>

            <Card className="glass-panel p-6 hover-glow-cyan">
              <h3 className="text-xl font-orbitron text-secondary mb-3">Conversation Memory</h3>
              <p className="text-sm text-muted-foreground">
                LangChain integration maintains context across the entire conversation.
              </p>
            </Card>

            <Card className="glass-panel p-6 hover-glow-purple">
              <h3 className="text-xl font-orbitron text-primary mb-3">FastAPI Backend</h3>
              <p className="text-sm text-muted-foreground">
                High-performance Python backend with async support and real-time responses.
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GenerativeAI;
