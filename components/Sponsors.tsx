
import React from 'react';
import { Language, AppMode } from '../App';

interface SponsorsProps {
  lang: Language;
  appMode: AppMode;
}

const Sponsors: React.FC<SponsorsProps> = ({ lang, appMode }) => {
  const formsLink = "https://docs.google.com/forms/d/e/1FAIpQLSelwFPq3E6fVLM_6fhWel7zrW0IYeubufBP0hTL9CYxHdAgNQ/viewform?usp=publish-editor"; 

  const translations = {
    en: {
      title: 'Our',
      titleSpan: 'Sponsors',
      subtitle: 'Partners in Innovation',
      description: 'Support the engineers of tomorrow. Your contribution helps us push the boundaries of robotics and competition.',
      applyTitle: 'Become a Sponsor',
      applyDesc: 'Join our journey and get featured on our robot, website, and social media.',
      applyBtn: 'Fill Out Sponsorship Form',
      noSponsors: appMode === 'frc' ? 'FRC Sponsorship opportunities are open.' : 'VEX Sponsorship opportunities are open.'
    },
    tr: {
      title: 'Sponsorlarımız',
      titleSpan: '',
      subtitle: 'İnovasyonda Ortaklarımız',
      description: 'Geleceğin mühendislerini destekleyin. Katkılarınız, robotik ve rekabet sınırlarını zorlamamıza yardımcı olur.',
      applyTitle: 'Sponsorumuz Olun',
      applyDesc: 'Yolculuğumuza katılın; robotumuzda, web sitemizde ve sosyal medyamızda yer alın.',
      applyBtn: 'Sponsorluk Formunu Doldur',
      noSponsors: appMode === 'frc' ? 'FRC sezonu sponsorluk başvuruları devam etmektedir.' : 'VEX sezonu sponsorluk başvuruları devam etmektedir.'
    }
  };

  const themeColor = appMode === 'frc' ? 'text-blue-500' : 'text-yellow-500';
  const themeBg = appMode === 'frc' ? 'bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'bg-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.3)]';
  const themeGlow = appMode === 'frc' ? 'from-blue-600 to-purple-500' : 'from-purple-600 to-yellow-500';

  const sponsorsList = [
    {
      name: "Sponsor",
      logo: "https://lh3.googleusercontent.com/d/1rh4tWIN7gOkOqA96Oca8oYkVuZqdOCdq",
    },
    {
      name: "Sponsor 2",
      logo: "https://lh3.googleusercontent.com/d/1kcxsxbkF0RCa4HO1TVTpWKAcGkMsE5N_",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase tracking-tight">
          {translations[lang].title} <span className={themeColor}>{translations[lang].titleSpan}</span>
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          {translations[lang].description}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-20">
        {sponsorsList.map((sponsor, index) => (
          <div 
            key={index} 
            className="group relative bg-[#111827]/40 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/5 flex items-center justify-center w-72 h-44 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 shadow-xl overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-tr ${themeGlow} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}></div>
            <img 
              src={sponsor.logo} 
              alt={sponsor.name} 
              referrerPolicy="no-referrer"
              className="max-h-24 max-w-[85%] object-contain filter brightness-95 contrast-105 group-hover:brightness-110 transition-all duration-300"
            />
          </div>
        ))}
      </div>

      <div className="relative group">
        <div className={`absolute -inset-1 bg-gradient-to-r ${themeGlow} rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200`}></div>
        <div className="relative bg-gray-900 border border-purple-500/20 rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className={`absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 ${appMode === 'frc' ? 'bg-blue-500/5' : 'bg-yellow-500/5'} rounded-full blur-[80px]`}></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-purple-600/5 rounded-full blur-[80px]"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 heading-font uppercase">
                {translations[lang].applyTitle}
              </h3>
              <p className="text-gray-400 text-lg max-w-md">
                {translations[lang].applyDesc}
              </p>
            </div>
            
            <a
              href={formsLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full md:w-auto px-8 py-5 ${themeBg} text-gray-950 font-bold rounded-2xl hover:bg-white hover:scale-105 transition-all duration-300 heading-font text-center uppercase tracking-wider`}
            >
              <i className="fas fa-file-signature mr-3"></i>
              {translations[lang].applyBtn}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
