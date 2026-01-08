
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Instagram from './components/Instagram';
import Footer from './components/Footer';

export type Language = 'en' | 'tr';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveSection(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-red-500 selection:text-white">
      <Navbar activeSection={activeSection} lang={lang} setLang={setLang} />
      
      <main className="flex-grow">
        <section id="home" className="scroll-mt-20">
          <Hero lang={lang} />
        </section>
        
        <section id="team" className="py-20 bg-gray-900/50 scroll-mt-20">
          <Team lang={lang} />
        </section>
        
        <section id="instagram" className="py-20 bg-gray-950 scroll-mt-20">
          <Instagram lang={lang} />
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default App;
