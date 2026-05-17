
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-kiwi-green-light/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5 animate-bounce"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            <div className="w-8 h-8 border border-kiwi-green/30 rotate-45 transform" />
          </div>
        ))}
      </div>
      
      {/* Gradient overlay that moves */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-kiwi-green/5 to-transparent animate-pulse" 
           style={{ animationDuration: '8s' }} />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(120, 180, 50, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120, 180, 50, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'float 20s ease-in-out infinite'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
