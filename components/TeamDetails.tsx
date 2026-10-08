import React, { useEffect } from 'react';
import { Language } from '../App';
import { RosterCell } from './Team';

interface TeamDetailsProps {
  lang: Language;
  onNavigate: (section: string) => void;
}

const TeamDetails: React.FC<TeamDetailsProps> = ({ lang, onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const firstRowMembers = [
    {
      name: 'Can Gökçe Öner',
      image: '',
      color: 'from-purple-400 to-indigo-600',
      border: 'border-purple-500/20',
      role: 'Team Leader'
    },
    {
      name: 'Kadir Ceylan',
      image: '',
      color: 'from-orange-400 to-red-600',
      border: 'border-orange-500/20',
      role: 'Electronics/software Leader'
    },
    {
      name: 'Oğuzalp Kaya',
      image: '',
      color: 'from-emerald-400 to-teal-600',
      border: 'border-emerald-500/20',
      role: 'Design/Mechanics Leader'
    }
  ];

  const translations = {
    en: { back: 'CLOSE AND RETURN', title: 'OUR TEAM', tag: 'MENTOR' },
    tr: { back: 'KAPAT VE DÖN', title: 'EKİBİMİZ', tag: 'MENTOR' }
  };

  const t = translations[lang];

  return (
    <div className="max-w-[1500px] mx-auto px-5 sm:px-8 py-16 md:py-24">

      <header className="mb-12 md:mb-16">
        <h2 className="t-mega bleed-left text-[clamp(1.6rem,6.4vw,4.6rem)]">
          {t.title}
        </h2>
      </header>

      <div className="space-y-14 md:space-y-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-8 max-w-5xl">
          {firstRowMembers.map((member, index) => (
            <RosterCell key={index} member={member} size="lead" accent="var(--flame)" />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <a
          href="#team"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('team');
          }}
          className="t-meta inline-flex items-center gap-3 text-[13px] text-[var(--ink-2)] hover:text-[var(--ink)] border-b-2 border-[var(--flame)] pb-1 transition-colors"
        >
          <i className="fas fa-arrow-left text-[11px]"></i>
          {t.back}
        </a>
      </div>
    </div>
  );
};

export default TeamDetails;
