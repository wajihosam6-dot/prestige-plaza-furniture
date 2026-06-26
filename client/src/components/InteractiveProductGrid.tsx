import { motion } from 'motion/react';
import { useState } from 'react';
import { Heart, ShoppingCart } from '@phosphor-icons/react';

interface GridProduct {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
  category: string;
}

const gridProducts: GridProduct[] = [
  {
    id: 1,
    name: 'Velvet Sofa',
    image: '/images/sofa_collection_hero_92dbb842.png',
    price: '$2,999',
    rating: 5,
    category: 'Sofas',
  },
  {
    id: 2,
    name: 'Marble Table',
    image: '/images/interior_design_showcase_bcb31a16.png',
    price: '$1,599',
    rating: 5,
    category: 'Tables',
  },
  {
    id: 3,
    name: 'Leather Chair',
    image: '/images/furniture_details_close_eef9ac45.png',
    price: '$899',
    rating: 4,
    category: 'Chairs',
  },
  {
    id: 4,
    name: 'Designer Bed',
    image: '/images/hero_furniture_showcase_eaa79e5a.png',
    price: '$3,499',
    rating: 5,
    category: 'Beds',
  },
  {
    id: 5,
    name: 'Glass Cabinet',
    image: '/images/showroom_ambiance_ea0897f1.png',
    price: '$1,299',
    rating: 4,
    category: 'Storage',
  },
  {
    id: 6,
    name: 'Ottoman Bench',
    image: '/images/sofa_collection_hero_92dbb842.png',
    price: '$599',
    rating: 5,
    category: 'Seating',
  },
];

export default function InteractiveProductGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [likedIds, setLikedIds] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-3xl md:text-5xl font-bold text-neutral-800 mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Featured Products
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto" />
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{
                  y: -10,
                  boxShadow: '0 30px 60px rgba(217, 119, 6, 0.2)',
                }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-neutral-200">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredId === product.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-between p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex justify-between items-start">
                      <motion.span
                        className="px-3 py-1 bg-yellow-600 text-white text-sm font-semibold rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: hoveredId === product.id ? 1 : 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {product.category}
                      </motion.span>
                      <motion.button
                        onClick={() => toggleLike(product.id)}
                        className={`p-2 rounded-full transition-all ${
                          likedIds.includes(product.id)
                            ? 'bg-red-500 text-white'
                            : 'bg-white/30 text-white hover:bg-white/50'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart
                          size={20}
                          weight={likedIds.includes(product.id) ? 'fill' : 'regular'}
                        />
                      </motion.button>
                    </div>

                    <motion.button
                      className="w-full px-4 py-2 bg-yellow-600 text-white font-semibold rounded-sm hover:bg-yellow-700 flex items-center justify-center gap-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{
                        y: hoveredId === product.id ? 0 : 20,
                        opacity: hoveredId === product.id ? 1 : 0,
                      }}
                      transition={{ delay: 0.15 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ShoppingCart size={18} weight="fill" />
                      Add to Cart
                    </motion.button>
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="p-4 md:p-6">
                  <h3
                    className="text-xl font-bold text-neutral-800 mb-2"
                    style={{ fontFamily: 'Playfair Display' }}
                  >
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(product.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-yellow-600 text-lg"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>

                  {/* Price */}
                  <motion.div
                    className="text-2xl font-bold text-yellow-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {product.price}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
