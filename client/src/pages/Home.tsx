import { motion } from 'motion/react';
import { useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Header from '@/components/Header';
import GallerySection from '@/components/GallerySection';
import CTASection from '@/components/CTASection';
import { ArrowDown, Phone, MapPin } from '@phosphor-icons/react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <div className="min-h-screen bg-white overflow-hidden" ref={containerRef}>
      <Header />

      {/* Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/manus-storage/hero_furniture_showcase_eaa79e5a.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Playfair Display' }}>
              Prestige Plaza
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Discover Luxury Furniture for Your Home
            </p>
            <motion.button
              className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-sm hover:bg-amber-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Collection
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={32} weight="bold" className="text-white" />
        </motion.div>
      </motion.section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'Playfair Display' }}>
              Featured Collections
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Sofas', image: '/manus-storage/sofa_collection_hero_92dbb842.png' },
              { title: 'Interior Design', image: '/manus-storage/interior_design_showcase_bcb31a16.png' },
              { title: 'Details', image: '/manus-storage/furniture_details_close_eef9ac45.png' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg h-80 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Playfair Display' }}>
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="/manus-storage/showroom_ambiance_ea0897f1.png"
                alt="Showroom"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-800" style={{ fontFamily: 'Playfair Display' }}>
                About Prestige Plaza
              </h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                At Prestige Plaza, we believe that luxury furniture is more than just pieces of wood and fabric. It's about creating spaces where memories are made and dreams come true.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With years of experience in the furniture industry, we curate the finest collections from around the world to bring you unparalleled quality and design.
              </p>
              <motion.button
                className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-sm hover:bg-amber-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <Phone size={32} weight="bold" className="text-amber-600 flex-shrink-0 mt-2" />
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display' }}>
                  Phone
                </h3>
                <p className="text-gray-300 text-lg">+968 7725 7779</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <MapPin size={32} weight="bold" className="text-amber-600 flex-shrink-0 mt-2" />
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display' }}>
                  Location
                </h3>
                <p className="text-gray-300 text-lg">HCC5+MR9, Bawshar St, Muscat, Oman</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 Prestige Plaza. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
