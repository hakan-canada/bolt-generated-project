import React from 'react';
import { Mail } from 'lucide-react';

export function ContactForm({ subject = '', serviceType = '' }: { subject?: string; serviceType?: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
        <Mail className="mr-2" />
        Contact Us
      </h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thank-you"
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label>First Name <input type="text" name="firstName" required className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-500" /></label>
        </p>
        <p>
          <label>Last Name <input type="text" name="lastName" className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-500" /></label>
        </p>
        <p>
          <label>Email <input type="email" name="email" required className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-500" /></label>
        </p>
        <p>
          <label>Subject <input type="text" name="subject" defaultValue={subject} required className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-500" /></label>
        </p>
        <p>
          <label>Message <textarea name="message" rows={4} defaultValue={serviceType ? `I'm interested in ${serviceType} services.` : ''} required className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-500" /></label>
        </p>
        <p>
          <button type="submit" className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700">Send Message</button>
        </p>
      </form>
    </div>
  );
}
