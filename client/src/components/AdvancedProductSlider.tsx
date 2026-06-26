import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

interface SliderProduct {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
  features: string[];
}

const sliderProducts: SliderProduct[] = [
  {
    id: 1,
    image: '/images/sofa_collection_hero_92dbb842.png',
    title: 'Luxury Velvet Sofa',
    description: 'Experience ultimate comfort with our premium velvet sofa collection.',
    price: '$3,999',
    features: ['Premium Velvet', 'Hand-stitched', 'Lifetime Warranty'],
  },
  {
    id: 2,
    image: '/images/interior_design_showcase_bcb31a16.png',
    title: 'Modern Dining Collection',
    description: 'Elevate your dining experience with contemporary elegance.',
    price: '$2,499',
    features: ['Marble Top', 'Solid Wood', 'Seats 8'],
  },
  {
    id: 3,
    image: '/images/furniture_details_close_eef9ac45.png',
    title: 'Designer Armchair',
    description: 'Timeless elegance meets modern comfort in this statement piece.',
    price: '$1,599',
    features: ['Italian Leather', 'Ergonomic', 'Swivel Base'],
  },
  {
    id: 4,
    image: '/images/hero_furniture_showcase_eaa79e5a.png',
    title: 'Premium Bed Frame',
    description: 'Sleep in luxury with our handcrafted bed frame collection.',
    price: '$4,999',
    features: ['King Size', 'Solid Oak', 'Storage Drawers'],
  },
];

export default function AdvancedProductSlider() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? sliderProducts.length - 1 : prev - 1));
    setAutoplay(false);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % sliderProducts.length);
    setAutoplay(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"
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
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Featured Collections
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto" />
        </motion.div>

        {/* Slider */}
        <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img
                src={sliderProducts[current].image}
                alt={sliderProducts[current].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                key={`content-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-lg text-white"
              >
                <h3
                  className="text-5xl font-bold mb-4"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  {sliderProducts[current].title}
                </h3>
                <p className="text-lg text-gray-200 mb-6">
                  {sliderProducts[current].description}
                </p>

                {/* Features */}
                <div className="flex gap-4 mb-8">
                  {sliderProducts[current].features.map((feature, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-4 py-2 bg-yellow-600 rounded-full text-sm font-semibold"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center gap-6">
                  <span className="text-4xl font-bold text-yellow-600">
                    {sliderProducts[current].price}
                  </span>
                  <motion.button
                    className="px-8 py-3 bg-yellow-600 text-white font-semibold rounded-sm hover:bg-yellow-700 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Now
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-8 right-8 flex gap-4 z-10">
            <motion.button
              onClick={handlePrev}
              className="p-3 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <CaretLeft size={24} weight="fill" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="p-3 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <CaretRight size={24} weight="fill" />
            </motion.button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-8 left-8 flex gap-2 z-10">
            {sliderProducts.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setAutoplay(false);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === current ? 'bg-yellow-600 w-8' : 'bg-white/30 w-2'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
