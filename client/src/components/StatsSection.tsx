import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Stat {
  id: number;
  value: number;
  label: string;
  suffix: string;
}

const stats: Stat[] = [
  { id: 1, value: 500, label: 'Happy Clients', suffix: '+' },
  { id: 2, value: 1000, label: 'Furniture Pieces', suffix: '+' },
  { id: 3, value: 15, label: 'Years Experience', suffix: '+' },
  { id: 4, value: 98, label: 'Customer Satisfaction', suffix: '%' },
];

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Number Container */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="mb-4"
              >
                <div className="text-6xl font-bold text-amber-600 mb-2">
                  <AnimatedCounter value={stat.value} />
                  <span>{stat.suffix}</span>
                </div>
              </motion.div>

              {/* Label */}
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: 'Playfair Display' }}
              >
                {stat.label}
              </h3>

              {/* Decorative Line */}
              <motion.div
                className="w-12 h-1 bg-gradient-to-r from-amber-600 to-transparent mx-auto mt-4"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
