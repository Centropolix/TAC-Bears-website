
import React, { useState } from 'react';
import { Language } from '../App';

interface GalleryProps {
  lang: Language;
  onNavigate: (section: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ lang, onNavigate }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Görsel listesi sadece temel öğeleri içerecek şekilde güncellendi
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

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase tracking-tighter">
            {translations[lang].title} <span className="text-yellow-500">{translations[lang].titleSpan}</span>
          </h2>
          <p className="text-purple-400 font-bold tracking-[0.3em] uppercase opacity-80 mb-8">
            {translations[lang].subtitle}
          </p>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {images.map((img, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImage(img.url)}
              className="group relative aspect-video overflow-hidden rounded-2xl border-2 border-purple-900/30 cursor-pointer bg-gray-900 shadow-2xl transition-all duration-300 hover:border-yellow-500/50"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-purple-600/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-purple-500/30">
                <i className="fas fa-search-plus text-white"></i>
              </div>
              <div className="absolute bottom-4 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <p className="text-yellow-500 font-bold heading-font text-xs tracking-widest uppercase">{img.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="inline-flex items-center space-x-3 text-gray-400 hover:text-white transition-colors heading-font uppercase tracking-widest text-sm"
          >
            <i className="fas fa-arrow-left"></i>
            <span>{translations[lang].back}</span>
          </a>
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] bg-gray-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-10 right-10 text-white text-4xl hover:text-yellow-500 transition-colors z-[210] p-4"
            onClick={() => setSelectedImage(null)}
          >
            <i className="fas fa-times"></i>
          </button>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10"
            alt="Full size"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
