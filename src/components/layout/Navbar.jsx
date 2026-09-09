import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = 
useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Results', href: '#results' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-3 group">
              <img src="/walogo.png" alt="Wavefront Academy Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full shadow-sm group-hover:scale-105 transition-transform" />
              <div>
                <h1 className="text-xl md:text-2xl font-display font-bold text-navy-900 tracking-tight">Wavefront</h1>
                <p className="text-[10px] md:text-xs font-semibold text-wavefront-600 tracking-widest uppercase">Academy</p>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-navy-800 hover:text-wavefront-600 font-medium text-sm transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
            <a href="tel:7058107207">
              <Button variant="primary" className="gap-2 px-6 py-2.5 text-sm">
                <Phone className="w-4 h-4" />
                7058107207
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-navy-900 hover:text-wavefront-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-navy-800 hover:text-wavefront-600 hover:bg-gray-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a href="tel:7058107207" className="w-full">
                <Button variant="primary" className="w-full gap-2 justify-center">
                  <Phone className="w-4 h-4" />
                  Call 7058107207
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
