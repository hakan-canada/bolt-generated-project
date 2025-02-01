import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Loader } from 'lucide-react';
import { SEO } from '../components/SEO';
import { PrayerTimes } from '../components/PrayerTimes';
import { ImamSection } from '../components/ImamSection';
import { ContactSection } from '../components/ContactSection';
import { DonationSection } from '../components/DonationSection';
import { GalleryCarousel } from '../components/GalleryCarousel';
import { ServicesSection } from '../components/ServicesSection';
import type { PrayerTimes as PrayerTimesType } from '../lib/prayerTimes';
import { defaultPrayerTimes } from '../lib/prayerTimes';

export function Home() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPrayerTimes = () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const savedTimes = localStorage.getItem('prayerTimes');
      setPrayerTimes(savedTimes ? JSON.parse(savedTimes) : defaultPrayerTimes);
    } catch (err) {
      console.error('Error fetching prayer times:', err);
      setError('Unable to load prayer times. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPrayerTimes();
  }, []);

  const renderPrayerTimesSection = () => {
    if (isLoading) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-12 flex items-center justify-center">
          <Loader className="w-8 h-8 animate-spin text-emerald-600" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center justify-center">
            <Clock className="mr-2" />
            Prayer Times
          </h2>
          <p className="text-red-600">{error}</p>
          <button
            onClick={fetchPrayerTimes}
            className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
          >
            Retry
          </button>
        </div>
      );
    }
    if (!prayerTimes) {
      return null;
    }

    return <PrayerTimes times={prayerTimes} />;
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <SEO />
      {/* Hero Section */}
      <div 
        className="h-[80vh] bg-cover bg-center relative transition-all w-full overflow-hidden"
        style={{
          backgroundImage: 'url("https://i.ibb.co/vQdc53L/anatolia-hero-2.png")',
          backgroundPosition: 'center 25%',
          imageRendering: 'crisp-edges'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">
          <div className="text-center text-white animate-fadeIn px-4">
            <h1 className="text-6xl font-bold mb-6">Anatolia Mosque</h1>
            <p className="text-2xl">Serving the North York Community with Faith and Compassion</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12 max-w-6xl">
        {/* Prayer Times Section */}
        <div className="mb-12 hover-lift">
          {renderPrayerTimesSection()}
          <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-lg p-4 max-w-4xl mx-auto">
            <p className="text-emerald-800 font-medium text-center">
              Note: We have 1 Jumu'ah prayer service only
            </p>
          </div>
        </div>

        {/* Donation Section */}
        <div className="mb-12">
          <DonationSection />
        </div>

        {/* Imam Section */}
        <div className="mb-12 hover-lift">
          <ImamSection />
        </div>
        
        {/* Contact Section */}
        <div className="mb-12">
          <ContactSection />
        </div>

        {/* Services Section */}
        <div className="mt-12">
          <ServicesSection />
        </div>

        {/* Visit Us Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-emerald-800 mb-6">Visit Us</h2>
          <div className="space-y-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5761.8704576562495!2d-79.47551702433613!3d43.77420334459709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2e09aeeaaaab%3A0x351c612597c30e04!2sAnatolia%20Islamic%20Centre%20North%20York%20(ICMG)!5e0!3m2!1sen!2sca!4v1735420786505!5m2!1sen!2sca"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
            <p className="text-gray-600">
              73 Alness St, North York, ON M3J 2H2
            </p>
            <p className="text-gray-600">
              Phone: (416) 650-1211
            </p>
            <div className="flex space-x-4">
              <a
              href="https://www.google.com/maps/place/Anatolia+Islamic+Centre+North+York+(ICMG)/@43.7742033,-79.475517,16z/data=!3m1!4b1!4m6!3m5!1s0x882b2e09aeeaaaab:0x351c612597c30e04!8m2!3d43.7741995!4d-79.4729421!16s%2Fg%2F11clt87n8j"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors text-center"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
        
        {/* Gallery Section */}
        <div className="mt-12">
          <GalleryCarousel />
        </div>
      </div>
    </div>
  );
}
