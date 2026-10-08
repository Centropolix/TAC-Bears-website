import React from 'react';
import { Language, AppMode } from '../App';

interface TeamProps {
  lang: Language;
  onNavigate: (section: string) => void;
  appMode: AppMode;
}

interface Member {
  name: string;
  image: string;
  color: string;
  border: string;
  role?: string;
}

export const RosterCell: React.FC<{
  member: Member;
  label?: string;
  size?: 'lead' | 'normal';
  accent?: string;
}> = ({ member, label, size = 'normal', accent = 'var(--ink)' }) => (
  <figure className="group">
    <div className="relative w-full aspect-[4/5] overflow-hidden bg-[var(--mist)]">
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full hatch" />
      )}
      {label && (
        <figcaption
          className="t-meta absolute top-0 left-0 px-3 py-1.5 text-[10.5px]"
          style={{ background: accent, color: accent === 'var(--amber)' ? 'var(--ink)' : '#FFFFFF' }}
        >
          {label}
        </figcaption>
      )}
    </div>
    {/* A colour bar ties each cell to its group */}
    <div className="h-[5px] w-full transition-all duration-200 group-hover:h-[11px]" style={{ background: accent }} />
    <div className="pt-3">
      <div className={`t-head ${size === 'lead' ? 'text-[clamp(1rem,1.5vw,1.25rem)]' : 'text-[15.5px]'} leading-tight`}>
        {member.name}
      </div>
      {member.role && (
        // roles are written in English, so uppercase them with English rules (I, not İ)
        <div lang="en" className="t-meta mt-1.5 text-[11.5px]" style={{ color: 'var(--flame-tx)' }}>
          {member.role}
        </div>
      )}
    </div>
  </figure>
);

const Team: React.FC<TeamProps> = ({ lang, onNavigate, appMode }) => {
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
    en: {
      title: 'Our',
      titleSpan: 'Team',
      tag: 'MENTOR'
    },
    tr: {
      title: 'Bizim',
      titleSpan: 'Takımımız',
      tag: 'MENTOR'
    }
  };

  const t = translations[lang];

  return (
    <div className="max-w-[1500px] mx-auto px-5 sm:px-8">

      <header className="mb-12 md:mb-16">
        <h2 className="t-mega bleed-left text-[clamp(1.6rem,6.4vw,4.6rem)]">
          {t.title} {t.titleSpan}
        </h2>
      </header>

      <div className="space-y-14 md:space-y-20">
        {/* Section leads — roles stay visible rather than hiding behind hover */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-8 max-w-5xl">
          {firstRowMembers.map((member, index) => (
            <RosterCell key={index} member={member} size="lead" accent="var(--flame)" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
