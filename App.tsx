
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
    <div className="min-h-screen flex flex-col bg-[var(--paper)] text-[var(--ink)] overflow-x-hidden selection:bg-[var(--ink)] selection:text-[var(--paper)]">
      <Navbar
        activeSection={activeSection}
        lang={lang}
        setLang={setLang}
        onNavigate={handleNavigate}
        appMode={appMode}
        setMode={setAppMode}
      />

      <main className="flex-grow">
        <div className="pt-16">
          {activeSection === 'home' && (
            <>
              <section id="home">
                <Hero lang={lang} appMode={appMode} />
              </section>
              <section id="timeline" className="pt-28 md:pt-40 pb-20 md:pb-28">
                <Timeline lang={lang} appMode={appMode} />
              </section>
              <section id="instagram">
                <Instagram lang={lang} appMode={appMode} />
              </section>
            </>
          )}

          {activeSection === 'team' && (
            <section id="team" className="py-20 md:py-28">
              <Team lang={lang} onNavigate={handleNavigate} appMode={appMode} />
            </section>
          )}

          {activeSection === 'sponsors' && (
            <section id="sponsors" className="py-20 md:py-28">
              <Sponsors lang={lang} appMode={appMode} />
            </section>
          )}

          {activeSection === 'awards' && (
            <section id="awards" className="py-20 md:py-28">
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
