
import React from 'react';
import { Language, AppMode } from '../App';

interface InstagramProps {
  lang: Language;
  appMode: AppMode;
}

const Instagram: React.FC<InstagramProps> = ({ lang, appMode }) => {
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

  const t = translations[lang];

  return (
    <div className="on-colour" style={{ background: 'var(--electric)' }}>
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 py-16 md:py-24 grid md:grid-cols-[minmax(0,1fr)_auto] gap-8 md:gap-16 items-end">
        <div>
          <h2 className="t-mega bleed-left text-[var(--amber)] text-[clamp(2.2rem,6.5vw,4.8rem)] max-w-[16ch]">
            {t.title} {t.titleSpan}
          </h2>
          <p className="mt-5 text-[16px] leading-[1.65] text-white/90 max-w-[54ch]">
            {t.description}
          </p>
        </div>

        <a
          href={igLink}
          target="_blank"
          rel="noopener noreferrer"
          className="t-meta shrink-0 inline-flex items-center gap-3 px-8 py-5 text-[14px] bg-white text-[var(--ink)] hover:bg-[var(--amber)] transition-colors"
        >
          <i className="fab fa-instagram text-[17px]"></i>
          @TACBEARS
        </a>
      </div>
    </div>
  );
};

export default Instagram;
