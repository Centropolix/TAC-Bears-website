
import React from 'react';
import { Language } from '../App';

interface AwardsProps {
  lang: Language;
}

const Awards: React.FC<AwardsProps> = ({ lang }) => {
  const awards = [
    {
      year: '2025',
      title: { 
        en: 'Judges Award', 
        tr: 'Jüri Özel Ödülü' 
      },
      event: { 
        en: 'Recognized by the judges for our team spirit and exemplary engineering process in the Pushback season.', 
        tr: 'Pushback sezonunda takım ruhumuz ve örnek mühendislik sürecimiz nedeniyle jüri tarafından ödüle layık görüldük.' 
      },
      icon: 'fa-award'
    },
    {
      year: '2024',
      title: { 
        en: 'Excellence Award', 
        tr: 'Excellence (Mükemmellik) Ödülü' 
      },
      event: { 
        en: 'The highest honor in VEX Robotics, awarded to the team with the most complete and high-quality program.', 
        tr: 'VEX Robotik\'teki en yüksek onur ödülü; en eksiksiz ve yüksek kaliteli programa sahip takıma verilir.' 
      },
      icon: 'fa-trophy'
    },
    {
      year: '2023',
      title: { 
        en: 'Judges Award', 
        tr: 'Jüri Özel Ödülü' 
      },
      event: { 
        en: 'Awarded for our unique design process and exemplary team interview performance.', 
        tr: 'Eşsiz tasarım sürecimiz ve örnek teşkil eden takım mülakatı performansımız için verildi.' 
      },
      icon: 'fa-gavel'
    },
    {
      year: '2023',
      title: { 
        en: 'Innovate Award', 
        tr: 'Innovate Ödülü' 
      },
      event: { 
        en: 'Recognized for our innovative mechanical solutions during the VEX Spin Up season.', 
        tr: 'VEX Spin Up sezonunda geliştirdiğimiz yenilikçi mekanik çözümlerle bu prestijli ödülü kazandık.' 
      },
      icon: 'fa-lightbulb'
    },
    {
      year: '2022',
      title: { 
        en: 'Tournament Finalists (2nd Place)', 
        tr: 'Turnuva Finalisti (2.lik)' 
      },
      event: { 
        en: 'Our very first tournament experience at VEX Tipping Point, where we reached the finals.', 
        tr: 'İlk turnuva deneyimimiz olan VEX Tipping Point\'te finale yükselerek büyük bir başarıya imza attık.' 
      },
      icon: 'fa-medal'
    }
  ];

  const translations = {
    en: {
      title: 'Our',
      titleSpan: 'Awards',
      subtitle: 'Hall of Fame'
    },
    tr: {
      title: 'Kazandığımız',
      titleSpan: 'Ödüller',
      subtitle: 'Başarı Tablomuz'
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase tracking-tight">
          {translations[lang].title} <span className="text-yellow-500">{translations[lang].titleSpan}</span>
        </h2>
        <p className="text-purple-400 font-bold tracking-[0.3em] uppercase opacity-80 mb-6 text-sm">
          {translations[lang].subtitle}
        </p>
        <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {awards.map((award, index) => (
          <div 
            key={index} 
            className="group relative bg-gray-900/50 border border-purple-900/30 p-8 rounded-3xl hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col items-center"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-colors"></div>
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <i className={`fas ${award.icon} text-3xl text-yellow-500 group-hover:text-white transition-colors`}></i>
              </div>
              
              <span className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-2 block heading-font">
                {award.year}
              </span>
              
              <h3 className="text-xl font-bold text-white mb-3 heading-font group-hover:text-yellow-500 transition-colors min-h-[3rem] flex items-center justify-center">
                {award.title[lang]}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed">
                {award.event[lang]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
