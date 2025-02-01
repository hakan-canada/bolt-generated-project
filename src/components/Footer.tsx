import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Youtube, ChevronRight } from 'lucide-react';

export function Footer() {
  const services = [
    { path: '/services/marriage', name: 'Marriage Services' },
    { path: '/services/funeral', name: 'Funeral Services' },
    { path: '/services/ramadan', name: 'Ramadan Programs' },
    { path: '/services/education', name: 'Educational Programs' },
  ];

  return (
    <footer className="bg-emerald-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-emerald-300" />
                <div>
                  <p>73 Alness St</p>
                  <p>North York, ON M3J 2H2</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-300" />
                <p>(416) 650-1211</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-300" />
                <p>anatolianorthyork@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <div className="space-y-2">
                  <ul className="space-y-2">
                    {services.map((service) => (
                      <li key={service.path}>
                        <Link 
                          to={service.path} 
                          className="hover:text-emerald-300 flex items-center space-x-1"
                        >
                          <span>{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-300">About Us</Link>
              </li>
              <li>
                <a href="https://buy.stripe.com/00g5lP6D5fO5g4E6oo" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">Donate</a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/icmgnorthyork/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-emerald-300"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.youtube.com/channel/UC3MV6JDdrYcjT0ArhGwkQng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-emerald-300"
              >
                <Youtube className="w-5 h-5" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-emerald-800 text-center text-sm text-emerald-300">
          <p>&copy; {new Date().getFullYear()} Anatolia Mosque. All rights reserved. Powered by <a href="https://halalbiz.ca/why-halalbiz/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-100">HalalBiz</a></p>
        </div>
      </div>
    </footer>
  );
}
