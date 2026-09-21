
import React from 'react';
import { Language, AppMode } from '../App';

interface HeroProps {
  lang: Language;
  appMode: AppMode;
}

const Hero: React.FC<HeroProps> = ({ lang, appMode }) => {
  const translations = {
    en: {
      vexSeason: 'VEX Pushback 2025 - 2026 Sezonu',
      frcSeason: 'FRC 2026 Sezonu',
      tag: 'VEX & FRC ROBOTICS'
    },
    tr: {
      vexSeason: 'VEX Pushback 2025 - 2026 Sezonu',
      frcSeason: 'FRC 2026 Sezonu',
      tag: 'VEX & FRC ROBOTİK'
    }
  };

  const t = translations[lang];

  return (
    <div className="on-colour relative overflow-hidden" style={{ background: 'var(--flame)' }}>
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 pt-14 pb-0 md:pt-20">

        {/* The name at poster scale, cropped hard against the colour field */}
        <h1 className="enter t-mega bleed-left text-white text-[clamp(4.2rem,20vw,17rem)]">
          TAC<br />BEARS
        </h1>

        <div className="enter grid md:grid-cols-[auto_minmax(0,1fr)] gap-6 md:gap-12 items-end mt-8 md:mt-10" style={{ animationDelay: '90ms' }}>
          <div className="flex items-end gap-8">
            <div>
              <div className="t-fig text-[clamp(2.6rem,7vw,4.5rem)] text-white">2022</div>
              <div className="t-meta mt-2 text-[12px] text-white/85">EST.</div>
            </div>
            <div className="t-sub text-[clamp(1rem,2.4vw,1.5rem)] text-white pb-1 max-w-[16ch]">
              {t.tag}
            </div>
          </div>

          {/* Programme key, doubling as the page's colour legend */}
          <div className="flex md:justify-end gap-3 pb-2">
            <span className="t-meta text-[12px] px-3 py-1.5" style={{ background: 'var(--amber)', color: 'var(--ink)' }}>
              VEX
            </span>
            <span className="t-meta text-[12px] px-3 py-1.5 text-white" style={{ background: 'var(--electric)' }}>
              FRC
            </span>
          </div>
        </div>

        {/* Photograph breaks out of the colour block into the section below */}
        <div className="enter relative mt-12 md:mt-16 -mb-16 md:-mb-24" style={{ animationDelay: '180ms' }}>
          <div className="aspect-[16/9] md:aspect-[21/8] overflow-hidden bg-[var(--ink)]">
            <img
              src="https://lh3.googleusercontent.com/d/1YP_IntmX1gCb2aWqT3Lf3cHtQyEH-1VG"
              alt="TAC Bears"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
