import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-orbitron mb-8 text-center gradient-text">
            Get In Touch
          </h1>
          
          <p className="text-xl text-center text-muted-foreground mb-12">
            Have a project in mind or want to discuss AI technology? Let's connect!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="glass-panel p-8 hover-glow-purple">
              <h2 className="text-2xl font-orbitron text-primary mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-rajdhani text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass-panel border-primary/30 focus:border-primary text-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-rajdhani text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass-panel border-primary/30 focus:border-primary text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-rajdhani text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="glass-panel border-primary/30 focus:border-primary text-foreground resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground hover-glow-purple font-orbitron"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="glass-panel p-8 hover-glow-cyan">
                <h2 className="text-2xl font-orbitron text-secondary mb-6">Connect With Me</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:anshulnparate@gmail.com"
                    className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-rajdhani text-sm text-muted-foreground">Email</p>
                      <p className="font-rajdhani">anshulnparate@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/AnshulParate2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Github className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-rajdhani text-sm text-muted-foreground">GitHub</p>
                      <p className="font-rajdhani">@AnshulParate2004</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/anshulparate/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-foreground hover:text-secondary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Linkedin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-rajdhani text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-rajdhani">Anshul Parate</p>
                    </div>
                  </a>
                </div>
              </Card>

              <Card className="glass-panel p-8">
                <h3 className="text-xl font-orbitron text-primary mb-4">Availability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently available for freelance projects, consulting work, 
                  and full-time opportunities in full-stack development and generative AI.
                </p>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-muted-foreground font-rajdhani">
            © 2025 Anshul Parate — Crafted in 3D with React, FastAPI, and AGNETICT AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
