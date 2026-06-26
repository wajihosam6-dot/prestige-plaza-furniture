import { motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

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
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const gap = 32;
    const cardW = window.innerWidth < 768 ? 256 : 320;
    const totalW = products.length * (cardW + gap) - gap;
    const right = 0;
    const left = Math.min(0, containerWidth - totalW);
    setConstraints({ left, right });
  }, []);

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
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-3xl md:text-5xl font-bold text-neutral-800 mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Featured Collections
          </h2>
          <p className="text-neutral-600 text-sm md:text-lg">Swipe or drag to explore our premium collections</p>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mt-4" />
        </motion.div>

        {/* Carousel Container */}
        <div ref={containerRef} className="overflow-hidden">
          <motion.div
            className="flex gap-8 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={constraints}
            dragElastic={0.05}
            dragTransition={{ power: 0.9, timeConstant: 150 }}
            whileTap={{ cursor: 'grabbing' }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-64 md:w-80 group select-none"
                draggable={false}
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden h-full hover:shadow-2xl transition-shadow"
                >
                  {/* Image Container */}
                  <div className="relative h-48 md:h-64 overflow-hidden bg-neutral-200">
                    <motion.img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover pointer-events-none"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      draggable={false}
                    />

                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 md:p-6"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.button
                        className="w-full px-4 py-2 bg-yellow-600 text-white font-semibold rounded-sm hover:bg-yellow-700 transition-all pointer-events-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Explore
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6 pointer-events-none">
                    <h3
                      className="text-xl md:text-2xl font-bold text-neutral-800 mb-2"
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
          <p className="text-sm font-medium">← Swipe to scroll →</p>
        </motion.div>
      </div>
    </section>
  );
}
