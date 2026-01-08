
import React from 'react';
import { Language } from '../App';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const email = "tatokmak28@my.tac.k12.tr"; // Güncellenen e-posta adresi

  const translations = {
    en: {
      title: 'Contact',
      titleSpan: 'Us',
      subtitle: 'Get in Touch',
      description: 'For sponsorships, collaborations, or questions, feel free to reach out to us via email.',
      back: 'Back to Home'
    },
    tr: {
      title: 'Bize',
      titleSpan: 'Ulaşın',
      subtitle: 'İletişim',
      description: 'Sponsorluk, iş birliği veya sorularınız için bize e-posta yoluyla ulaşmaktan çekinmeyin.',
      back: 'Ana Sayfaya Dön'
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-gray-950 relative overflow-hidden">
      {/* Arka Plan Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        <div className="inline-block p-1 bg-gradient-to-tr from-purple-600 to-yellow-500 rounded-3xl shadow-2xl">
          <div className="bg-gray-900 rounded-[calc(1.5rem-1px)] p-8 md:p-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 uppercase tracking-tight">
              {translations[lang].title} <span className="text-yellow-500">{translations[lang].titleSpan}</span>
            </h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto mb-8 rounded-full"></div>
            
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              {translations[lang].description}
            </p>

            <div className="group relative inline-block w-full">
              <a 
                href={`mailto:${email}`}
                className="block w-full py-6 px-4 bg-gray-800 border border-purple-500/30 rounded-2xl text-lg md:text-xl font-bold text-yellow-400 hover:bg-purple-600 hover:text-white transition-all duration-300 heading-font break-all"
              >
                <i className="fas fa-envelope mr-3 text-purple-400 group-hover:text-white"></i>
                {email}
              </a>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-yellow-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 pointer-events-none"></div>
            </div>

            <div className="mt-12">
              <a 
                href="#home"
                className="text-gray-500 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold flex items-center justify-center space-x-2"
              >
                <i className="fas fa-arrow-left"></i>
                <span>{translations[lang].back}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
