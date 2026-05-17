
import { useState } from 'react';
import { Button } from "@/components/ui/button";

interface DoorEntranceProps {
  onEnter: () => void;
}

const DoorEntrance = ({ onEnter }: DoorEntranceProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleDoorClick = () => {
    setIsOpening(true);
    // Wait for animation to complete before calling onEnter
    setTimeout(() => {
      onEnter();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Swirling Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              conic-gradient(from 0deg at 20% 30%, #1e40af, #3b82f6, #60a5fa, #1e40af),
              conic-gradient(from 180deg at 80% 70%, #312e81, #4c1d95, #7c3aed, #312e81)
            `,
            animation: 'spin 20s linear infinite'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)
            `,
            animation: 'spin 15s linear infinite reverse'
          }}
        />
      </div>

      {/* Kid-style Door Frame - Blue and wobbly - BIGGER */}
      <div className="relative">
        {/* Door Frame - hand-drawn style - Increased size */}
        <div 
          className="relative w-96 h-[500px] rounded-lg shadow-2xl border-4"
          style={{
            backgroundColor: '#1e40af',
            borderColor: '#1d4ed8',
            borderRadius: '15px 15px 10px 18px', // Imperfect corners
            transform: 'rotate(-0.5deg)' // Slight tilt like a kid drew it
          }}
        >
          {/* Door Panels - Blue with kid-like imperfections */}
          <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: '10px 10px 5px 14px' }}>
            {/* Left Door Panel */}
            <div 
              className={`absolute top-0 left-0 w-1/2 h-full border-r-3 transition-transform duration-1000 ease-in-out ${
                isOpening ? '-translate-x-full' : 'translate-x-0'
              }`}
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb  100%)',
                borderRight: '3px solid #1d4ed8',
                borderRadius: '8px 0 0 10px'
              }}
            >
              {/* Door panel decoration - kid-style scribbles */}
              <div 
                className="absolute inset-4 border-2 opacity-60 rounded"
                style={{
                  borderColor: '#1e40af',
                  borderRadius: '5px 10px 8px 5px' // Wonky rectangle
                }}
              />
              {/* Window on door */}
              <div 
                className="absolute top-12 left-8 w-10 h-16 bg-sky-200 rounded opacity-80"
                style={{
                  borderRadius: '8px 5px 10px 5px', // Imperfect window
                  border: '2px solid #1e40af'
                }}
              />
            </div>
            
            {/* Right Door Panel */}
            <div 
              className={`absolute top-0 right-0 w-1/2 h-full border-l-3 transition-transform duration-1000 ease-in-out ${
                isOpening ? 'translate-x-full' : 'translate-x-0'
              }`}
              style={{
                background: 'linear-gradient(225deg, #3b82f6 0%, #2563eb 100%)',
                borderLeft: '3px solid #1d4ed8',
                borderRadius: '0 8px 10px 0'
              }}
            >
              {/* Door panel decoration */}
              <div 
                className="absolute inset-4 border-2 opacity-60 rounded"
                style={{
                  borderColor: '#1e40af',
                  borderRadius: '10px 5px 5px 8px' // Wonky rectangle
                }}
              />
              {/* Window on door */}
              <div 
                className="absolute top-12 right-8 w-10 h-16 bg-sky-200 rounded opacity-80"
                style={{
                  borderRadius: '5px 8px 5px 10px', // Imperfect window
                  border: '2px solid #1e40af'
                }}
              />
              
              {/* Door Knob - where the button will be */}
              <div 
                className="absolute top-1/2 left-5 w-8 h-8 bg-yellow-400 rounded-full shadow-lg transform -translate-y-1/2"
                style={{
                  border: '2px solid #eab308',
                  borderRadius: '50% 45% 55% 50%' // Slightly imperfect circle
                }}
              />
            </div>
          </div>
        </div>

        {/* Tap to Open Button - positioned on the door knob */}
        {!isOpening && (
          <div className="absolute top-1/2 right-20 transform -translate-y-1/2">
            <Button 
              onClick={handleDoorClick}
              size="sm" 
              className="bg-kiwi-green hover:bg-kiwi-green/90 text-white font-bold px-4 py-2 text-sm shadow-xl rounded-full"
              style={{
                borderRadius: '20px 15px 18px 22px', // Kid-like imperfect rounded button
                transform: 'rotate(2deg)'
              }}
            >
              Tap to Open
            </Button>
          </div>
        )}
      </div>

      {/* Mysterious glow behind door when opening */}
      {isOpening && (
        <div className="absolute inset-0 bg-gradient-radial from-kiwi-green/30 via-transparent to-transparent animate-pulse">
          <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent"></div>
        </div>
      )}

      {/* Sucking effect when door opens */}
      {isOpening && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black animate-[portal-expand_2s_ease-in-out_forwards]"></div>
          <div className="absolute inset-0 bg-gradient-conic from-kiwi-green/30 via-transparent to-kiwi-green/30 animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default DoorEntrance;
