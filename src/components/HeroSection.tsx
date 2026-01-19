import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export function HeroSection() {
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  useEffect(() => {
    const loadBackground = async () => {
      const modules = import.meta.glob('../../background/**/*.{jpg,jpeg,png,gif}', { eager: true });
      const images = Object.entries(modules);
      if (images.length > 0) {
        setBackgroundImage((images[0][1] as { default: string }).default);
      }
    };
    loadBackground();
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {backgroundImage && (
          <>
            {/* Blurred background to fill entire section */}
            <img 
              src={backgroundImage}
              alt="Clay art workshop background"
              className="absolute inset-0 w-full h-full object-cover blur-lg"
            />
            {/* Actual background image shrunk horizontally and centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={backgroundImage}
                alt="Clay art workshop"
                className="h-full w-auto max-w-[60%] object-contain"
              />
            </div>
          </>
        )}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between px-4 sm:px-6 lg:px-8 py-20">
        {/* Top: Gowriganesha Heading */}
        <div className="text-center" style={{ marginTop: '50px' }}>
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold" 
            style={{ 
              color: 'var(--soft-white)',
              fontFamily: '"Playfair Display", serif',
              textShadow: '3px 3px 6px rgba(0,0,0,0.5)'
            }}
          >
            Gowriganesha
          </h1>
        </div>

        {/* Bottom: Subtitle and Button */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl sm:text-2xl md:text-3xl text-white mb-8 font-light" style={{ fontFamily: '"Lora", serif' }}>
            Live Clay & Mud Art Experiences for Your Special Events
          </p>
          <a 
            href="https://wa.me/919916607655" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            style={{ 
              backgroundColor: 'var(--terracotta)', 
              color: 'white',
            }}
          >
            <MessageCircle className="w-6 h-6" />
            Enquire via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
