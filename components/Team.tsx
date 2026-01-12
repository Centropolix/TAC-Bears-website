
import React, { useState } from 'react';
import { Language } from '../App';

interface TeamProps {
  lang: Language;
  onNavigate: (section: string) => void;
}

const Team: React.FC<TeamProps> = ({ lang, onNavigate }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const teamPhotoUrl = "https://lh3.googleusercontent.com/d/1YP_IntmX1gCb2aWqT3Lf3cHtQyEH-1VG";
  
  const translations = {
    en: {
      title: 'Our',
      titleSpan: 'Team',
      lineup: '2025-2026 Season Lineup',
      subtitle: 'Engineering Excellence',
      description: 'TAC Bears is more than just a robotics team; we are a group of dedicated engineers, programmers, and strategists. For the Pushback 2025-2026 season, our focus is on unmatched precision and innovative mechanical solutions.',
      viewMembers: 'Meet the Specialists'
    },
    tr: {
      title: 'Bizim',
      titleSpan: 'Ekibimiz',
      lineup: '2025-2026 Sezon Kadrosu',
      subtitle: 'Mühendislik Mükemmelliği',
      description: 'TAC Bears bir robotik takımından daha fazlasıdır; biz kendini adamış mühendisler, programcılar ve stratejistlerden oluşan bir grubuz. 2025-2026 Pushback sezonu için odak noktamız eşsiz hassasiyet ve yenilikçi mekanik çözümler üretmektir.',
      viewMembers: 'Uzmanlarımızı Tanıyın'
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase tracking-tight">
          {translations[lang].title} <span className="text-yellow-500">{translations[lang].titleSpan}</span>
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 group">
          <div className="relative overflow-hidden rounded-2xl border-2 border-purple-900/20 bg-gray-900 aspect-video shadow-2xl">
             {!imgLoaded && (
               <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                 <i className="fas fa-spinner fa-spin text-yellow-500 text-3xl"></i>
               </div>
             )}
             <img 
               src={teamPhotoUrl} 
               alt="TAC Bears"
               onLoad={() => setImgLoaded(true)}
               className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
               onError={(e) => {
                 (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200";
                 setImgLoaded(true);
               }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
             <div className="absolute bottom-6 left-6">
                <p className="text-yellow-500 font-bold text-xl heading-font italic tracking-wide">{translations[lang].lineup}</p>
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
               className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-950 rounded-full font-bold transition-all duration-300 heading-font uppercase tracking-widest group shadow-[0_0_15px_rgba(234,179,8,0.2)]"
             >
               {translations[lang].viewMembers}
               <i className="fas fa-arrow-right ml-3 transition-transform group-hover:translate-x-2"></i>
             </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start space-x-4 opacity-50">
             <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
             <div className="w-2 h-2 rounded-full bg-purple-600"></div>
             <div className="w-2 h-2 rounded-full bg-purple-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
