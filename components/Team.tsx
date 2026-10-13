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
  color?: string;
  border?: string;
  role?: string;
  video?: string;
}

export const RosterCell: React.FC<{
  member: Member;
  label?: string;
  size?: 'lead' | 'normal';
  accent?: string;
}> = ({ member, label, size = 'normal', accent = 'var(--ink)' }) => (
  <figure className="group">
    <div className="relative w-full aspect-[4/5] overflow-hidden bg-[var(--mist)]">
      {member.video ? (
        <video
          src={member.video}
          poster={member.image}
          muted
          playsInline
          // play once, then fall back to the poster
          onEnded={(e) => e.currentTarget.load()}
          preload="none"
          onMouseEnter={(e) => { e.currentTarget.play().catch(() => {}); }}
          // load() resets the element, so the poster shows again and the next hover starts from 0
          onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.load(); }}
          className="w-full h-full object-cover"
        />
      ) : member.image ? (
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          referrerPolicy="no-referrer"
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

const m = (name: string, slug: string, role?: string): Member =>
  ({ name, role, image: `/members/${slug}.jpg`, video: `/members/${slug}.mp4` });

const Team: React.FC<TeamProps> = ({ lang, onNavigate, appMode }) => {
  const mentors: Member[] = [{ name: 'Gökçe Akoğlu', image: '' }];

  const leaders: Member[] = [
    m('Can Gökçe Öner', 'can-gokce-oner', 'Team Leader / Electronics Lead'),
    m('Kadir Ceylan', 'kadir-ceylan', 'PR Lead'),
    { name: 'Oğuzalp Kaya', image: '', role: 'Design/Mechanics Leader' },
  ];

  // Members grouped under their department
  const groups: { id: 'pr' | 'design'; members: Member[] }[] = [
    { id: 'pr', members: [
      m('Ateş Ekmen', 'ates-ekmen'),
      m('Bahar Tütüncüler', 'bahar-tutunculer'),
      m('Dağhan Uyar', 'daghan-uyar'),
      m('Kerem Niyazi Mert', 'kerem-niyazi-mert'),
      m('Toros Levent', 'toros-levent'),
    ] },
    { id: 'design', members: [m('Öykü Arı', 'oyku-ari')] },
  ];

  const translations = {
    en: { title: 'Our', titleSpan: 'Team', tag: 'MENTOR', groups: { pr: 'PR / Business', design: 'Design / Mechanics' } },
    tr: { title: 'Bizim', titleSpan: 'Takımımız', tag: 'MENTOR', groups: { pr: 'PR / İş Geliştirme', design: 'Tasarım / Mekanik' } },
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8">
          {mentors.map((member, index) => (
            <RosterCell key={index} member={member} label={t.tag} size="lead" accent="var(--amber)" />
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8">
          {leaders.map((member, index) => (
            <RosterCell key={index} member={member} size="lead" accent="var(--flame)" />
          ))}
        </div>

        {groups.map((group) => (
          <section key={group.id}>
            <h3 className="t-head text-[clamp(1.35rem,2.6vw,2rem)] border-b-2 border-[var(--ink)] pb-3 mb-6 md:mb-8">
              {t.groups[group.id]}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8">
              {group.members.map((member, index) => (
                <RosterCell key={index} member={member} accent="var(--electric)" />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Team;
