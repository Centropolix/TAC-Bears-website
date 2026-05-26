
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
  const [appMode, setAppMode] = useState<AppMode>(() => {
    const savedMode = localStorage.getItem('tac-bears-mode');
    return (savedMode === 'vex' || savedMode === 'frc') ? savedMode as AppMode : 'general';
  });
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState<Language>(() => {
    const savedLang = localStorage.getItem('tac-bears-lang');
    return (savedLang === 'tr' || savedLang === 'en') ? savedLang : 'tr';
  });

  useEffect(() => {
    localStorage.setItem('tac-bears-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('tac-bears-mode', appMode);
    // Reset section when changing mode to avoid confusion
    if (activeSection !== 'home') setActiveSection('home');
  }, [appMode]);

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
    const isMainSection = ['home', 'team', 'sponsors', 'awards', 'instagram'].includes(activeSection);
    if (isMainSection) {
      const timer = setTimeout(() => {
        if (activeSection === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(activeSection);
          if (element) {
            const navbarOffset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSection]);

  const isContactPage = activeSection === 'contact';
  const isGalleryPage = activeSection === 'gallery';
  const isTeamDetailsPage = activeSection === 'team-members';

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
        {appMode === 'general' ? (
          <Landing lang={lang} setMode={setAppMode} />
        ) : (
          <div className="pt-20">
            {isContactPage ? (
              <Contact lang={lang} onNavigate={handleNavigate} />
            ) : isGalleryPage ? (
              <Gallery lang={lang} onNavigate={handleNavigate} />
            ) : isTeamDetailsPage ? (
              <TeamDetails lang={lang} onNavigate={handleNavigate} />
            ) : (
              <>
                <section id="home">
                  <Hero lang={lang} appMode={appMode} />
                </section>
                
                <section id="team" className="py-32 bg-gray-900/20 scroll-mt-20">
                  <Team lang={lang} onNavigate={handleNavigate} appMode={appMode} />
                </section>

                {appMode === 'frc' ? (
                  <>
                    <section id="sponsors" className="py-32 bg-gray-900/20 scroll-mt-20">
                      <Sponsors lang={lang} appMode={appMode} />
                    </section>
                    <section id="awards" className="py-32 bg-gray-950 scroll-mt-20">
                      <Awards lang={lang} appMode={appMode} />
                    </section>
                  </>
                ) : (
                  <>
                    <section id="awards" className="py-32 bg-gray-950 scroll-mt-20">
                      <Awards lang={lang} appMode={appMode} />
                    </section>
                    <section id="sponsors" className="py-32 bg-gray-900/20 scroll-mt-20">
                      <Sponsors lang={lang} appMode={appMode} />
                    </section>
                  </>
                )}

                {/* Timeline section is removed for FRC mode as requested */}
                {appMode !== 'frc' && (
                  <section id="timeline" className="py-32 bg-gray-950 scroll-mt-20">
                    <Timeline lang={lang} appMode={appMode} />
                  </section>
                )}
                
                <section id="instagram" className="py-32 bg-gray-900/20 scroll-mt-20">
                  <Instagram lang={lang} appMode={appMode} />
                </section>
              </>
            )}
          </div>
        )}
      </main>

      <Footer lang={lang} appMode={appMode} />
    </div>
  );
};

export default App;
