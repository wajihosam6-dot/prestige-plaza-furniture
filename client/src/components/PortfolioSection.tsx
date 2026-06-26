import { motion, useScroll, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

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

function Card({ item, index, isActive, onInView }: { item: Portfolio; index: number; isActive: boolean; onInView: (i: number) => void }) {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { amount: 0.4 });

  useEffect(() => {
    if (inView && window.innerWidth < 1024) onInView(index);
  }, [inView, index, onInView]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
      animate={{
        opacity: isActive ? 1 : 0.25,
        scale: isActive ? 1 : 0.92,
        filter: isActive ? 'blur(0px)' : 'blur(4px)',
      }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="group relative overflow-hidden rounded-lg h-48 md:h-64 cursor-pointer"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
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
      <motion.div
        className="absolute inset-0 border-2 border-yellow-600 rounded-lg opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function PortfolioSection() {
  const containerRef = useRef(null);
  const [mobileFocus, setMobileFocus] = useState(0);
  const [desktopFocus, setDesktopFocus] = useState(0);
  const scrollRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      scrollRef.current = latest;
      let phase = 0;
      if (latest < 0.22) phase = 0;
      else if (latest < 0.5) phase = 1;
      else phase = 2;
      setDesktopFocus(phase);
    });
  }, [scrollYProgress]);

  const isActive = (index: number) => {
    if (window.innerWidth >= 1024) {
      if (desktopFocus === 0) return index < 2;
      if (desktopFocus === 1) return index >= 2 && index < 4;
      return index >= 4;
    }
    return mobileFocus === index;
  };

  return (
    <section ref={containerRef} className="py-20 bg-white relative overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <Card
              key={item.id}
              item={item}
              index={index}
              isActive={isActive(index)}
              onInView={setMobileFocus}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
