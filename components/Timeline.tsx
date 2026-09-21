
import React from 'react';
import { Language, AppMode } from '../App';

interface TimelineProps {
  lang: Language;
  appMode: AppMode;
}

const Timeline: React.FC<TimelineProps> = ({ lang, appMode }) => {
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
      title: {
        en: 'VEX & FRC Expansion',
        tr: 'VEX & FRC Genişlemesi'
      },
      desc: {
        en: 'Simultaneously excelling in VEX and stepping into the FIRST Robotics Competition arena.',
        tr: 'VEX\'te mükemmelleşmeye devam ederken FIRST Robotik Yarışması arenasına ilk adımımızı attık.'
      },
      icon: 'fa-gears',
      color: 'bg-purple-600'
    },
    {
      year: '2026',
      title: { en: 'Beyond Boundaries', tr: 'Sınırların Ötesi' },
      desc: {
        en: 'Pushing mechanical boundaries in FRC Reefscape and VEX Pushback seasons.',
        tr: 'FRC Reefscape ve VEX Pushback sezonlarında mekanik sınırları zorluyoruz.'
      },
      icon: 'fa-earth-americas',
      color: 'bg-yellow-600'
    }
  ];

  const translations = {
    en: { title: 'Our', span: 'Journey', subtitle: 'Timeline 2022 - 2026', hint: 'Scroll horizontally to explore' },
    tr: { title: 'Bizim', span: 'Yolculuğumuz', subtitle: 'Zaman Çizelgesi 2022 - 2026', hint: 'Keşfetmek için kaydırın' }
  };

  const t = translations[lang];
  const current = events.length - 1;
  const hues = ['var(--flame)', 'var(--electric)', 'var(--flame)', 'var(--electric)', 'var(--flame)'];

  return (
    <div className="max-w-[1500px] mx-auto px-5 sm:px-8">

      <header className="mb-12 md:mb-16">
        <h2 className="t-mega bleed-left text-[clamp(2.6rem,8vw,6rem)]">
          {t.title} {t.span}
        </h2>
        <p className="t-meta mt-4 text-[13px] text-[var(--ink-2)]">
          {t.subtitle}
        </p>
      </header>

      <div className="hide-scrollbar overflow-x-auto lg:overflow-visible -mx-5 px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
        <ol className="flex lg:grid lg:grid-cols-5 gap-5 lg:gap-0 min-w-[980px] lg:min-w-0">
          {events.map((event, index) => (
            <li
              key={index}
              className="w-[272px] lg:w-auto shrink-0 lg:px-5 lg:first:pl-0 lg:last:pr-0"
            >
              {/* The year is the graphic; the photograph sits under it */}
              <div className="t-fig bleed-left text-[clamp(2.8rem,4.6vw,4.4rem)]" style={{ color: hues[index % hues.length] }}>
                {event.year}
              </div>

              {event.image ? (
                <div className="mt-4 aspect-[5/4] overflow-hidden bg-[var(--mist)]">
                  <img
                    src={event.image}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="mt-4 aspect-[5/4] hatch" />
              )}

              <h3 className="t-head mt-5 text-[clamp(1.15rem,1.7vw,1.5rem)]">
                {event.title[lang]}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[var(--ink-2)] max-w-[34ch]">
                {event.desc[lang]}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <p className="lg:hidden t-meta mt-6 text-[12px] text-[var(--ink-2)]">
        {t.hint}
      </p>
    </div>
  );
};

export default Timeline;
