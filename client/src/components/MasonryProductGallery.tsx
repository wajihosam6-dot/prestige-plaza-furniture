import { motion } from 'motion/react';
import { useState } from 'react';
import { Eye, Plus } from '@phosphor-icons/react';

interface MasonryItem {
  id: number;
  image: string;
  title: string;
  size: 'small' | 'medium' | 'large';
  price: string;
}

const masonryItems: MasonryItem[] = [
  {
    id: 1,
    image: '/manus-storage/sofa_collection_hero_92dbb842.png',
    title: 'Premium Sofa Collection',
    size: 'large',
    price: '$2,999',
  },
  {
    id: 2,
    image: '/manus-storage/interior_design_showcase_bcb31a16.png',
    title: 'Modern Dining Set',
    size: 'medium',
    price: '$1,899',
  },
  {
    id: 3,
    image: '/manus-storage/furniture_details_close_eef9ac45.png',
    title: 'Luxury Armchair',
    size: 'small',
    price: '$899',
  },
  {
    id: 4,
    image: '/manus-storage/hero_furniture_showcase_eaa79e5a.png',
    title: 'Designer Bedroom',
    size: 'medium',
    price: '$3,499',
  },
  {
    id: 5,
    image: '/manus-storage/showroom_ambiance_ea0897f1.png',
    title: 'Living Room Showcase',
    size: 'large',
    price: '$4,299',
  },
  {
    id: 6,
    image: '/manus-storage/sofa_collection_hero_92dbb842.png',
    title: 'Accent Pieces',
    size: 'small',
    price: '$599',
  },
];

export default function MasonryProductGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2 h-96 md:h-full';
      case 'medium':
        return 'md:col-span-1 md:row-span-1 h-48 md:h-96';
      case 'small':
        return 'md:col-span-1 md:row-span-1 h-48';
      default:
        return 'h-48';
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
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
            Masonry Gallery
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto" />
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-max">
          {masonryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${getSizeClasses(item.size)} group relative overflow-hidden rounded-lg cursor-pointer`}
              onMouseEnter={() => setSelectedId(item.id)}
              onMouseLeave={() => setSelectedId(null)}
            >
              {/* Image */}
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                animate={{
                  scale: selectedId === item.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-between p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: selectedId === item.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Top Section */}
                <div className="flex justify-between items-start">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: selectedId === item.id ? 1 : 0 }}
                    transition={{ delay: 0.1 }}
                    className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white"
                  >
                    <Plus size={24} weight="bold" />
                  </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: selectedId === item.id ? 0 : 20,
                    opacity: selectedId === item.id ? 1 : 0,
                  }}
                  transition={{ delay: 0.15 }}
                >
                  <h3
                    className="text-white font-bold text-lg mb-2"
                    style={{ fontFamily: 'Playfair Display' }}
                  >
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-600 font-bold text-lg">{item.price}</span>
                    <motion.button
                      className="p-2 bg-white text-amber-600 rounded-full hover:bg-amber-600 hover:text-white transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye size={18} weight="fill" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>

              {/* Border Animation */}
              <motion.div
                className="absolute inset-0 border-2 border-amber-600 rounded-lg opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
