import { useEffect, useState } from 'react';
import { asset } from '@/lib/asset';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import MurderBoard from "@/components/MurderBoard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, MapPin, Users, Zap, Box, CheckCircle, Activity, Brain, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Experience1 = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

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

    // Add mouse move event handler to track cursor position
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Cleanup
      const existingStyle = document.getElementById('hide-cursor-styles');
      if (existingStyle) {
        existingStyle.remove();
      }
      document.body.style.cursor = '';
      document.documentElement.style.cursor = '';
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'border-blue-500/50 bg-blue-900/20';
      case 'unstable': return 'border-purple-500/50 bg-purple-900/20';
      case 'danger': return 'border-indigo-600/50 bg-indigo-900/30';
      case 'monitored': return 'border-cyan-500/50 bg-cyan-900/20';
      case 'temporal': return 'border-purple-500/50 bg-purple-900/20';
      case 'displaced': return 'border-blue-500/50 bg-blue-900/20';
      case 'final': return 'border-violet-500/50 bg-violet-900/30';
      default: return 'border-gray-500/50 bg-gray-900/20';
    }
  };

  const ruinSymbols = ['⚡', '☠', '⚠', '◊', '▲', '◆', '●', '✕', '⟐', '⬢', '◈', '⬡'];
  const corruptedFragments = ['ERR0R', '404', 'NULL', 'VOID', '---', '###', '***'];

  const scheduleEvents = [
    {
      title: "MISSION BRIEFING",
      duration: "15 mins",
      description: "Luna is trapped between in unreality and she needs you to save her! Meet your NPC guide and begin your adventure.",
      status: "critical"
    },
    {
      title: "THE THIMBLE PORTAL",
      duration: "15 mins",
      description: "First dimensional gateway detected. Reality stabilizers failing. Checkout a unique landmark in Toronto Queen West!",
      status: "unstable"
    },
    {
      title: "GRAFFITI DIMENSION",
      duration: "30 mins",
      description: "Warning: Reality distortion at maximum. Try to navigate the images and streets of Graffiti Alley. Learn what is reality and what is unreality.",
      status: "danger"
    },
    {
      title: "THE WATCHING POSTER",
      duration: "15 mins",
      description: "Surveillance anomaly detected. Something is watching from between the realities.",
      status: "monitored"
    },
    {
      title: "CAMERON HOUSE RIFT",
      duration: "15 mins",
      description: "Historic building showing signs of dimensional bleeding.",
      status: "temporal"
    },
    {
      title: "VEHICLE DISPLACEMENT",
      duration: "15 mins",
      description: "Space-time distortion detected. Objects appearing in impossible locations.",
      status: "displaced"
    },
    {
      title: "ANCIENT CODE RUINS",
      duration: "15 mins",
      description: "Final location: Decode the ancient ruins to save Luna before time runs out!",
      status: "final"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Custom Cursor */}
      <div
        className="fixed rounded-full pointer-events-none z-[9999]"
        style={{
          width: '12px',
          height: '12px',
          backgroundColor: '#6366f1',
          left: cursorPosition.x - 6,
          top: cursorPosition.y - 6,
          boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)'
        }}
      />

      {/* Enhanced Brutalist Background Effects */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(99, 102, 241, 0.4) 1px, transparent 1px),
              linear-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            animation: 'brutalist-grid-warp 20s ease-in-out infinite'
          }}
        />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            animation: 'brutalist-grid-warp 25s ease-in-out infinite reverse'
          }}
        />

        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 40px,
                rgba(99, 102, 241, 0.2) 40px,
                rgba(99, 102, 241, 0.2) 42px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 60px,
                rgba(139, 92, 246, 0.15) 60px,
                rgba(139, 92, 246, 0.15) 62px
              )
            `,
            animation: 'mind-warp-pulse 18s ease-in-out infinite'
          }}
        />

        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, transparent 20%, rgba(139, 92, 246, 0.5) 50%, transparent 80%),
              radial-gradient(circle at 75% 75%, transparent 20%, rgba(59, 130, 246, 0.4) 50%, transparent 80%),
              linear-gradient(45deg, transparent 40%, rgba(99, 102, 241, 0.3) 50%, transparent 60%)
            `,
            backgroundSize: '200px 200px, 150px 150px, 100px 100px',
            animation: 'mind-warp-pulse 15s ease-in-out infinite'
          }}
        />

        <div className="absolute top-20 right-10 opacity-30">
          <img
            src={asset("/lovable-uploads/76ae42c4-7768-481d-9bce-775dccd458ec.png")}
            alt="wireframe hands"
            className="w-32 h-24 object-contain"
            style={{
              filter: 'hue-rotate(220deg) saturate(2) brightness(1.5)',
              animation: 'brutalist-float 12s ease-in-out infinite'
            }}
          />
        </div>

        <div className="absolute bottom-40 left-10 opacity-25">
          <img
            src={asset("/lovable-uploads/76ae42c4-7768-481d-9bce-775dccd458ec.png")}
            alt="wireframe hands"
            className="w-28 h-20 object-contain transform rotate-45"
            style={{
              filter: 'hue-rotate(280deg) saturate(1.8) brightness(1.3)',
              animation: 'brutalist-float 15s ease-in-out infinite reverse'
            }}
          />
        </div>

        <div className="absolute top-1/2 right-1/4 opacity-20">
          <img
            src={asset("/lovable-uploads/76ae42c4-7768-481d-9bce-775dccd458ec.png")}
            alt="wireframe hands"
            className="w-24 h-18 object-contain transform -rotate-12"
            style={{
              filter: 'hue-rotate(180deg) saturate(2.2) brightness(1.4)',
              animation: 'brutalist-float 18s ease-in-out infinite'
            }}
          />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-25"
              style={{
                left: `${5 + i * 12}%`,
                top: `${3 + i * 11}%`,
                width: `${30 + i * 8}px`,
                height: `${30 + i * 8}px`,
                border: '1px solid rgba(99, 102, 241, 0.7)',
                borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '0%' : '25%',
                animation: `brutalist-float ${6 + i * 1.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
                transform: `rotate(${i * 35}deg)`,
                boxShadow: '0 0 10px rgba(99, 102, 241, 0.3)'
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 opacity-8">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                conic-gradient(from 0deg at 20% 30%, transparent 0deg, rgba(139, 92, 246, 0.2) 90deg, transparent 180deg),
                conic-gradient(from 0deg at 80% 70%, transparent 0deg, rgba(59, 130, 246, 0.15) 90deg, transparent 180deg)
              `,
              backgroundSize: '300px 300px, 250px 250px',
              animation: 'mind-warp-pulse 22s ease-in-out infinite'
            }}
          />
        </div>
      </div>

      <Navbar />

      <div className="relative min-h-screen flex flex-col">
        <div className="relative z-20 pt-16 md:pt-20 mb-8">
          <div className="flex justify-center px-4">
            <img
              src={asset("/lovable-uploads/909692ea-ace6-4600-a374-0b7ca287cec5.png")}
              alt="Escape from Unreality symbols"
              className="w-80 md:w-100 h-auto object-contain"
              style={{
                filter: 'brightness(1.2) contrast(1.1)'
              }}
            />
          </div>
        </div>

        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-2 sm:py-2 md:py-2">
          <div className="mb-8 md:mb-12">
            <h1
              className="text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] xl:text-[14rem] font-bold font-display leading-none mb-2 md:mb-4 text-blue-500"
              style={{
                textShadow: '0 0 40px rgba(59, 130, 246, 0.6)'
              }}
            >
              Escape
            </h1>
            <h2
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] font-bold text-white/95"
              style={{
                textShadow: '0 0 20px rgba(99, 102, 241, 0.8)'
              }}
            >
              From Unreality
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-blue-300 max-w-3xl mx-auto leading-relaxed px-2">
              Join REVEAL now!
              <span className="block mt-2 md:mt-3 text-purple-400 font-bold">
                Live actors and puzzle based experiences in Toronto!
              </span>
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-blue-500/50 gap-2 md:gap-3 shadow-2xl text-base sm:text-lg md:text-xl px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-6"
              style={{
                boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
              }}
              asChild
            >
              <Link to="https://app.escapeworld.ca/book/ep1">
                <Box className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" />
                Join REVEAL - Book Now!
              </Link>
            </Button>
          </div>
        </div>

      </div>

      <div className="flex-grow pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">About this adventure</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="space-y-4">
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Step into Toronto's most mind-bending adventure where reality and unreality merge before your eyes!
                Navigate the vibrant streets of Queen West along side a REVEAL orientation spealist. Solve puzzles and complete challenges as dimensions blur and the city reveals its hidden secrets.
              </p>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Perfect for tourists and locals who want to experience Toronto's authentic street culture while being part of
                an immersive mystery. You're not just sightseeing, you're uncovering the mysteries of Unreality!
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">What makes this special:</h4>
              <ul className="space-y-2 text-sm md:text-base text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Professional improv actors as your <strong className="text-purple-400">NPC tour guides</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Explore authentic Toronto street art and culture</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Interactive puzzles at <strong className="text-purple-400 font-bold">iconic city locations</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Immersive storytelling with professional guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Perfect blend of tourism and adventure gaming</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Excellent team building experience</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative z-10 mb-12 md:mb-16">
            <MurderBoard />
          </div>

          <Card className="bg-gray-900/80 border-purple-500/50 backdrop-blur-sm mb-8 md:mb-12">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Brain className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                Mission details
              </h3>
            </CardHeader>
            <CardContent>
              <div className="md:hidden">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                    <span className="text-sm md:text-base text-gray-300">Difficulty: <span className="text-cyan-400 font-medium">Medium</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                    <span className="text-sm md:text-base text-gray-300">Team size: Up to 16 Agents</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-violet-400" />
                    <span className="text-sm md:text-base text-gray-300">Duration: 2 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-indigo-400" />
                    <span className="text-sm md:text-base text-gray-300">Location: Queen Street West</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <img
                    src={asset("/lovable-uploads/578efbc2-4cba-4050-8d1a-2a931d46831f.png")}
                    alt="wireframe hands"
                    className="w-full h-auto object-contain max-h-44"
                    style={{
                      filter: 'brightness(2) contrast(1.5) invert(1)'
                    }}
                  />
                </div>
              </div>

              <div className="hidden md:flex gap-6">
                <div className="flex-grow space-y-3">
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                    <span className="text-sm md:text-base text-gray-300">Difficulty: <span className="text-cyan-400 font-medium">Medium</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                    <span className="text-sm md:text-base text-gray-300">Team size: Up to 16 Agents</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-violet-400" />
                    <span className="text-sm md:text-base text-gray-300">Duration: 2 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-indigo-400" />
                    <span className="text-sm md:text-base text-gray-300">Location: Queen Street West</span>
                  </div>
                </div>

                <div className="flex-shrink-0 flex items-center justify-center w-80 md:w-96">
                  <img
                    src={asset("/lovable-uploads/578efbc2-4cba-4050-8d1a-2a931d46831f.png")}
                    alt="wireframe hands"
                    className="w-full h-auto object-contain max-h-44 md:max-h-52"
                    style={{
                      filter: 'brightness(2) contrast(1.5) invert(1)'
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white flex items-center gap-3">
              <Activity className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
              Your mission
            </h2>
            <p className="text-blue-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
              To complete orientation you and your team will navigate each location and tour Toronto with a Reveal Agent solving puzzles. You will follow the steps below!
            </p>

            <div className="grid gap-4">
              {scheduleEvents.map((event, index) => (
                <Card key={index} className={`${getStatusColor(event.status)} backdrop-blur-sm hover:border-purple-500/70 transition-all duration-300 group relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse"
                      style={{
                        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59,130,246,0.3) 2px, rgba(59,130,246,0.3) 4px)',
                        animation: 'glitch-scan 0.3s linear infinite'
                      }} />

                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute text-blue-400 opacity-60 animate-bounce"
                        style={{
                          left: `${Math.random() * 90}%`,
                          top: `${Math.random() * 80}%`,
                          fontSize: `${12 + Math.random() * 8}px`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${0.5 + Math.random() * 1}s`,
                          filter: 'blur(0.5px)',
                          transform: `rotate(${Math.random() * 360}deg)`
                        }}
                      >
                        {ruinSymbols[Math.floor(Math.random() * ruinSymbols.length)]}
                      </div>
                    ))}

                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute text-purple-400 opacity-40 font-mono text-xs animate-pulse"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${10 + i * 20}%`,
                          animationDelay: `${i * 0.3}s`,
                          filter: 'blur(1px)',
                          textShadow: '0 0 5px rgba(139, 92, 246, 0.8)'
                        }}
                      >
                        {corruptedFragments[Math.floor(Math.random() * corruptedFragments.length)]}
                      </div>
                    ))}
                  </div>

                  <CardContent className="p-4 md:p-6 relative z-10">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg 
                                    transition-all duration-300 relative overflow-hidden
                                    hover:animate-spin hover:scale-110
                                    hover:shadow-[0_0_30px_rgba(139,92,246,0.9)]
                                    group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-600
                                    hover:[filter:contrast(2)_saturate(3)_hue-rotate(180deg)_brightness(1.5)]
                                    hover:[animation:glitch-horizontal_0.1s_ease-in-out_infinite,_spin_0.8s_linear_infinite]">

                        <div className="absolute inset-0 opacity-0 hover:opacity-70 transition-opacity duration-100"
                          style={{
                            background: `repeating-linear-gradient(
                                 45deg,
                                 transparent,
                                 transparent 1px,
                                 rgba(59,130,246,0.3) 1px,
                                 rgba(59,130,246,0.3) 2px
                               )`,
                            animation: 'glitch-horizontal 0.1s ease-in-out infinite'
                          }} />

                        <span className="relative z-10 group-hover:animate-pulse text-sm md:text-base">{index + 1}</span>

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute text-blue-400 text-xs animate-ping"
                              style={{
                                left: `${-20 + i * 15}px`,
                                top: `${-10 + i * 10}px`,
                                animationDelay: `${i * 0.1}s`,
                                animationDuration: '0.5s'
                              }}
                            >
                              {ruinSymbols[i % ruinSymbols.length]}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                          <h3 className="text-base md:text-lg font-semibold text-white transition-all duration-200 relative
                                       hover:text-blue-400
                                       hover:[animation:glitch-horizontal_0.1s_ease-in-out_infinite,_glitch-vertical_0.15s_ease-in-out_infinite]
                                       hover:[filter:contrast(2)_saturate(3)_hue-rotat
                                       hover:[text-shadow:2px_0_#3b82f6,-2px_0_#06b6d4,0_2px_#8b5cf6]
                                       group-hover:animate-pulse">

                            <span className="absolute inset-0 opacity-0 hover:opacity-60 text-blue-500 blur-sm animate-pulse">
                              {event.title.split('').map((char, i) =>
                                Math.random() > 0.7 ? ruinSymbols[Math.floor(Math.random() * ruinSymbols.length)] : char
                              ).join('')}
                            </span>

                            <span className="relative z-10">{event.title}</span>
                          </h3>

                          <div className="flex gap-2">
                            <span className="text-xs md:text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded group-hover:bg-blue-900/50 group-hover:text-blue-300 transition-colors">
                              {event.duration}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded font-bold transition-all duration-300 ${event.status === 'critical' || event.status === 'final' ? 'bg-purple-600 text-white group-hover:bg-blue-700 group-hover:animate-pulse' :
                              event.status === 'danger' ? 'bg-indigo-600 text-white group-hover:bg-blue-700 group-hover:animate-pulse' :
                                'bg-gray-600 text-gray-200 group-hover:bg-blue-800 group-hover:text-blue-200'
                              }`}>
                              {event.status.toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">What to bring</h2>
            <Card className="bg-gray-900/80 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6">
                <div className="md:hidden">
                  <ul className="space-y-3 text-sm md:text-base text-gray-300 mb-6">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                      <span>Comfortable walking shoes for exploring the streets</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                      <span>Weather-appropriate clothing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Smartphone className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                      <span>Fully charged smartphone</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                      <span>An open mind ready for reality to bend</span>
                    </li>
                  </ul>

                  <div className="flex justify-center">
                    <img
                      src={asset("/lovable-uploads/f476a3d4-25d6-4405-b22a-4423124ca8c9.png")}
                      alt="brutalist geometric design"
                      className="w-full h-auto object-contain max-h-40"
                      style={{
                        filter: 'brightness(1.5) contrast(1.2) invert(1)'
                      }}
                    />
                  </div>
                </div>

                <div className="hidden md:flex gap-6">
                  <div className="flex-grow">
                    <ul className="space-y-3 text-sm md:text-base text-gray-300">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                        <span>Comfortable walking shoes for exploring the streets</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                        <span>Weather-appropriate clothing</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Smartphone className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                        <span>Fully charged smartphone</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                        <span>An open mind ready for reality to bend</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex-shrink-0 flex items-center justify-center w-64 md:w-80">
                    <img
                      src={asset("/lovable-uploads/f476a3d4-25d6-4405-b22a-4423124ca8c9.png")}
                      alt="brutalist geometric design"
                      className="w-full h-auto object-contain max-h-36 md:max-h-44"
                      style={{
                        filter: 'brightness(1.5) contrast(1.2) invert(1)'
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">Frequently asked questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300 text-left">Is this suitable for tourists who don't know Toronto?</AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Absolutely! This experience is designed to showcase Toronto's authentic culture and hidden gems.
                  Our guides will help you navigate while you solve puzzles and explore the city's most vibrant neighborhoods.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-1a" className="border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300 text-left">Is it suitable for locals?</AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Yes! Locals will enjoy not only rediscovering the city but also the theatrics and game play provided from this experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300 text-left">What if it rains during our adventure?</AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Rain adds to the atmosphere! We provide weather contingencies and some locations offer shelter.
                  Just dress appropriately and embrace the Toronto experience in any weather. If a weather emergency occurs Escape Box will organize another time with you to play enjoy the experience when it is safe to do so.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300 text-left">How physically demanding is this experience?</AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-300 leading-relaxed">
                  This involves moderate walking through downtown Toronto over 90 minutes. Most participants find it
                  comfortable, but please wear good walking shoes as you'll be exploring various street locations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300 text-left">Can I take photos during the experience?</AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Yes! We encourage photos of the amazing street art and locations you'll discover.
                  Just be mindful during puzzle-solving moments to stay immersed in the story.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300 text-left">What happens if I can't solve a puzzle?</AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Don't worry! Our guides are there to help keep the story moving. The focus is on having fun
                  and exploring Toronto, not getting stuck. We want everyone to enjoy the full experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300 text-left">Is this experience family-friendly?</AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Yes! This experience is suitable for all ages and children 14 and under must be accompanied by an adult.
                  The puzzles are engaging for all ages, and it's a great way to explore Toronto together while having fun.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300 text-left">What is the cancellation policy?</AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Players can cancel an experience with 48 hours notice for a full refund.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <TestimonialsSection />

          <div className="mb-0">
            <div className="relative flex justify-center">
              <img
                src={asset("/lovable-uploads/a9fc5774-4fe8-4ee2-825d-e67cd4a61aec.png")}
                alt="Wireframe grid distortion"
                className="w-full max-w-4xl h-auto object-contain opacity-80"
                style={{
                  filter: 'invert(1) brightness(1.2)',
                  animation: 'wireframe-flow 20s ease-in-out infinite'
                }}
              />

              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(45deg, transparent 45%, rgba(99, 102, 241, 0.1) 50%, transparent 55%),
                    linear-gradient(-45deg, transparent 45%, rgba(139, 92, 246, 0.1) 50%, transparent 55%)
                  `,
                  animation: 'wireframe-pulse 25s ease-in-out infinite'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-900 border-blue-500/80 border-t shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <Button
            size="lg"
            className="w-full font-semibold gap-2 md:gap-3 border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm md:text-base py-3 md:py-4"
            style={{
              boxShadow: '0 0 20px rgba(59,130,246,0.5)'
            }}
            asChild
          >
            <Link to="https://app.escapeworld.ca/book/ep1">
              <Box className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" />
              Join REVEAL - Book Now
            </Link>
          </Button>
        </div>
      </div>

      <style>
        {`
        @keyframes wireframe-flow {
          0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); }
          33% { transform: translateY(-6px) scale(1.003) rotate(0.8deg); }
          66% { transform: translateY(3px) scale(0.997) rotate(-0.5deg); }
        }
        
        @keyframes wireframe-pulse {
          0%, 100% { opacity: 0.20; }
          50% { opacity: 0.15; }
        }
        `}
      </style>
    </div>
  );
};

export default Experience1;
