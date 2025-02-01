import React from 'react';

export function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-emerald-800 mb-4">Thank You!</h1>
        <p className="text-gray-600">Your message has been successfully sent. We will get back to you soon.</p>
      </div>
    </div>
  );
}
