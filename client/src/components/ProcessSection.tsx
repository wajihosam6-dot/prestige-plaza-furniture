import { motion } from 'motion/react';
import { Eye, Pencil, Truck, CheckCircle } from '@phosphor-icons/react';

interface Step {
  id: number;
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    number: '01',
    icon: <Eye size={40} weight="fill" />,
    title: 'Explore',
    description: 'Browse our extensive collection of premium furniture and find pieces that match your style.',
  },
  {
    id: 2,
    number: '02',
    icon: <Pencil size={40} weight="fill" />,
    title: 'Customize',
    description: 'Personalize your selections with colors, materials, and dimensions to fit your space perfectly.',
  },
  {
    id: 3,
    number: '03',
    icon: <Truck size={40} weight="fill" />,
    title: 'Deliver',
    description: 'We handle professional delivery and installation with care and precision.',
  },
  {
    id: 4,
    number: '04',
    icon: <CheckCircle size={40} weight="fill" />,
    title: 'Enjoy',
    description: 'Relax and enjoy your beautifully furnished space with our lifetime support.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-amber-600 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
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
            Our Process
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto" />
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <motion.div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number Background */}
                <motion.div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: '0 20px 40px rgba(217, 119, 6, 0.15)',
                  }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all pt-16 text-center border-t-4 border-amber-600"
                >
                  {/* Icon */}
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4 text-amber-600"
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold text-gray-800 mb-3"
                    style={{ fontFamily: 'Playfair Display' }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
