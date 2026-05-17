
import { useEffect, useState } from 'react';
import { asset } from '@/lib/asset';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, MapPin, Users, Paintbrush, Palette, CheckCircle, Brush, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import CustomCursor from "@/components/experience3/CustomCursor";
import ColoringCanvas from "@/components/experience3/ColoringCanvas";

const Experience3 = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Hide default cursor on page load
  useEffect(() => {
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
      
      @media (max-width: 768px) {
        html, html *, html *::before, html *::after {
          cursor: auto !important;
        }
        body, body *, body *::before, body *::after {
          cursor: auto !important;
        }
        * {
          cursor: auto !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Also set cursor style on document.body directly
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';

    return () => {
      // Cleanup
      const existingStyle = document.getElementById('hide-cursor-styles');
      if (existingStyle) {
        existingStyle.remove();
      }
      document.body.style.cursor = '';
      document.documentElement.style.cursor = '';
    };
  }, []);

  const handlePaintTubeClick = (tubeName: string) => {
    console.log(`Clicked on ${tubeName} paint tube`);
    
    if (tubeName === 'Mastering the Palette') {
      setSelectedImage('/lovable-uploads/a10ab413-ad1d-440d-b0ca-10e0a546e8be.png');
    } else if (tubeName === 'Journey to Rome') {
      setSelectedImage('/lovable-uploads/201f9e38-b46e-404f-880e-4b958bc6b9f5.png');
    } else if (tubeName === 'Transformations') {
      setSelectedImage('/lovable-uploads/8ec531aa-f69d-4c28-8d03-b33626276b36.png');
    } else if (tubeName === 'The Lady of Shalott') {
      setSelectedImage('/lovable-uploads/6c188322-4e85-4966-95fe-a7b78d733bd9.png');
    } else if (tubeName === 'Decipher') {
      setSelectedImage('/lovable-uploads/7ee6f8cf-ec3a-4ad0-b8fb-39e37796ebed.png');
    } else if (tubeName === 'The Colours of Wisdom') {
      setSelectedImage('/lovable-uploads/1fd24c1c-8120-40e9-955c-7894d340c83e.png');
    } else if (tubeName === 'Light and Shadow') {
      setSelectedImage('/lovable-uploads/4c19de9b-a0a1-4d08-9565-7c41ec2b5089.png');
    } else if (tubeName === 'Seated Women') {
      setSelectedImage('/lovable-uploads/6f11a22d-0ae2-4fb3-b77a-f511a2ea9c2d.png');
    } else if (tubeName === 'Negative Space') {
      setSelectedImage('/lovable-uploads/db29ff80-44cf-4c48-ac8f-b400edb8e313.png');
    } else {
      setSelectedImage(null);
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundImage: `url('/lovable-uploads/cbab663c-f863-4102-ad1a-c40482af4302.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'left 90%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <CustomCursor />

      <Navbar />
      <div className="flex-grow pt-20 pb-32 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
          {/* Interactive Canvas Section - Now at the very top */}
          <div className="mb-8">
            <ColoringCanvas 
              imageUrl="/lovable-uploads/dbc7f971-0392-460d-bea1-9b2f2561d22c.png"
              width={800}
              height={600}
            />
          </div>

          {/* Paper Stripe with Hand-drawn Text - Moved directly under canvas */}
          <div className="mb-8 flex justify-center">
            <div 
              className="relative px-4 sm:px-8 py-4 sm:py-6 max-w-4xl"
              style={{
                backgroundImage: `url('/lovable-uploads/b5801671-9914-46d8-a725-207e535eab59.png')`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '120px',
                width: '100%'
              }}
            >
              <div className="flex items-center justify-center h-full">
                <p 
                  className="text-lg sm:text-2xl md:text-3xl text-gray-800 text-center leading-relaxed max-w-3xl px-2"
                  style={{
                    fontFamily: 'Kalam, cursive',
                    transform: 'rotate(-0.5deg)',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                  }}
                >
                  Join Adien, a live NPC actor, at the AGO to explore the galleries and learn the qualities that make a great artist!
                </p>
              </div>
            </div>
          </div>

          {/* About This Creative Experience Section */}
          <div className="mb-12 relative">
            <div 
              className="absolute inset-0 rounded-3xl border-4 border-amber-700"
              style={{
                backgroundImage: `url('/lovable-uploads/8a8a6b10-9687-402b-977f-c0e695ecfea3.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div className="relative p-4 sm:p-8">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-black"
                style={{
                  fontFamily: 'Kalam, cursive',
                  textShadow: '2px 2px 4px rgba(255,255,255,0.8)',
                  transform: 'rotate(-1deg)'
                }}
              >
                <Paintbrush className="inline-block w-6 h-6 sm:w-8 sm:h-8 mr-3 text-black" />
                About This Creative Experience
                <Palette className="inline-block w-6 h-6 sm:w-8 sm:h-8 ml-3 text-black" />
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed text-center mb-6" style={{ 
                  fontFamily: 'Kalam, cursive',
                  textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
                }}>
                  Step into a world of creativity and wonder as you wander the gallery and solve puzzles to learn more about the artworks! This family-friendly adventure combines education, puzzle solving and artistic expression at the Art Gallery of Ontario.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed text-center" style={{ 
                  fontFamily: 'Kalam, cursive',
                  textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
                }}>
                  Perfect for families, art enthusiasts, and anyone who wants to experience Toronto's premier art gallery in a completely new way. You're not just viewing art, you're becoming part of the creative process!
                </p>
              </div>
            </div>
          </div>

          {/* Brush Separator */}
          <div className="mb-6 flex justify-center">
            <img 
              src={asset("/lovable-uploads/da63c7c4-e396-4618-9e16-90ec3f490565.png")} 
              alt="Brush separator" 
              className="w-64 sm:w-96 h-auto"
            />
          </div>

          {/* Content Section without pencil crayons */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 relative">
            {/* Art project details section */}
            <div className="relative z-10">
              <div 
                className="relative p-4 sm:p-6 shadow-xl overflow-hidden border-4 border-purple-600"
                style={{
                  backgroundImage: `url('/lovable-uploads/4925a364-98af-4b7b-8bde-afb4c9427cd5.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-lg" />
                    <h3 className="text-base sm:text-lg font-semibold text-white drop-shadow-lg">Art Project Details</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 bg-white/80 p-3 rounded-lg backdrop-blur-sm">
                        <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-800 font-medium">Medium Level</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/80 p-3 rounded-lg backdrop-blur-sm">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-800 font-medium">Up to 16 students</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/80 p-3 rounded-lg backdrop-blur-sm">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-800 font-medium">2 hours</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/80 p-3 rounded-lg backdrop-blur-sm">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-800 font-medium">Art Gallery of Ontario</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* What makes this special */}
            <div className="relative z-10">
              <div 
                className="relative p-4 sm:p-8 bg-white border-4 border-gray-300 shadow-2xl z-10 rounded-lg"
                style={{
                  transform: 'rotate(-1deg)',
                  backgroundImage: 'repeating-linear-gradient(transparent, transparent 24px, rgba(0,0,0,0.1) 24px, rgba(0,0,0,0.1) 26px)'
                }}
              >
                {/* AGO Building Image - Using new image */}
                <div 
                  className="absolute top-6 sm:top-12 right-6 sm:right-12 w-32 h-24 sm:w-64 sm:h-44 z-20 shadow-xl border-4 border-white"
                  style={{
                    transform: 'rotate(5deg)',
                    backgroundImage: `url('/lovable-uploads/97c8ebb6-20a0-40ab-b990-bf8797705ad0.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                ></div>
                
                {/* Address text below the image - Moved slightly to the left */}
                <div 
                  className="absolute top-32 sm:top-60 right-6 sm:right-12 w-32 sm:w-64 text-center z-20"
                  style={{
                    transform: 'rotate(5deg)',
                  }}
                >
                  <p 
                    className="text-xs sm:text-sm text-gray-700 bg-white/90 p-2 rounded shadow-md border border-gray-200"
                    style={{
                      fontFamily: 'Kalam, cursive',
                    }}
                  >
                    Art Gallery of Ontario<br/>
                    317 Dundas St W, Toronto
                  </p>
                </div>
                
                <div className="space-y-4 mt-4 pr-24 sm:pr-0">
                  <h4 
                    className="font-bold text-gray-800 text-lg sm:text-2xl flex items-center gap-2 mb-6"
                    style={{
                      fontFamily: 'Kalam, cursive',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                      transform: 'rotate(1deg)'
                    }}
                  >
                    <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                    What makes this special:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span 
                        className="text-gray-700 text-sm sm:text-lg leading-relaxed"
                        style={{ 
                          fontFamily: 'Kalam, cursive',
                          transform: 'rotate(0.5deg)'
                        }}
                      >
                        Professional improv actors as your <strong className="text-emerald-600">live NPC guides</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span 
                        className="text-gray-700 text-sm sm:text-lg leading-relaxed"
                        style={{ 
                          fontFamily: 'Kalam, cursive',
                          transform: '-0.3deg'
                        }}
                      >
                        Explore authentic artworks in <strong className="text-emerald-600">Canada's premier gallery</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span 
                        className="text-gray-700 text-sm sm:text-lg leading-relaxed"
                        style={{ 
                          fontFamily: 'Kalam, cursive',
                          transform: '0.2deg'
                        }}
                      >
                        Interactive art puzzles that <strong className="text-emerald-600">support teambuilding</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span 
                        className="text-gray-700 text-sm sm:text-lg leading-relaxed"
                        style={{ 
                          fontFamily: 'Kalam, cursive',
                          transform: '-0.4deg'
                        }}
                      >
                        Immersive storytelling with <strong className="text-emerald-600">professional art guides</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span 
                        className="text-gray-700 text-sm sm:text-lg leading-relaxed"
                        style={{ 
                          fontFamily: 'Kalam, cursive',
                          transform: '0.3deg'
                        }}
                      >
                        Perfect blend of <strong className="text-emerald-600">art education and adventure gaming</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Art Tour Highlights Text - MOBILE ONLY */}
          <div className="mb-8 flex justify-center md:hidden">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800"
              style={{
                fontFamily: 'Kalam, cursive',
                textShadow: '2px 2px 4px rgba(255,255,255,0.8)',
                transform: 'rotate(-1deg)'
              }}
            >
              Art Tour Highlights!<br/>
              Click the Paint!
            </h2>
          </div>

          {/* Easel and Canvas Section with Watercolor Background and Paint Tubes */}
          <div className="mb-12 flex justify-center relative">
            {/* Watercolor background with brighter filter */}
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url('/lovable-uploads/1295db6b-596c-476a-b91e-e2292e6643ef.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '120%',
                height: '95%',
                left: '-10%',
                top: '3%',
                opacity: 1,
                filter: 'brightness(0.9)'
              }}
            ></div>
            
            {/* Art Tour Highlights Text - DESKTOP ONLY - Lower right corner */}
            <div className="hidden md:block absolute bottom-8 right-8 z-20">
              <h2 
                className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800"
                style={{
                  fontFamily: 'Kalam, cursive',
                  textShadow: '2px 2px 4px rgba(255,255,255,0.8)',
                  transform: 'rotate(-1deg)'
                }}
              >
                Art Tour Highlights!<br/>
                Click the Paint!
              </h2>
            </div>
            
            {/* MOBILE ONLY - TOP ROW Paint tubes - Square pattern */}
            <div className="md:hidden absolute top-4 left-0 right-0 z-20 flex justify-center gap-8 px-4">
              <button 
                onClick={() => handlePaintTubeClick('Negative Space')}
                className="hover:scale-110 transition-transform duration-200"
                style={{ transform: 'rotate(-12deg)' }}
              >
                <img 
                  src={asset("/lovable-uploads/d659aa33-06e6-4e3c-9335-582900ad02d7.png")}
                  alt="Negative Space paint tube"
                  className="w-28 h-auto drop-shadow-lg"
                />
              </button>

              <button 
                onClick={() => handlePaintTubeClick('Seated Women')}
                className="hover:scale-110 transition-transform duration-200"
                style={{ transform: 'rotate(8deg)' }}
              >
                <img 
                  src={asset("/lovable-uploads/a0237dec-d667-4d3c-a00b-df0889f72ac9.png")}
                  alt="Seated Women paint tube"
                  className="w-28 h-auto drop-shadow-lg"
                />
              </button>

              <button 
                onClick={() => handlePaintTubeClick('Decipher')}
                className="hover:scale-110 transition-transform duration-200"
                style={{ transform: 'rotate(-18deg)' }}
              >
                <img 
                  src={asset("/lovable-uploads/b146f492-a6d0-44aa-8b36-513795b56344.png")}
                  alt="Decipher paint tube"
                  className="w-28 h-auto drop-shadow-lg"
                />
              </button>
            </div>

            {/* MOBILE ONLY - LEFT SIDE Paint tubes - Square pattern */}
            <div className="md:hidden absolute top-1/2 left-2 z-20 flex flex-col justify-center gap-16 -translate-y-1/2">
              <button 
                onClick={() => handlePaintTubeClick('The Lady of Shalott')}
                className="hover:scale-110 transition-transform duration-200"
                style={{ transform: 'rotate(-25deg)' }}
              >
                <img 
                  src={asset("/lovable-uploads/b7f256e8-365c-4164-b76c-f890b90c4f79.png")}
                  alt="The Lady of Shalott paint tube"
                  className="w-28 h-auto drop-shadow-lg"
                />
              </button>

              <button 
                onClick={() => handlePaintTubeClick('Transformations')}
                className="hover:scale-110 transition-transform duration-200"
                style={{ transform: 'rotate(15deg)' }}
              >
                <img 
                  src={asset("/lovable-uploads/73ec7313-2bde-4106-b580-9533b6bcbc07.png")}
                  alt="Transformations paint tube"
                  className="w-28 h-auto drop-shadow-lg"
                />
              </button>
            </div>

            {/* MOBILE ONLY - RIGHT SIDE Paint tubes - Square pattern */}
            <div className="md:hidden absolute top-1/2 right-2 z-20 flex flex-col justify-center gap-16 -translate-y-1/2">
              <button 
                onClick={() => handlePaintTubeClick('Light and Shadow')}
                className="hover:scale-110 transition-transform duration-200"
                style={{ transform: 'rotate(25deg)' }}
              >
                <img 
                  src={asset("/lovable-uploads/303bdca6-2929-4d16-8f8c-f69f50eec53a.png")}
                  alt="Light and Shadow paint tube"
                  className="w-28 h-auto drop-shadow-lg"
                />
              </button>

              <button 
                onClick={() => handlePaintTubeClick('The Colours of Wisdom')}
                className="hover:scale-110 transition-transform duration-200"
                style={{ transform: 'rotate(-15deg)' }}
              >
                <img 
                  src={asset("/lovable-uploads/18b1cc50-52a9-40f6-a57e-a31010261a03.png")}
                  alt="The Colours of Wisdom paint tube"
                  className="w-28 h-auto drop-shadow-lg"
                />
              </button>
            </div>

            {/* DESKTOP ONLY - LEFT SIDE PAINT TUBES - Evenly spaced vertically */}
            <button 
              onClick={() => handlePaintTubeClick('Negative Space')}
              className="hidden md:block absolute top-6 left-4 z-20 hover:scale-110 transition-transform duration-200"
              style={{ transform: 'rotate(-12deg)' }}
            >
              <img 
                src={asset("/lovable-uploads/d659aa33-06e6-4e3c-9335-582900ad02d7.png")}
                alt="Negative Space paint tube"
                className="w-44 sm:w-48 h-auto drop-shadow-lg"
              />
            </button>

            <button 
              onClick={() => handlePaintTubeClick('Seated Women')}
              className="hidden md:block absolute top-28 left-8 z-20 hover:scale-110 transition-transform duration-200"
              style={{ transform: 'rotate(8deg)' }}
            >
              <img 
                src={asset("/lovable-uploads/a0237dec-d667-4d3c-a00b-df0889f72ac9.png")}
                alt="Seated Women paint tube"
                className="w-44 sm:w-48 h-auto drop-shadow-lg"
              />
            </button>

            <button 
              onClick={() => handlePaintTubeClick('Decipher')}
              className="hidden md:block absolute top-52 left-4 z-20 hover:scale-110 transition-transform duration-200"
              style={{ transform: 'rotate(-18deg)' }}
            >
              <img 
                src={asset("/lovable-uploads/b146f492-a6d0-44aa-8b36-513795b56344.png")}
                alt="Decipher paint tube"
                className="w-44 sm:w-48 h-auto drop-shadow-lg"
              />
            </button>

            <button 
              onClick={() => handlePaintTubeClick('The Lady of Shalott')}
              className="hidden md:block absolute top-80 left-8 z-20 hover:scale-110 transition-transform duration-200"
              style={{ transform: 'rotate(6deg)' }}
            >
              <img 
                src={asset("/lovable-uploads/b7f256e8-365c-4164-b76c-f890b90c4f79.png")}
                alt="The Lady of Shalott paint tube"
                className="w-44 sm:w-48 h-auto drop-shadow-lg"
              />
            </button>

            <button 
              onClick={() => handlePaintTubeClick('Transformations')}
              className="hidden md:block absolute bottom-24 left-4 z-20 hover:scale-110 transition-transform duration-200"
              style={{ transform: 'rotate(-10deg)' }}
            >
              <img 
                src={asset("/lovable-uploads/73ec7313-2bde-4106-b580-9533b6bcbc07.png")}
                alt="Transformations paint tube"
                className="w-44 sm:w-48 h-auto drop-shadow-lg"
              />
            </button>

            {/* DESKTOP ONLY - RIGHT SIDE PAINT TUBES - Evenly spaced vertically */}
            <button 
              onClick={() => handlePaintTubeClick('Light and Shadow')}
              className="hidden md:block absolute top-6 right-4 z-20 hover:scale-110 transition-transform duration-200"
              style={{ transform: 'rotate(15deg)' }}
            >
              <img 
                src={asset("/lovable-uploads/303bdca6-2929-4d16-8f8c-f69f50eec53a.png")}
                alt="Light and Shadow paint tube"
                className="w-44 sm:w-48 h-auto drop-shadow-lg"
              />
            </button>

            <button 
              onClick={() => handlePaintTubeClick('The Colours of Wisdom')}
              className="hidden md:block absolute top-28 right-8 z-20 hover:scale-110 transition-transform duration-200"
              style={{ transform: 'rotate(-8deg)' }}
            >
              <img 
                src={asset("/lovable-uploads/18b1cc50-52a9-40f6-a57e-a31010261a03.png")}
                alt="The Colours of Wisdom paint tube"
                className="w-44 sm:w-48 h-auto drop-shadow-lg"
              />
            </button>

            <button 
              onClick={() => handlePaintTubeClick('Journey to Rome')}
              className="hidden md:block absolute top-52 right-4 z-20 hover:scale-110 transition-transform duration-200"
              style={{ transform: 'rotate(12deg)' }}
            >
              <img 
                src={asset("/lovable-uploads/a70aa087-81d4-442a-ab8b-d4796c1fc047.png")}
                alt="Journey to Rome paint tube"
                className="w-44 sm:w-48 h-auto drop-shadow-lg"
              />
            </button>

            <button 
              onClick={() => handlePaintTubeClick('Mastering the Palette')}
              className="hidden md:block absolute top-80 right-8 z-20 hover:scale-110 transition-transform duration-200"
              style={{ transform: 'rotate(-12deg)' }}
            >
              <img 
                src={asset("/lovable-uploads/6a14ac06-21cc-4809-b877-49eddd6c5a74.png")}
                alt="Mastering the Palette paint tube"
                className="w-44 sm:w-48 h-auto drop-shadow-lg"
              />
            </button>
            
            {/* Easel image */}
            <div className="relative z-10 mt-20 md:mt-0">
              <img 
                src={asset("/lovable-uploads/a2433b6a-6c57-45d4-bc2f-ba09cba3a71b.png")}
                alt="Blank easel and canvas"
                className="w-[450px] sm:w-[600px] lg:w-[700px] xl:w-[800px] h-auto"
                style={{
                  transform: 'rotate(-2deg)',
                  filter: 'drop-shadow(0 25px 50px -12px rgba(0, 0, 0, 0.5)) drop-shadow(0 10px 30px -10px rgba(0, 0, 0, 0.3))'
                }}
              />
              
              {/* Selected image overlay on the easel canvas area - made smaller */}
              {selectedImage && (
                <div 
                  className="absolute"
                  style={{
                    top: '18%',
                    left: '28%',
                    width: '44%',
                    height: '38%',
                    transform: 'rotate(-2deg)',
                    zIndex: 15
                  }}
                >
                  <img 
                    src={selectedImage}
                    alt="Selected artwork"
                    className="w-full h-full object-contain rounded-sm shadow-lg"
                    style={{
                      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
                    }}
                  />
                </div>
              )}
            </div>

            {/* MOBILE ONLY - BOTTOM ROW Paint tubes - Square pattern */}
            <div className="md:hidden absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-16 px-4">
              <button 
                onClick={() => handlePaintTubeClick('Journey to Rome')}
                className="hover:scale-110 transition-transform duration-200"
                style={{ transform: 'rotate(12deg)' }}
              >
                <img 
                  src={asset("/lovable-uploads/a70aa087-81d4-442a-ab8b-d4796c1fc047.png")}
                  alt="Journey to Rome paint tube"
                  className="w-28 h-auto drop-shadow-lg"
                />
              </button>

              <button 
                onClick={() => handlePaintTubeClick('Mastering the Palette')}
                className="hover:scale-110 transition-transform duration-200"
                style={{ transform: 'rotate(-12deg)' }}
              >
                <img 
                  src={asset("/lovable-uploads/6a14ac06-21cc-4809-b877-49eddd6c5a74.png")}
                  alt="Mastering the Palette paint tube"
                  className="w-28 h-auto drop-shadow-lg"
                />
              </button>
            </div>
          </div>

          {/* FAQ Section - Styled like an art studio */}
          <div className="mb-16 relative">
            <div 
              className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100 rounded-3xl opacity-60"
              style={{
                backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,182,193,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(173,216,230,0.3) 0%, transparent 50%)'
              }}
            ></div>
            <div className="relative p-4 sm:p-8">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
                style={{
                  fontFamily: 'Kalam, cursive',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                  transform: 'rotate(-1deg)'
                }}
              >
                <Brush className="inline-block w-6 h-6 sm:w-8 sm:h-8 mr-3 text-purple-600" />
                Frequently asked questions
                <Palette className="inline-block w-6 h-6 sm:w-8 sm:h-8 ml-3 text-orange-500" />
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border-purple-200 bg-white/70 rounded-xl px-4 shadow-lg">
                  <AccordionTrigger className="text-gray-800 hover:text-purple-600 text-left text-base sm:text-lg font-medium">Is this suitable for art enthusiasts who've never been to the AGO?</AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                    Absolutely! This experience is designed to introduce you to the AGO's incredible collection while having fun. 
                    Our art-trained guides will help you navigate the galleries while you solve creative puzzles and discover masterpieces from around the world.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-1a" className="border-purple-200 bg-white/70 rounded-xl px-4 shadow-lg">
                  <AccordionTrigger className="text-gray-800 hover:text-purple-600 text-left text-base sm:text-lg font-medium">Is it suitable for frequent AGO visitors?</AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                    Yes! Even if you know the AGO well, you'll experience it in a completely new way through our interactive storytelling and creative challenges. 
                    You'll discover hidden details and stories about artworks you may have seen before.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-purple-200 bg-white/70 rounded-xl px-4 shadow-lg">
                  <AccordionTrigger className="text-gray-800 hover:text-purple-600 text-left text-base sm:text-lg font-medium">What if the gallery is crowded during our visit?</AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                    The AGO is a public gallery, so there may be other visitors. Our guides are experienced at working around crowds 
                    and will adapt the experience accordingly. The interactive nature actually works well with the authentic gallery atmosphere!
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border-purple-200 bg-white/70 rounded-xl px-4 shadow-lg">
                  <AccordionTrigger className="text-gray-800 hover:text-purple-600 text-left text-base sm:text-lg font-medium">How much walking is involved in this gallery experience?</AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                    This involves moderate walking through the Art Gallery of Ontario over 2 hours. The gallery has elevators and 
                    is wheelchair accessible. We'll be exploring various gallery floors and wings, so comfortable shoes are recommended.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border-purple-200 bg-white/70 rounded-xl px-4 shadow-lg">
                  <AccordionTrigger className="text-gray-800 hover:text-purple-600 text-left text-base sm:text-lg font-medium">Can I take photos of the artworks during the experience?</AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                    Photography policies follow AGO guidelines - some artworks allow photography while others don't. 
                    Our guides will let you know what's permitted. You're always welcome to take photos of your group during the experience!
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border-purple-200 bg-white/70 rounded-xl px-4 shadow-lg">
                  <AccordionTrigger className="text-gray-800 hover:text-purple-600 text-left text-base sm:text-lg font-medium">What happens if I can't solve an art puzzle?</AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                    Don't worry! Our art-trained guides are there to provide hints and keep the creative story flowing. 
                    The focus is on enjoying art, learning, and having fun together - not getting stuck on any single challenge.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6" className="border-purple-200 bg-white/70 rounded-xl px-4 shadow-lg">
                  <AccordionTrigger className="text-gray-800 hover:text-purple-600 text-left text-base sm:text-lg font-medium">Is this experience suitable for families with young artists?</AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                    Yes! This experience is perfect for budding young artists aged 8+ when accompanied by adults. 
                    The creative challenges are engaging for all ages, and it's a wonderful way to explore art together as a family while sparking creativity.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border-purple-200 bg-white/70 rounded-xl px-4 shadow-lg">
                  <AccordionTrigger className="text-gray-800 hover:text-purple-600 text-left text-base sm:text-lg font-medium">What is the cancellation policy for art experiences?</AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                    Artists can cancel their creative experience with 48 hours notice for a full refund. 
                    We understand that inspiration strikes at different times!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Testimonials Section - Now with paper-like testimonials */}
          <div className="mb-16 relative">
            <div 
              className="absolute inset-0 rounded-3xl opacity-90"
              style={{
                backgroundImage: `url('/lovable-uploads/c318def1-ad98-4c4e-adee-849201d3a6d3.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div className="relative p-4 sm:p-8">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-white drop-shadow-2xl"
                style={{
                  fontFamily: 'Kalam, cursive',
                  textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
                  transform: 'rotate(1deg)'
                }}
              >
                <Star className="inline-block w-6 h-6 sm:w-8 sm:h-8 mr-3 text-yellow-300 drop-shadow-lg" />
                What our artists say
                <Quote className="inline-block w-6 h-6 sm:w-8 sm:h-8 ml-3 text-white drop-shadow-lg" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div 
                  className="relative p-4"
                  style={{
                    transform: 'rotate(-2deg)',
                    backgroundImage: `url('/lovable-uploads/ea0d8026-e50f-4fd2-836a-86be0c3a93d9.png')`,
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '200px'
                  }}
                >
                  <div className="relative z-5 pt-12 px-2">
                    <p 
                      className="text-gray-700 italic mb-3 text-sm leading-snug"
                      style={{ 
                        fontFamily: 'Kalam, cursive',
                        lineHeight: '1.4'
                      }}
                    >
                      "This was an incredible way to see the AGO! Our kids were engaged the entire time and we all learned so much about art."
                    </p>
                    <div className="flex items-center gap-2 mt-8">
                      <div className="flex text-yellow-400">
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                      <span 
                        className="text-xs text-gray-600 font-medium"
                        style={{ fontFamily: 'Kalam, cursive' }}
                      >
                        - Sarah M.
                      </span>
                    </div>
                  </div>
                </div>

                <div 
                  className="relative p-4"
                  style={{
                    transform: 'rotate(1deg)',
                    backgroundImage: `url('/lovable-uploads/ea0d8026-e50f-4fd2-836a-86be0c3a93d9.png')`,
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '200px'
                  }}
                >
                  <div className="relative z-5 pt-12 px-2">
                    <p 
                      className="text-gray-700 italic mb-3 text-sm leading-snug"
                      style={{ 
                        fontFamily: 'Kalam, cursive',
                        lineHeight: '1.4'
                      }}
                    >
                      "The live actor guide was amazing! Such a creative way to explore art and solve puzzles at the same time."
                    </p>
                    <div className="flex items-center gap-2 mt-8">
                      <div className="flex text-yellow-400">
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                      <span 
                        className="text-xs text-gray-600 font-medium"
                        style={{ fontFamily: 'Kalam, cursive' }}
                      >
                        - Michael R.
                      </span>
                    </div>
                  </div>
                </div>

                <div 
                  className="relative p-4 md:col-span-2 lg:col-span-1"
                  style={{
                    transform: 'rotate(-1deg)',
                    backgroundImage: `url('/lovable-uploads/ea0d8026-e50f-4fd2-836a-86be0c3a93d9.png')`,
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '200px'
                  }}
                >
                  <div className="relative z-5 pt-12 px-2">
                    <p 
                      className="text-gray-700 italic mb-3 text-sm leading-snug"
                      style={{ 
                        fontFamily: 'Kalam, cursive',
                        lineHeight: '1.4'
                      }}
                    >
                      "Perfect date activity! We discovered so many beautiful artworks and had such a fun time solving the creative challenges together."
                    </p>
                    <div className="flex items-center gap-2 mt-8">
                      <div className="flex text-yellow-400">
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                      <span 
                        className="text-xs text-gray-600 font-medium"
                        style={{ fontFamily: 'Kalam, cursive' }}
                      >
                        - Emma & David
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      
      <div 
        className="fixed bottom-0 left-0 right-0 z-40 h-16 sm:h-20"
        style={{
          backgroundImage: `url('/lovable-uploads/7e465343-8e8a-4df2-997d-486cc9be9734.png')`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 relative h-full flex items-end pb-2">
          <Button 
            size="lg" 
            className="w-full bg-transparent hover:bg-white/10 text-black hover:text-black font-bold gap-3 border-0 shadow-none text-sm sm:text-lg py-3 relative overflow-hidden"
            asChild
          >
            <Link to="#">
              <Palette className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
              <span className="relative z-10 font-display tracking-wider" style={{ 
                fontFamily: 'Kalam, cursive',
                transform: 'rotate(-1deg)',
                textShadow: '1px 1px 0px rgba(0,0,0,0.1)'
              }}>
                Create Your Masterpiece - Coming Soon
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Experience3;
