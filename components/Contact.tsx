
import React from 'react';
import { Language } from '../App';

interface ContactProps {
  lang: Language;
  onNavigate: (section: string) => void;
}

const Contact: React.FC<ContactProps> = ({ lang, onNavigate }) => {
  const email = "robotics@my.tac.k12.tr";

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

  const t = translations[lang];

  return (
    <div className="on-colour min-h-[70vh]" style={{ background: 'var(--flame)' }}>
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 py-20 md:py-28">

        <header className="mb-10">
          <h2 className="t-mega bleed-left text-white text-[clamp(2.6rem,9vw,6.5rem)]">
            {t.title} {t.titleSpan}
          </h2>
          <p className="t-meta mt-4 text-[13px] text-white">
            {t.subtitle}
          </p>
        </header>

        <p className="text-[17px] leading-[1.7] text-white max-w-[52ch] mb-12">
          {t.description}
        </p>

        {/* The email is the whole point of this page, so it is the largest thing on it */}
        <a
          href={`mailto:${email}`}
          className="group block bg-[var(--ink)] hover:bg-[var(--amber)] transition-colors px-6 py-10 md:px-10 md:py-14"
        >
          <span className="t-head block text-[clamp(1.3rem,5vw,3.4rem)] break-all leading-tight text-white group-hover:text-[var(--ink)] transition-colors">
            {email}
          </span>
        </a>

        <div className="mt-14">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="t-meta inline-flex items-center gap-3 text-[13px] text-white border-b-2 border-white pb-1 hover:text-[var(--amber)] hover:border-[var(--amber)] transition-colors"
          >
            <i className="fas fa-arrow-left text-[11px]"></i>
            {t.back}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
