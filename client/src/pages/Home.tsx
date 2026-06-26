import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VideoShowcase from '@/components/VideoShowcase';
import GallerySection from '@/components/GallerySection';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PortfolioSection from '@/components/PortfolioSection';
import TeamSection from '@/components/TeamSection';
import DividerSection from '@/components/DividerSection';
import DraggableCarousel from '@/components/DraggableCarousel';
import ProductCarousel3D from '@/components/ProductCarousel3D';
import InteractiveProductGrid from '@/components/InteractiveProductGrid';
import MasonryProductGallery from '@/components/MasonryProductGallery';
import AdvancedProductSlider from '@/components/AdvancedProductSlider';
import FlipCardProducts from '@/components/FlipCardProducts';
import MapSection from '@/components/MapSection';
import CTASection from '@/components/CTASection';
import NewsletterSection from '@/components/NewsletterSection';
import { Phone, MapPin } from '@phosphor-icons/react';

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div className="min-h-screen bg-white overflow-hidden" ref={containerRef}>
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Video Showcase Section */}
      <VideoShowcase />

      {/* Draggable Carousel Section */}
      <DraggableCarousel />

      {/* Gallery Section */}
      <GallerySection />

      {/* 3D Carousel Section */}
      <ProductCarousel3D />

      {/* Interactive Grid Section */}
      <InteractiveProductGrid />

      {/* Masonry Gallery Section */}
      <MasonryProductGallery />

      {/* Advanced Slider Section */}
      <AdvancedProductSlider />

      {/* Flip Cards Section */}
      <FlipCardProducts />

      {/* Features Section */}
      <FeaturesSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Divider */}
      <DividerSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Divider */}
      <DividerSection />

      {/* Team Section */}
      <TeamSection />

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
                src="/images/showroom_ambiance_ea0897f1.png"
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
              <h2 className="text-4xl font-bold mb-6 text-neutral-800" style={{ fontFamily: 'Playfair Display' }}>
                About Prestige Plaza
              </h2>
              <p className="text-neutral-600 text-lg mb-4 leading-relaxed">
                At Prestige Plaza, we believe that luxury furniture is more than just pieces of wood and fabric. It's about creating spaces where memories are made and dreams come true.
              </p>
              <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                With years of experience in the furniture industry, we curate the finest collections from around the world to bring you unparalleled quality and design.
              </p>
              <motion.button
                className="px-8 py-3 bg-yellow-600 text-white font-semibold rounded-sm hover:bg-yellow-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* CTA Section */}
      <CTASection />

      {/* Map Section */}
      <MapSection />

      {/* Contact Section */}
      <section className="py-20 bg-neutral-900 text-white">
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
            <div className="w-24 h-1 bg-yellow-600 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <Phone size={32} weight="bold" className="text-yellow-600 flex-shrink-0 mt-2" />
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display' }}>
                  Phone
                </h3>
                <p className="text-neutral-300 text-lg">+968 7725 7779</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <MapPin size={32} weight="bold" className="text-yellow-600 flex-shrink-0 mt-2" />
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display' }}>
                  Location
                </h3>
                <p className="text-neutral-300 text-lg">HCC5+MR9, Bawshar St, Muscat, Oman</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-neutral-400 py-12 border-t border-neutral-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <img
              src="/images/prestige_plaza_logo_real_0ced4f3f.png"
              alt="Prestige Plaza"
              className="w-24 h-24 mx-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </motion.div>
          <p className="text-sm">&copy; 2026 Prestige Plaza. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
