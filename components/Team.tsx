
import React, { useState } from 'react';
import { Language, AppMode } from '../App';

interface TeamProps {
  lang: Language;
  onNavigate: (section: string) => void;
  appMode: AppMode;
}

const Team: React.FC<TeamProps> = ({ lang, onNavigate, appMode }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const teamPhotoUrl = "https://lh3.googleusercontent.com/d/1YP_IntmX1gCb2aWqT3Lf3cHtQyEH-1VG";
  
  const translations = {
    en: {
      title: 'Our',
      titleSpan: 'Team',
      lineup: appMode === 'frc' ? 'FRC 2025 Season Lineup' : 'VEX 2025-2026 Season Lineup',
      subtitle: 'About Us',
      description: appMode === 'frc' 
        ? 'TAC Bears FRC is a powerhouse of innovation, competing in the FIRST Robotics Competition. For the Reefscape 2025 season, we are designing high-performance aquatic-themed systems and robust autonomous strategies.'
        : 'TAC Bears VEX is more than just a robotics team; we are a group of dedicated engineers, programmers, and strategists. For the Pushback 2025-2026 season, our focus is on unmatched precision and innovative mechanical solutions.',
      viewMembers: 'Meet the Specialists'
    },
    tr: {
      title: 'Bizim',
      titleSpan: 'Ekibimiz',
      lineup: appMode === 'frc' ? 'FRC 2025 Sezon Kadrosu' : 'VEX 2025-2026 Sezon Kadrosu',
      subtitle: 'Hakkımızda',
      description: appMode === 'frc'
        ? 'TAC Bears FRC, FIRST Robotik Yarışması\'nda yarışan bir inovasyon merkezidir. Reefscape 2025 sezonu için yüksek performanslı deniz temalı sistemler ve dayanıklı otonom stratejiler tasarlıyoruz.'
        : 'TAC Bears VEX bir robotik takımından daha fazlasıdır; biz kendini adamış mühendisler, programcılar ve stratejistlerden oluşan bir grubuz. 2025-2026 Pushback sezonu için odak noktamız eşsiz hassasiyet ve yenilikçi mekanik çözümler üretmektir.',
      viewMembers: 'Uzmanlarımızı Tanıyın'
    }
  };

  const themeColor = appMode === 'frc' ? 'text-blue-500' : 'text-yellow-500';
  const themeBorder = appMode === 'frc' ? 'border-blue-500 text-blue-500 hover:bg-blue-500' : 'border-yellow-500 text-yellow-500 hover:bg-yellow-500';
  const themeGlow = appMode === 'frc' ? 'rgba(59,130,246,0.2)' : 'rgba(234,179,8,0.2)';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase tracking-tight">
          {translations[lang].title} <span className={themeColor}>{translations[lang].titleSpan}</span>
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 group">
          <div className="relative overflow-hidden rounded-2xl border-2 border-purple-900/20 bg-gray-900 aspect-video shadow-2xl">
             {!imgLoaded && (
               <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                 <i className="fas fa-spinner fa-spin text-purple-500 text-3xl"></i>
               </div>
             )}
             <img 
               src={teamPhotoUrl} 
               alt="TAC Bears"
               onLoad={() => setImgLoaded(true)}
               className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
             />
             
             <div className="absolute bottom-6 left-6 drop-shadow-lg">
                <p className={`${themeColor} font-bold text-xl heading-font italic tracking-wide`}>{translations[lang].lineup}</p>
             </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
          <h3 className="text-2xl font-bold text-purple-400 heading-font">{translations[lang].subtitle}</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            {translations[lang].description}
          </p>
          
          <div className="pt-4">
             <a 
               href="#team-members" 
               onClick={(e) => {
                 e.preventDefault();
                 onNavigate('team-members');
               }}
               className={`inline-flex items-center px-8 py-4 bg-transparent border-2 ${themeBorder} hover:text-gray-950 rounded-full font-bold transition-all duration-300 heading-font uppercase tracking-widest group shadow-[0_0_15px_${themeGlow}]`}
             >
               {translations[lang].viewMembers}
               <i className="fas fa-arrow-right ml-3 transition-transform group-hover:translate-x-2"></i>
             </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start space-x-4 opacity-50">
             <div className={`w-2 h-2 rounded-full ${appMode === 'frc' ? 'bg-blue-500' : 'bg-yellow-500'}`}></div>
             <div className="w-2 h-2 rounded-full bg-purple-600"></div>
             <div className="w-2 h-2 rounded-full bg-purple-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
