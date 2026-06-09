
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import TeamDetails from './components/TeamDetails';
import Timeline from './components/Timeline';
import Awards from './components/Awards';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import Landing from './components/Landing';

export type Language = 'en' | 'tr';
export type AppMode = 'vex' | 'frc' | 'general';

const App: React.FC = () => {
  const [appMode, setAppMode] = useState<AppMode>('general');
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState<Language>(() => {
    const savedLang = localStorage.getItem('tac-bears-lang');
    return (savedLang === 'tr' || savedLang === 'en') ? savedLang : 'tr';
  });

  useEffect(() => {
    localStorage.setItem('tac-bears-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    window.location.hash = section;
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      if (hash !== activeSection) {
        setActiveSection(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); 
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activeSection]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeSection]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-purple-500 selection:text-white bg-[#030712] text-gray-100 overflow-x-hidden">
      <Navbar 
        activeSection={activeSection} 
        lang={lang} 
        setLang={setLang} 
        onNavigate={handleNavigate} 
        appMode={appMode} 
        setMode={setAppMode}
      />
      
      <main className="flex-grow">
        <div className="pt-20">
          {activeSection === 'home' && (
            <>
              <section id="home">
                <Hero lang={lang} appMode={appMode} />
              </section>
              <section id="timeline" className="py-20 bg-gray-950">
                <Timeline lang={lang} appMode={appMode} />
              </section>
              <section id="instagram" className="py-20 bg-gray-900/20">
                <Instagram lang={lang} appMode={appMode} />
              </section>
            </>
          )}

          {activeSection === 'team' && (
            <section id="team" className="py-20 bg-gray-950 min-h-[80vh] flex flex-col justify-center">
              <Team lang={lang} onNavigate={handleNavigate} appMode={appMode} />
            </section>
          )}

          {activeSection === 'sponsors' && (
            <section id="sponsors" className="py-20 bg-gray-950 min-h-[80vh] flex flex-col justify-center">
              <Sponsors lang={lang} appMode={appMode} />
            </section>
          )}

          {activeSection === 'awards' && (
            <section id="awards" className="py-20 bg-gray-950 min-h-[80vh] flex flex-col justify-center">
              <Awards lang={lang} appMode={appMode} />
            </section>
          )}

          {activeSection === 'gallery' && (
            <Gallery lang={lang} onNavigate={handleNavigate} />
          )}

          {activeSection === 'contact' && (
            <Contact lang={lang} onNavigate={handleNavigate} />
          )}

          {activeSection === 'team-members' && (
            <TeamDetails lang={lang} onNavigate={handleNavigate} />
          )}
        </div>
      </main>

      <Footer lang={lang} appMode={appMode} />
    </div>
  );
};

export default App;
