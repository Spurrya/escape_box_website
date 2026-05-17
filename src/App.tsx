
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Experiences from "./pages/Experiences";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience1 from "./pages/Experience1";
import Experience2 from "./pages/Experience2";
import Experience3 from "./pages/Experience3";
import Camera from "./pages/Camera";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/experience1" element={<Experience1 />} />
          <Route path="/experience2" element={<Experience2 />} />
          <Route path="/experience3" element={<Experience3 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/camera" element={<Camera />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
