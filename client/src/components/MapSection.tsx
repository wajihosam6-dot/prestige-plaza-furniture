import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Clock, EnvelopeOpen } from '@phosphor-icons/react';

export default function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Load Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDummy&libraries=marker`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (mapRef.current && window.google) {
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 16,
          center: { lat: 23.571356, lng: 58.4119759 },
          mapTypeControl: true,
          fullscreenControl: true,
          zoomControl: true,
          streetViewControl: true,
          styles: [
            {
              featureType: 'all',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#616161' }],
            },
            {
              featureType: 'all',
              elementType: 'labels.text.stroke',
              stylers: [{ color: '#f5f5f5' }],
            },
            {
              featureType: 'all',
              elementType: 'labels.icon',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'administrative',
              elementType: 'geometry.fill',
              stylers: [{ color: '#f0f0f0' }],
            },
            {
              featureType: 'administrative',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#bdbdbd' }],
            },
            {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [{ color: '#eeeeee' }],
            },
            {
              featureType: 'road',
              elementType: 'geometry.fill',
              stylers: [{ color: '#ffffff' }],
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#e0e0e0' }],
            },
            {
              featureType: 'transit',
              elementType: 'geometry.fill',
              stylers: [{ color: '#e0e0e0' }],
            },
            {
              featureType: 'water',
              elementType: 'geometry.fill',
              stylers: [{ color: '#e0e0e0' }],
            },
          ],
        });

        // Add custom marker
        const marker = new window.google.maps.Marker({
          position: { lat: 23.571356, lng: 58.4119759 },
          map: map,
          title: 'Prestige Plaza',
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: '#ca8a04',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 3,
          },
        });

        // Add info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 12px; font-family: 'Playfair Display', serif;">
              <h3 style="margin: 0 0 8px 0; color: #374151; font-size: 18px;">Prestige Plaza</h3>
              <p style="margin: 0 0 6px 0; color: #6b7280; font-size: 14px;">
                <strong>Address:</strong> HCC5+MR9, Bawshar St, Muscat, Oman
              </p>
              <p style="margin: 0 0 6px 0; color: #6b7280; font-size: 14px;">
                <strong>Phone:</strong> +968 7725 7779
              </p>
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                <strong>Hours:</strong> 9:00 AM - 9:00 PM
              </p>
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        // Open info window by default
        infoWindow.open(map, marker);

        setMapLoaded(true);
      }
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'HCC5+MR9, Bawshar St, Muscat, Oman',
      color: 'text-yellow-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+968 7725 7779',
      color: 'text-yellow-600',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: '9:00 AM - 9:00 PM (Daily)',
      color: 'text-yellow-600',
    },
    {
      icon: EnvelopeOpen,
      title: 'Email',
      content: 'info@prestigeplaza.om',
      color: 'text-yellow-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Visit Our Showroom
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Experience our luxury furniture collection in person
          </p>
          <div className="w-24 h-1 bg-yellow-600 mx-auto" />
        </motion.div>

        {/* Map and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div
              ref={mapRef}
              className="w-full h-96 lg:h-[500px] rounded-lg shadow-2xl overflow-hidden"
            />
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`${info.color} flex-shrink-0 mt-1`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Icon size={28} weight="fill" />
                    </motion.div>
                    <div>
                      <h3
                        className="text-lg font-bold text-gray-800 mb-1"
                        style={{ fontFamily: 'Playfair Display' }}
                      >
                        {info.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA Button */}
            <motion.a
              href="https://maps.app.goo.gl/Prjgb5z2F24gLqck7"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white font-semibold rounded-lg text-center hover:shadow-lg transition-all mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Get Directions
            </motion.a>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4
                className="text-2xl font-bold mb-2 text-yellow-600"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Expert Staff
              </h4>
              <p className="text-gray-300">
                Our experienced team is ready to help you find the perfect furniture for your space.
              </p>
            </div>
            <div className="text-center">
              <h4
                className="text-2xl font-bold mb-2 text-yellow-600"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Free Consultation
              </h4>
              <p className="text-gray-300">
                Get personalized design advice and interior styling recommendations.
              </p>
            </div>
            <div className="text-center">
              <h4
                className="text-2xl font-bold mb-2 text-yellow-600"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Delivery Service
              </h4>
              <p className="text-gray-300">
                Fast and reliable delivery to your home with professional installation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
