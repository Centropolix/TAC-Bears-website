
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
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

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveSection(hash);
      // Scroll to top if switching views
      if (hash === 'contact' || hash === 'home' || hash === 'gallery') {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); 

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Don't change section if we are explicitly on specialized pages
      const specialized = ['#contact', '#gallery'];
      if (specialized.includes(window.location.hash)) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'team', 'sponsors', 'instagram'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      observer.disconnect();
    };
  }, []);

  const isContactPage = activeSection === 'contact';
  const isGalleryPage = activeSection === 'gallery';

  return (
    <div className="min-h-screen flex flex-col selection:bg-yellow-500 selection:text-gray-900 bg-gray-950 text-gray-100">
      <Navbar activeSection={activeSection} lang={lang} setLang={setLang} />
      
      <main className="flex-grow">
        {isContactPage ? (
          <Contact lang={lang} />
        ) : isGalleryPage ? (
          <Gallery lang={lang} />
        ) : (
          <>
            <section id="home" className="scroll-mt-20">
              <Hero lang={lang} />
            </section>
            
            <section id="team" className="py-20 bg-gray-900/50 scroll-mt-20">
              <Team lang={lang} />
            </section>

            <section id="sponsors" className="py-20 bg-gray-950 scroll-mt-20">
              <Sponsors lang={lang} />
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
