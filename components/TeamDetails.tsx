import React, { useEffect } from 'react';
import { Language } from '../App';

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
    { 
      name: 'Umut Uncu', 
      image: 'https://lh3.googleusercontent.com/d/10XxyGJekP9XmXl7eSG0uPnaEBFUcuGyk', 
      color: 'from-yellow-400 via-amber-500 to-yellow-600', 
      border: 'border-yellow-400/50 shadow-[0_0_30px_rgba(234,179,8,0.2)]' 
    },
    { 
      name: 'John Johnes', 
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
      image: 'https://lh3.googleusercontent.com/d/1tDoQY85Txe_7K1HMdbWy_MpDtkSyE9O3', 
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

  return (
    <div className="min-h-screen w-full bg-gray-950 relative flex flex-col items-center py-12 px-6 md:px-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-[0.3em] uppercase heading-font mb-4">
            {translations[lang].title}
          </h2>
          <div className="h-1 w-32 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Top Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 max-w-5xl mx-auto">
          {topMembers.map((member, index) => (
            <div 
              key={index}
              className={`group relative bg-gray-900/60 backdrop-blur-2xl rounded-[3rem] overflow-hidden border ${member.border} transition-all duration-1000 hover:-translate-y-4`}
            >
              <div className="relative h-[400px] w-full bg-gray-950">
                {member.image ? (
                  <img 
                    src={member.image} 
                    className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100 opacity-100"
                    alt={member.name}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-900/50"></div>
                )}
                
                <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r ${member.color} rounded-xl text-[10px] font-black tracking-[0.4em] text-white border border-white/30 whitespace-nowrap shadow-2xl z-20`}>
                  {translations[lang].tag}
                </div>
              </div>
              <div className="p-8 text-center relative z-20 bg-gray-900/40">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-1 heading-font tracking-wider group-hover:text-yellow-400 transition-colors">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center space-x-4 mb-16 opacity-30 max-w-xs mx-auto">
          <div className="h-[1px] flex-grow bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="h-[1px] flex-grow bg-white"></div>
        </div>

        {/* Team Members Grid - First Row (4 Columns on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 max-w-5xl mx-auto">
          {firstRowMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/5 transition-all duration-700 hover:-translate-y-3 shadow-xl hover:border-purple-500/30"
            >
              <div className="relative h-[250px] w-full bg-gray-950">
                {member.image ? (
                  <img 
                    src={member.image} 
                    className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100 opacity-100"
                    alt={member.name}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-900/50"></div>
                )}
                
                <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r ${member.color} rounded-lg text-[8px] font-black tracking-[0.3em] text-white border border-white/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20`}>
                  {member.role ? member.role.toUpperCase() : 'MEMBER'}
                </div>
              </div>

              <div className="p-5 text-center relative z-20">
                <h3 className="text-base md:text-lg font-bold text-white mb-1 heading-font tracking-tight truncate px-1 group-hover:text-yellow-500 transition-colors">
                  {member.name}
                </h3>
                {member.role && (
                  <p className="text-[11px] font-bold text-amber-500 tracking-wider mt-1.5 uppercase leading-snug">
                    {member.role}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Team Members Grid - Remaining Rows (5 Columns on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {otherTeamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/5 transition-all duration-700 hover:-translate-y-3 shadow-xl hover:border-purple-500/30"
            >
              <div className="relative h-[250px] w-full bg-gray-950">
                {member.image ? (
                  <img 
                    src={member.image} 
                    className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100 opacity-100"
                    alt={member.name}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-900/50"></div>
                )}
                
                <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r ${member.color} rounded-lg text-[8px] font-black tracking-[0.3em] text-white border border-white/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20`}>
                  MEMBER
                </div>
              </div>

              <div className="p-5 text-center relative z-20">
                <h3 className="text-base md:text-lg font-bold text-white mb-1 heading-font tracking-tight truncate px-1 group-hover:text-yellow-500 transition-colors">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="#team"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('team');
            }}
            className="inline-flex items-center space-x-4 bg-white/5 hover:bg-white/10 border border-white/10 px-10 py-5 rounded-full transition-all duration-300 group"
          >
            <i className="fas fa-arrow-left text-yellow-500 group-hover:-translate-x-2 transition-transform"></i>
            <span className="text-[10px] font-black tracking-[0.3em] text-gray-400 group-hover:text-white uppercase heading-font">
              {translations[lang].back}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;