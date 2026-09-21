
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

  const isActive = (id: string) => activeSection === id;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <nav className="on-colour fixed w-full z-[100] bg-[var(--ink)] text-white">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">

          <button
            onClick={() => {
              setMode('general');
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="t-mega text-[19px] text-white hover:text-[var(--amber)] transition-colors"
          >
            TAC BEARS
          </button>

          <div className="hidden md:flex items-center h-full">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                aria-current={isActive(link.id) ? 'page' : undefined}
                className={`t-meta relative h-16 flex items-center px-4 text-[12.5px] transition-colors ${
                  isActive(link.id) ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.id) && (
                  <span className="absolute bottom-0 left-3 right-3 h-[3px]" style={{ background: 'var(--flame)' }} />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <div className="flex items-center text-[12px] t-meta">
              <button
                onClick={() => setLang('tr')}
                aria-pressed={lang === 'tr'}
                className={`px-2 py-1 transition-colors ${lang === 'tr' ? 'text-[var(--amber)]' : 'text-white/60 hover:text-white'}`}
              >
                TR
              </button>
              <span className="text-white/30">/</span>
              <button
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                className={`px-2 py-1 transition-colors ${lang === 'en' ? 'text-[var(--amber)]' : 'text-white/60 hover:text-white'}`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Menu"
              className="md:hidden text-white p-2 ml-1"
            >
              <i className={`fas ${isOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>

        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
          isOpen ? 'max-h-[460px]' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-5 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`t-head py-3 text-[26px] ${
                isActive(link.id) ? 'text-[var(--amber)]' : 'text-white'
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
