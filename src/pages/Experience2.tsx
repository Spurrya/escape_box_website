
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Key } from "lucide-react";
import { Link } from "react-router-dom";
import UnrealityBackground from "@/components/experience2/UnrealityBackground";
import TitleSection from "@/components/experience2/TitleSection";
import ExperienceDetails from "@/components/experience2/ExperienceDetails";
import TrainingSchedule from "@/components/experience2/TrainingSchedule";
import WhatToBring from "@/components/experience2/WhatToBring";
import FAQ from "@/components/experience2/FAQ";
import CustomCursor from "@/components/experience2/CustomCursor";

const Experience2 = () => {
  const [scrollY, setScrollY] = useState(0);

  // Scroll to top on page load and track scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Create comprehensive cursor hiding styles with higher specificity
    const style = document.createElement('style');
    style.id = 'hide-cursor-styles';
    style.innerHTML = `
      html, html *, html *::before, html *::after {
        cursor: none !important;
      }
      body, body *, body *::before, body *::after {
        cursor: none !important;
      }
      * {
        cursor: none !important;
      }
      *:hover, *:active, *:focus {
        cursor: none !important;
      }
      a, a:hover, a:active, a:focus {
        cursor: none !important;
      }
      button, button:hover, button:active, button:focus {
        cursor: none !important;
      }
      input, textarea, select {
        cursor: none !important;
      }
      [role="button"], [role="button"]:hover {
        cursor: none !important;
      }
      .cursor-pointer, .cursor-pointer:hover {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    // Also set cursor style on document.body directly
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';

    return () => {
      window.removeEventListener('scroll', handleScroll);
      
      // Cleanup
      const existingStyle = document.getElementById('hide-cursor-styles');
      if (existingStyle) {
        existingStyle.remove();
      }
      document.body.style.cursor = '';
      document.documentElement.style.cursor = '';
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <CustomCursor />
      <UnrealityBackground scrollY={scrollY} />
      
      <Navbar />
      <div className="flex-grow pt-20 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <TitleSection scrollY={scrollY} />
            
            <ExperienceDetails />
            
            <TrainingSchedule scrollY={scrollY} />
            
            <WhatToBring />
            
            <FAQ />
          </div>
        </div>
        
        <TestimonialsSection />
      </div>
      <Footer />
      
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-red-600 border-t border-red-700 shadow-2xl shadow-red-600/60">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Button 
            size="lg" 
            className="w-full bg-red-600 text-white hover:bg-red-700 font-semibold gap-3 border-0 shadow-xl shadow-red-600/40 text-lg py-4"
            asChild
          >
            <Link to="#">
              <Key className="w-6 h-6" />
              Save Toronto - Coming Soon
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Experience2;
