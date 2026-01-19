import { Cake, Heart, Users, GraduationCap, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

interface EventImage {
  id: number;
  icon: typeof Cake;
  image: string;
}

const eventIcons = [Cake, Heart, Users, GraduationCap, Sparkles];

const eventTitles = [
  'Birthday Party Clay Workshops',
  'Wedding & Pre-Wedding Events',
  'Corporate & Team Building Programs',
  'School & Kids Workshops',
  'Cultural & Festival Events'
];

const eventDescriptions = [
  'Make your child\'s birthday unforgettable with hands-on clay sculpting. Kids create their own masterpieces to take home!',
  'Add a cultural and creative touch to your wedding festivities with live clay art demonstrations and interactive activities.',
  'Strengthen team bonds through collaborative clay art workshops. Perfect for office events and team-building activities.',
  'Educational and fun clay workshops for schools and children\'s groups, fostering creativity and fine motor skills.',
  'Celebrate Indian festivals and cultural events with traditional clay art demonstrations and interactive mud sculpting.'
];

export function EventsSection() {
  const [eventImages, setEventImages] = useState<EventImage[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const modules = import.meta.glob('../../Events We Conduct Photos/**/*.{jpg,jpeg,png,gif}', { eager: true });
      const images: EventImage[] = Object.entries(modules)
        .map(([path, module], index) => ({
          id: index + 1,
          icon: eventIcons[index % eventIcons.length],
          image: (module as { default: string }).default
        }));
      setEventImages(images);
    };
    loadImages();
  }, []);
  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-4" 
            style={{ color: 'var(--clay-brown)', fontFamily: 'Georgia, serif' }}
          >
            Events We Conduct
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From intimate celebrations to grand corporate gatherings, we bring the magic of clay art to every occasion
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventImages.map((event, index) => {
            const IconComponent = event.icon;
            const title = eventTitles[index] || `Event ${index + 1}`;
            const description = eventDescriptions[index] || '';
            return (
              <div 
                key={event.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={event.image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div 
                    className="absolute top-4 right-4 p-3 rounded-full shadow-lg"
                    style={{ backgroundColor: 'var(--terracotta)' }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-3" style={{ color: 'var(--clay-brown)' }}>
                    {title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
