import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserChrome } from "@/components/BrowserChrome";

const Index = lazy(() => import("./pages/Index"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <BrowserChrome>
            <Suspense fallback={
              <div className="min-h-full flex items-center justify-center bg-white p-12">
                <div className="font-bbmono text-xs text-chrome-dim flex items-center gap-2">
                  <span className="size-2 rounded-full bg-chrome-green animate-pulse"></span>
                  initializing stagehand agent runtime...
                </div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserChrome>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
