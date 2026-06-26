import { motion } from 'motion/react';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-neutral-800 to-neutral-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2
            className="text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Ready to Transform Your Space?
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Visit our showroom or contact us today to explore our exclusive furniture collections and find the perfect pieces for your home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-yellow-600 text-white font-semibold rounded-sm hover:bg-yellow-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Showroom
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-yellow-600 text-yellow-600 font-semibold rounded-sm hover:bg-yellow-600 hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
          </div>

          {/* Contact Info */}
          <motion.div
            className="mt-12 pt-8 border-t border-neutral-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-neutral-400 mb-4">Or reach us directly:</p>
            <a
              href="tel:+96877257779"
              className="text-yellow-600 text-2xl font-bold hover:text-yellow-500 transition-colors"
            >
              +968 7725 7779
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
