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
      image: 'https://lh3.googleusercontent.com/d/1ROJnp7KFTLjugPupbThsdWxHzAbW4NaU',
      color: 'from-purple-400 to-indigo-600',
      border: 'border-purple-500/20',
      role: 'Team Leader'
    },
    {
      name: 'Kadir Ceylan',
      image: 'https://lh3.googleusercontent.com/d/1e73nQr3u50sPbDzPX3Wz-Thq4hCNKlkf',
      color: 'from-orange-400 to-red-600',
      border: 'border-orange-500/20',
      role: 'Electronics/software Leader'
    },
    {
      name: 'Zeynep Gizer',
      image: 'https://lh3.googleusercontent.com/d/1TrhDb9JBft8K3deJ-FHNa3cLPkiR6JuX',
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
    { name: 'Arda Çiloğlu', image: 'https://lh3.googleusercontent.com/d/1G-YdV2x8gLpgb6AuYM8MtDQnQukYC5Eu', color: 'from-purple-400 to-pink-600', border: 'border-purple-500/20' },
    { name: 'Talha Yücel', image: 'https://lh3.googleusercontent.com/d/1QCJLIdljMrUbtcjXSMeNYrL_z7B1l_eE', color: 'from-cyan-400 to-blue-600', border: 'border-cyan-500/20' },
    { name: 'Talya Tokmak', image: 'https://lh3.googleusercontent.com/d/1kh8AGJx80UwEyBqktNwwqGQvHlLmHkTq', color: 'from-rose-400 to-pink-600', border: 'border-rose-500/20' },
    { name: 'Ali Mirza Kılınç', image: 'https://lh3.googleusercontent.com/d/1DB7EqvZ10Hn--5dgJvGNAOSLmjO6-4Qk', color: 'from-blue-500 to-cyan-600', border: 'border-blue-500/20' },
    { name: 'Aral Tormaç', image: 'https://lh3.googleusercontent.com/d/1M3lRRndUBMPKF2yijqY5nt9rkpAr8oix', color: 'from-teal-400 to-green-600', border: 'border-teal-500/20' },
    { name: 'Arin Yadigaroğulları', image: 'https://lh3.googleusercontent.com/d/10zx4Up3SOQcpmJeVND2Si5MOLe81cbwI', color: 'from-pink-400 to-rose-600', border: 'border-pink-500/20' },
    { name: 'Aynil İzmir Gülaçtı', image: 'https://lh3.googleusercontent.com/d/1B3FsDN7WxUuK8sMIXlb2rEQ-jepbbpfE', color: 'from-amber-400 to-orange-600', border: 'border-amber-500/20' },
    { name: 'Batuhan Selçik', image: 'https://lh3.googleusercontent.com/d/17BO2m_lvOQ5ZHuJoA0jZzt6O6Ssl0xOB', color: 'from-slate-400 to-slate-600', border: 'border-slate-500/20' },
    { name: 'Burak Berk Berkeşoğlu', image: '', color: 'from-violet-400 to-purple-600', border: 'border-violet-500/20' },
    { name: 'Kuzey Bozhöyük', image: 'https://lh3.googleusercontent.com/d/1imR9wXoJ2VCnCu0SZwyrTiQQZz5uyyIV', color: 'from-teal-400 to-emerald-600', border: 'border-teal-500/20' },
    { name: 'Mehmet Ali Sağlamcı', image: '', color: 'from-blue-500 to-blue-700', border: 'border-blue-600/20' },
    { name: 'Metehan Tokdemir', image: 'https://lh3.googleusercontent.com/d/1qLTYELPQap_-XPA_HeMuBSOKgXXOHbaB', color: 'from-orange-500 to-rose-500', border: 'border-orange-500/20' },
    { name: 'Öykü Arı', image: '', color: 'from-emerald-500 to-green-700', border: 'border-emerald-600/20' },
    {
      name: 'Ömer Utku Ataş',
      image: 'https://lh3.googleusercontent.com/d/1bjgoZ2KDbgdgO2F5L9AM8wiLbqkp0Au4',
      color: 'from-purple-500 to-indigo-600',
      border: 'border-purple-600/20'
    },
    { name: 'Asme Hayal Çelik', image: '', color: 'from-amber-500 to-yellow-600', border: 'border-amber-600/20' }
  ];

  const translations = {
    en: { back: 'CLOSE AND RETURN', title: 'OUR TEAM', tag: 'MENTOR' },
    tr: { back: 'KAPAT VE DÖN', title: 'EKİBİMİZ', tag: 'MENTOR' }
  };

  const t = translations[lang];

  return (
    <div className="max-w-[1500px] mx-auto px-5 sm:px-8 py-16 md:py-24">

      <header className="mb-12 md:mb-16">
        <h2 className="t-mega bleed-left text-[clamp(2.6rem,8vw,6rem)]">
          {t.title}
        </h2>
      </header>

      <div className="space-y-14 md:space-y-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 max-w-4xl">
          {topMembers.map((member, index) => (
            <RosterCell key={index} member={member} label={t.tag} size="lead" accent="var(--amber)" />
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {firstRowMembers.map((member, index) => (
            <RosterCell key={index} member={member} size="lead" accent="var(--flame)" />
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8">
          {otherTeamMembers.map((member, index) => (
            <RosterCell key={index} member={member} accent="var(--electric)" />
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
