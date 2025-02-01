import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export function ContactSection() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover-lift max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-emerald-800 mb-6">Contact Us</h2>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <MapPin className="text-emerald-600 mt-1" />
          <div>
            <h3 className="font-semibold">Address</h3>
            <p>73 Alness St, North York, ON M3J 2H2</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Phone className="text-emerald-600 mt-1" />
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p>(416) 650-1211</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Mail className="text-emerald-600 mt-1" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p>anatolianorthyork@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
