
import React from 'react';
import { Language, AppMode } from '../App';

interface FooterProps {
  lang: Language;
  appMode: AppMode;
}

const Footer: React.FC<FooterProps> = ({ lang, appMode }) => {
  const igLink = "https://www.instagram.com/tacbears?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const youtubeLink = "https://www.youtube.com/channel/UCV4UHPtxzF-x3ZD2sd6Q2fA";

  const translations = {
    en: {
      tagline: 'Engineering is the future',
      rights: 'All rights reserved.'
    },
    tr: {
      tagline: 'Mühendislik Gelecektir',
      rights: 'Tüm hakları saklıdır.'
    }
  };

  const themeColor = appMode === 'frc' ? 'text-blue-500' : 'text-yellow-500';

  return (
    <footer className="bg-gray-950 border-t border-purple-900/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div>
            <div className="flex items-center space-x-2 mb-4 justify-center md:justify-start">
              <span className="text-xl font-bold text-purple-500 heading-font">TAC</span>
              <span className={`text-xl font-bold ${themeColor} heading-font`}>BEARS</span>
            </div>
            <p className="text-purple-400/60 text-sm max-w-xs text-center md:text-left uppercase tracking-widest font-semibold">
              {translations[lang].tagline}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a 
                href={igLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`text-gray-500 hover:${themeColor} transition-colors`}
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href={youtubeLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-500 transition-colors"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
            <p className="text-gray-600 text-xs text-center md:text-right">
              &copy; {new Date().getFullYear()} TAC Bears. {translations[lang].rights}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-semibold opacity-70 hover:opacity-100 hover:text-purple-400 transition-all duration-500 cursor-default">
            made by Kadır Ceylan Tac'28
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
