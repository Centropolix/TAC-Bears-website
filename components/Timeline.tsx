
import React from 'react';
import { Language } from '../App';

interface TimelineProps {
  lang: Language;
}

const Timeline: React.FC<TimelineProps> = ({ lang }) => {
  const events = [
    {
      year: '2022',
      title: { en: 'The Genesis', tr: 'Başlangıç' },
      desc: { 
        en: 'The foundation of TAC Bears. Our first step into the VEX universe.', 
        tr: 'TAC Bears\'ın kuruluşu. VEX evrenine ilk adım.' 
      },
      icon: 'fa-seedling',
      color: 'bg-purple-500',
      image: 'https://lh3.googleusercontent.com/d/16D_zTe3NJ1mL9mm2i335ZeakhHpadZH3'
    },
    {
      year: '2023',
      title: { en: 'Rapid Expansion', tr: 'Hızlı Yükseliş' },
      desc: { 
        en: 'First national appearances and team growth.', 
        tr: 'İlk ulusal turnuvalar ve ekibin büyümesi.' 
      },
      icon: 'fa-rocket',
      color: 'bg-blue-500',
      image: 'https://lh3.googleusercontent.com/d/1IssDxu6sq0H76ZC7rJ0qMYfFr-4ADG_j'
    },
    {
      year: '2024',
      title: { en: 'Golden Era', tr: 'Altın Çağ' },
      desc: { 
        en: 'Excellence and Design awards at Signature events.', 
        tr: 'Signature etkinliklerinde Mükemmellik ve Tasarım ödülleri.' 
      },
      icon: 'fa-trophy',
      color: 'bg-yellow-500',
      image: 'https://lh3.googleusercontent.com/d/1VdzkQtwfbCa5LbzrgB7AvmR-MjipcEoM'
    },
    {
      year: '2025',
      title: { en: 'Pushback Season', tr: 'Pushback Sezonu' },
      desc: { 
        en: 'Focusing on high-frequency intake and precision.', 
        tr: 'Yüksek frekanslı alım ve hassasiyete odaklanış.' 
      },
      icon: 'fa-gears',
      color: 'bg-purple-600'
    },
    {
      year: '2026',
      title: { en: 'Beyond Boundaries', tr: 'Sınırların Ötesi' },
      desc: { 
        en: 'Defining the future of robotics through relentless innovation and visionary engineering.', 
        tr: 'Durmak bilmeyen bir inovasyon ruhu ve vizyoner mühendislikle robotik dünyasının geleceğini biz yazıyoruz.' 
      },
      icon: 'fa-earth-americas',
      color: 'bg-yellow-600'
    }
  ];

  const translations = {
    en: { title: 'Our', span: 'Journey', subtitle: 'Timeline 2022 - 2026', hint: 'Scroll horizontally to explore' },
    tr: { title: 'Bizim', span: 'Yolculuğumuz', subtitle: 'Zaman Çizelgesi 2022 - 2026', hint: 'Keşfetmek için kaydırın' }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase tracking-tight">
          {translations[lang].title} <span className="text-yellow-500">{translations[lang].span}</span>
        </h2>
        <p className="text-purple-400 font-bold tracking-[0.3em] uppercase opacity-80 mb-4 text-sm">
          {translations[lang].subtitle}
        </p>
        <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="relative mt-24 mb-24">
        {/* Horizontal Container with Scroll */}
        <div className="hide-scrollbar overflow-x-auto overflow-y-visible cursor-grab active:cursor-grabbing pb-12 pt-12">
          <div className="flex min-w-[1200px] lg:min-w-full justify-between items-center relative px-10 h-[500px]">
            
            {/* Background Track Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-purple-900 via-yellow-500/50 to-purple-900 -translate-y-1/2 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.2)]"></div>

            {events.map((event, index) => (
              <div key={index} className="relative flex flex-col items-center flex-1">
                
                {/* Connector Line (Vertical part) */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-40 ${index % 2 === 0 ? 'bottom-1/2 h-24 mb-5' : 'top-1/2 h-24 mt-5'}`}></div>

                {/* Event Card - Alternating Top/Bottom */}
                <div 
                  className={`absolute w-72 p-0 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-purple-500/20 shadow-xl transition-all duration-500 hover:scale-105 hover:bg-gray-800/80 hover:border-yellow-500/40 group z-20 overflow-hidden
                  ${index % 2 === 0 ? 'bottom-[calc(50%+4rem)]' : 'top-[calc(50%+4rem)]'}`}
                >
                  {/* Photo Section */}
                  {event.image && (
                    <div className="w-full h-32 overflow-hidden border-b border-purple-500/10">
                      <img 
                        src={event.image} 
                        alt={event.year} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                  )}

                  <div className="p-5">
                    <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl ${event.color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                    
                    <span className="text-yellow-500 font-black heading-font text-xl mb-1 block">{event.year}</span>
                    <h3 className="text-sm font-bold text-white mb-2 heading-font uppercase tracking-wider group-hover:text-purple-400 transition-colors">
                      {event.title[lang]}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {event.desc[lang]}
                    </p>
                  </div>
                </div>

                {/* Main Marker Point */}
                <div className="relative z-30 group">
                  <div className="absolute inset-0 bg-yellow-500 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity"></div>
                  <div className="w-12 h-12 bg-gray-950 border-2 border-yellow-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] transform transition-transform duration-300 group-hover:scale-125 group-hover:bg-yellow-500">
                    <i className={`fas ${event.icon} ${event.color.replace('bg-', 'text-')} group-hover:text-gray-950 text-lg transition-colors`}></i>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="flex items-center justify-center mt-8 text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold animate-pulse">
          <i className="fas fa-arrows-left-right mr-3"></i>
          {translations[lang].hint}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
