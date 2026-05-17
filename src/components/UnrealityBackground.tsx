
import React, { useEffect, useState } from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, AreaChart, Area, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const UnrealityBackground = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000 + Math.random() * 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  // Dynamic data that changes based on scroll
  const dimensionData = [
    { time: 0, reality: 100 - scrollY * 0.1, unreality: scrollY * 0.1, dimensional_rift: 20 + scrollY * 0.05 },
    { time: 1, reality: 85 - scrollY * 0.08, unreality: 25 + scrollY * 0.12, dimensional_rift: 45 + scrollY * 0.03 },
    { time: 2, reality: 60 - scrollY * 0.06, unreality: 55 + scrollY * 0.08, dimensional_rift: 70 + scrollY * 0.02 },
    { time: 3, reality: 30 - scrollY * 0.04, unreality: 85 + scrollY * 0.06, dimensional_rift: 95 + scrollY * 0.01 },
    { time: 4, reality: Math.max(0, 10 - scrollY * 0.02), unreality: Math.min(100, 100 + scrollY * 0.04), dimensional_rift: 80 },
    { time: 5, reality: 45 - scrollY * 0.05, unreality: 70 + scrollY * 0.07, dimensional_rift: 60 + scrollY * 0.04 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Glitch Screen Effect */}
      {glitchActive && (
        <div className="absolute inset-0 z-50 mix-blend-difference">
          <div className="absolute inset-0 bg-red-500 opacity-20 animate-pulse" 
               style={{ animationDuration: '0.1s' }} />
          <div className="absolute inset-0" 
               style={{
                 background: `repeating-linear-gradient(
                   0deg,
                   transparent,
                   transparent 2px,
                   rgba(255,0,0,0.1) 2px,
                   rgba(255,0,0,0.1) 4px
                 )`,
                 animation: 'glitch-scan 0.2s linear infinite'
               }} />
        </div>
      )}

      {/* Parallax Shadow Figures */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-30 transition-transform duration-1000"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + i * 15}%`,
              transform: `translateY(${scrollY * (0.1 + i * 0.05)}px) rotate(${scrollY * 0.02}deg)`,
              animationDelay: `${i * 1.5}s`,
            }}
          >
            <div className="relative">
              <div className="w-16 h-40 bg-gradient-to-b from-purple-900 via-gray-800 to-transparent transform skew-x-12 blur-sm animate-pulse" 
                   style={{ animationDuration: `${3 + i}s` }} />
              {/* Glowing eyes */}
              <div className="absolute top-8 left-4 w-1 h-1 bg-red-400 rounded-full animate-ping" />
              <div className="absolute top-8 left-7 w-1 h-1 bg-red-400 rounded-full animate-ping" 
                   style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        ))}
      </div>

      {/* Floating Code Fragments */}
      <div className="absolute inset-0">
        {['01001100', '01010101', '01001110', '01000001'].map((code, i) => (
          <div
            key={code}
            className="absolute text-green-400 font-mono text-xs opacity-40 animate-bounce"
            style={{
              left: `${20 + i * 25}%`,
              top: `${30 + Math.sin(scrollY * 0.01 + i) * 20}%`,
              transform: `translateY(${scrollY * -0.3}px)`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${2 + i * 0.5}s`,
            }}
          >
            {code}
          </div>
        ))}
      </div>

      {/* Dynamic Reality Charts that respond to scroll */}
      <div className="absolute top-10 right-10 w-56 h-40 opacity-40 transition-all duration-500"
           style={{ transform: `scale(${1 + scrollY * 0.0005}) rotate(${scrollY * 0.05}deg)` }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={dimensionData}>
            <Line 
              type="monotone" 
              dataKey="reality" 
              stroke="#ff0000" 
              strokeWidth={3}
              dot={false}
              strokeDasharray={glitchActive ? "2 2" : "5 5"}
            />
            <Line 
              type="monotone" 
              dataKey="unreality" 
              stroke="#00ff00" 
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="absolute bottom-20 left-10 w-64 h-44 opacity-35 transition-all duration-500"
           style={{ transform: `translateX(${scrollY * 0.1}px) scale(${1 + scrollY * 0.0003})` }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dimensionData}>
            <Area 
              type="monotone" 
              dataKey="dimensional_rift" 
              stroke="#9333ea" 
              fill="url(#dimensionalGradient)"
              strokeWidth={2}
            />
            <defs>
              <linearGradient id="dimensionalGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9333ea" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#9333ea" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Portal Effects */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${30 + i * 20}%`,
              top: `${40 + i * 15}%`,
              transform: `translateY(${scrollY * (0.2 + i * 0.1)}px)`,
            }}
          >
            <div 
              className="w-24 h-24 rounded-full border-4 border-purple-500/50 animate-spin"
              style={{
                background: `conic-gradient(from ${scrollY * 0.5}deg, 
                  rgba(147, 51, 234, 0.1), 
                  rgba(239, 68, 68, 0.1), 
                  rgba(59, 130, 246, 0.1), 
                  rgba(147, 51, 234, 0.1))`,
                animationDuration: `${10 + i * 2}s`,
                boxShadow: '0 0 20px rgba(147, 51, 234, 0.3), inset 0 0 20px rgba(147, 51, 234, 0.1)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Dimensional Tears */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.1 + i * 45}deg)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          >
            <div 
              className="w-1 bg-gradient-to-t from-red-500 to-purple-500 blur-sm opacity-60"
              style={{
                height: `${20 + Math.random() * 40}px`,
                boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Animated Grid that distorts */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.4) 1px, transparent 1px),
            linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 80px 80px, 80px 80px',
          transform: `translateY(${scrollY * 0.2}px) skew(${Math.sin(scrollY * 0.01) * 2}deg)`,
          animation: 'grid-distort 20s ease-in-out infinite'
        }}
      />

      {/* Floating Luna Distress Signals */}
      <div className="absolute inset-0">
        {['HELP', 'LUNA', 'SAVE', 'TIME'].map((text, i) => (
          <div
            key={text}
            className="absolute text-red-400 font-bold text-lg opacity-30 animate-bounce"
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + Math.cos(scrollY * 0.01 + i) * 30}%`,
              transform: `translateY(${scrollY * -0.5}px) scale(${1 + Math.sin(scrollY * 0.01 + i) * 0.2})`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${3 + i * 0.5}s`,
              textShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
              filter: `blur(${Math.sin(scrollY * 0.01 + i) * 2}px)`
            }}
          >
            {text}
          </div>
        ))}
      </div>

      {/* Reality Breakdown Particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.3)}px)`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <div 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                background: `linear-gradient(45deg, 
                  ${i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#9333ea' : '#3b82f6'}, 
                  transparent)`,
                boxShadow: `0 0 8px ${i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#9333ea' : '#3b82f6'}`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnrealityBackground;
