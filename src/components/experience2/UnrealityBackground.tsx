
interface UnrealityBackgroundProps {
  scrollY: number;
}

const UnrealityBackground = ({ scrollY }: UnrealityBackgroundProps) => {
  return (
    <>
      {/* Enhanced Multi-Layer Kaleidoscope Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Primary kaleidoscope layer with more complex patterns */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 15% 15%, rgba(220, 38, 38, 0.8) 0%, transparent 35%),
              radial-gradient(circle at 85% 15%, rgba(127, 29, 29, 0.8) 0%, transparent 35%),
              radial-gradient(circle at 15% 85%, rgba(239, 68, 68, 0.8) 0%, transparent 35%),
              radial-gradient(circle at 85% 85%, rgba(185, 28, 28, 0.8) 0%, transparent 35%),
              radial-gradient(circle at 50% 20%, rgba(220, 38, 38, 0.9) 0%, transparent 25%),
              radial-gradient(circle at 50% 80%, rgba(239, 68, 68, 0.9) 0%, transparent 25%),
              radial-gradient(circle at 20% 50%, rgba(127, 29, 29, 0.9) 0%, transparent 25%),
              radial-gradient(circle at 80% 50%, rgba(185, 28, 28, 0.9) 0%, transparent 25%),
              conic-gradient(from 0deg at 50% 50%, 
                rgba(220, 38, 38, 0.6) 0deg,
                rgba(127, 29, 29, 0.6) 45deg,
                rgba(239, 68, 68, 0.6) 90deg,
                rgba(185, 28, 28, 0.6) 135deg,
                rgba(220, 38, 38, 0.6) 180deg,
                rgba(127, 29, 29, 0.6) 225deg,
                rgba(239, 68, 68, 0.6) 270deg,
                rgba(185, 28, 28, 0.6) 315deg,
                rgba(220, 38, 38, 0.6) 360deg
              ),
              repeating-conic-gradient(from 0deg at 50% 50%,
                rgba(220, 38, 38, 0.4) 0deg 30deg,
                transparent 30deg 60deg,
                rgba(239, 68, 68, 0.4) 60deg 90deg,
                transparent 90deg 120deg
              )
            `,
            transform: `scale(${1 + scrollY * 0.001}) rotate(${scrollY * 0.12}deg)`,
            animation: 'kaleidoscopeRotate 50s linear infinite'
          }}
        />

        {/* Secondary kaleidoscope layer with triangular patterns */}
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            background: `
              conic-gradient(from 30deg at 25% 25%, 
                rgba(220, 38, 38, 0.7) 0deg,
                transparent 60deg,
                rgba(239, 68, 68, 0.7) 120deg,
                transparent 180deg,
                rgba(127, 29, 29, 0.7) 240deg,
                transparent 300deg
              ),
              conic-gradient(from 150deg at 75% 25%, 
                rgba(185, 28, 28, 0.7) 0deg,
                transparent 60deg,
                rgba(220, 38, 38, 0.7) 120deg,
                transparent 180deg,
                rgba(239, 68, 68, 0.7) 240deg,
                transparent 300deg
              ),
              conic-gradient(from 270deg at 25% 75%, 
                rgba(127, 29, 29, 0.7) 0deg,
                transparent 60deg,
                rgba(185, 28, 28, 0.7) 120deg,
                transparent 180deg,
                rgba(220, 38, 38, 0.7) 240deg,
                transparent 300deg
              ),
              conic-gradient(from 90deg at 75% 75%, 
                rgba(239, 68, 68, 0.7) 0deg,
                transparent 60deg,
                rgba(127, 29, 29, 0.7) 120deg,
                transparent 180deg,
                rgba(185, 28, 28, 0.7) 240deg,
                transparent 300deg
              ),
              repeating-conic-gradient(from 45deg at 50% 50%,
                rgba(220, 38, 38, 0.5) 0deg 15deg,
                transparent 15deg 30deg,
                rgba(239, 68, 68, 0.5) 30deg 45deg,
                transparent 45deg 60deg
              )
            `,
            transform: `scale(${1.3 + scrollY * 0.0008}) rotate(${-scrollY * 0.1}deg)`,
            animation: 'kaleidoscopeRotate 40s linear infinite reverse'
          }}
        />

        {/* Third kaleidoscope layer with hexagonal patterns */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              conic-gradient(from 0deg at 33% 33%, 
                rgba(220, 38, 38, 0.6) 0deg 60deg,
                transparent 60deg 120deg,
                rgba(127, 29, 29, 0.6) 120deg 180deg,
                transparent 180deg 240deg,
                rgba(239, 68, 68, 0.6) 240deg 300deg,
                transparent 300deg 360deg
              ),
              conic-gradient(from 120deg at 66% 33%, 
                rgba(185, 28, 28, 0.6) 0deg 60deg,
                transparent 60deg 120deg,
                rgba(220, 38, 38, 0.6) 120deg 180deg,
                transparent 180deg 240deg,
                rgba(127, 29, 29, 0.6) 240deg 300deg,
                transparent 300deg 360deg
              ),
              conic-gradient(from 240deg at 33% 66%, 
                rgba(239, 68, 68, 0.6) 0deg 60deg,
                transparent 60deg 120deg,
                rgba(185, 28, 28, 0.6) 120deg 180deg,
                transparent 180deg 240deg,
                rgba(220, 38, 38, 0.6) 240deg 300deg,
                transparent 300deg 360deg
              ),
              conic-gradient(from 60deg at 66% 66%, 
                rgba(127, 29, 29, 0.6) 0deg 60deg,
                transparent 60deg 120deg,
                rgba(239, 68, 68, 0.6) 120deg 180deg,
                transparent 180deg 240deg,
                rgba(185, 28, 28, 0.6) 240deg 300deg,
                transparent 300deg 360deg
              )
            `,
            transform: `scale(${0.8 + scrollY * 0.0012}) rotate(${scrollY * 0.08}deg)`,
            animation: 'kaleidoscopeRotate 70s linear infinite'
          }}
        />

        {/* Fourth layer with diamond/rhombus patterns */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            background: `
              repeating-conic-gradient(from 0deg at 50% 50%,
                rgba(220, 38, 38, 0.8) 0deg 10deg,
                rgba(127, 29, 29, 0.8) 10deg 20deg,
                rgba(239, 68, 68, 0.8) 20deg 30deg,
                rgba(185, 28, 28, 0.8) 30deg 40deg,
                transparent 40deg 50deg,
                rgba(220, 38, 38, 0.8) 50deg 60deg,
                transparent 60deg 90deg
              ),
              repeating-conic-gradient(from 45deg at 25% 25%,
                rgba(239, 68, 68, 0.6) 0deg 22.5deg,
                transparent 22.5deg 45deg,
                rgba(185, 28, 28, 0.6) 45deg 67.5deg,
                transparent 67.5deg 90deg
              ),
              repeating-conic-gradient(from 135deg at 75% 75%,
                rgba(127, 29, 29, 0.6) 0deg 22.5deg,
                transparent 22.5deg 45deg,
                rgba(220, 38, 38, 0.6) 45deg 67.5deg,
                transparent 67.5deg 90deg
              )
            `,
            transform: `scale(${1.1 + scrollY * 0.0006}) rotate(${-scrollY * 0.15}deg)`,
            animation: 'kaleidoscopeRotate 35s linear infinite reverse'
          }}
        />
      </div>

      {/* Enhanced custom keyframes for kaleidoscope animations */}
      <style>{`
        @keyframes kaleidoscopeRotate {
          0% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(90deg) scale(1.05);
          }
          50% {
            transform: rotate(180deg) scale(0.95);
          }
          75% {
            transform: rotate(270deg) scale(1.1);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default UnrealityBackground;
