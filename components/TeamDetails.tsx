
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

  const members = [
    { name: 'Can Gökçe Öner', role: { en: 'Team Leader', tr: 'Takım Lideri' }, roleTag: 'LEADER', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400', color: 'from-yellow-400 to-amber-600', border: 'border-yellow-500/30' },
    { name: 'Turhan Uygur', role: { en: 'Primary Driver', tr: 'Ana Sürücü' }, roleTag: 'DRIVER', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400', color: 'from-blue-400 to-indigo-600', border: 'border-blue-500/30' },
    { name: 'Kadir Ceylan', role: { en: 'Head Mechanic', tr: 'Baş Mekanik' }, roleTag: 'MECHANIC', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400', color: 'from-orange-400 to-red-600', border: 'border-orange-500/30' },
    { name: 'Arda Yılmaz', role: { en: 'Software Lead', tr: 'Yazılım Lideri' }, roleTag: 'CODER', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400', color: 'from-purple-400 to-pink-600', border: 'border-purple-500/30' },
    { name: 'Ege Demir', role: { en: 'Electronics Specialist', tr: 'Elektronik Uzmanı' }, roleTag: 'CIRCUITS', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400', color: 'from-emerald-400 to-teal-600', border: 'border-emerald-500/30' },
    { name: 'Selin Akın', role: { en: 'CAD Designer', tr: 'CAD Tasarımcı' }, roleTag: 'DESIGN', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400', color: 'from-cyan-400 to-blue-600', border: 'border-cyan-500/30' },
    { name: 'Mert Soydan', role: { en: 'Strategy Lead', tr: 'Strateji Lideri' }, roleTag: 'STRATEGY', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400', color: 'from-red-400 to-orange-600', border: 'border-red-500/30' },
    { name: 'Deren Kurt', role: { en: 'Autonomous Expert', tr: 'Otonom Uzmanı' }, roleTag: 'AI', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400', color: 'from-indigo-400 to-purple-600', border: 'border-indigo-500/30' },
    { name: 'Emre Yıldız', role: { en: 'Secondary Driver', tr: 'Yedek Sürücü' }, roleTag: 'DRIVER', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400', color: 'from-blue-400 to-indigo-600', border: 'border-blue-500/30' },
    { name: 'Zeynep Kaya', role: { en: 'Media Manager', tr: 'Medya Yöneticisi' }, roleTag: 'MEDIA', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400', color: 'from-pink-400 to-rose-600', border: 'border-pink-500/30' },
    { name: 'Bora Çelik', role: { en: 'Scouter', tr: 'Gözlemci' }, roleTag: 'SCOUT', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400', color: 'from-lime-400 to-green-600', border: 'border-lime-500/30' },
    { name: 'Melis Aydın', role: { en: 'Notebook Specialist', tr: 'Mühendislik Defteri' }, roleTag: 'DOCS', image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=400', color: 'from-amber-400 to-yellow-600', border: 'border-amber-500/30' },
    { name: 'Kerem Işık', role: { en: 'Pneumatics Eng.', tr: 'Pnömatik Müh.' }, roleTag: 'MECH', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400', color: 'from-slate-400 to-slate-600', border: 'border-slate-500/30' },
    { name: 'Aylin Koç', role: { en: 'Physics Analyst', tr: 'Fizik Analisti' }, roleTag: 'SCIENCE', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400', color: 'from-violet-400 to-purple-600', border: 'border-violet-500/30' },
    { name: 'Deniz Şahin', role: { en: 'Power Systems', tr: 'Güç Sistemleri' }, roleTag: 'ELEC', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400', color: 'from-yellow-300 to-orange-500', border: 'border-yellow-400/30' },
    { name: 'Sarp Güler', role: { en: 'QA Engineer', tr: 'Kalite Kontrol' }, roleTag: 'QUALITY', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400', color: 'from-teal-400 to-emerald-600', border: 'border-teal-500/30' },
    { name: 'Nil Su', role: { en: '3D Printing Expert', tr: '3D Yazıcı Uzmanı' }, roleTag: 'FABRIC', image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400', color: 'from-fuchsia-400 to-purple-600', border: 'border-fuchsia-500/30' },
    { name: 'Alperen Tan', role: { en: 'Game Analyst', tr: 'Oyun Analisti' }, roleTag: 'TACTIC', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400', color: 'from-blue-500 to-blue-700', border: 'border-blue-600/30' },
    { name: 'Berra Can', role: { en: 'PR Specialist', tr: 'Halkla İlişkiler' }, roleTag: 'COMMS', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400', color: 'from-orange-500 to-rose-500', border: 'border-orange-500/30' },
    { name: 'Kaan Genç', role: { en: 'Field Tech', tr: 'Saha Teknisyeni' }, roleTag: 'FIELD', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400', color: 'from-emerald-500 to-green-700', border: 'border-emerald-600/30' }
  ];

  const translations = {
    en: { back: 'CLOSE AND RETURN', title: 'ENGINEERING UNIT' },
    tr: { back: 'KAPAT VE DÖN', title: 'MÜHENDİSLİK BİRİMİ' }
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

        {/* 5 column grid applied here with lg:grid-cols-5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {members.map((member, index) => (
            <div 
              key={index}
              className={`group relative bg-gray-900/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border ${member.border} transition-all duration-700 hover:-translate-y-3 shadow-xl`}
            >
              <div className="relative h-[250px] w-full">
                <img 
                  src={member.image} 
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                  alt={member.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                
                <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r ${member.color} rounded-lg text-[8px] font-black tracking-[0.3em] text-white border border-white/20 whitespace-nowrap`}>
                  {member.roleTag}
                </div>
              </div>

              <div className="p-5 text-center relative z-20">
                <h3 className="text-lg font-bold text-white mb-1 heading-font tracking-tight truncate px-1">
                  {member.name}
                </h3>
                <p className="text-purple-400 text-[8px] font-black tracking-[0.15em] uppercase opacity-80">
                  {member.role[lang]}
                </p>
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
