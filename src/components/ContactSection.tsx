import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--natural-beige)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-4" 
            style={{ color: 'var(--clay-brown)', fontFamily: 'Georgia, serif' }}
          >
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Ready to bring clay art to your event? Contact us today!
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'var(--terracotta)' }}
              >
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2" style={{ color: 'var(--clay-brown)' }}>Location</h3>
                <p className="text-gray-600">Bangalore</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'var(--terracotta)' }}
              >
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2" style={{ color: 'var(--clay-brown)' }}>Phone</h3>
                <a 
                  href="tel:+919916607655" 
                  className="text-gray-600 hover:text-[var(--terracotta)] transition-colors"
                >
                  +91 9916607655
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'var(--terracotta)' }}
              >
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2" style={{ color: 'var(--clay-brown)' }}>Email</h3>
                <a 
                  href="mailto:gowriganesha@email.com" 
                  className="text-gray-600 hover:text-[var(--terracotta)] transition-colors break-all"
                >
                  gowriganesha@email.com
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'var(--terracotta)' }}
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2" style={{ color: 'var(--clay-brown)' }}>WhatsApp</h3>
                <a 
                  href="https://wa.me/919916607655" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[var(--terracotta)] transition-colors"
                >
                  Chat with us
                </a>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center pt-6 border-t" style={{ borderColor: 'var(--natural-beige)' }}>
            <a 
              href="https://wa.me/919916607655" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              style={{ 
                backgroundColor: 'var(--terracotta)', 
                color: 'white',
              }}
            >
              <MessageCircle className="w-6 h-6" />
              Book an Art Activities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
