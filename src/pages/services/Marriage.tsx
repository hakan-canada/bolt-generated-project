import React from 'react';
import { SEO } from '../../components/SEO';
import { ContactForm } from '../../components/ContactForm';
import { Calendar, Heart } from 'lucide-react';

export function Marriage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Marriage Services - Anatolia Mosque | Islamic Marriage Services in North York"
        description="Islamic marriage services at Anatolia Mosque. We provide Nikah ceremonies, marriage counseling, and wedding arrangements in accordance with Islamic traditions."
      />
      
      <div 
        className="h-[40vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1920")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Marriage Services</h1>
            <p className="text-xl">Unite in Faith and Love</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
                <Heart className="mr-2" />
                Our Marriage Services
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  We provide comprehensive Islamic marriage services including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Nikah ceremony arrangements</li>
                  <li>Pre-marriage counseling</li>
                  <li>Marriage documentation</li>
                  <li>Islamic marriage guidance</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
                <Calendar className="mr-2" />
                Process & Requirements
              </h2>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Required Documents:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Valid government ID</li>
                  <li>Birth certificates</li>
                  <li>Proof of Islamic faith</li>
                  <li>Marriage license (if applicable)</li>
                </ul>
              </div>
            </div>
          </div>

          <ContactForm subject="Marriage Services Inquiry" serviceType="marriage" />
        </div>
      </div>
    </div>
  );
}
