import React from 'react';
import { SEO } from '../../components/SEO';
import { ContactForm } from '../../components/ContactForm';
import { BookOpen, GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Islamic Education - Anatolia Mosque | Educational Programs in North York"
        description="Comprehensive Islamic education programs at Anatolia Mosque. Join our Quran classes, Islamic studies, and educational programs for all ages."
      />
      
      <div 
        className="h-[40vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1920")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Educational Programs</h1>
            <p className="text-xl">Nurturing Knowledge and Faith</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
                <BookOpen className="mr-2" />
                Our Programs
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  We offer comprehensive Islamic education programs including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Quran reading and memorization</li>
                  <li>Islamic studies for children</li>
                  <li>Adult education classes</li>
                  <li>Weekend school programs</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
                <GraduationCap className="mr-2" />
                Class Schedule
              </h2>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Weekly Classes:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Weekday evenings: 6:00 PM - 8:00 PM</li>
                  <li>Saturday: 10:00 AM - 2:00 PM</li>
                  <li>Sunday: 11:00 AM - 3:00 PM</li>
                </ul>
              </div>
            </div>
          </div>

          <ContactForm subject="Education Program Inquiry" serviceType="education" />
        </div>
      </div>
    </div>
  );
}
