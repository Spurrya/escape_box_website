
import React from 'react';

const EscapeGameBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Single background image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/lovable-uploads/6416890a-0b41-43b9-9da2-adad1828815a.png')"
        }}
      />
    </div>
  );
};

export default EscapeGameBackground;
