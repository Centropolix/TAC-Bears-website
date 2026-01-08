
import React from 'react';
import { Language } from '../App';

interface SponsorsProps {
  lang: Language;
}

const Sponsors: React.FC<SponsorsProps> = ({ lang }) => {
  // Google Forms linkini buraya yapıştırabilirsiniz
  const formsLink = "https://forms.gle/your-actual-form-id"; 

  const translations = {
    en: {
      title: 'Our',
      titleSpan: 'Sponsors',
      subtitle: 'Partners in Innovation',
      description: 'Support the engineers of tomorrow. Your contribution helps us push the boundaries of robotics and competition.',
      applyTitle: 'Become a Sponsor',
      applyDesc: 'Join our journey and get featured on our robot, website, and social media.',
      applyBtn: 'Fill Out Sponsorship Form',
      noSponsors: 'Sponsorship opportunities are now open for the 2025-2026 season.'
    },
    tr: {
      title: 'Sponsorlarımız',
      titleSpan: '',
      subtitle: 'İnovasyonda Ortaklarımız',
      description: 'Geleceğin mühendislerini destekleyin. Katkılarınız, robotik ve rekabet sınırlarını zorlamamıza yardımcı olur.',
      applyTitle: 'Sponsorumuz Olun',
      applyDesc: 'Yolculuğumuza katılın; robotumuzda, web sitemizde ve sosyal medyamızda yer alın.',
      applyBtn: 'Sponsorluk Formunu Doldur',
      noSponsors: '2025-2026 sezonu için sponsorluk başvuruları devam etmektedir.'
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase tracking-tight">
          {translations[lang].title} <span className="text-yellow-500">{translations[lang].titleSpan}</span>
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          {translations[lang].description}
        </p>
      </div>

      {/* Mevcut Sponsorlar Alanı (Placeholder) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {/* Sponsor logoları gelince buraya eklenebilir */}
        <div className="col-span-full py-12 border-2 border-dashed border-purple-900/30 rounded-3xl flex items-center justify-center bg-gray-900/30">
          <p className="text-gray-500 font-medium italic">{translations[lang].noSponsors}</p>
        </div>
      </div>

      {/* Sponsorluk Başvuru Kartı */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-yellow-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-gray-900 border border-purple-500/20 rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-yellow-500/5 rounded-full blur-[80px]"></div>
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
              className="w-full md:w-auto px-8 py-5 bg-yellow-500 text-gray-950 font-bold rounded-2xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.3)] heading-font text-center uppercase tracking-wider"
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
