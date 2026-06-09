
import React from 'react';
import { Language, AppMode } from '../App';

interface HeroProps {
  lang: Language;
  appMode: AppMode;
}

const Hero: React.FC<HeroProps> = ({ lang, appMode }) => {
  const translations = {
    en: { 
      vexSeason: 'VEX Pushback 2025 - 2026 Sezonu',
      frcSeason: 'FRC 2026 Sezonu',
      tag: 'VEX & FRC ROBOTICS'
    },
    tr: { 
      vexSeason: 'VEX Pushback 2025 - 2026 Sezonu',
      frcSeason: 'FRC 2026 Sezonu',
      tag: 'VEX & FRC ROBOTİK'
    }
  };

  const themeColor = 'from-yellow-400 via-purple-500 to-blue-500';
  const themeShadow = 'rgba(147,51,234,0.3)';

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      <div className="absolute top-0 left-0 w-full h-full opacity-25 pointer-events-none z-1">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-[160px]"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-600/20 rounded-full blur-[160px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="relative inline-block">
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-none mb-4 flex flex-col items-center">
            <span className="text-white opacity-90">TAC</span> 
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${themeColor}`} style={{ filter: `drop-shadow(0 20px 40px ${themeShadow})` }}>BEARS</span>
          </h1>

          <div className="mt-12 flex items-center justify-center space-x-4 opacity-50">
            <div className="h-[1px] w-12 bg-white/30"></div>
            <p className="text-[10px] tracking-[0.4em] font-bold text-gray-400">
              {translations[lang].tag} • EST. 2022
            </p>
            <div className="h-[1px] w-12 bg-white/30"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-40">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white to-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 via-purple-500 to-blue-500 h-1/2 animate-infinite-scroll-down"></div>
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
