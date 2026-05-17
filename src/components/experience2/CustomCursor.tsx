
import { useState, useEffect } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [trailPositions, setTrailPositions] = useState<CursorPosition[]>([]);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let moveTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setCursorPosition(newPosition);
      setIsMoving(true);

      // Add to trail with delay
      setTrailPositions(prev => {
        const newTrail = [...prev, newPosition];
        return newTrail.slice(-15); // Keep last 15 positions
      });

      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => setIsMoving(false), 150);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.body.style.cursor = 'none'; // Hide default cursor

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto'; // Restore default cursor
      clearTimeout(moveTimeout);
    };
  }, []);

  return (
    <>
      {/* Trailing light effects */}
      {trailPositions.map((position, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-50"
          style={{
            left: position.x - 6,
            top: position.y - 6,
            opacity: (index + 1) / trailPositions.length * 0.8,
            transform: `scale(${(index + 1) / trailPositions.length})`,
          }}
        >
          <div
            className="w-3 h-3 rounded-full bg-white"
            style={{
              boxShadow: `
                0 0 10px rgba(255, 255, 255, 0.8),
                0 0 20px rgba(255, 255, 255, 0.6),
                0 0 30px rgba(255, 255, 255, 0.4)
              `,
              animation: `trailFade ${0.5 + index * 0.1}s ease-out forwards`
            }}
          />
        </div>
      ))}

      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: cursorPosition.x - 8,
          top: cursorPosition.y - 8,
          transition: isMoving ? 'none' : 'all 0.1s ease-out',
        }}
      >
        {/* Outer glow ring */}
        <div
          className="absolute w-6 h-6 rounded-full border-2 border-white opacity-60"
          style={{
            animation: isMoving ? 'cursorPulse 0.3s ease-out infinite' : 'none',
            boxShadow: `
              0 0 15px rgba(255, 255, 255, 0.8),
              0 0 30px rgba(255, 255, 255, 0.4),
              inset 0 0 10px rgba(255, 255, 255, 0.3)
            `,
          }}
        />
        
        {/* Inner core */}
        <div
          className="absolute w-2 h-2 rounded-full bg-white top-2 left-2"
          style={{
            boxShadow: `
              0 0 8px rgba(255, 255, 255, 1),
              0 0 16px rgba(255, 255, 255, 0.8)
            `,
            animation: isMoving ? 'coreGlow 0.2s ease-out infinite' : 'none',
          }}
        />

        {/* Wavy particles around cursor */}
        {isMoving && (
          <>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-80"
                style={{
                  top: 8 + Math.sin((Date.now() * 0.01) + i) * 12,
                  left: 8 + Math.cos((Date.now() * 0.01) + i) * 12,
                  animation: `wavyOrbit ${1 + i * 0.2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                  boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes cursorPulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.9;
          }
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }

        @keyframes coreGlow {
          0% {
            transform: scale(1);
            box-shadow: 
              0 0 8px rgba(255, 255, 255, 1),
              0 0 16px rgba(255, 255, 255, 0.8);
          }
          50% {
            transform: scale(1.2);
            box-shadow: 
              0 0 12px rgba(255, 255, 255, 1),
              0 0 24px rgba(255, 255, 255, 0.9);
          }
          100% {
            transform: scale(1);
            box-shadow: 
              0 0 8px rgba(255, 255, 255, 1),
              0 0 16px rgba(255, 255, 255, 0.8);
          }
        }

        @keyframes trailFade {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.3);
          }
        }

        @keyframes wavyOrbit {
          0% {
            transform: rotate(0deg) translateX(15px) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: rotate(180deg) translateX(20px) rotate(-180deg);
            opacity: 0.7;
          }
          100% {
            transform: rotate(360deg) translateX(15px) rotate(-360deg);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
