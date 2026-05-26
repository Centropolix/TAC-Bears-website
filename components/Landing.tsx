
import React, { useState, useEffect } from 'react';
import { Language, AppMode } from '../App';

interface LandingProps {
  lang: Language;
  setMode: (mode: AppMode) => void;
}

const Landing: React.FC<LandingProps> = ({ lang, setMode }) => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredMode, setHoveredMode] = useState<AppMode | null>(null);

  const quotes = [
    {
      text: {
        tr: "Mühendislik; hayal kurmak ile bu hayalleri somut bir gerçekliğe dönüştürmek arasındaki köprüdür.",
        en: "Engineering is the bridge between dreaming and turning those dreams into a tangible reality."
      },
      author: "Neil Armstrong"
    },
    {
      text: {
        tr: "Bir problem, henüz çözülememiş bir fırsattır.",
        en: "A problem is an opportunity that has not yet been solved."
      },
      author: "Wernher von Braun"
    },
    {
      text: {
        tr: "Bilim insanları var olan dünyayı inceler; mühendisler ise hiç var olmamış dünyaları yaratır.",
        en: "Scientists study the world as it is; engineers create the world that has never been."
      },
      author: "Theodore von Kármán"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
        setIsTransitioning(false);
      }, 800);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const translations = {
    en: {
      heroTitle: 'TAC BEARS',
      aboutTitle: 'WHO WE ARE',
      aboutText: 'TAC Bears is the robotics community of Tarsus American College. Founded in 2022, our community brings together young engineers, programmers, and strategists to compete on national and international stages through two specialized sectors.',
      selectTitle: 'CHOOSE YOUR PATH',
      vexDesc: 'PUSHBACK 25-26',
      frcDesc: 'REEFSCAPE 26',
      stats: [
        { label: 'AWARDS', value: '5' },
        { label: 'MEMBERS', value: '20+' },
        { label: 'EST.', value: '2022' }
      ]
    },
    tr: {
      heroTitle: 'TAC BEARS',
      aboutTitle: 'BİZ KİMİZ?',
      aboutText: 'TAC Bears, Tarsus Amerikan Koleji\'nin robotik topluluğudur. 2022\'de kurulan topluluğumuz, genç mühendisleri, programcıları ve stratejistleri bir araya getirerek iki uzmanlaşmış sektörde ulusal ve uluslararası arenalarda rekabet etmeyi hedefler.',
      selectTitle: 'YOLUNUZU SEÇİN',
      vexDesc: 'PUSHBACK 25-26',
      frcDesc: 'REEFSCAPE 26',
      stats: [
        { label: 'ÖDÜL', value: '5' },
        { label: 'ÜYE', value: '20+' },
        { label: 'KURULUŞ', value: '2022' }
      ]
    }
  };

  const t = translations[lang];

  return (
    <div className="bg-[#030712] text-white selection:bg-purple-600 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[140px] animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030712]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-black heading-font tracking-tighter leading-none mb-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 select-none">
            {t.heroTitle}
          </h1>

          <div className="flex flex-wrap justify-center gap-12 mt-16">
            {t.stats.map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <div className="text-5xl font-black heading-font mb-2 group-hover:text-purple-500 transition-colors">{stat.value}</div>
                <div className="text-[11px] font-bold tracking-[0.4em] text-gray-500 uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <i className="fas fa-chevron-down text-2xl"></i>
        </div>
      </section>

      {/* Split Screen Mode Selector - EXACT 50/50 SPLIT */}
      <section id="arena-select" className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden bg-black border-y border-white/10">
        
        {/* VEX SIDE (Left/Top) */}
        <div 
          onMouseEnter={() => setHoveredMode('vex')}
          onMouseLeave={() => setHoveredMode(null)}
          onClick={() => setMode('vex')}
          className="relative flex-1 md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center cursor-pointer overflow-hidden group border-b md:border-b-0 md:border-r border-white/5"
        >
          {/* Background Layer */}
          <div className={`absolute inset-0 bg-gray-950 transition-all duration-1000 ${hoveredMode === 'vex' ? 'bg-yellow-950/30' : ''}`}></div>
          <div className={`absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] group-hover:opacity-20 transition-opacity`}></div>
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-600/0 rounded-full blur-[160px] transition-all duration-1000 ${hoveredMode === 'vex' ? 'bg-yellow-600/15' : ''}`}></div>

          {/* Typography */}
          <div className="relative z-10 text-center">
            <h2 className={`text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-black heading-font tracking-tighter leading-none transition-all duration-700 select-none ${hoveredMode === 'vex' ? 'text-yellow-500 scale-105 drop-shadow-[0_0_100px_rgba(234,179,8,0.7)]' : 'text-white/10 group-hover:text-yellow-500/40'}`}>
              VEX
            </h2>
            <div className={`mt-2 transition-all duration-700 ${hoveredMode === 'vex' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-yellow-500 font-black tracking-[0.5em] md:tracking-[1em] uppercase text-lg md:text-2xl heading-font">{t.vexDesc}</p>
            </div>
          </div>
          
          <div className={`absolute bottom-20 transition-all duration-700 ${hoveredMode === 'vex' ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <i className="fas fa-cog text-7xl text-yellow-500 animate-spin-slow"></i>
          </div>
        </div>

        {/* FRC SIDE (Right/Bottom) */}
        <div 
          onMouseEnter={() => setHoveredMode('frc')}
          onMouseLeave={() => setHoveredMode(null)}
          onClick={() => setMode('frc')}
          className="relative flex-1 md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center cursor-pointer overflow-hidden group"
        >
          {/* Background Layer */}
          <div className={`absolute inset-0 bg-gray-950 transition-all duration-1000 ${hoveredMode === 'frc' ? 'bg-blue-950/30' : ''}`}></div>
          <div className={`absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] group-hover:opacity-20 transition-opacity`}></div>
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/0 rounded-full blur-[160px] transition-all duration-1000 ${hoveredMode === 'frc' ? 'bg-blue-600/15' : ''}`}></div>

          {/* Typography */}
          <div className="relative z-10 text-center">
            <h2 className={`text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-black heading-font tracking-tighter leading-none transition-all duration-700 select-none ${hoveredMode === 'frc' ? 'text-blue-500 scale-105 drop-shadow-[0_0_100px_rgba(59,130,246,0.7)]' : 'text-white/10 group-hover:text-blue-500/40'}`}>
              FRC
            </h2>
            <div className={`mt-2 transition-all duration-700 ${hoveredMode === 'frc' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-blue-500 font-black tracking-[0.5em] md:tracking-[1em] uppercase text-lg md:text-2xl heading-font">{t.frcDesc}</p>
            </div>
          </div>

          <div className={`absolute bottom-20 transition-all duration-700 ${hoveredMode === 'frc' ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <i className="fas fa-rocket text-7xl text-blue-500 animate-pulse"></i>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-6xl md:text-9xl font-black heading-font tracking-tighter leading-[0.8] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">
              {t.aboutTitle}
            </h2>
            <p className="text-gray-400 text-2xl leading-relaxed max-w-xl">
              {t.aboutText}
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-10 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-[4rem] blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 bg-gray-900 group-hover:border-purple-500/30 transition-colors duration-500 shadow-2xl">
               <img src="https://lh3.googleusercontent.com/d/1YP_IntmX1gCb2aWqT3Lf3cHtQyEH-1VG" className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100" alt="Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Rotating Quotes Section */}
      <section className="py-40 px-6 text-center max-w-5xl mx-auto bg-gray-950/30 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className={`space-y-10 transition-all duration-800 cubic-bezier(0.16, 1, 0.3, 1) ${isTransitioning ? 'opacity-0 scale-95 blur-md' : 'opacity-100 scale-100 blur-0'}`}>
           <i className="fas fa-quote-left text-5xl text-purple-600/40"></i>
           
           <div className="min-h-[160px] flex flex-col justify-center items-center">
             <h2 className="text-3xl md:text-5xl font-bold heading-font tracking-tight leading-relaxed max-w-4xl mx-auto text-white italic">
               "{quotes[quoteIndex].text[lang]}"
             </h2>
             <div className="mt-8 flex items-center justify-center space-x-4">
                <div className="h-[1px] w-8 bg-purple-500/50"></div>
                <span className="text-purple-400 font-black tracking-[0.2em] text-xs uppercase heading-font">
                  — {quotes[quoteIndex].author}
                </span>
                <div className="h-[1px] w-8 bg-purple-500/50"></div>
             </div>
           </div>
        </div>
      </section>

      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Landing;
