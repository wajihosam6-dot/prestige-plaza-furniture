import { motion } from 'motion/react';
import { useState } from 'react';
import { ShoppingCart, Heart } from '@phosphor-icons/react';

interface FlipProduct {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
  specs: string[];
}

const flipProducts: FlipProduct[] = [
  {
    id: 1,
    image: '/images/sofa_collection_hero_92dbb842.png',
    title: 'Luxury Sofa',
    price: '$3,499',
    description: 'Premium velvet sofa with hand-stitched details',
    specs: ['Dimensions: 240x100cm', 'Weight: 150kg', 'Color: Charcoal'],
  },
  {
    id: 2,
    image: '/images/interior_design_showcase_bcb31a16.png',
    title: 'Dining Table',
    price: '$2,299',
    description: 'Marble top dining table for 8 people',
    specs: ['Dimensions: 200x100cm', 'Material: Marble', 'Seats: 8'],
  },
  {
    id: 3,
    image: '/images/furniture_details_close_eef9ac45.png',
    title: 'Armchair',
    price: '$1,299',
    description: 'Italian leather armchair with swivel base',
    specs: ['Material: Leather', 'Base: Swivel', 'Color: Cognac'],
  },
  {
    id: 4,
    image: '/images/hero_furniture_showcase_eaa79e5a.png',
    title: 'Bed Frame',
    price: '$3,999',
    description: 'Solid oak bed frame with storage',
    specs: ['Size: King', 'Material: Oak', 'Storage: Yes'],
  },
];

export default function FlipCardProducts() {
  const [flipped, setFlipped] = useState<number[]>([]);

  const toggleFlip = (id: number) => {
    setFlipped((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600 rounded-full blur-3xl"
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
            Flip & Discover
          </h2>
          <p className="text-gray-600 text-lg">Click on any card to flip and see details</p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4" />
        </motion.div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {flipProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-80 cursor-pointer perspective"
              onClick={() => toggleFlip(product.id)}
            >
              <motion.div
                className="relative w-full h-full"
                animate={{
                  rotateY: flipped.includes(product.id) ? 180 : 0,
                }}
                transition={{ duration: 0.6 }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Front Side */}
                <motion.div
                  className="absolute w-full h-full bg-white rounded-lg shadow-lg overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      {product.title}
                    </h3>
                    <p className="text-amber-600 text-2xl font-bold">{product.price}</p>
                  </div>
                </motion.div>

                {/* Back Side */}
                <motion.div
                  className="absolute w-full h-full bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg shadow-lg p-6 flex flex-col justify-between text-white"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div>
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      {product.title}
                    </h3>
                    <p className="text-sm mb-4">{product.description}</p>
                    <div className="space-y-2">
                      {product.specs.map((spec, i) => (
                        <p key={i} className="text-xs opacity-90">
                          • {spec}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-white/20">
                    <motion.button
                      className="flex-1 px-3 py-2 bg-white text-amber-600 rounded-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ShoppingCart size={16} weight="fill" />
                      Add
                    </motion.button>
                    <motion.button
                      className="p-2 bg-white/20 text-white rounded-sm hover:bg-white/30 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Heart size={18} weight="fill" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
