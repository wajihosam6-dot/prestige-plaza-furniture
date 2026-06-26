import { motion } from 'motion/react';
import { useState } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Luxury Sofa Set',
    category: 'Living Room',
    image: '/images/sofa_collection_hero_92dbb842.png',
    price: '$3,500',
  },
  {
    id: 2,
    name: 'Modern Dining Table',
    category: 'Dining',
    image: '/images/interior_design_showcase_bcb31a16.png',
    price: '$2,200',
  },
  {
    id: 3,
    name: 'Premium Armchair',
    category: 'Seating',
    image: '/images/furniture_details_close_eef9ac45.png',
    price: '$1,800',
  },
  {
    id: 4,
    name: 'Designer Bed Frame',
    category: 'Bedroom',
    image: '/images/hero_furniture_showcase_eaa79e5a.png',
    price: '$4,200',
  },
  {
    id: 5,
    name: 'Elegant Coffee Table',
    category: 'Living Room',
    image: '/images/showroom_ambiance_ea0897f1.png',
    price: '$1,200',
  },
];

export default function ProductCarousel3D() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const getPosition = (index: number) => {
    const diff = index - activeIndex;
    if (diff < 0) return diff + products.length;
    return diff;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
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
            className="text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            3D Product Showcase
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto" />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative h-96 flex items-center justify-center">
          {/* Products */}
          {products.map((product, index) => {
            const position = getPosition(index);
            const isActive = position === 0;
            const isLeft = position === products.length - 1;
            const isRight = position === 1;

            let xPos = 0;
            let scale = 0.6;
            let opacity = 0;
            let zIndex = 0;

            if (isActive) {
              xPos = 0;
              scale = 1;
              opacity = 1;
              zIndex = 10;
            } else if (isLeft) {
              xPos = -400;
              scale = 0.7;
              opacity = 0.5;
              zIndex = 5;
            } else if (isRight) {
              xPos = 400;
              scale = 0.7;
              opacity = 0.5;
              zIndex = 5;
            } else {
              opacity = 0;
              zIndex = 0;
            }

            return (
              <motion.div
                key={product.id}
                className="absolute"
                animate={{
                  x: xPos,
                  scale,
                  opacity,
                  zIndex,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <motion.div
                  whileHover={{ scale: isActive ? 1.05 : 1 }}
                  className="bg-white rounded-lg shadow-2xl overflow-hidden w-72 cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-yellow-600 text-sm font-semibold mb-2">
                      {product.category}
                    </p>
                    <h3
                      className="text-2xl font-bold text-gray-800 mb-3"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-yellow-600">
                        {product.price}
                      </span>
                      <motion.button
                        className="px-4 py-2 bg-yellow-600 text-white rounded-sm hover:bg-yellow-700"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          <motion.button
            onClick={handlePrev}
            className="p-4 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <CaretLeft size={24} weight="fill" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="p-4 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <CaretRight size={24} weight="fill" />
          </motion.button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {products.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? 'bg-yellow-600 w-8' : 'bg-gray-300 w-2'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
