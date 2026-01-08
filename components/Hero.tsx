
import React, { useState } from 'react';
import { Language } from '../App';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const bgImageUrl = "https://lh3.googleusercontent.com/d/1YP_IntmX1gCb2aWqT3Lf3cHtQyEH-1VG";

  const translations = {
    en: { season: 'VEX Pushback 2025 - 2026 Season', robotics: 'ROBOTICS' },
    tr: { season: 'VEX Pushback 2025 - 2026 Sezonu', robotics: 'ROBOTİK' }
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
          
          <div className="absolute -bottom-4 md:-bottom-6 right-0 text-sm md:text-2xl font-bold text-purple-400 heading-font tracking-[0.3em] uppercase opacity-90 drop-shadow-md">
            {translations[lang].robotics}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[linear-gradient(to_right,#312e81_1px,transparent_1px),linear-gradient(to_bottom,#312e81_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-30 z-2"></div>
    </div>
  );
};

export default Hero;
