
import React, { useState } from 'react';
import { Language } from '../App';

interface NavbarProps {
  activeSection: string;
  lang: Language;
  setLang: (l: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const translations = {
    en: { home: 'HOME', team: 'OUR TEAM', awards: 'AWARDS', sponsors: 'SPONSORS', instagram: 'INSTAGRAM', contact: 'CONTACT', gallery: 'GALLERY' },
    tr: { home: 'ANA SAYFA', team: 'EKİBİMİZ', awards: 'ÖDÜLLER', sponsors: 'SPONSORLAR', instagram: 'INSTAGRAM', contact: 'İLETİŞİM', gallery: 'GALERİ' }
  };

  const navLinks = [
    { name: translations[lang].home, id: 'home' },
    { name: translations[lang].team, id: 'team' },
    { name: translations[lang].awards, id: 'awards' },
    { name: translations[lang].gallery, id: 'gallery' },
    { name: translations[lang].sponsors, id: 'sponsors' },
    { name: translations[lang].instagram, id: 'instagram' },
    { name: translations[lang].contact, id: 'contact' },
  ];

  const isActive = (id: string) => {
    return activeSection === id;
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // URL'deki hash'i güncelle
    window.location.hash = id;

    // Eğer ana sayfa bölümlerinden biriyse kaydır
    const mainSections = ['home', 'team', 'awards', 'sponsors', 'timeline', 'instagram'];
    if (mainSections.includes(id)) {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: id === 'home' ? 0 : offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className="fixed w-full z-[100] bg-gray-950/90 backdrop-blur-lg border-b border-purple-900/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex-1 flex items-center">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="flex items-center space-x-2 z-[110]"
            >
              <span className="text-xl md:text-2xl font-bold tracking-tighter text-purple-500 heading-font">TAC</span>
              <span className="text-xl md:text-2xl font-bold tracking-tighter text-yellow-500 heading-font">BEARS</span>
            </a>
          </div>
          
          <div className="hidden md:flex flex-[5] justify-center items-center h-full">
            <div className="flex space-x-3 lg:space-x-6 z-[110]">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`relative px-1 py-4 text-[9px] lg:text-[11px] font-bold tracking-widest transition-all duration-300 heading-font cursor-pointer ${
                    isActive(link.id)
                      ? 'text-yellow-400'
                      : 'text-gray-400 hover:text-purple-400'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transition-transform duration-300 ${
                    isActive(link.id) ? 'scale-x-100' : 'scale-x-0'
                  }`}></span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-end items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-900/50 rounded-full p-1 border border-white/10 heading-font text-[10px] md:text-xs">
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full transition-all ${lang === 'en' ? 'bg-purple-600 text-white font-bold' : 'text-gray-500 hover:text-gray-300'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('tr')}
                className={`px-3 py-1 rounded-full transition-all ${lang === 'tr' ? 'bg-purple-600 text-white font-bold' : 'text-gray-500 hover:text-gray-300'}`}
              >
                TR
              </button>
            </div>

            <div className="md:hidden z-[110]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-yellow-400 hover:bg-gray-800 transition-colors"
              >
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>
          
        </div>
      </div>

      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[700px] opacity-100 py-8' : 'max-h-0 opacity-0'
        } bg-gray-950 border-t border-purple-900/30 shadow-2xl`}
      >
        <div className="px-4 space-y-4 flex flex-col items-center text-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`block text-lg font-bold heading-font transition-colors ${
                isActive(link.id)
                  ? 'text-yellow-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
