
import React, { useState } from 'react';
import { Language } from '../App';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const bgImageUrl = "https://lh3.googleusercontent.com/d/1YP_IntmX1gCb2aWqT3Lf3cHtQyEH-1VG";

  const translations = {
    en: { season: 'VEX Pushback 2025 - 2026 Season' },
    tr: { season: 'VEX Pushback 2025 - 2026 Sezonu' }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImageUrl}
          alt="TAC Bears Background"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${imgLoaded ? 'opacity-40' : 'opacity-0'}`}
          onLoad={() => setImgLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-transparent to-gray-950"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none z-1">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="relative inline-block">
          <div className="inline-block px-4 py-1 mb-6 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-xs font-bold tracking-widest uppercase animate-bounce">
            {translations[lang].season}
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            <span className="text-purple-500">TAC</span> <span className="text-yellow-500">BEARS</span>
          </h1>
        </div>
      </div>
      
      {/* Alt kısımdaki grid deseni "bi kısmı kaldır" geri bildirimi doğrultusunda kaldırıldı */}
    </div>
  );
};

export default Hero;
