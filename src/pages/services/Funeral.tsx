import React from 'react';
import { SEO } from '../../components/SEO';
import { ContactForm } from '../../components/ContactForm';
import { Heart, Clock, Scroll, HelpCircle } from 'lucide-react';

export function Funeral() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Funeral Services - Anatolia Mosque | Islamic Funeral Services"
        description="Compassionate Islamic funeral services at Anatolia Mosque. We provide guidance and support for funeral arrangements according to Islamic traditions."
      />
      
      <div 
        className="h-[40vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486825586573-7131f7991bdd?auto=format&fit=crop&q=80&w=1920")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Funeral Services</h1>
            <p className="text-xl">Compassionate Support in Times of Need</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
                <Heart className="mr-2" />
                Our Services
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  We provide comprehensive Islamic funeral services including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Ghusl (ritual washing) arrangements</li>
                  <li>Kafan (shrouding) services</li>
                  <li>Janazah prayer coordination</li>
                  <li>Cemetery arrangements</li>
                  <li>Family support and counseling</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
                <Scroll className="mr-2" />
                Process
              </h2>
              <div className="space-y-4">
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  <h3 className="font-semibold text-emerald-800 mb-2">Steps to Follow</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>Contact our emergency funeral line</li>
                    <li>Meet with our funeral services coordinator</li>
                    <li>Arrange for necessary documentation</li>
                    <li>Schedule the funeral prayer</li>
                    <li>Coordinate burial arrangements</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
                <HelpCircle className="mr-2" />
                Support Services
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  We understand this is a difficult time. Our team provides:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>24/7 emergency support</li>
                  <li>Grief counseling</li>
                  <li>Administrative assistance</li>
                  <li>Community support network</li>
                </ul>
              </div>
            </div>
          </div>

          <ContactForm subject="Funeral Services Inquiry" serviceType="funeral" />
        </div>
      </div>
    </div>
  );
}
