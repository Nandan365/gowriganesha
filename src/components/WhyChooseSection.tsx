import { Leaf, Users, UserCheck, Award, Sparkles } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Leaf,
    title: 'Eco-Friendly Natural Materials',
    description: 'We use 100% natural clay and mud, ensuring a safe and environmentally conscious experience.'
  },
  {
    id: 2,
    icon: Sparkles,
    title: 'Interactive & Engaging Activities',
    description: 'Hands-on activities that captivate participants and create memorable moments.'
  },
  {
    id: 3,
    icon: Users,
    title: 'Suitable for All Age Groups',
    description: 'From children to adults, our workshops are designed for everyone to enjoy.'
  },
  {
    id: 4,
    icon: Award,
    title: 'Professional Event Handling',
    description: 'Experienced facilitators ensure smooth, organized, and delightful activities.'
  },
  {
    id: 5,
    icon: UserCheck,
    title: 'Cultural & Creative Experience',
    description: 'Blend traditional Indian artistry with modern creative expression.'
  }
];

export function WhyChooseSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--soft-white)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-4" 
            style={{ color: 'var(--clay-brown)', fontFamily: 'Georgia, serif' }}
          >
            Why Choose Gowriganesha
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the difference with our unique approach to clay art workshops
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.id}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--terracotta)' }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3" style={{ color: 'var(--clay-brown)' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
