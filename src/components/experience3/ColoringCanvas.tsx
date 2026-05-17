
import { useRef, useEffect, useState } from 'react';

interface ColoringCanvasProps {
  imageUrl: string;
  width: number;
  height: number;
}

const paintColors = [
  '#ef4444', // red
  '#3b82f6', // blue
  '#22c55e', // green
  '#eab308', // yellow
  '#a855f7', // purple
  '#ec4899', // pink
  '#f97316', // orange
  '#6366f1', // indigo
  '#06b6d4', // cyan
  '#84cc16', // lime
  '#10b981', // emerald
  '#8b5cf6', // violet
  '#f43f5e', // rose
  '#f59e0b'  // amber
];

const getRandomColor = () => {
  return paintColors[Math.floor(Math.random() * paintColors.length)];
};

const ColoringCanvas = ({ imageUrl, width, height }: ColoringCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paintCanvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState(getRandomColor());

  useEffect(() => {
    const canvas = canvasRef.current;
    const paintCanvas = paintCanvasRef.current;
    const image = imageRef.current;
    
    if (!canvas || !paintCanvas || !image) return;

    const ctx = canvas.getContext('2d');
    const paintCtx = paintCanvas.getContext('2d');
    if (!ctx || !paintCtx) return;

    const loadImage = () => {
      // Set canvas sizes
      canvas.width = width;
      canvas.height = height;
      paintCanvas.width = width;
      paintCanvas.height = height;
      
      // Draw the base image on main canvas
      ctx.drawImage(image, 0, 0, width, height);
      setIsLoaded(true);
    };

    if (image.complete) {
      loadImage();
    } else {
      image.onload = loadImage;
    }
  }, [width, height]);

  const getEventCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    
    let clientX, clientY;
    if ('touches' in e && e.touches.length > 0) {
      // Touch event
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if ('clientX' in e) {
      // Mouse event
      clientX = e.clientX;
      clientY = e.clientY;
    } else {
      return { x: 0, y: 0 };
    }

    // Calculate the scaling factor between displayed size and actual canvas size
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setIsDrawing(true);
    setCurrentColor(getRandomColor());
    paint(e);
  };

  const paint = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const paintCanvas = paintCanvasRef.current;
    if (!paintCanvas) return;

    const paintCtx = paintCanvas.getContext('2d');
    if (!paintCtx) return;

    const { x, y } = getEventCoordinates(e);

    // Paint on the paint layer (behind the line art)
    paintCtx.globalCompositeOperation = 'source-over';
    paintCtx.fillStyle = currentColor;
    
    // Main blob
    paintCtx.beginPath();
    paintCtx.arc(x, y, 15 + Math.random() * 10, 0, Math.PI * 2);
    paintCtx.fill();

    // Add smaller paint droplets around the main blob
    for (let i = 0; i < 5; i++) {
      const offsetX = (Math.random() - 0.5) * 40;
      const offsetY = (Math.random() - 0.5) * 40;
      const size = Math.random() * 8 + 2;
      
      paintCtx.beginPath();
      paintCtx.arc(x + offsetX, y + offsetY, size, 0, Math.PI * 2);
      paintCtx.fill();
    }
  };

  const stopDrawing = (e?: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (e) e.preventDefault();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const paintCanvas = paintCanvasRef.current;
    
    if (!paintCanvas) return;

    const paintCtx = paintCanvas.getContext('2d');
    if (!paintCtx) return;

    // Clear only the paint layer
    paintCtx.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      <img 
        ref={imageRef}
        src={imageUrl}
        alt="Coloring template"
        className="hidden"
        crossOrigin="anonymous"
      />
      
      {/* Main canvas container with ornate frame - now responsive */}
      <div className="relative bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-2xl border-8 border-amber-700 max-w-full flex-shrink-0">
        {/* Inner decorative border */}
        <div className="absolute inset-3 sm:inset-4 lg:inset-6 border-4 border-amber-500 rounded-lg opacity-60"></div>
        <div className="absolute inset-4 sm:inset-5 lg:inset-8 border-2 border-amber-400 rounded-md opacity-40"></div>
        
        {/* Instruction text box positioned at the bottom of the frame with paint stroke background */}
        <div 
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white px-6 py-3 z-30 flex items-center justify-center"
          style={{
            backgroundImage: `url('/lovable-uploads/4f710662-6217-47b8-bb6d-2f2327202541.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minWidth: '400px',
            height: '80px'
          }}
        >
          <p className="font-bold text-sm whitespace-nowrap text-white drop-shadow-lg">
            Click and drag to bring colour to the canvas!
          </p>
        </div>
        
        {/* Paint layer (behind) */}
        <canvas
          ref={paintCanvasRef}
          className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 rounded-lg"
          style={{ 
            display: isLoaded ? 'block' : 'none',
            background: '#fefefe',
            zIndex: 1,
            maxWidth: 'min(70vw, 800px)',
            maxHeight: 'min(60vh, 600px)',
            width: 'auto',
            height: 'auto'
          }}
        />
        
        {/* Line art layer (on top) */}
        <canvas
          ref={canvasRef}
          className="relative rounded-lg cursor-none shadow-inner"
          onMouseDown={startDrawing}
          onMouseMove={paint}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={paint}
          onTouchEnd={stopDrawing}
          onTouchCancel={stopDrawing}
          style={{ 
            display: isLoaded ? 'block' : 'none',
            background: 'transparent',
            zIndex: 2,
            maxWidth: 'min(70vw, 800px)',
            maxHeight: 'min(60vh, 600px)',
            width: 'auto',
            height: 'auto',
            touchAction: 'none'
          }}
        />
        
        {!isLoaded && (
          <div 
            className="rounded-lg bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center border-2 border-dashed border-stone-300"
            style={{ 
              width: Math.min(width, Math.min(window.innerWidth * 0.7, 800)), 
              height: Math.min(height, Math.min(window.innerHeight * 0.6, 600))
            }}
          >
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-4 border-amber-600 border-t-transparent rounded-full mx-auto mb-3"></div>
              <div className="text-amber-800 font-semibold">Loading your canvas...</div>
              <div className="text-amber-600 text-sm mt-1">Preparing colors & brushes</div>
            </div>
          </div>
        )}
        
        {/* Clear button shaped like the paint swish */}
        <button
          onClick={clearCanvas}
          className="absolute -top-2 -right-2 text-white px-2 py-1 text-xs font-bold transform hover:scale-105 transition-all duration-200 z-20"
          style={{
            backgroundImage: `url('/lovable-uploads/a6716cf2-4f5b-4961-8f3a-4c67530f9e6d.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            border: 'none',
            borderRadius: '0',
            width: '120px',
            height: '40px'
          }}
        >
          Clear Canvas
        </button>
        
        {/* Frame corner decorations */}
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-amber-700 transform rotate-45 shadow-lg"></div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-700 transform rotate-45 shadow-lg"></div>
        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-amber-700 transform rotate-45 shadow-lg"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-amber-700 transform rotate-45 shadow-lg"></div>
      </div>
    </div>
  );
};

export default ColoringCanvas;
