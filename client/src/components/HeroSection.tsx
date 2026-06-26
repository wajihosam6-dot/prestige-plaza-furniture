import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown } from '@phosphor-icons/react';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const textY = useTransform(scrollY, [0, 400], [0, 100]);

  return (
    <motion.section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ opacity, scale }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/manus-storage/hero_furniture_showcase_eaa79e5a.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        </div>
      </motion.div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
        style={{ y: textY }}
      >
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src="/manus-storage/prestige_plaza_logo_real_0ced4f3f.png"
            alt="Prestige Plaza"
            className="w-32 h-32 mx-auto object-contain"
          />
        </motion.div>

        {/* Main Title with Stagger Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1
            className="text-7xl md:text-8xl font-bold text-white mb-6 drop-shadow-lg"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Prestige Plaza
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-2xl md:text-3xl text-gray-100 mb-8 font-light drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Discover Luxury Furniture for Your Home
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          className="w-24 h-1 bg-amber-600 mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            className="px-10 py-4 bg-amber-600 text-white font-semibold rounded-sm hover:bg-amber-700 transition-all text-lg shadow-2xl"
            whileHover={{ scale: 1.08, boxShadow: '0 20px 40px rgba(217, 119, 6, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Collection
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-sm font-light">Scroll to Explore</span>
          <ArrowDown size={32} weight="bold" className="text-amber-600" />
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-amber-600/30 rounded-lg"
        animate={{
          rotate: [0, 360],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-10 w-16 h-16 border-2 border-amber-600/30 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, delay: 2 }}
      />
    </motion.section>
  );
}
