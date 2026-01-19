import { useState, useEffect } from 'react';

interface GalleryImage {
  id: number;
  url: string;
  caption: string;
}

export function GallerySection() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    // Dynamically load all images from the photos folder
    const loadImages = async () => {
      const modules = import.meta.glob('../../photos/**/*.{jpg,jpeg,png,gif}', { eager: true });
      const images: GalleryImage[] = Object.entries(modules)
        .filter(([path]) => !path.includes('.mp4')) // Exclude video files
        .map(([path, module], index) => ({
          id: index + 1,
          url: (module as { default: string }).default,
          caption: path.split('/').pop()?.replace(/\.[^.]+$/, '') || `Photo ${index + 1}`
        }));
      setGalleryImages(images);
    };

    loadImages();
  }, []);


  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--natural-beige)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-4" 
            style={{ color: 'var(--clay-brown)', fontFamily: 'Georgia, serif' }}
          >
            Gallery
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Moments captured from our workshops and events
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer aspect-square"
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img 
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
