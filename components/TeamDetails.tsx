
import React, { useEffect } from 'react';
import { Language } from '../App';

interface TeamDetailsProps {
  lang: Language;
}

const TeamDetails: React.FC<TeamDetailsProps> = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const members = [
    { 
      name: 'Kadir Ceylan', 
      role: { en: 'Team Leader', tr: 'Takım Lideri' },
      roleTag: 'LEADER',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
      color: 'from-yellow-400 to-amber-600',
      border: 'border-yellow-500/30'
    },
    { 
      name: 'Ali Yılmaz', 
      role: { en: 'Primary Driver', tr: 'Ana Sürücü' },
      roleTag: 'DRIVER',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
      color: 'from-blue-400 to-indigo-600',
      border: 'border-blue-500/30'
    },
    { 
      name: 'Ayşe Demir', 
      role: { en: 'Head Mechanic', tr: 'Baş Mekanik' },
      roleTag: 'MECHANIC',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
      color: 'from-orange-400 to-red-600',
      border: 'border-orange-500/30'
    }
  ];

  const translations = {
    en: { back: 'CLOSE AND RETURN', title: 'ENGINEERING UNIT' },
    tr: { back: 'KAPAT VE DÖN', title: 'MÜHENDİSLİK BİRİMİ' }
  };

  return (
    <div className="min-h-screen w-full bg-gray-950 relative flex flex-col items-center py-12 px-6 md:px-12">
      {/* Background Effects */}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {members.map((member, index) => (
            <div 
              key={index}
              className={`group relative bg-gray-900/40 backdrop-blur-xl rounded-[3rem] overflow-hidden border ${member.border} transition-all duration-700 hover:-translate-y-4`}
            >
              <div className="relative h-[400px] w-full">
                <img 
                  src={member.image} 
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                  alt={member.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>
                
                <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-gradient-to-r ${member.color} rounded-xl text-[10px] font-black tracking-[0.4em] text-white border border-white/20`}>
                  {member.roleTag}
                </div>
              </div>

              <div className="p-8 text-center relative z-20">
                <h3 className="text-2xl font-bold text-white mb-2 heading-font tracking-tight">
                  {member.name}
                </h3>
                <p className="text-purple-400 text-[10px] font-black tracking-[0.2em] uppercase opacity-80">
                  {member.role[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="#team"
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
