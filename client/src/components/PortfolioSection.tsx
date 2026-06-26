import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface Portfolio {
  id: number;
  image: string;
  title: string;
  category: string;
}

const portfolioItems: Portfolio[] = [
  {
    id: 1,
    image: '/images/hero_furniture_showcase_eaa79e5a.png',
    title: 'Modern Living Room',
    category: 'Residential',
  },
  {
    id: 2,
    image: '/images/sofa_collection_hero_92dbb842.png',
    title: 'Luxury Seating',
    category: 'Collections',
  },
  {
    id: 3,
    image: '/images/interior_design_showcase_bcb31a16.png',
    title: 'Complete Interior',
    category: 'Design',
  },
  {
    id: 4,
    image: '/images/furniture_details_close_eef9ac45.png',
    title: 'Premium Details',
    category: 'Craftsmanship',
  },
  {
    id: 5,
    image: '/images/showroom_ambiance_ea0897f1.png',
    title: 'Showroom Display',
    category: 'Exhibition',
  },
];

export default function PortfolioSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={containerRef} className="py-20 bg-white relative overflow-hidden">
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
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-3xl md:text-5xl font-bold text-neutral-800 mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto" />
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg h-48 md:h-64 cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-6"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3
                  className="text-lg md:text-xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  {item.title}
                </h3>
                <p className="text-yellow-600 text-xs md:text-sm font-semibold">{item.category}</p>
              </motion.div>

              {/* Border Animation */}
              <motion.div
                className="absolute inset-0 border-2 border-yellow-600 rounded-lg opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
