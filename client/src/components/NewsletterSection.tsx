import { motion } from 'motion/react';
import { useState } from 'react';
import { PaperPlaneTilt } from '@phosphor-icons/react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Header */}
          <h2
            className="text-5xl font-bold text-neutral-800 mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Stay Updated
          </h2>
          <p className="text-neutral-600 text-lg mb-8">
            Subscribe to our newsletter to get the latest updates on new collections, exclusive offers, and design inspiration.
          </p>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 bg-white border-2 border-neutral-300 rounded-sm focus:border-yellow-600 focus:outline-none transition-all text-neutral-800 placeholder-neutral-400"
                whileFocus={{
                  borderColor: '#ca8a04',
                  boxShadow: '0 0 0 3px rgba(217, 119, 6, 0.1)',
                }}
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-yellow-600 text-white font-semibold rounded-sm hover:bg-yellow-700 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PaperPlaneTilt size={20} weight="fill" />
                Subscribe
              </motion.button>
            </div>

            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-4 bg-green-100 border border-green-400 rounded-sm text-green-800 font-semibold"
              >
                Thank you for subscribing! Check your email for confirmation.
              </motion.div>
            )}
          </motion.form>

          {/* Privacy Note */}
          <motion.p
            className="text-neutral-500 text-sm mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            We respect your privacy. Unsubscribe at any time.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
