import { MessageCircle, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--clay-brown)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div 
            className="text-3xl mb-4" 
            style={{ 
              color: 'var(--soft-white)', 
              fontFamily: 'Georgia, serif' 
            }}
          >
            Gowriganesha
          </div>

          {/* Description */}
          <p className="text-center mb-6 max-w-md" style={{ color: 'var(--natural-beige)' }}>
            Clay & Mud Art Event Experiences
          </p>

          {/* Social Links */}
          <div className="flex gap-6 mb-8">
            <a 
              href="https://wa.me/919916607655" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: 'var(--terracotta)' }}
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </a>
            <a 
              href="https://www.instagram.com/gowriganesha_clay_pot_art?igsh=MTJlc2NuMXhwM2pxeg==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: 'var(--terracotta)' }}
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: 'var(--terracotta)' }}
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6 text-white" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm" style={{ color: 'var(--natural-beige)' }}>
            © {currentYear} Gowriganesha – Clay & Mud Art Event Experiences
          </p>
        </div>
      </div>
    </footer>
  );
}
