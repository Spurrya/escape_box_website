import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clock, MapPin, Users, Zap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { asset } from '@/lib/asset';
import { useState } from "react";

const ExperienceDetails = () => {
  const isMobile = useIsMobile();
  const [glitchStates, setGlitchStates] = useState<{[key: number]: boolean}>({});

  const toggleGlitch = (imageIndex: number) => {
    setGlitchStates(prev => ({
      ...prev,
      [imageIndex]: !prev[imageIndex]
    }));
  };

  return (
    <>
      {/* About this Adventure - Full Width */}
      <div className="mb-14">
        <h3 className="text-2xl font-semibold text-foreground drop-shadow-sm mb-6">About this Adventure</h3>
        <div className="space-y-6 text-white text-lg leading-relaxed">
          <p>
            Something strange has been happening in Grange Park. People are experiencing memories that are not their own, feelings that are unusual. We know this means the doors to Unreality have cracked open and it is up to you to close them. As new recruits to Reveal, your task is to train your mind to see the unseen and protect Toronto from the effects of Unreality!
          </p>
          <p>
            Journey through hidden passages and forgotten chambers as you uncover the truth about this mysterious organization. Each puzzle solved brings you closer to initiation, but beware - not all secrets are meant to be discovered.
          </p>
        </div>
      </div>

      {/* Mind Training Visual */}
      <div className={`flex ${isMobile ? 'flex-col' : 'justify-center items-center gap-24'} mb-10 ${isMobile ? 'px-4' : 'min-h-[500px]'} relative`}>
        {/* Left side photos */}
        <div className={`flex ${isMobile ? 'flex-row justify-between gap-4 mt-8' : 'flex-col gap-16'} ${isMobile ? 'w-full px-2' : 'w-48'} relative`}>
          {/* Wooden puppet photo */}
          <div
            className={`${isMobile ? 'w-24 h-24' : 'w-40 h-40'} opacity-80 rounded-lg overflow-hidden shadow-lg relative cursor-pointer transition-all duration-300 ${
              glitchStates[0] ? 'animate-pulse' : ''
            }`}
            style={{
              animation: 'floatOnly 4s ease-in-out infinite',
              animationDelay: '0s',
              filter: glitchStates[0] 
                ? 'brightness(1.5) contrast(2) hue-rotate(180deg) drop-shadow(0 0 20px #ff0080) drop-shadow(0 0 40px #00ffff)'
                : 'none',
              transform: glitchStates[0] ? 'scale(1.1) skew(-5deg, 2deg)' : 'none'
            }}
            onClick={() => toggleGlitch(0)}
          >
            <img 
              src={asset("/lovable-uploads/3017e76c-dff0-45cb-a654-892bd00d2722.png")}
              alt="Interactive puzzle element"
              className={`w-full h-full object-cover transition-all duration-300 ${
                glitchStates[0] ? 'animate-[glitch-horizontal_0.2s_infinite,glitch-vertical_0.15s_infinite]' : ''
              }`}
            />
          </div>

          {/* Key tattoo */}
          <div
            className={`${isMobile ? 'w-20 h-20' : 'w-36 h-36'} opacity-80 rounded-lg overflow-hidden shadow-lg ${isMobile ? '' : 'ml-8'} relative cursor-pointer transition-all duration-300 ${
              glitchStates[1] ? 'animate-pulse' : ''
            }`}
            style={{
              animation: 'floatOnly 3.5s ease-in-out infinite',
              animationDelay: '1s',
              filter: glitchStates[1] 
                ? 'brightness(1.5) contrast(2) hue-rotate(90deg) drop-shadow(0 0 20px #ff4000) drop-shadow(0 0 40px #80ff00)'
                : 'none',
              transform: glitchStates[1] ? 'scale(1.1) skew(3deg, -5deg)' : 'none'
            }}
            onClick={() => toggleGlitch(1)}
          >
            <img 
              src={asset("/lovable-uploads/efbb5598-ff58-48e1-a2f9-151fd246591c.png")}
              alt="Mystery key element"
              className={`w-full h-full object-cover transition-all duration-300 ${
                glitchStates[1] ? 'animate-[glitch-horizontal_0.2s_infinite,glitch-vertical_0.15s_infinite]' : ''
              }`}
            />
          </div>

          {/* Group at church */}
          <div
            className={`${isMobile ? 'w-24 h-16' : 'w-44 h-32'} opacity-80 rounded-lg overflow-hidden shadow-lg relative cursor-pointer transition-all duration-300 ${
              glitchStates[2] ? 'animate-pulse' : ''
            }`}
            style={{
              animation: 'floatOnly 3.8s ease-in-out infinite',
              animationDelay: '2s',
              filter: glitchStates[2] 
                ? 'brightness(1.5) contrast(2) hue-rotate(270deg) drop-shadow(0 0 20px #8000ff) drop-shadow(0 0 40px #ff8000)'
                : 'none',
              transform: glitchStates[2] ? 'scale(1.1) skew(-2deg, 4deg)' : 'none'
            }}
            onClick={() => toggleGlitch(2)}
          >
            <img 
              src={asset("/lovable-uploads/8061bf81-235b-4dbb-874d-422460c46fd8.png")}
              alt="Toronto landmark exploration"
              className={`w-full h-full object-cover transition-all duration-300 ${
                glitchStates[2] ? 'animate-[glitch-horizontal_0.2s_infinite,glitch-vertical_0.15s_infinite]' : ''
              }`}
            />
          </div>
        </div>

        {/* Connection Lines to Head */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Lines from center head to images */}
          {!isMobile && (
            <>
              {/* Line from head center to wooden puppet */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                <defs>
                  <marker
                    id="arrowhead1-end"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3.5, 0 7"
                      fill="rgba(255, 255, 255, 0.8)"
                    />
                  </marker>
                </defs>
                <path
                  d="M 400 250 Q 250 150, 150 120"
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4,4"
                  markerEnd="url(#arrowhead1-end)"
                  style={{
                    animation: 'dashMove 3s linear infinite',
                  }}
                />
              </svg>
              
              {/* Line from head center to key tattoo */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                <defs>
                  <marker
                    id="arrowhead2-end"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3.5, 0 7"
                      fill="rgba(255, 255, 255, 0.8)"
                    />
                  </marker>
                </defs>
                <path
                  d="M 400 250 Q 280 290, 180 280"
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4,4"
                  markerEnd="url(#arrowhead2-end)"
                  style={{
                    animation: 'dashMove 3s linear infinite',
                    animationDelay: '0.5s'
                  }}
                />
              </svg>
              
              {/* Line from head center to group at church */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                <defs>
                  <marker
                    id="arrowhead3-end"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3.5, 0 7"
                      fill="rgba(255, 255, 255, 0.8)"
                    />
                  </marker>
                </defs>
                <path
                  d="M 400 250 Q 290 380, 190 400"
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4,4"
                  markerEnd="url(#arrowhead3-end)"
                  style={{
                    animation: 'dashMove 3s linear infinite',
                    animationDelay: '1s'
                  }}
                />
              </svg>
              
              {/* Line from head center to people under umbrella */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                <defs>
                  <marker
                    id="arrowhead4-end"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3.5, 0 7"
                      fill="rgba(255, 255, 255, 0.8)"
                    />
                  </marker>
                </defs>
                <path
                  d="M 400 250 Q 510 380, 610 400"
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4,4"
                  markerEnd="url(#arrowhead4-end)"
                  style={{
                    animation: 'dashMove 3s linear infinite',
                    animationDelay: '1.5s'
                  }}
                />
              </svg>
              
              {/* Line from head center to girl with transparent element */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                <defs>
                  <marker
                    id="arrowhead5-end"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3.5, 0 7"
                      fill="rgba(255, 255, 255, 0.8)"
                    />
                  </marker>
                </defs>
                <path
                  d="M 400 250 Q 520 290, 620 280"
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4,4"
                  markerEnd="url(#arrowhead5-end)"
                  style={{
                    animation: 'dashMove 3s linear infinite',
                    animationDelay: '2s'
                  }}
                />
              </svg>
              
              {/* Line from head center to phone with REVEAL app */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                <defs>
                  <marker
                    id="arrowhead6-end"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3.5, 0 7"
                      fill="rgba(255, 255, 255, 0.8)"
                    />
                  </marker>
                </defs>
                <path
                  d="M 400 250 Q 550 150, 650 120"
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4,4"
                  markerEnd="url(#arrowhead6-end)"
                  style={{
                    animation: 'dashMove 3s linear infinite',
                    animationDelay: '2.5s'
                  }}
                />
              </svg>
            </>
          )}
        </div>

        {/* Pixelated Head Visualization */}
        <div className="flex flex-col justify-center items-center relative" style={{ zIndex: 2 }}>
          {/* Instruction text above head */}
          <div className={`mb-6 text-center ${isMobile ? 'text-sm' : 'text-base'}`}>
            <p className="text-white font-semibold tracking-wide uppercase text-sm opacity-90 
                         bg-gradient-to-r from-red-500/20 to-purple-500/20 
                         px-4 py-2 rounded-full border border-white/20 
                         shadow-lg backdrop-blur-sm
                         hover:opacity-100 transition-opacity duration-300">
              🗝️ Click the memories 🗝️
            </p>
          </div>
          
          <div className="relative">
            {/* Pixelated Head using your uploaded image */}
            <div className={`relative ${isMobile ? 'w-60 h-72' : 'w-80 h-96'}`}>
              <img 
                src={asset("/lovable-uploads/a975b581-e904-43c7-bf9c-fc2e0eac1df9.png")}
                alt="Pixelated head visualization"
                className="w-full h-full object-contain filter brightness-0 invert opacity-90"
                style={{
                  filter: 'brightness(0) invert(1) drop-shadow(0 0 20px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))',
                  animation: 'pulse 3s ease-in-out infinite'
                }}
              />
            </div>

            {/* Floating Puzzle Pieces */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(isMobile ? 4 : 8)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute ${isMobile ? 'w-6 h-6' : 'w-8 h-8'} opacity-80`}
                  style={{
                    top: `${20 + (i * 35) % 80}%`,
                    left: `${30 + (i * 40) % 60}%`,
                    transform: `rotate(${i * 45}deg)`,
                    animation: `floatOnly ${3 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`
                  }}
                >
                  <svg viewBox="0 0 32 32" className="w-full h-full">
                    <path
                      d="M8 2 L16 2 Q18 4, 16 6 L16 8 Q20 8, 20 12 Q20 16, 16 16 L16 18 Q18 20, 16 22 L8 22 Q6 20, 8 18 L8 16 Q4 16, 4 12 Q4 8, 8 8 L8 6 Q6 4, 8 2 Z"
                      fill={i % 2 === 0 ? "rgba(255, 255, 255, 0.8)" : "rgba(220, 38, 38, 0.7)"}
                      stroke="rgba(255, 255, 255, 0.5)"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              ))}
            </div>

            {/* Energy Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(isMobile ? 6 : 12)].map((_, i) => (
                <div
                  key={`particle-${i}`}
                  className={`absolute ${isMobile ? 'w-1.5 h-1.5' : 'w-2 h-2'} bg-white rounded-full opacity-60`}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `sparkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right side photos */}
        <div className={`flex ${isMobile ? 'flex-row justify-between gap-4 mt-8' : 'flex-col gap-16'} ${isMobile ? 'w-full px-2' : 'w-48'} relative`}>
          {/* People under umbrella */}
          <div
            className={`${isMobile ? 'w-24 h-16' : 'w-44 h-32'} opacity-80 rounded-lg overflow-hidden shadow-lg relative cursor-pointer transition-all duration-300 ${
              glitchStates[3] ? 'animate-pulse' : ''
            }`}
            style={{
              animation: 'floatOnly 4.5s ease-in-out infinite',
              animationDelay: '0.5s',
              filter: glitchStates[3] 
                ? 'brightness(1.5) contrast(2) hue-rotate(45deg) drop-shadow(0 0 20px #ff0040) drop-shadow(0 0 40px #40ff00)'
                : 'none',
              transform: glitchStates[3] ? 'scale(1.1) skew(4deg, -3deg)' : 'none'
            }}
            onClick={() => toggleGlitch(3)}
          >
            <img 
              src={asset("/lovable-uploads/f5c6767e-f7af-4908-b085-bc9ad7c66c6c.png")}
              alt="Team solving puzzles"
              className={`w-full h-full object-cover transition-all duration-300 ${
                glitchStates[3] ? 'animate-[glitch-horizontal_0.2s_infinite,glitch-vertical_0.15s_infinite]' : ''
              }`}
            />
          </div>

          {/* Girl with transparent element */}
          <div
            className={`${isMobile ? 'w-24 h-24' : 'w-40 h-40'} opacity-80 rounded-lg overflow-hidden shadow-lg ${isMobile ? '' : 'mr-8'} relative cursor-pointer transition-all duration-300 ${
              glitchStates[4] ? 'animate-pulse' : ''
            }`}
            style={{
              animation: 'floatOnly 4.2s ease-in-out infinite',
              animationDelay: '1.5s',
              filter: glitchStates[4] 
                ? 'brightness(1.5) contrast(2) hue-rotate(315deg) drop-shadow(0 0 20px #0080ff) drop-shadow(0 0 40px #ff4080)'
                : 'none',
              transform: glitchStates[4] ? 'scale(1.1) skew(-4deg, 2deg)' : 'none'
            }}
            onClick={() => toggleGlitch(4)}
          >
            <img 
              src={asset("/lovable-uploads/4f3c4314-1d6e-463d-84ee-8ea081ffa702.png")}
              alt="Interactive AR element"
              className={`w-full h-full object-cover transition-all duration-300 ${
                glitchStates[4] ? 'animate-[glitch-horizontal_0.2s_infinite,glitch-vertical_0.15s_infinite]' : ''
              }`}
            />
          </div>

          {/* Phone with REVEAL app */}
          <div
            className={`${isMobile ? 'w-20 h-24' : 'w-36 h-40'} opacity-80 rounded-lg overflow-hidden shadow-lg relative cursor-pointer transition-all duration-300 ${
              glitchStates[5] ? 'animate-pulse' : ''
            }`}
            style={{
              animation: 'floatOnly 4.3s ease-in-out infinite',
              animationDelay: '2.5s',
              filter: glitchStates[5] 
                ? 'brightness(1.5) contrast(2) hue-rotate(135deg) drop-shadow(0 0 20px #00ff80) drop-shadow(0 0 40px #8040ff)'
                : 'none',
              transform: glitchStates[5] ? 'scale(1.1) skew(3deg, -4deg)' : 'none'
            }}
            onClick={() => toggleGlitch(5)}
          >
            <img 
              src={asset("/lovable-uploads/9f03b0e7-0218-4370-a452-4420ec5f7bde.png")}
              alt="REVEAL mobile app"
              className={`w-full h-full object-cover transition-all duration-300 ${
                glitchStates[5] ? 'animate-[glitch-horizontal_0.2s_infinite,glitch-vertical_0.15s_infinite]' : ''
              }`}
            />
          </div>
        </div>
      </div>

      {/* Experience Details Card and What Makes This Special - Side by Side */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Training Details Card */}
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-md w-full mb-6">
            <Card className="bg-primary/10 border-primary/20 relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-transparent opacity-60" />
              <CardHeader className="relative z-10 pb-4">
                <h3 className="text-xl font-semibold text-foreground">Training Details</h3>
              </CardHeader>
              <CardContent className="space-y-3 relative z-10 pt-0">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-red-500" />
                  <span className="text-base">Difficulty: Medium</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-red-500" />
                  <span className="text-base">Up to 10 minds in training</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span className="text-base">Duration: 2 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="text-base">Grange Park</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Wireframe Image */}
          <div className="w-48 max-w-xs">
            <img 
              src={asset("/lovable-uploads/5831157b-769a-4d98-87bd-0a6e79322462.png")}
              alt="Training wireframe diagram"
              className="w-full h-auto filter brightness-0 invert opacity-80"
            />
          </div>
        </div>

        {/* What Makes This Special */}
        <div className="space-y-6">
          <h4 className="text-2xl font-semibold text-foreground drop-shadow-sm">What makes this special:</h4>
          <ul className="space-y-3 text-muted-foreground text-lg">
            <li>• Professional improv actors as your <span className="font-bold text-red-500">NPC tour guides</span></li>
            <li>• Explore authentic Toronto street art and culture</li>
            <li>• Interactive puzzles at <span className="font-bold text-red-500">iconic city locations</span></li>
            <li>• Immersive storytelling with professional guides</li>
            <li>• Perfect blend of tourism and adventure gaming</li>
            <li>• Excellent team building experience</li>
          </ul>
        </div>
      </div>

      {/* style animations */}
      <style>{`
        @keyframes floatOnly {
          0%, 100% {
            transform: translateY(0px);
          }
          25% {
            transform: translateY(-8px);
          }
          50% {
            transform: translateY(-15px);
          }
          75% {
            transform: translateY(-8px);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes dashMove {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 20;
          }
        }

        @keyframes glitch-horizontal {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
        }

        @keyframes glitch-vertical {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-1px); }
          50% { transform: translateY(1px); }
          75% { transform: translateY(-1px); }
        }
      `}</style>
    </>
  );
};

export default ExperienceDetails;
