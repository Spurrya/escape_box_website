
import React, { useState } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { asset } from '@/lib/asset';

const MurderBoard = () => {
  const [glitchedImages, setGlitchedImages] = useState<Set<number>>(new Set());
  const [clickedImages, setClickedImages] = useState<Set<number>>(new Set());
  const isMobile = useIsMobile();

  const handleImageClick = (index: number) => {
    setGlitchedImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });

    // Add click animation
    setClickedImages(prev => new Set(prev).add(index));
    setTimeout(() => {
      setClickedImages(prev => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
    }, 500);
  };

  const stickyNotes = [
    { text: "Meet your NPC", x: isMobile ? "20%" : "15%", y: isMobile ? "30%" : "20%", rotation: "-5deg", color: "bg-yellow-200" },
    { text: "Lookout for Opticon", x: isMobile ? "75%" : "70%", y: isMobile ? "20%" : "10%", rotation: "3deg", color: "bg-red-200" },
    { text: "Luna is Trapped!", x: isMobile ? "30%" : "40%", y: isMobile ? "80%" : "80%", rotation: "-2deg", color: "bg-blue-200" },
    { text: "You are being followed!", x: "80%", y: isMobile ? "85%" : "70%", rotation: "7deg", color: "bg-pink-200" },
    { text: "MISSING", x: isMobile ? "15%" : "20%", y: isMobile ? "75%" : "70%", rotation: "-8deg", color: "bg-orange-200" },
    { text: "Toronto Landmarks", x: "60%", y: "40%", rotation: "4deg", color: "bg-purple-200" },
    { text: "REALITY DISTORTION", x: "10%", y: "50%", rotation: "2deg", color: "bg-indigo-200" }
  ];

  // Mobile-optimized evidence image positions - improved layout with 6 images
  const evidenceImages = [
    { src: asset("/lovable-uploads/f31488bb-3ca3-4743-a8e4-ec9f57c8b58b.png"), x: isMobile ? "25%" : "25%", y: isMobile ? "25%" : "25%", width: "140px", rotation: "-3deg" },
    { src: asset("/lovable-uploads/11e1f225-babe-43f7-b59e-59d7e6d32591.png"), x: isMobile ? "70%" : "60%", y: isMobile ? "30%" : "20%", width: "120px", rotation: "2deg" },
    { src: asset("/lovable-uploads/a20d775f-9bfe-4ff8-9c0f-04028124a181.png"), x: isMobile ? "20%" : "15%", y: isMobile ? "55%" : "60%", width: "110px", rotation: "-4deg" },
    { src: asset("/lovable-uploads/a31d45e7-23cc-41fe-a529-ad0b6b1ac1c8.png"), x: isMobile ? "50%" : "45%", y: isMobile ? "45%" : "50%", width: "130px", rotation: "1deg" },
    { src: asset("/lovable-uploads/51bbbc5f-fd84-442c-b86f-716a51cc23e5.png"), x: isMobile ? "75%" : "70%", y: isMobile ? "60%" : "55%", width: "120px", rotation: "-2deg" },
    { src: asset("/lovable-uploads/6c74bf06-e0e4-43d9-8672-a974d9d0d6aa.png"), x: isMobile ? "40%" : "35%", y: isMobile ? "70%" : "75%", width: "140px", rotation: "3deg" },
    { src: asset("/lovable-uploads/bbec5a5c-fe14-4ab8-8af3-d06b56528a06.png"), x: "80%", y: "45%", width: "150px", rotation: "-1deg" },
    { src: asset("/lovable-uploads/35ba3a71-6f13-4148-a9ee-374eaa319ae3.png"), x: "50%", y: "30%", width: "110px", rotation: "4deg" },
    { src: asset("/lovable-uploads/78b11a92-10ff-4b44-9e29-b5ab92fde4e8.png"), x: "10%", y: "35%", width: "100px", rotation: "-5deg" },
    { src: asset("/lovable-uploads/a375d5d0-04db-4227-b357-5eefdb24acde.png"), x: "75%", y: "25%", width: "110px", rotation: "2deg" }
  ];

  // Evidence tags - mobile optimized positions
  const evidenceTags = [
    { x: isMobile ? "35%" : "35%", y: isMobile ? "40%" : "45%", text: "EXHIBIT A", rotation: "2deg" },
    { x: "55%", y: "15%", text: "WITNESS PHOTO", rotation: "3deg" },
    { x: "25%", y: isMobile ? "75%" : "65%", text: "SURVEILLANCE", rotation: "4deg" },
    { x: "88%", y: "30%", text: "TIME: 11:47 PM", rotation: "-6deg" }
  ];

  // Brutalist background images - static, responsive sizing, larger and more centered
  const brutalistImages = [
    {
      src: asset("/lovable-uploads/1e54b318-610f-43a3-a3ba-02ef90e3ec05.png"),
      x: isMobile ? "25%" : "30%", 
      y: isMobile ? "40%" : "35%", 
      width: isMobile ? "min(160px, 30vw)" : "min(500px, 30vw)", 
      rotation: "-2deg",
      opacity: 0.15
    },
    { 
      src: asset("/lovable-uploads/528dbb67-a191-439e-a04b-d05feedacd41.png"),
      x: isMobile ? "65%" : "70%", 
      y: isMobile ? "50%" : "45%", 
      width: isMobile ? "min(110px, 25vw)" : "min(350px, 25vw)", 
      rotation: "3deg",
      opacity: 0.2
    },
    { 
      src: asset("/lovable-uploads/ef2a9bcb-3d41-4492-90ea-3388d169eba4.png"),
      x: isMobile ? "45%" : "50%", 
      y: isMobile ? "70%" : "75%", 
      width: isMobile ? "min(130px, 27vw)" : "min(420px, 27vw)", 
      rotation: "-1deg",
      opacity: 0.18
    },
    { 
      src: asset("/lovable-uploads/8f4d21bf-3a51-48fc-a9e8-2ac23009544e.png"),
      x: "20%", 
      y: "65%", 
      width: isMobile ? "min(100px, 22vw)" : "min(300px, 22vw)", 
      rotation: "4deg",
      opacity: 0.12
    }
  ];

  return (
    <div className="w-full">
      {/* Static instructional text for both mobile and desktop */}
      <div className="text-center py-3 bg-gray-900 text-white">
        <p className="text-sm font-medium">
          Tap the images to see the effects of Unreality
        </p>
      </div>
      
      <div className="relative w-full bg-gray-900 overflow-hidden" style={{ aspectRatio: isMobile ? '3/4' : '16/9', minHeight: isMobile ? '500px' : '600px' }}>
        {/* Blue grid background */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("${asset("/lovable-uploads/d88e3d37-cb07-41ed-a065-153604700b1b.png")}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Brutalist wireframe images - static, responsive sizing */}
        {brutalistImages.slice(0, isMobile ? 3 : brutalistImages.length).map((image, index) => (
          <div
            key={`brutalist-${index}`}
            className="absolute pointer-events-none"
            style={{
              left: image.x,
              top: image.y,
              width: image.width,
              transform: `rotate(${image.rotation}) translate(-50%, -50%)`,
              zIndex: 10,
              opacity: image.opacity
            }}
          >
            <img
              src={image.src}
              alt=""
              className="w-full h-auto object-contain filter invert"
              style={{
                mixBlendMode: 'screen'
              }}
            />
          </div>
        ))}

        {/* Aura diagram image in lower left corner - static */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: isMobile ? "15%" : "12%",
            bottom: isMobile ? "12%" : "15%",
            width: isMobile ? "min(100px, 22vw)" : "min(140px, 10vw)",
            transform: "translate(-50%, 50%)",
            zIndex: 15,
            opacity: 1
          }}
        >
          <img
            src={asset("/lovable-uploads/5003daa3-1660-437e-ad25-7190bbbfaf11.png")}
            alt="Aura diagram"
            className="w-full h-auto object-contain filter invert"
          />
        </div>

        {/* Wireframe skull image in upper right corner - static */}
        <div
          className="absolute pointer-events-none"
          style={{
            right: isMobile ? "12%" : "8%",
            top: isMobile ? "12%" : "8%",
            width: isMobile ? "min(80px, 18vw)" : "min(120px, 8vw)",
            transform: "translate(50%, -50%)",
            zIndex: 40,
            opacity: 1
          }}
        >
          <img
            src={asset("/lovable-uploads/d061293d-122c-4c89-9156-7693a28ccc4c.png")}
            alt="Wireframe skull"
            className="w-full h-auto object-contain filter invert"
          />
        </div>

        {/* Evidence tags - better visibility on mobile */}
        {evidenceTags.slice(0, isMobile ? 3 : evidenceTags.length).map((tag, index) => (
          <div
            key={index}
            className="absolute bg-white border-2 border-red-500 px-1 md:px-2 py-0.5 md:py-1 shadow-lg font-bold text-black"
            style={{
              left: tag.x,
              top: tag.y,
              transform: `rotate(${tag.rotation}) translate(-50%, -50%)`,
              zIndex: 30,
              fontFamily: 'monospace',
              fontSize: isMobile ? '10px' : '12px'
            }}
          >
            {tag.text}
          </div>
        ))}

        {/* Evidence images - mobile optimized to show 6 images */}
        {evidenceImages.slice(0, isMobile ? 6 : evidenceImages.length).map((image, index) => {
          const isGlitched = glitchedImages.has(index);
          const isClicked = clickedImages.has(index);
          const mobileWidth = parseInt(image.width) * (isMobile ? 0.7 : 1);
          return (
            <div
              key={index}
              className={`absolute shadow-2xl border-2 md:border-4 border-white cursor-pointer transition-all duration-300 animate-float ${isGlitched ? 'glitched-tv' : ''}`}
              style={{
                left: image.x,
                top: image.y,
                width: `${mobileWidth}px`,
                transform: `rotate(${image.rotation}) translate(-50%, -50%) ${isClicked ? 'translateX(3px) translateY(-3px)' : ''}`,
                zIndex: 20,
                filter: isGlitched 
                  ? 'contrast(1.5) brightness(0.7) hue-rotate(200deg) saturate(2)' 
                  : 'contrast(1.2) brightness(0.9)',
                animationDelay: `${index * 0.2}s`,
                animationDuration: `${3 + (index % 3)}s`,
                transition: isClicked ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
                minHeight: isMobile ? '40px' : 'auto',
                touchAction: 'manipulation'
              }}
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image.src}
                alt={`Evidence ${index + 1}`}
                className={`w-full h-auto object-cover ${isGlitched ? 'animate-glitch-intense' : ''}`}
                style={{
                  aspectRatio: 'auto'
                }}
              />
              
              {/* TV Static noise overlay when glitched */}
              {isGlitched && (
                <div 
                  className="absolute inset-0 opacity-60 animate-static-noise"
                  style={{
                    background: `
                      radial-gradient(circle at 20% 30%, rgba(0, 100, 255, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 80% 70%, rgba(0, 150, 255, 0.4) 0%, transparent 50%),
                      repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 1px,
                        rgba(255, 255, 255, 0.1) 1px,
                        rgba(255, 255, 255, 0.1) 2px
                      ),
                      repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 1px,
                        rgba(0, 100, 255, 0.1) 1px,
                        rgba(0, 100, 255, 0.1) 2px
                      )
                    `,
                    backgroundSize: '100% 100%, 100% 100%, 4px 4px, 4px 4px',
                    mixBlendMode: 'screen'
                  }}
                />
              )}
              
              {/* Scanlines effect when glitched */}
              {isGlitched && (
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 2px,
                      rgba(0, 150, 255, 0.8) 2px,
                      rgba(0, 150, 255, 0.8) 4px
                    )`,
                    animation: 'glitch-scan 0.1s linear infinite'
                  }}
                />
              )}
              
              {/* Push pins - better size for mobile */}
              <div 
                className="absolute -top-1 md:-top-2 -left-1 md:-left-2 bg-red-600 rounded-full shadow-lg"
                style={{
                  width: isMobile ? '8px' : '16px',
                  height: isMobile ? '8px' : '16px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.3)'
                }}
              />
            </div>
          );
        })}

        {/* Sticky notes - mobile optimized */}
        {stickyNotes.slice(0, isMobile ? 4 : stickyNotes.length).map((note, index) => (
          <div
            key={index}
            className={`absolute ${note.color} p-2 md:p-3 shadow-lg font-handwriting border-l-2 md:border-l-4 border-l-yellow-400`}
            style={{
              left: note.x,
              top: note.y,
              transform: `rotate(${note.rotation}) translate(-50%, -50%)`,
              zIndex: 30,
              minWidth: isMobile ? '70px' : '120px',
              maxWidth: isMobile ? '100px' : '180px',
              fontFamily: 'Comic Sans MS, cursive',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
              fontSize: isMobile ? '10px' : '14px'
            }}
          >
            <div className="text-gray-800 font-bold text-center leading-tight">
              {note.text}
            </div>
            {/* Push pin for sticky notes */}
            <div 
              className="absolute bg-blue-600 rounded-full shadow-md"
              style={{
                top: isMobile ? '-2px' : '-4px',
                right: isMobile ? '-2px' : '-4px',
                width: isMobile ? '8px' : '12px',
                height: isMobile ? '8px' : '12px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.4), inset 0 0.5px 1px rgba(255,255,255,0.3)'
              }}
            />
          </div>
        ))}

        {/* Starting point text - mobile optimized positioning and white color */}
        <div className="absolute text-white font-bold opacity-80 transform -rotate-2 text-right" style={{ 
          bottom: isMobile ? '8px' : '40px',
          right: isMobile ? '8px' : '64px',
          zIndex: 25,
          fontSize: isMobile ? '8px' : '18px',
          lineHeight: isMobile ? '1.2' : '1.4'
        }}>
          📍 STARTING POINT:<br />
          RICHMOND ST W AND<br />
          SPADINA AVE
        </div>

        {/* Question marks and symbols scattered around - desktop only */}
        {!isMobile && (
          <>
            <div className="absolute top-20 left-20 text-red-500 text-4xl font-bold opacity-50 transform rotate-12" style={{ zIndex: 25 }}>
              ?
            </div>
            
            <div className="absolute top-60 right-20 text-red-500 text-3xl font-bold opacity-40 transform -rotate-45" style={{ zIndex: 25 }}>
              ✗
            </div>

            <div className="absolute bottom-40 right-40 text-yellow-500 text-2xl font-bold opacity-60 transform rotate-25" style={{ zIndex: 25 }}>
              ⚠
            </div>
          </>
        )}

        {/* Static effect overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.03) 2px,
              rgba(255,255,255,0.03) 4px
            )`,
            zIndex: 35
          }}
        />
      </div>
    </div>
  );
};

export default MurderBoard;
