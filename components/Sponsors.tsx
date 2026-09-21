
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
      noSponsors: 'VEX & FRC Sponsorship opportunities are open.'
    },
    tr: {
      title: 'Sponsorlarımız',
      titleSpan: '',
      subtitle: 'İnovasyonda Ortaklarımız',
      description: 'Geleceğin mühendislerini destekleyin. Katkılarınız, robotik ve rekabet sınırlarını zorlamamıza yardımcı olur.',
      applyTitle: 'Sponsorumuz Olun',
      applyDesc: 'Yolculuğumuza katılın; robotumuzda, web sitemizde ve sosyal medyamızda yer alın.',
      applyBtn: 'Sponsorluk Formunu Doldur',
      noSponsors: 'VEX & FRC sezonu sponsorluk başvuruları devam etmektedir.'
    }
  };

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

  const t = translations[lang];

  return (
    <div className="max-w-[1500px] mx-auto px-5 sm:px-8">

      <header className="mb-12 md:mb-16">
        <h2 className="t-mega bleed-left text-[clamp(2.6rem,8vw,6rem)]">
          {t.title} {t.titleSpan}
        </h2>
        <p className="t-meta mt-2 text-[14px] text-[var(--ink-2)]">
          {t.subtitle}
        </p>
        <p className="mt-6 text-[16px] leading-[1.65] text-[var(--ink-2)] max-w-[56ch]">
          {t.description}
        </p>
      </header>

      {/* Logos sit on white — the ground a printed logo is made for */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
        {sponsorsList.map((sponsor, index) => (
          <div
            key={index}
            className="bg-white ring-1 ring-[var(--ink)]/10 h-40 flex items-center justify-center p-8"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              referrerPolicy="no-referrer"
              className="max-h-20 max-w-full object-contain"
            />
          </div>
        ))}
      </div>

      <p className="t-meta text-[13px] text-[var(--ink-2)] mb-10 pb-10 border-b-2 border-[var(--ink)]">
        {t.noSponsors}
      </p>

      {/* Sponsorship call to action */}
      <div className="grid md:grid-cols-[minmax(0,1fr)_auto] gap-8 md:gap-16 items-end">
        <div>
          <h3 className="t-head text-[clamp(1.5rem,3vw,2.1rem)] max-w-[20ch]">
            {t.applyTitle}
          </h3>
          <p className="mt-3 text-[15.5px] leading-[1.65] text-[var(--ink-2)] max-w-[52ch]">
            {t.applyDesc}
          </p>
        </div>

        <a
          href={formsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="t-meta shrink-0 inline-flex items-center justify-center px-8 py-4 text-[13.5px] text-white bg-[var(--ink)] hover:bg-[var(--flame)] transition-colors"
        >
          {t.applyBtn}
        </a>
      </div>
    </div>
  );
};

export default Sponsors;
