
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

  // Hash Takibi ve Sayfa Başlatma
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveSection(hash);
      
      const isolatedPages = ['contact', 'gallery', 'team-members'];
      if (isolatedPages.includes(hash)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // İlk yükleme kontrolü

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll Spy: Sadece ana sayfa bölümlerindeyken çalışır
  useEffect(() => {
    const isolatedPages = ['contact', 'gallery', 'team-members'];
    if (isolatedPages.includes(activeSection)) return;

    const handleScroll = () => {
      if (window.scrollY < 100) {
        if (activeSection !== 'home') setActiveSection('home');
        return;
      }

      const sections = ['home', 'team', 'awards', 'sponsors', 'timeline', 'instagram'];
      let currentSection = activeSection;

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            currentSection = id;
            break;
          }
        }
      }

      if (currentSection !== activeSection && !isolatedPages.includes(currentSection)) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const isContactPage = activeSection === 'contact';
  const isGalleryPage = activeSection === 'gallery';
  const isTeamDetailsPage = activeSection === 'team-members';

  return (
    <div className="min-h-screen flex flex-col selection:bg-yellow-500 selection:text-gray-900 bg-[#030712] text-gray-100 overflow-x-hidden">
      <Navbar activeSection={activeSection} lang={lang} setLang={setLang} />
      
      <main className="flex-grow pt-20">
        {isContactPage ? (
          <Contact lang={lang} />
        ) : isGalleryPage ? (
          <Gallery lang={lang} />
        ) : isTeamDetailsPage ? (
          <TeamDetails lang={lang} />
        ) : (
          <>
            <section id="home">
              <Hero lang={lang} />
            </section>
            
            <section id="team" className="py-20 bg-gray-900/50 scroll-mt-20">
              <Team lang={lang} />
            </section>

            <section id="awards" className="py-20 bg-gray-950 scroll-mt-20">
              <Awards lang={lang} />
            </section>

            <section id="sponsors" className="py-20 bg-gray-900/50 scroll-mt-20">
              <Sponsors lang={lang} />
            </section>

            <section id="timeline" className="py-20 bg-gray-950 scroll-mt-20">
              <Timeline lang={lang} />
            </section>
            
            <section id="instagram" className="py-20 bg-gray-900/50 scroll-mt-20">
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
