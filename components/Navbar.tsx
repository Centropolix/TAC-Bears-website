
import React, { useState } from 'react';
import { Language, AppMode } from '../App';

interface NavbarProps {
  activeSection: string;
  lang: Language;
  setLang: (l: Language) => void;
  onNavigate: (section: string) => void;
  appMode: AppMode;
  setMode: (m: AppMode) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, lang, setLang, onNavigate, appMode, setMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const translations = {
    en: { home: 'HOME', team: 'OUR TEAM', awards: 'AWARDS', sponsors: 'SPONSORS', instagram: 'INSTAGRAM', contact: 'CONTACT', gallery: 'GALLERY', switchVex: 'VEX', switchFrc: 'FRC' },
    tr: { home: 'ANA SAYFA', team: 'EKİBİMİZ', awards: 'ÖDÜLLER', sponsors: 'SPONSORLAR', instagram: 'INSTAGRAM', contact: 'İLETİŞİM', gallery: 'GALERİ', switchVex: 'VEX', switchFrc: 'FRC' }
  };

  const navLinks = [
    { name: translations[lang].home, id: 'home' },
    { name: translations[lang].team, id: 'team' },
    { name: translations[lang].sponsors, id: 'sponsors' },
    { name: translations[lang].awards, id: 'awards' },
    { name: translations[lang].gallery, id: 'gallery' },
    { name: translations[lang].contact, id: 'contact' },
  ];

  const getThemeColor = () => {
    return 'text-purple-400';
  };

  const getThemeBorder = () => {
    return 'bg-purple-500';
  };

  const isActive = (id: string) => activeSection === id;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <nav className="fixed w-full z-[100] bg-gray-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={() => { 
                setMode('general'); 
                onNavigate('home'); 
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <span className="text-xl md:text-2xl font-black tracking-tighter text-white heading-font">TAC</span>
              <span className={`text-xl md:text-2xl font-black tracking-tighter ${getThemeColor()} heading-font`}>BEARS</span>
            </button>
          </div>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex flex-grow justify-center items-center h-full">
            <div className="flex space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`relative px-1 py-4 text-[10px] lg:text-[11px] font-black tracking-[0.2em] transition-all duration-300 heading-font cursor-pointer ${
                    isActive(link.id) ? 'text-white' : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 ${getThemeBorder()} transition-transform duration-300 ${
                    isActive(link.id) ? 'scale-x-100' : 'scale-x-0'
                  }`}></span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Area (Lang & Mobile Menu) */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10 heading-font text-[9px]">
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full transition-all ${lang === 'en' ? 'bg-purple-600 text-white font-black' : 'text-gray-500 hover:text-gray-300'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('tr')}
                className={`px-3 py-1 rounded-full transition-all ${lang === 'tr' ? 'bg-purple-600 text-white font-black' : 'text-gray-500 hover:text-gray-300'}`}
              >
                TR
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-400 hover:text-white p-2"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-gray-950/95 backdrop-blur-2xl border-t border-white/5 ${
          isOpen ? 'max-h-[500px] opacity-100 py-10' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="text-lg font-black heading-font text-gray-300 hover:text-white tracking-widest"
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
