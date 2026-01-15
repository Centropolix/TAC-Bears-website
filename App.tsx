
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

export type Language = 'en' | 'tr';

const App: React.FC = () => {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const isContactPage = activeSection === 'contact';
  const isGalleryPage = activeSection === 'gallery';
  const isTeamDetailsPage = activeSection === 'team-members';

  return (
    <div className="min-h-screen flex flex-col selection:bg-yellow-500 selection:text-gray-900 bg-[#030712] text-gray-100 overflow-x-hidden">
      <Navbar activeSection={activeSection} lang={lang} setLang={setLang} onNavigate={handleNavigate} />
      
      <main className="flex-grow pt-20">
        {isContactPage ? (
          <Contact lang={lang} onNavigate={handleNavigate} />
        ) : isGalleryPage ? (
          <Gallery lang={lang} onNavigate={handleNavigate} />
        ) : isTeamDetailsPage ? (
          <TeamDetails lang={lang} onNavigate={handleNavigate} />
        ) : (
          <>
            <section id="home">
              <Hero lang={lang} />
            </section>
            
            <section id="team" className="py-32 bg-gray-900/20 scroll-mt-20">
              <Team lang={lang} onNavigate={handleNavigate} />
            </section>

            <section id="awards" className="py-32 bg-gray-950 scroll-mt-20">
              <Awards lang={lang} />
            </section>

            <section id="sponsors" className="py-32 bg-gray-900/20 scroll-mt-20">
              <Sponsors lang={lang} />
            </section>

            <section id="timeline" className="py-32 bg-gray-950 scroll-mt-20">
              <Timeline lang={lang} />
            </section>
            
            <section id="instagram" className="py-32 bg-gray-900/20 scroll-mt-20">
              <Instagram lang={lang} />
            </section>
          </>
        )}
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default App;
