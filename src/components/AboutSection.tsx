import { useState, useEffect } from 'react';

export function AboutSection() {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    const loadImage = async () => {
      const modules = import.meta.glob('../../about us photo/**/*.{jpg,jpeg,png,gif}', { eager: true });
      const images = Object.entries(modules);
      if (images.length > 0) {
        setImageUrl((images[0][1] as { default: string }).default);
      }
    };
    loadImage();
  }, []);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--soft-white)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            {imageUrl && (
              <img 
                src={imageUrl}
                alt="Artist guiding participants"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            )}
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl mb-6" 
              style={{ color: 'var(--clay-brown)', fontFamily: 'Georgia, serif' }}
            >
              About Us
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At <span style={{ color: 'var(--terracotta)' }} className="font-semibold">Gowriganesha</span>, we bring the ancient art of clay and mud sculpting to your celebrations, creating unforgettable interactive experiences.
              </p>
              <p>
                Our expert artisans conduct engaging workshops where participants of all ages can explore their creativity through hands-on clay modeling activities. We specialize in making every event memorable through the timeless medium of natural clay.
              </p>
              <p>
                Perfect for birthday parties, weddings, corporate team-building activities, and cultural festivals, our workshops blend tradition with modern engagement, offering an eco-friendly and culturally rich experience that leaves lasting memories.
              </p>
              <p>
                Whether you're celebrating a special occasion or looking to foster team bonding, we create customized clay art experiences that inspire creativity, connection, and joy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
