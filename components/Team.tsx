
import React from 'react';
import { Language } from '../App';

interface TeamProps {
  lang: Language;
}

const Team: React.FC<TeamProps> = ({ lang }) => {
  const translations = {
    en: {
      title: 'Our',
      titleSpan: 'Team',
      lineup: '2025-2026 Season Lineup',
      subtitle: 'Engineering Excellence',
      description: 'TAC Bears is more than just a robotics team; we are a group of dedicated engineers, programmers, and strategists. For the Pushback 2025-2026 season, our focus is on unmatched precision and innovative mechanical solutions.'
    },
    tr: {
      title: 'Bizim',
      titleSpan: 'Ekibimiz',
      lineup: '2025-2026 Sezon Kadrosu',
      subtitle: 'Mühendislik Mükemmelliği',
      description: 'TAC Bears bir robotik takımından daha fazlasıdır; biz kendini adamış mühendisler, programcılar ve stratejistlerden oluşan bir grubuz. 2025-2026 Pushback sezonu için odak noktamız eşsiz hassasiyet ve yenilikçi mekanik çözümlerdir.'
    }
  };

  const teamPhotoUrl = "https://lh3.googleusercontent.com/u/0/d/1YP_IntmX1gCb2aWqT3Lf3cHtQyEH-1VG=w1600";
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase tracking-tight">
          {translations[lang].title} <span className="text-red-600">{translations[lang].titleSpan}</span>
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 group">
          <div className="relative overflow-hidden rounded-2xl border-2 border-purple-900/20 bg-gray-900 aspect-video shadow-2xl">
             <img 
               src={teamPhotoUrl} 
               alt="TAC Bears Team Photo"
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = "https://picsum.photos/1200/800?grayscale&blur=2";
               }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
             <div className="absolute bottom-6 left-6">
                <p className="text-white font-bold text-xl heading-font italic">{translations[lang].lineup}</p>
             </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-2xl font-bold text-purple-400 heading-font">{translations[lang].subtitle}</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            {translations[lang].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
