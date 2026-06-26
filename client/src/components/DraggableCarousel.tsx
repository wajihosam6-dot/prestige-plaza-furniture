import { motion } from 'motion/react';
import { useRef, useState } from 'react';

interface CarouselProduct {
  id: number;
  title: string;
  image: string;
  description: string;
}

const products: CarouselProduct[] = [
  {
    id: 1,
    title: 'Sofas',
    image: '/images/sofa_collection_hero_92dbb842.png',
    description: 'Premium velvet and leather sofas',
  },
  {
    id: 2,
    title: 'Interior Design',
    image: '/images/interior_design_showcase_bcb31a16.png',
    description: 'Complete interior solutions',
  },
  {
    id: 3,
    title: 'Details',
    image: '/images/furniture_details_close_eef9ac45.png',
    description: 'Luxury accent pieces',
  },
  {
    id: 4,
    title: 'Bedroom Collection',
    image: '/images/hero_furniture_showcase_eaa79e5a.png',
    description: 'Elegant bedroom furniture',
  },
  {
    id: 5,
    title: 'Living Room',
    image: '/images/showroom_ambiance_ea0897f1.png',
    description: 'Complete living room sets',
  },
  {
    id: 6,
    title: 'Dining Sets',
    image: '/images/sofa_collection_hero_92dbb842.png',
    description: 'Sophisticated dining furniture',
  },
];

export default function DraggableCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStart;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    
    // Snap to nearest item
    const itemWidth = 320 + 32; // card width + gap
    const snappedOffset = Math.round(dragOffset / itemWidth) * itemWidth;
    setDragOffset(snappedOffset);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - dragStart;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const itemWidth = 320 + 32;
    const snappedOffset = Math.round(dragOffset / itemWidth) * itemWidth;
    setDragOffset(snappedOffset);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"
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
          className="text-center mb-16"
        >
          <h2
            className="text-5xl font-bold text-neutral-800 mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Featured Collections
          </h2>
          <p className="text-neutral-600 text-lg">Drag to explore our premium collections</p>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mt-4" />
        </motion.div>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex gap-8"
            animate={{ x: dragOffset }}
            transition={
              isDragging
                ? { duration: 0 }
                : { type: 'spring', stiffness: 300, damping: 30 }
            }
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 group"
                draggable={false}
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden h-full hover:shadow-2xl transition-all"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-neutral-200">
                    <motion.img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: isDragging ? 1 : 1,
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      draggable={false}
                    />

                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.button
                        className="w-full px-4 py-2 bg-yellow-600 text-white font-semibold rounded-sm hover:bg-yellow-700 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Explore
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      className="text-2xl font-bold text-neutral-800 mb-2"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      {product.title}
                    </h3>
                    <p className="text-neutral-600 text-sm">{product.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="text-center mt-12 text-neutral-500"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-sm font-medium">← Drag to scroll →</p>
        </motion.div>
      </div>
    </section>
  );
}
