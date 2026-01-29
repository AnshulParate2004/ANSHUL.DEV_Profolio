import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { HelmetProvider } from "react-helmet-async";

const Index = lazy(() => import("./pages/Index"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background"><div className="animate-pulse text-foreground">Loading...</div></div>}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
