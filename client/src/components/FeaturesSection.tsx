import { motion } from 'motion/react';
import { Sparkle, Leaf, Shield, Truck } from '@phosphor-icons/react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: <Sparkle size={32} className="md:!w-12 md:!h-12" weight="fill" />,
    title: 'Premium Quality',
    description: 'Handpicked furniture crafted with the finest materials and attention to detail.',
  },
  {
    id: 2,
    icon: <Leaf size={32} className="md:!w-12 md:!h-12" weight="fill" />,
    title: 'Sustainable',
    description: 'Eco-friendly materials and sustainable manufacturing practices.',
  },
  {
    id: 3,
    icon: <Shield size={32} className="md:!w-12 md:!h-12" weight="fill" />,
    title: 'Warranty',
    description: 'Comprehensive warranty and after-sales support for peace of mind.',
  },
  {
    id: 4,
    icon: <Truck size={32} className="md:!w-12 md:!h-12" weight="fill" />,
    title: 'Fast Delivery',
    description: 'Quick and reliable delivery to your doorstep with professional handling.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
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
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                boxShadow: '0 20px 40px rgba(217, 119, 6, 0.15)',
              }}
              className="text-center p-6 md:p-8 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Icon Container */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full mb-6 text-white"
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                }}
                transition={{ duration: 0.6 }}
              >
                {feature.icon}
              </motion.div>

              {/* Title */}
              <h3
                className="text-2xl font-bold text-neutral-800 mb-3"
                style={{ fontFamily: 'Playfair Display' }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
