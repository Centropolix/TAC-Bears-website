
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

  const t = translations[lang];

  return (
    <footer className="bg-[var(--ink)] text-white mt-auto">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 py-14">
        <div className="grid md:grid-cols-[minmax(0,1fr)_auto] gap-10 items-start">
          <div>
            <button
              onClick={() => {
                window.location.hash = 'home';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="t-mega text-[clamp(1.8rem,5vw,3rem)] text-white hover:text-white/70 transition-colors"
            >
              TAC BEARS
            </button>
            <p className="t-head mt-3 text-[17px] text-white/70 max-w-[24ch]">
              {t.tagline}
            </p>
          </div>

          <div className="flex md:flex-col md:items-end gap-5 md:gap-3">
            <a
              href={igLink}
              target="_blank"
              rel="noopener noreferrer"
              className="t-meta text-[13px] text-white/55 hover:text-white transition-colors"
            >
              <i className="fab fa-instagram mr-2"></i>Instagram
            </a>
            <a
              href={youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="t-meta text-[13px] text-white/55 hover:text-white transition-colors"
            >
              <i className="fab fa-youtube mr-2"></i>YouTube
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/12 flex flex-col sm:flex-row justify-between gap-3">
          <p className="t-meta text-[12px] text-white/60">
            &copy; {new Date().getFullYear()} TAC Bears. {t.rights}
          </p>
          <p className="t-meta text-[12px] text-white/60">
            made by Kadır Ceylan Tac'28
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
