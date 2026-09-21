import React from 'react';
import { Language, AppMode } from '../App';

interface AwardsProps {
  lang: Language;
  appMode: AppMode;
}

const Awards: React.FC<AwardsProps> = ({ lang, appMode }) => {
  const awards = [
    {
      year: '2025',
      title: {
        en: 'Judges Award',
        tr: 'Jüri Özel Ödülü'
      },
      event: {
        en: 'Recognized by the judges for our team spirit and exemplary engineering process.',
        tr: 'Takım ruhumuz ve örnek mühendislik sürecimiz nedeniyle jüri tarafından ödüle layık görüldük.'
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
        tr: 'İlk turnuva deneyimimiz olan VEX Tipping Point\'te finale yükselerek büyük bir başarı elde ettik.'
      },
      icon: 'fa-trophy'
    }
  ];

  const translations = {
    en: {
      title: 'Awards & Achievements',
      subtitle: 'Our Journey of Excellence',
      vexSection: 'VEX Hall of Fame',
      frcSection: 'FRC - A New Era Begins',
      frcNewTitle: 'A New Era Begins',
      frcNewDesc: 'As TAC Bears, we are embarking on our very first FRC journey with the 2026 season. Building upon our years of VEX experience, we are ready to bring our engineering excellence to the big stage.'
    },
    tr: {
      title: 'Ödüllerimiz ve Başarılarımız',
      subtitle: 'Mükemmellik Yolculuğumuz',
      vexSection: 'VEX Başarı Tablomuz',
      frcSection: 'FRC - Yeni Bir Dönem Başlıyor',
      frcNewTitle: 'Yeni Bir Dönem Başlıyor',
      frcNewDesc: 'TAC Bears olarak 2026 sezonu ile ilk FRC yolculuğumuza çıkıyoruz. Yıllara dayanan VEX tecrübemizi, mühendislik tutkumuzla birleştirerek bu büyük arenada yeni başarılara imza atmaya hazırız.'
    }
  };

  const t = translations[lang];
  const hues = ['var(--flame)', 'var(--electric)', 'var(--flame)', 'var(--electric)', 'var(--flame)'];

  return (
    <div className="max-w-[1500px] mx-auto px-5 sm:px-8">

      <header className="mb-12 md:mb-20">
        <h2 className="t-mega bleed-left text-[clamp(2.6rem,8vw,6rem)] max-w-[16ch]">
          {t.title}
        </h2>
        <p className="t-meta mt-4 text-[13px] text-[var(--ink-2)]">
          {t.subtitle}
        </p>
      </header>

      {/* Each win gets the scale of a scoreboard entry */}
      <ul>
        {awards.map((award, index) => (
          <li
            key={index}
            className="group grid md:grid-cols-[minmax(0,5fr)_minmax(0,4fr)] gap-x-10 gap-y-3 py-8 md:py-10 border-t-2 border-[var(--ink)]"
          >
            <div className="flex items-start gap-5 md:gap-8">
              <span
                className="t-fig shrink-0 text-[clamp(2.4rem,5vw,4.2rem)]"
                style={{ color: hues[index % hues.length] }}
              >
                {award.year}
              </span>
              <h3 className="t-head text-[clamp(1.3rem,2.6vw,2.1rem)] pt-1">
                {award.title[lang]}
              </h3>
            </div>

            <p className="text-[15.5px] leading-[1.65] text-[var(--ink-2)] max-w-[56ch] md:pt-3">
              {award.event[lang]}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Awards;
