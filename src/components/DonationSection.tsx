import React from 'react';
import { Heart, CreditCard, Landmark } from 'lucide-react';

export function DonationSection() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover-lift max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
        <Heart className="mr-2" />
        Support Our Mosque
      </h2>
      <div className="mb-8 p-6 bg-emerald-50 rounded-lg border border-emerald-100">
        <blockquote className="text-emerald-800 italic text-lg">
          "The likeness of those who spend their wealth in the way of Allah is as the likeness of a grain that sprouts seven spikes. In every spike there are 100 grains. And Allah multiplies for whom He wills."
        </blockquote>
        <p className="text-emerald-600 text-sm mt-2">- Quran 2:261</p>
      </div>
      <p className="text-gray-600 mb-6">
        Your generous donations help us maintain the mosque, support community programs, and continue our services.
      </p>
      
      <div className="max-w-xl mx-auto">
        <div className="border rounded-lg p-6 hover:shadow-md transition-all hover:border-emerald-200">
          <div className="flex items-center mb-3">
            <CreditCard className="text-emerald-600 mr-2" />
            <h3 className="font-semibold">Online Donation</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Make a secure online donation through our payment portal
          </p>
          <a
            href="https://buy.stripe.com/00g5lP6D5fO5g4E6oo"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition-colors transform hover:scale-[1.02] active:scale-[0.98] duration-200 text-center"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
}
