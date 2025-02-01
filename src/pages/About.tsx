import React from 'react';
import { SEO } from '../components/SEO';
import { History, Users, Heart, BookOpen } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="About Us - Anatolia Mosque | Our History & Mission"
        description="Learn about Anatolia Mosque's history, mission, and commitment to serving the Muslim community in North York through faith, education, and community service."
      />
      
      <div 
        className="h-[40vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&q=80&w=1920")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white animate-fadeIn">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl">Building Community Through Faith</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12 max-w-4xl mx-auto">
          {/* History Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover-lift">
            <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
              <History className="mr-2" />
              Our History
            </h2>
            <p className="text-gray-600 mb-4">
              Anatolia Mosque has been serving the North York community since its establishment. 
              What started as a small prayer space has grown into a vibrant Islamic center, 
              providing a spiritual home for Muslims in the Greater Toronto Area.
            </p>
            <p className="text-gray-600">
              Over the years, we have expanded our facilities and services to meet the growing 
              needs of our community, while maintaining our commitment to Islamic principles 
              and values.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover-lift mt-12">
            <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
              <Heart className="mr-2" />
              Mission & Values
            </h2>
            <p className="text-gray-600 mb-4">
              Our mission is to serve as a center of Islamic learning, worship, and community 
              service. We strive to provide a welcoming environment for Muslims to practice 
              their faith and for non-Muslims to learn about Islam.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Promoting Islamic education and understanding</li>
              <li>Building bridges with other faith communities</li>
              <li>Supporting families and youth development</li>
              <li>Providing social services and community support</li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover-lift">
            <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
              <Users className="mr-2" />
              Our Community
            </h2>
            <p className="text-gray-600 mb-4">
              Anatolia Mosque serves a diverse community of Muslims from various cultural 
              backgrounds. We take pride in our inclusive approach and the warm, welcoming 
              atmosphere we maintain for all visitors.
            </p>
            <p className="text-gray-600">
              Our congregation includes long-time residents and newcomers to Canada, 
              creating a rich tapestry of cultures united in faith and community service.
            </p>
          </div>

          {/* Programs Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover-lift">
            <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
              <BookOpen className="mr-2" />
              Our Programs
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                We offer a wide range of programs and services to meet the spiritual, 
                educational, and social needs of our community:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Daily prayers and Friday sermons</li>
                <li>Quran classes for children and adults</li>
                <li>Islamic studies programs</li>
                <li>Youth activities and mentorship</li>
                <li>Community events and gatherings</li>
                <li>Charitable initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
