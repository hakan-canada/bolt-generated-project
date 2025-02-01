import React from 'react';
import { SEO } from '../../components/SEO';
import { ContactForm } from '../../components/ContactForm';
import { Moon, Calendar, Clock, BookOpen } from 'lucide-react';

export function Ramadan() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Ramadan Programs - Anatolia Mosque | Special Ramadan Services"
        description="Join our special Ramadan programs at Anatolia Mosque. Experience Taraweeh prayers, Iftar gatherings, and educational sessions during the blessed month."
      />
      
      <div 
        className="h-[40vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1584286595398-a59511e0e1c6?auto=format&fit=crop&q=80&w=1920")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Ramadan Programs</h1>
            <p className="text-xl">Strengthen Your Faith During the Blessed Month</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
                <Moon className="mr-2" />
                Ramadan Services
              </h2>
              <div className="space-y-4">
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  <h3 className="font-semibold text-emerald-800 mb-2">Daily Programs</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Taraweeh prayers after Isha</li>
                    <li>Daily Iftar gatherings</li>
                    <li>Quranic recitation sessions</li>
                    <li>Islamic lectures and discussions</li>
                  </ul>
                </div>
                
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  <h3 className="font-semibold text-emerald-800 mb-2">Special Events</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Community Iftars on weekends</li>
                    <li>Laylat al-Qadr programs</li>
                    <li>Eid prayer arrangements</li>
                    <li>Youth activities and competitions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
                <Calendar className="mr-2" />
                Schedule
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">Iftar</span>
                  <span className="text-emerald-700">Sunset time</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">Taraweeh</span>
                  <span className="text-emerald-700">After Isha prayer</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">Daily Lectures</span>
                  <span className="text-emerald-700">After Asr prayer</span>
                </div>
              </div>
            </div>
          </div>

          <ContactForm subject="Ramadan Program Inquiry" serviceType="ramadan" />
        </div>
      </div>
    </div>
  );
}
