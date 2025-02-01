import React from 'react';
import { Link } from 'react-router-dom';
import { Church, Heart, BookOpen, Moon } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  path?: string;
}

export function ServicesSection() {
  const services: Service[] = [
    {
      icon: <Church className="w-8 h-8 text-emerald-600" />,
      title: 'Marriage Services',
      description: 'Islamic marriage ceremonies and counseling',
      path: '/services/marriage'
    },
    {
      icon: <Heart className="w-8 h-8 text-emerald-600" />,
      title: 'Funeral Services',
      description: 'Funeral arrangements and support',
      path: '/services/funeral'
    },
    {
      icon: <Moon className="w-8 h-8 text-emerald-600" />,
      title: 'Ramadan Programs',
      description: 'Special programs during Ramadan',
      path: '/services/ramadan'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-emerald-600" />,
      title: 'Educational Programs',
      description: 'Islamic education for all ages',
      path: '/services/education'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-emerald-800 mb-8">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.title} className="flex items-start space-x-4">
            {service.path ? (
              <Link to={service.path} className="flex items-start space-x-4 hover:text-emerald-600">
                <div className="flex-shrink-0">{service.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Link>
            ) : (
              <>
                <div className="flex-shrink-0">{service.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
