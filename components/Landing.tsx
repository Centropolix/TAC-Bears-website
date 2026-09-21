
import React, { useState, useEffect } from 'react';
import { Language, AppMode } from '../App';

interface LandingProps {
  lang: Language;
  setMode: (mode: AppMode) => void;
}

const Landing: React.FC<LandingProps> = ({ lang, setMode }) => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const quotes = [
    {
      text: {
        tr: "Mühendislik; hayal kurmak ile bu hayalleri somut bir gerçekliğe dönüştürmek arasındaki köprüdür.",
        en: "Engineering is the bridge between dreaming and turning those dreams into a tangible reality."
      },
      author: "Neil Armstrong"
    },
    {
      text: {
        tr: "Bir problem, henüz çözülememiş bir fırsattır.",
        en: "A problem is an opportunity that has not yet been solved."
      },
      author: "Wernher von Braun"
    },
    {
      text: {
        tr: "Bilim insanları var olan dünyayı inceler; mühendisler ise hiç var olmamış dünyaları yaratır.",
        en: "Scientists study the world as it is; engineers create the world that has never been."
      },
      author: "Theodore von Kármán"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
        setIsTransitioning(false);
      }, 800);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const translations = {
    en: {
      heroTitle: 'TAC BEARS',
      aboutTitle: 'WHO WE ARE',
      aboutText: 'TAC Bears is the robotics community of Tarsus American College. Founded in 2022, our community brings together young engineers, programmers, and strategists to compete on national and international stages through two specialized sectors.',
      selectTitle: 'CHOOSE YOUR PATH',
      vexDesc: 'PUSHBACK 25-26',
      frcDesc: 'REEFSCAPE 26',
      stats: [
        { label: 'AWARDS', value: '5' },
        { label: 'MEMBERS', value: '20+' },
        { label: 'EST.', value: '2022' }
      ]
    },
    tr: {
      heroTitle: 'TAC BEARS',
      aboutTitle: 'BİZ KİMİZ?',
      aboutText: 'TAC Bears, Tarsus Amerikan Koleji\'nin robotik topluluğudur. 2022\'de kurulan topluluğumuz, genç mühendisleri, programcıları ve stratejistleri bir araya getirerek iki uzmanlaşmış sektörde ulusal ve uluslararası arenalarda rekabet etmeyi hedefler.',
      selectTitle: 'YOLUNUZU SEÇİN',
      vexDesc: 'PUSHBACK 25-26',
      frcDesc: 'REEFSCAPE 26',
      stats: [
        { label: 'ÖDÜL', value: '5' },
        { label: 'ÜYE', value: '20+' },
        { label: 'KURULUŞ', value: '2022' }
      ]
    }
  };

  const t = translations[lang];

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)]">

      {/* Masthead: the record, stated as figures */}
      <section className="bg-[var(--ink)] text-[var(--paper)]">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
          <h1 className="t-mega text-[clamp(3.4rem,11vw,7.5rem)] text-white">
            {t.heroTitle}
          </h1>

          <dl className="mt-12 flex flex-wrap border-t border-white/15">
            {t.stats.map((stat, i) => (
              <div
                key={i}
                className={`pt-4 pr-10 ${i > 0 ? 'pl-10 border-l border-white/15' : ''}`}
              >
                <dt className="t-fig text-[30px] md:text-[36px] text-white leading-none">
                  {stat.value}
                </dt>
                <dd className="t-meta mt-1.5 text-[12px] text-white/50">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Programme chooser */}
      <section id="arena-select" className="max-w-[1500px] mx-auto px-5 sm:px-8 py-20 md:py-28">
        <h2 className="t-head text-[clamp(1.6rem,3.4vw,2.4rem)] mb-10">
          {t.selectTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          <button
            onClick={() => setMode('vex')}
            className="group text-left bg-[#FFFFFF] border border-[rgba(14,17,22,0.12)] hover:border-[var(--amber)] transition-colors p-8 md:p-12"
          >
            <span className="block w-12 h-[4px] mb-8" style={{ background: 'var(--amber)' }} />
            <span className="t-mega block text-[clamp(2.6rem,7vw,4.4rem)] leading-none">VEX</span>
            <span className="t-meta block mt-4 text-[14px]" style={{ color: 'var(--flame-tx)' }}>
              {t.vexDesc}
            </span>
          </button>

          <button
            onClick={() => setMode('frc')}
            className="group text-left bg-[#FFFFFF] border border-[rgba(14,17,22,0.12)] hover:border-[var(--electric)] transition-colors p-8 md:p-12"
          >
            <span className="block w-12 h-[4px] mb-8" style={{ background: 'var(--electric)' }} />
            <span className="t-mega block text-[clamp(2.6rem,7vw,4.4rem)] leading-none">FRC</span>
            <span className="t-meta block mt-4 text-[14px]" style={{ color: 'var(--electric)' }}>
              {t.frcDesc}
            </span>
          </button>
        </div>
      </section>

      {/* About */}
      <section className="max-w-[1500px] mx-auto px-5 sm:px-8 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-start border-t border-[var(--ink)] pt-12">
          <div>
            <h2 className="t-head text-[clamp(2rem,4.4vw,3.1rem)]">
              {t.aboutTitle}
            </h2>
            <p className="mt-6 text-[17px] leading-[1.7] text-[var(--ink-2)] max-w-[58ch]">
              {t.aboutText}
            </p>
          </div>

          <div className="aspect-[4/5] max-h-[560px] overflow-hidden bg-[#E3E6E9] border border-[rgba(14,17,22,0.12)]">
            <img
              src="https://lh3.googleusercontent.com/d/1YP_IntmX1gCb2aWqT3Lf3cHtQyEH-1VG"
              className="w-full h-full object-cover"
              alt="TAC Bears"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Quotation */}
      <section className="bg-[#FFFFFF] border-y border-[rgba(14,17,22,0.12)]">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 py-20 md:py-28">
          <blockquote
            className={`max-w-[42ch] transition-opacity duration-700 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          >
            <p className="t-head text-[clamp(1.5rem,3.4vw,2.3rem)] leading-[1.3]">
              {quotes[quoteIndex].text[lang]}
            </p>
            <cite className="t-meta not-italic block mt-6 text-[13.5px] text-[var(--ink-2)]">
              {quotes[quoteIndex].author}
            </cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Landing;
