import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoImage, setLogoImage] = useState<string>('');

  useEffect(() => {
    const loadLogo = async () => {
      const modules = import.meta.glob('../../logo/**/*.{jpg,jpeg,png,gif}', { eager: true });
      const images = Object.entries(modules);
      if (images.length > 0) {
        setLogoImage((images[0][1] as { default: string }).default);
      }
    };
    loadLogo();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div 
              onClick={() => scrollToSection('home')}
              className="cursor-pointer flex items-center gap-2"
            >
              {logoImage && (
                <div className="relative h-8 sm:h-10 w-16 sm:w-20 flex items-center justify-center overflow-hidden rounded">
                  {/* Blurred background */}
                  <img 
                    src={logoImage}
                    alt="Gowriganesha Logo Background"
                    className="absolute inset-0 w-full h-full blur-md scale-110"
                  />
                  {/* Actual logo on top */}
                  <img 
                    src={logoImage}
                    alt="Gowriganesha Logo"
                    className="relative h-full w-auto object-contain"
                  />
                </div>
              )}
              <div className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--clay-brown)', fontFamily: '"Playfair Display", serif' }}>
                Gowriganesha
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-[var(--terracotta)] transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-[var(--terracotta)] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('events')} className="hover:text-[var(--terracotta)] transition-colors">
              Events
            </button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-[var(--terracotta)] transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('videos')} className="hover:text-[var(--terracotta)] transition-colors">
              Videos
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[var(--terracotta)] transition-colors">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" style={{ color: 'var(--clay-brown)' }} />
            ) : (
              <Menu className="h-6 w-6" style={{ color: 'var(--clay-brown)' }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left py-2 px-3 rounded-md hover:bg-[var(--natural-beige)] transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left py-2 px-3 rounded-md hover:bg-[var(--natural-beige)] transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('events')} 
              className="block w-full text-left py-2 px-3 rounded-md hover:bg-[var(--natural-beige)] transition-colors"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="block w-full text-left py-2 px-3 rounded-md hover:bg-[var(--natural-beige)] transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('videos')} 
              className="block w-full text-left py-2 px-3 rounded-md hover:bg-[var(--natural-beige)] transition-colors"
            >
              Videos
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left py-2 px-3 rounded-md hover:bg-[var(--natural-beige)] transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}