import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '/programs' },
    { name: 'Results', href: '/results' },
    { name: 'Fees', href: '/fees' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-warmwhite py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/walogo.png" alt="Wavefront Academy Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full shadow-sm group-hover:scale-105 transition-transform" />
              <div>
                <h1 className="text-xl md:text-2xl font-display font-bold text-navy-950 tracking-tight">Wavefront</h1>
                <p className="text-[10px] md:text-xs font-semibold text-accent-600 tracking-widest uppercase">Academy</p>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className={`font-medium text-base transition-colors ${location.pathname === link.href ? 'text-accent-600' : 'text-navy-800 hover:text-accent-600'}`}
              >
                {link.name}
              </Link>
            ))}
            <a href="#contact">
              <Button variant="primary" className="px-6 py-2.5 shadow-md hover:shadow-lg transition-shadow">
                Enquire Now
              </Button>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-navy-950 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block px-3 py-3 text-base font-medium rounded-lg ${location.pathname === link.href ? 'bg-accent-50 text-accent-700' : 'text-navy-900 hover:bg-warmwhite'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full text-base py-3">Enquire Now</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
