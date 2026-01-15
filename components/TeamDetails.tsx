
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

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    // Eğer resim yüklenemezse şık bir placeholder göster
    target.src = "https://ui-avatars.com/api/?background=111827&color=EAB308&name=" + target.alt.replace(/\s/g, "+") + "&size=400";
    target.className = target.className + " opacity-50 grayscale";
  };

  const topMembers = [
    { 
      name: 'Gökçe Cakoğlu', 
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600', 
      color: 'from-yellow-400 via-amber-500 to-yellow-600', 
      border: 'border-yellow-400/50 shadow-[0_0_30px_rgba(234,179,8,0.2)]' 
    },
    { 
      name: 'Umut Mumcu', 
      image: 'https://lh3.googleusercontent.com/d/10XxyGJekP9XmXl7eSG0uPnaEBFUcuGyk', 
      color: 'from-yellow-400 via-amber-500 to-yellow-600', 
      border: 'border-yellow-400/50 shadow-[0_0_30px_rgba(234,179,8,0.2)]' 
    },
    { 
      name: 'John', 
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600', 
      color: 'from-yellow-400 via-amber-500 to-yellow-600', 
      border: 'border-yellow-400/50 shadow-[0_0_30px_rgba(234,179,8,0.2)]' 
    },
  ];

  const teamMembers = [
    { name: 'Can Gökçe Öner', image: 'https://lh3.googleusercontent.com/d/1ROJnp7KFTLjugPupbThsdWxHzAbW4NaU', color: 'from-purple-400 to-indigo-600', border: 'border-purple-500/20' },
    { name: 'Turhan Uygur', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400', color: 'from-blue-400 to-indigo-600', border: 'border-blue-500/20' },
    { name: 'Kadır Ceylan', image: 'https://lh3.googleusercontent.com/d/1e73nQr3u50sPbDzPX3Wz-Thq4hCNKlkf', color: 'from-orange-400 to-red-600', border: 'border-orange-500/20' },
    { name: 'Arda Çiloğlu', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400', color: 'from-purple-400 to-pink-600', border: 'border-purple-500/20' },
    { name: 'Oğuzalp Kaya', image: 'https://lh3.googleusercontent.com/d/1tDoQY85Txe_7K1HMdbWy_MpDtkSyE9O3', color: 'from-emerald-400 to-teal-600', border: 'border-emerald-500/20' },
    { name: 'Talha Yücel', image: 'https://lh3.googleusercontent.com/d/1QCJLIdljMrUbtcjXSMeNYrL_z7B1l_eE', color: 'from-cyan-400 to-blue-600', border: 'border-cyan-500/20' },
    { name: 'Talya Tokmak', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400', color: 'from-rose-400 to-pink-600', border: 'border-rose-500/20' },
    { name: 'Ali Ziyan', image: 'https://lh3.googleusercontent.com/d/18Ao-yXk3i18iTKPzWuWWOuj8RnieCtsr', color: 'from-indigo-400 to-purple-600', border: 'border-indigo-500/20' },
    { name: 'Ali Mirza Kılınç', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400', color: 'from-blue-500 to-cyan-600', border: 'border-blue-500/20' },
    { name: 'Aral Tormaç', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400', color: 'from-teal-400 to-green-600', border: 'border-teal-500/20' },
    { name: 'Aynil İzmir', image: 'https://lh3.googleusercontent.com/d/1B3FsDN7WxUuK8sMIXlb2rEQ-jepbbpfE', color: 'from-amber-400 to-orange-600', border: 'border-amber-500/20' },
    { name: 'Batuhan', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400', color: 'from-slate-400 to-slate-600', border: 'border-slate-500/20' },
    { name: 'Burak Berk Berkeşoğlu', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400', color: 'from-violet-400 to-purple-600', border: 'border-violet-500/20' },
    { name: 'Hilmi Sungur', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400', color: 'from-yellow-300 to-orange-500', border: 'border-yellow-400/20' },
    { name: 'Kuzey Bozhöyük', image: 'https://lh3.googleusercontent.com/d/1imR9wXoJ2VCnCu0SZwyrTiQQZz5uyyIV', color: 'from-teal-400 to-emerald-600', border: 'border-teal-500/20' },
    { name: 'Levent Paydak', image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400', color: 'from-fuchsia-400 to-purple-600', border: 'border-fuchsia-500/20' },
    { name: 'Mehmet Ali Sağlamcı', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400', color: 'from-blue-500 to-blue-700', border: 'border-blue-600/20' },
    { name: 'Metehan Tokdemir', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400', color: 'from-orange-500 to-rose-500', border: 'border-orange-500/20' },
    { name: 'Öykü', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400', color: 'from-emerald-500 to-green-700', border: 'border-emerald-600/20' },
    { name: 'Ömer Utku Ataş', image: 'https://lh3.googleusercontent.com/d/1bjgoZ2KDbgdgO2F5L9AM8wiLbqkp0Au4', color: 'from-purple-500 to-indigo-600', border: 'border-purple-600/20' },
    { name: 'Zeynep Gizer', image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400', color: 'from-rose-500 to-red-600', border: 'border-rose-600/30' },
    { name: 'Asme Hayal Çelik', image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=400', color: 'from-amber-500 to-yellow-600', border: 'border-amber-600/20' }
  ];

  const translations = {
    en: { back: 'CLOSE AND RETURN', title: 'OUR TEAM', tag: 'TEACHER' },
    tr: { back: 'KAPAT VE DÖN', title: 'EKİBİMİZ', tag: 'ÖĞRETMEN' }
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
                <img 
                  src={member.image} 
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100"
                  alt={member.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 from-5% via-gray-950/60 via-40% to-transparent opacity-100 group-hover:opacity-70 transition-opacity duration-700"></div>
                
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

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/5 transition-all duration-700 hover:-translate-y-3 shadow-xl hover:border-purple-500/30"
            >
              <div className="relative h-[250px] w-full bg-gray-950">
                <img 
                  src={member.image} 
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100 opacity-70 group-hover:opacity-100"
                  alt={member.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 from-5% via-gray-950/70 via-50% to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
                
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
