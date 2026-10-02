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
        <div className="t-meta mt-1.5 text-[11.5px]" style={{ color: 'var(--flame-tx)' }}>
          {member.role}
        </div>
      )}
    </div>
  </figure>
);

const Team: React.FC<TeamProps> = ({ lang, onNavigate, appMode }) => {
  const topMembers = [
    {
      name: 'Gökçe Akoğlu',
      image: '',
      color: 'from-yellow-400 via-amber-500 to-yellow-600',
      border: 'border-yellow-400/50 shadow-[0_0_30px_rgba(234,179,8,0.2)]'
    },
  ];

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
      name: 'Zeynep Gizer',
      image: '',
      color: 'from-rose-500 to-red-600',
      border: 'border-rose-600/30',
      role: 'PR/Business Leader'
    },
    {
      name: 'Oğuzalp Kaya',
      image: '',
      color: 'from-emerald-400 to-teal-600',
      border: 'border-emerald-500/20',
      role: 'Design/Mechanics Leader'
    }
  ];

  const otherTeamMembers = [
    { name: 'Arda Çiloğlu', image: '', color: 'from-purple-400 to-pink-600', border: 'border-purple-500/20' },
    { name: 'Talha Yücel', image: '', color: 'from-cyan-400 to-blue-600', border: 'border-cyan-500/20' },
    { name: 'Talya Tokmak', image: '', color: 'from-rose-400 to-pink-600', border: 'border-rose-500/20' },
    { name: 'Ali Mirza Kılınç', image: '', color: 'from-blue-500 to-cyan-600', border: 'border-blue-500/20' },
    { name: 'Aral Tormaç', image: '', color: 'from-teal-400 to-green-600', border: 'border-teal-500/20' },
    { name: 'Arin Yadigaroğulları', image: '', color: 'from-pink-400 to-rose-600', border: 'border-pink-500/20' },
    { name: 'Aynil İzmir Gülaçtı', image: '', color: 'from-amber-400 to-orange-600', border: 'border-amber-500/20' },
    { name: 'Batuhan Selçik', image: '', color: 'from-slate-400 to-slate-600', border: 'border-slate-500/20' },
    { name: 'Burak Berk Berkeşoğlu', image: '', color: 'from-violet-400 to-purple-600', border: 'border-violet-500/20' },
    { name: 'Kuzey Bozhöyük', image: '', color: 'from-teal-400 to-emerald-600', border: 'border-teal-500/20' },
    { name: 'Mehmet Ali Sağlamcı', image: '', color: 'from-blue-500 to-blue-700', border: 'border-blue-600/20' },
    { name: 'Metehan Tokdemir', image: '', color: 'from-orange-500 to-rose-500', border: 'border-orange-500/20' },
    { name: 'Öykü Arı', image: '', color: 'from-emerald-500 to-green-700', border: 'border-emerald-600/20' },
    {
      name: 'Ömer Utku Ataş',
      image: '',
      color: 'from-purple-500 to-indigo-600',
      border: 'border-purple-600/20'
    },
    { name: 'Asme Hayal Çelik', image: '', color: 'from-amber-500 to-yellow-600', border: 'border-amber-600/20' }
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
        <h2 className="t-mega bleed-left text-[clamp(2.6rem,8vw,6rem)]">
          {t.title} {t.titleSpan}
        </h2>
      </header>

      <div className="space-y-14 md:space-y-20">
        {/* Mentors */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 max-w-4xl">
          {topMembers.map((member, index) => (
            <RosterCell key={index} member={member} label={t.tag} size="lead" accent="var(--amber)" />
          ))}
        </div>

        {/* Section leads — roles stay visible rather than hiding behind hover */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {firstRowMembers.map((member, index) => (
            <RosterCell key={index} member={member} size="lead" accent="var(--flame)" />
          ))}
        </div>

        {/* Members */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8">
          {otherTeamMembers.map((member, index) => (
            <RosterCell key={index} member={member} accent="var(--electric)" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
