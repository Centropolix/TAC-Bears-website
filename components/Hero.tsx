
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
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImageUrl}
          alt="TAC Bears Background"
          className={`w-full h-full object-cover transition-opacity duration-2000 ${imgLoaded ? 'opacity-30' : 'opacity-0'}`}
          onLoad={() => setImgLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-transparent to-gray-950"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none z-1">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600 rounded-full blur-[160px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="relative inline-block">
          <div className="inline-block px-5 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-yellow-500 text-[10px] font-black tracking-[0.5em] uppercase animate-pulse">
            {translations[lang].season}
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-none mb-4 flex flex-col items-center">
            <span className="text-white opacity-90">TAC</span> 
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 to-yellow-600 drop-shadow-[0_20px_40px_rgba(234,179,8,0.3)]">BEARS</span>
          </h1>

          <div className="mt-12 flex items-center justify-center space-x-4 opacity-50">
            <div className="h-[1px] w-12 bg-white/30"></div>
            <p className="text-[10px] tracking-[0.4em] font-bold text-gray-400">EST. 2022</p>
            <div className="h-[1px] w-12 bg-white/30"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-40">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white to-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-500 h-1/2 animate-infinite-scroll-down"></div>
        </div>
      </div>
      
      <style>{`
        @keyframes infinite-scroll-down {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-infinite-scroll-down {
          animation: infinite-scroll-down 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
