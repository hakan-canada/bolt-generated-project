import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Image } from 'lucide-react';

const images = [
  {
    url: 'https://i.ibb.co/BGtB0d4/2024-07-26.jpg',
    alt: 'Anatolia Mosque Interior'
  },
  {
    url: 'https://i.ibb.co/5RCQk3J/2022-08-226.jpg',
    alt: 'Mosque Event'
  },
  {
    url: 'https://i.ibb.co/xMwmCcR/IMG-0563.jpg',
    alt: 'Community Gathering'
  },
  {
    url: 'https://i.ibb.co/3yK9bhv/2024-11-09-1.jpg',
    alt: 'Mosque Activities'
  },
  {
    url: 'https://i.ibb.co/3ShdJqh/IMG-8444.jpg',
    alt: 'Prayer Hall'
  },
  {
    url: 'https://i.ibb.co/MkN3Jx0/2024-11-09.jpg',
    alt: 'Community Event'
  },
  {
    url: 'https://i.ibb.co/CBwqWbP/2022-08-26.jpg',
    alt: 'Mosque Gathering'
  }
];

export function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
        <Image className="mr-2" />
        Photo Gallery
      </h2>
      
      <div className="relative group">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
