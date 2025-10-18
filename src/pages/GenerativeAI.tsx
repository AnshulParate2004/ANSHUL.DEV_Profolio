import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Sparkles } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import ParticleField from "@/components/3d/ParticleField";

const GenerativeAI = () => {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    {
      role: "assistant",
      content: "Hello! I'm powered by AGNETICT AI. Ask me anything about AI, technology, or Anshul's work.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiResponse = {
        role: "assistant" as const,
        content: "This is a demo response. In production, this would connect to a FastAPI backend with real AI capabilities using models like GPT or custom LLMs.",
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
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
              Experience AGNETICT AI in action. Built from first principles without traditional frameworks.
            </p>
          </div>

          {/* Chat Interface */}
          <Card className="glass-panel p-6 mb-6 h-[500px] flex flex-col">
            <div className="flex-1 overflow-y-auto mb-4 space-y-4">
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
                    <p className="font-rajdhani">{message.content}</p>
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
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 glass-panel border-secondary/30 text-foreground placeholder:text-muted-foreground"
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
              <h3 className="text-xl font-orbitron text-primary mb-3">No Framework Dependency</h3>
              <p className="text-sm text-muted-foreground">
                Built without LangChain or LangGraph. Pure, efficient AI logic.
              </p>
            </Card>

            <Card className="glass-panel p-6 hover-glow-cyan">
              <h3 className="text-xl font-orbitron text-secondary mb-3">Vector Intelligence</h3>
              <p className="text-sm text-muted-foreground">
                Powered by Qdrant and Chroma for semantic understanding.
              </p>
            </Card>

            <Card className="glass-panel p-6 hover-glow-purple">
              <h3 className="text-xl font-orbitron text-primary mb-3">Self-Monitoring</h3>
              <p className="text-sm text-muted-foreground">
                Integrated Langfuse and LangSmith for real-time observability.
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GenerativeAI;
