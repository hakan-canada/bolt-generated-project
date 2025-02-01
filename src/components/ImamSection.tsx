import React from 'react';
import { User } from 'lucide-react';

export function ImamSection() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
        <User className="mr-2" />
        Our Imam
      </h2>
      <div className="md:flex md:space-x-6 items-start">
        <div className="mb-6 md:mb-0 md:w-1/3 flex justify-center">
          <img
            src="https://i.ibb.co/nMYH3dM/imam.png"
            alt="Imam of Anatolia Mosque"
            className="rounded-full object-cover w-48 h-48 shadow-lg border-4 border-emerald-100"
          />
        </div>
        <div className="md:w-2/3">
          <h3 className="text-xl font-semibold text-emerald-700 mb-3">Imam Ferhat</h3>
          <p className="text-gray-600 mb-4">
            Imam Ferhat was born and raised in Turkey and is dedicated to providing spiritual guidance and education to our community.
          </p>
        </div>
      </div>
    </div>
  );
}
