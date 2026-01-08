
import React from 'react';
import { Language } from '../App';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const translations = {
    en: {
      season: 'VEX Pushback 2025 - 2026 Season',
      robotics: 'Robotics',
    },
    tr: {
      season: 'VEX Pushback 2025 - 2026 Sezonu',
      robotics: 'Robotik',
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="relative inline-block">
          <div className="inline-block px-4 py-1 mb-6 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold tracking-widest uppercase animate-pulse">
            {translations[lang].season}
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter">
            <span className="text-purple-500">TAC</span> <span className="text-white">BEARS</span>
          </h1>
          
          <div className="absolute -bottom-4 md:-bottom-6 right-0 text-sm md:text-xl font-bold text-red-600 heading-font tracking-[0.3em] uppercase">
            {translations[lang].robotics}
          </div>
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-20"></div>
    </div>
  );
};

export default Hero;
