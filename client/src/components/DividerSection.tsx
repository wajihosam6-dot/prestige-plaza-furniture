import { motion } from 'motion/react';

export default function DividerSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-800 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-4">
          {/* Left Line */}
          <motion.div
            className="flex-1 h-1 bg-gradient-to-r from-transparent to-yellow-600"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* Center Decoration */}
          <motion.div
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-3 h-3 bg-yellow-600 rounded-full" />
            <div className="w-2 h-2 bg-yellow-600 rounded-full opacity-60" />
            <div className="w-3 h-3 bg-yellow-600 rounded-full" />
          </motion.div>

          {/* Right Line */}
          <motion.div
            className="flex-1 h-1 bg-gradient-to-l from-transparent to-yellow-600"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
}
