import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/hero_furniture_showcase_eaa79e5a.png',
    title: 'Luxury Showcase',
    description: 'Premium furniture collection',
  },
  {
    id: 2,
    src: '/images/sofa_collection_hero_92dbb842.png',
    title: 'Sofa Collection',
    description: 'Elegant and comfortable seating',
  },
  {
    id: 3,
    src: '/images/interior_design_showcase_bcb31a16.png',
    title: 'Interior Design',
    description: 'Complete room solutions',
  },
  {
    id: 4,
    src: '/images/furniture_details_close_eef9ac45.png',
    title: 'Fine Details',
    description: 'Craftsmanship and quality',
  },
  {
    id: 5,
    src: '/images/showroom_ambiance_ea0897f1.png',
    title: 'Showroom Ambiance',
    description: 'Experience luxury in person',
  },
];

export default function GallerySection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-neutral-800" style={{ fontFamily: 'Playfair Display' }}>
            Gallery
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={index % 2 === 0 ? { y } : { y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg h-80 mb-4 shadow-lg">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display' }}>
                    {image.title}
                  </h3>
                  <p className="text-neutral-200 text-sm">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
