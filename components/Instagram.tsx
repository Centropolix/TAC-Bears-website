
import React from 'react';
import { Language } from '../App';

interface InstagramProps {
  lang: Language;
}

const Instagram: React.FC<InstagramProps> = ({ lang }) => {
  const igLink = "https://www.instagram.com/tacbears?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  const translations = {
    en: {
      title: 'Follow Our',
      titleSpan: 'Journey',
      description: 'Get behind-the-scenes access to our build sessions, competition highlights, and daily team updates.'
    },
    tr: {
      title: 'Yolculuğumuzu',
      titleSpan: 'Takip Edin',
      description: 'Yapım aşamalarımıza, yarışma anlarımıza ve günlük takım güncellemelerimize kamera arkası erişim sağlayın.'
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="relative py-20 px-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-red-900/10 border border-purple-500/20 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-600/10 rounded-full blur-[80px]"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]"></div>

        <div className="relative z-10">
          <i className="fab fa-instagram text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 mb-8"></i>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            {translations[lang].title} <span className="text-red-500">{translations[lang].titleSpan}</span>
          </h2>
          
          <p className="max-w-xl mx-auto text-gray-400 text-lg mb-10">
            {translations[lang].description}
          </p>

          <a
            href={igLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-950 hover:bg-gray-200 rounded-full font-bold transition-all transform hover:scale-105 heading-font group"
          >
            @TACBEARS
            <i className="fas fa-external-link-alt ml-3 text-sm transition-transform group-hover:translate-x-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
