'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent backdrop-blur-0 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-light tracking-tight text-white">
            DESIGNAXE
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-light text-white/80 hover:text-white transition-colors">
              Features
            </a>
            <a href="#my-work" className="text-sm font-light text-white/80 hover:text-white transition-colors">
              my Work
            </a>
            <a href="#services" className="text-sm font-light text-white/80 hover:text-white transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-light text-white/80 hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-light text-white/80 hover:text-white transition-colors">
              Contact
            </a>
            <a 
              href="https://calendly.com/designaxe/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-white"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-white/10">
            <a href="#features" className="block text-sm font-light text-white/80 hover:text-white transition-colors">
              Features
            </a>
            <a href="#my-work" className="block text-sm font-light text-white/80 hover:text-white transition-colors">
              my Work
            </a>
            <a href="#services" className="block text-sm font-light text-white/80 hover:text-white transition-colors">
              Services
            </a>
            <a href="#about" className="block text-sm font-light text-white/80 hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="block text-sm font-light text-white/80 hover:text-white transition-colors">
              Contact
            </a>
            <a 
              href="https://calendly.com/designaxe/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-light px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-white text-center"
            >
              Book Consultation
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

