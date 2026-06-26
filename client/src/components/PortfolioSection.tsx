import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useRef, useState } from 'react';

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
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [desktopFocus, setDesktopFocus] = useState(0);
  const [mobileActive, setMobileActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;
    const phase = Math.min(4, Math.floor(latest * 5));
    setDesktopFocus(phase);
  });

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', () => {
    if (typeof window === 'undefined' || window.innerWidth >= 1024) return;
    const center = window.innerHeight / 2;
    let closestIdx = 0;
    let minDist = Infinity;
    cardRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < minDist) {
        minDist = dist;
        closestIdx = i;
      }
    });
    setMobileActive(closestIdx);
  });

  const isActive = (index: number) => {
    const desktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
    return desktop ? desktopFocus === index : mobileActive === index;
  };

  return (
    <section ref={sectionRef} className="relative bg-white min-h-screen lg:min-h-[500vh]">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 py-20 lg:py-0 lg:sticky lg:top-0 lg:h-screen lg:flex lg:items-center lg:overflow-hidden">
        <div className="container mx-auto px-4 w-full">
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
              <motion.div
                key={item.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="group relative overflow-hidden rounded-lg h-48 md:h-64 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-6">
                  <h3
                    className="text-lg md:text-xl font-bold text-white mb-2"
                    style={{ fontFamily: 'Playfair Display' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-yellow-600 text-xs md:text-sm font-semibold">{item.category}</p>
                </div>
                <div className="absolute inset-0 border-2 border-yellow-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
