import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Menu, X, ChevronDown } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const services = [
    { path: '/services/marriage', name: 'Marriage Services' },
    { path: '/services/funeral', name: 'Funeral Services' },
    { path: '/services/ramadan', name: 'Ramadan Programs' },
    { path: '/services/education', name: 'Educational Programs' },
  ];

  return (
    <nav className="bg-emerald-800 text-white relative">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 size={32} />
            <span className="text-xl font-bold">Anatolia Mosque</span>
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-emerald-700 rounded-lg"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-emerald-200">Home</Link>
            <Link to="/about" className="hover:text-emerald-200">About</Link>
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleServices}
                className="flex items-center hover:text-emerald-200 focus:outline-none"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`absolute left-0 mt-2 w-48 bg-emerald-800 rounded-lg shadow-xl py-2 z-50 ${
                  isServicesOpen ? 'block' : 'hidden'
                }`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="services-menu"
              >
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setIsServicesOpen(false)}
                    className="block px-4 py-2 hover:bg-emerald-700 transition-colors duration-200 text-white"
                    role="menuitem"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <a href="https://buy.stripe.com/00g5lP6D5fO5g4E6oo" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200">Donate</a>
            <Link to="/contact" className="hover:text-emerald-200">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden absolute left-0 right-0 top-full bg-emerald-800 border-t border-emerald-700 py-4 px-4 flex-col space-y-4 shadow-lg z-50`}>
          <Link to="/" className="hover:text-emerald-200 block" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-emerald-200 block" onClick={() => setIsMenuOpen(false)}>About</Link>
          <div className="space-y-2 pl-4 border-l border-emerald-700">
            <Link to="/services/marriage" className="hover:text-emerald-200 block" onClick={() => setIsMenuOpen(false)}>Marriage Services</Link>
            <Link to="/services/funeral" className="hover:text-emerald-200 block" onClick={() => setIsMenuOpen(false)}>Funeral Services</Link>
            <Link to="/services/ramadan" className="hover:text-emerald-200 block" onClick={() => setIsMenuOpen(false)}>Ramadan Programs</Link>
            <Link to="/services/education" className="hover:text-emerald-200 block" onClick={() => setIsMenuOpen(false)}>Educational Programs</Link>
          </div>
          <a href="https://buy.stripe.com/00g5lP6D5fO5g4E6oo" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200 block" onClick={() => setIsMenuOpen(false)}>Donate</a>
          <Link to="/contact" className="hover:text-emerald-200 block" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
