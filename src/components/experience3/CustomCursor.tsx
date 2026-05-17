import { asset } from '@/lib/asset';
import { useState, useEffect } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

interface PaintSplatter {
  id: number;
  x: number;
  y: number;
  timestamp: number;
  color: string;
}

const paintColors = [
  'bg-red-500',
  'bg-blue-500', 
  'bg-green-500',
  'bg-yellow-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-orange-500',
  'bg-indigo-500',
  'bg-cyan-500',
  'bg-lime-500',
  'bg-emerald-500',
  'bg-violet-500',
  'bg-rose-500',
  'bg-amber-500'
];

const getRandomColor = () => {
  return paintColors[Math.floor(Math.random() * paintColors.length)];
};

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [paintSplatters, setPaintSplatters] = useState<PaintSplatter[]>([]);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    let moveTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setCursorPosition(newPosition);
      setIsMoving(true);

      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => setIsMoving(false), 150);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      // Create paint splatter at click position with random color
      const newSplatter: PaintSplatter = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
        color: getRandomColor()
      };
      setPaintSplatters(prev => [...prev, newSplatter]);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      clearTimeout(moveTimeout);
    };
  }, []);

  // Clean up old paint splatters
  useEffect(() => {
    const cleanup = setInterval(() => {
      const now = Date.now();
      setPaintSplatters(prev => prev.filter(splatter => now - splatter.timestamp < 5000));
    }, 1000);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <>
      {/* Paint Splatters */}
      {paintSplatters.map((splatter) => (
        <div
          key={splatter.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: splatter.x - 25,
            top: splatter.y - 25,
            animation: 'paintSplatter 5s ease-out forwards'
          }}
        >
          {/* Main organic splatter blob */}
          <div className="relative w-12 h-12">
            {/* Central irregular blob */}
            <div className={`absolute inset-1 ${splatter.color} opacity-90`} 
                 style={{
                   borderRadius: '45% 65% 30% 70% / 60% 35% 85% 15%',
                   transform: 'rotate(' + (Math.random() * 360) + 'deg)'
                 }} 
            />
            
            {/* Organic radiating blobs - like paint splatters */}
            <div className={`absolute -top-2 left-3 w-4 h-6 ${splatter.color} opacity-85`}
                 style={{
                   borderRadius: '40% 60% 20% 80% / 90% 10% 70% 30%',
                   transform: 'rotate(' + (Math.random() * 180 + 45) + 'deg)'
                 }} 
            />
            <div className={`absolute top-2 -right-3 w-5 h-4 ${splatter.color} opacity-80`}
                 style={{
                   borderRadius: '80% 20% 60% 40% / 30% 70% 40% 60%',
                   transform: 'rotate(' + (Math.random() * 180 - 45) + 'deg)'
                 }} 
            />
            <div className={`absolute -bottom-3 left-1 w-6 h-3 ${splatter.color} opacity-85`}
                 style={{
                   borderRadius: '60% 40% 80% 20% / 50% 50% 90% 10%',
                   transform: 'rotate(' + (Math.random() * 180 + 90) + 'deg)'
                 }} 
            />
            <div className={`absolute bottom-0 -left-2 w-3 h-5 ${splatter.color} opacity-75`}
                 style={{
                   borderRadius: '20% 80% 40% 60% / 70% 30% 80% 20%',
                   transform: 'rotate(' + (Math.random() * 180 - 90) + 'deg)'
                 }} 
            />
            
            {/* Smaller radiating droplets */}
            <div className={`absolute -top-1 -left-3 w-2 h-3 ${splatter.color} opacity-80`}
                 style={{
                   borderRadius: '60% 40% 70% 30% / 80% 20% 60% 40%',
                   transform: 'rotate(' + (Math.random() * 360) + 'deg)'
                 }} 
            />
            <div className={`absolute top-5 right-2 w-3 h-2 ${splatter.color} opacity-75`}
                 style={{
                   borderRadius: '50% 50% 90% 10% / 40% 60% 30% 70%',
                   transform: 'rotate(' + (Math.random() * 360) + 'deg)'
                 }} 
            />
            <div className={`absolute -bottom-1 right-4 w-2 h-2 ${splatter.color} opacity-70`}
                 style={{
                   borderRadius: '70% 30% 50% 50%',
                   transform: 'rotate(' + (Math.random() * 360) + 'deg)'
                 }} 
            />
            <div className={`absolute bottom-3 -left-1 w-1 h-2 ${splatter.color} opacity-85`}
                 style={{
                   borderRadius: '80% 20% 60% 40% / 90% 10% 50% 50%',
                   transform: 'rotate(' + (Math.random() * 360) + 'deg)'
                 }} 
            />
            
            {/* Tiny paint speckles */}
            <div className={`absolute -top-2 right-1 w-1 h-1 ${splatter.color} opacity-60`}
                 style={{ borderRadius: '60% 40%' }} 
            />
            <div className={`absolute top-6 -left-2 w-0.5 h-1 ${splatter.color} opacity-70`}
                 style={{ borderRadius: '50% 50% 80% 20%' }} 
            />
            <div className={`absolute bottom-5 right-5 w-0.5 h-0.5 ${splatter.color} opacity-80 rounded-full`} />
            <div className={`absolute -bottom-2 -right-1 w-1 h-0.5 ${splatter.color} opacity-65`}
                 style={{ borderRadius: '80% 20%' }} 
            />
          </div>
        </div>
      ))}

      {/* Paint Brush Cursor - Using PNG Image */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: cursorPosition.x - 24,
          top: cursorPosition.y - 60,
          transition: isMoving ? 'none' : 'all 0.1s ease-out',
          transform: isClicking ? 'scale(1.2) rotate(15deg)' : 'scale(1) rotate(0deg)',
        }}
      >
        <img 
          src={asset("/lovable-uploads/3ecbbb9e-46e2-4f30-9f6f-b3b422575b97.png")} 
          alt="Paint brush cursor"
          className="w-12 h-auto drop-shadow-md"
          style={{
            filter: isMoving ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))' : 'none'
          }}
        />
        
        {/* Paint drips when moving */}
        {isMoving && (
          <>
            <div 
              className="absolute bottom-2 -left-1 w-1 h-2 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full opacity-60"
              style={{ animation: 'paintDrip 1s ease-out infinite' }}
            />
            <div 
              className="absolute bottom-4 left-2 w-0.5 h-1 bg-gradient-to-b from-green-400 to-blue-400 rounded-full opacity-70"
              style={{ animation: 'paintDrip 1.5s ease-out infinite 0.3s' }}
            />
          </>
        )}
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes paintSplatter {
          0% {
            transform: scale(0.4);
            opacity: 1;
          }
          20% {
            transform: scale(1.1);
            opacity: 0.95;
          }
          40% {
            transform: scale(1.0);
            opacity: 0.9;
          }
          70% {
            transform: scale(0.98);
            opacity: 0.6;
          }
          85% {
            transform: scale(0.96);
            opacity: 0.3;
          }
          100% {
            transform: scale(0.94);
            opacity: 0;
          }
        }

        @keyframes paintDrip {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(10px) scale(0.8);
            opacity: 0.7;
          }
          100% {
            transform: translateY(20px) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
