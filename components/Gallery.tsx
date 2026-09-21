import React, { useState, useEffect } from 'react';
import { Language } from '../App';

interface GalleryProps {
  lang: Language;
  onNavigate: (section: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ lang, onNavigate }) => {
  const [selected, setSelected] = useState<{ url: string; title: string } | null>(null);

  const images = [
    { url: "https://lh3.googleusercontent.com/d/1F0FoGCklk462cNMQrz_IfVOp9j2EdY5_", title: "Season Highlights" },
    { url: "https://lh3.googleusercontent.com/d/1YP_IntmX1gCb2aWqT3Lf3cHtQyEH-1VG", title: "Team Photo" }
  ];

  const translations = {
    en: {
      title: 'Our',
      titleSpan: 'Gallery',
      subtitle: 'Visual Journey',
      back: 'Back to Home',
      close: 'Close'
    },
    tr: {
      title: 'Bizim',
      titleSpan: 'Galerimiz',
      subtitle: 'Görsel Yolculuk',
      back: 'Ana Sayfaya Dön',
      close: 'Kapat'
    }
  };

  const t = translations[lang];

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  return (
    <div className="max-w-[1500px] mx-auto px-5 sm:px-8 py-16 md:py-24">

      <header className="mb-12 md:mb-16">
        <h2 className="t-mega bleed-left text-[clamp(2.6rem,8vw,6rem)]">
          {t.title} {t.titleSpan}
        </h2>
        <p className="t-meta mt-2 text-[14px] text-[var(--ink-2)]">
          {t.subtitle}
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-5 md:gap-8">
        {images.map((img, index) => (
          <figure key={index}>
            <button
              onClick={() => setSelected(img)}
              className="group block w-full aspect-[16/10] overflow-hidden bg-[#E3E6E9] ring-1 ring-[var(--ink)]/10 hover:ring-[var(--flame)] hover:ring-2 transition-colors"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
            <figcaption className="t-meta mt-2.5 text-[12.5px] text-[var(--ink-2)]">
              {img.title}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-16">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="t-meta inline-flex items-center gap-3 text-[13px] text-[var(--ink-2)] hover:text-[var(--ink)] border-b-2 border-[var(--flame)] pb-1 transition-colors"
        >
          <i className="fas fa-arrow-left text-[11px]"></i>
          {t.back}
        </a>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
          style={{ backgroundColor: 'rgba(25, 30, 36, 0.97)' }}
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="t-meta absolute top-5 right-5 text-[13px] text-white/70 hover:text-white px-4 py-2 border border-white/25 hover:border-white/60 transition-colors"
            onClick={() => setSelected(null)}
          >
            {t.close}
          </button>
          <img
            src={selected.url}
            className="max-w-full max-h-full object-contain"
            alt={selected.title}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
