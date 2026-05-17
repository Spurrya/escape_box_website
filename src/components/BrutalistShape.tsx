
import React, { useState } from 'react';

const BrutalistShape = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleClick = () => {
    setIsAnimated(true);
    setTimeout(() => setIsAnimated(false), 1000);
  };

  return (
    <div className="py-20 bg-white flex items-center justify-center">
      <div 
        className={`relative cursor-pointer transition-all duration-1000 ${
          isAnimated ? 'animate-pulse scale-110' : 'hover:scale-105'
        }`}
        onClick={handleClick}
        style={{
          filter: 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 40px rgba(0, 0, 0, 0.1))'
        }}
      >
        <svg 
          width="800" 
          height="300" 
          viewBox="0 0 600 200" 
          className={`transform transition-all duration-500 ${
            isAnimated ? 'animate-bounce' : ''
          }`}
        >
          {/* Brutalist grid pattern */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#000" strokeWidth="1"/>
            </pattern>
          </defs>
          
          {/* Main brutalist shape */}
          <path
            d="M50 150 Q100 50 200 80 Q300 40 400 90 Q500 60 550 120 Q520 180 400 160 Q300 190 200 170 Q100 180 50 150 Z"
            fill="url(#grid)"
            stroke="#000"
            strokeWidth="2"
            className={`transition-all duration-500 ${
              isAnimated ? 'fill-gray-900' : 'fill-white hover:fill-gray-100'
            }`}
          />
          
          {/* Additional brutalist elements */}
          <rect x="150" y="100" width="40" height="20" fill="#000" className={isAnimated ? 'animate-pulse' : ''} />
          <rect x="250" y="110" width="30" height="15" fill="#000" className={isAnimated ? 'animate-pulse' : ''} />
          <rect x="350" y="95" width="35" height="25" fill="#000" className={isAnimated ? 'animate-pulse' : ''} />
          <rect x="450" y="105" width="25" height="18" fill="#000" className={isAnimated ? 'animate-pulse' : ''} />
          
          {/* Connecting lines */}
          <line x1="170" y1="110" x2="265" y2="118" stroke="#000" strokeWidth="1" />
          <line x1="280" y1="118" x2="367" y2="108" stroke="#000" strokeWidth="1" />
          <line x1="385" y1="108" x2="462" y2="114" stroke="#000" strokeWidth="1" />
        </svg>
        
        {/* Floating elements that animate */}
        <div className={`absolute -top-4 left-20 w-3 h-3 bg-black transition-all duration-700 ${
          isAnimated ? 'translate-y-[-20px] rotate-45' : ''
        }`} />
        <div className={`absolute -top-2 right-20 w-2 h-2 bg-black transition-all duration-700 ${
          isAnimated ? 'translate-y-[-15px] rotate-90' : ''
        }`} />
        <div className={`absolute -bottom-3 left-1/3 w-4 h-2 bg-black transition-all duration-700 ${
          isAnimated ? 'translate-y-[15px] rotate-12' : ''
        }`} />
      </div>
    </div>
  );
};

export default BrutalistShape;
