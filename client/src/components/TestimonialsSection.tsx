import { motion } from 'motion/react';
import { Star } from '@phosphor-icons/react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ahmed Al-Mansouri',
    role: 'Home Owner',
    content: 'The quality of furniture from Prestige Plaza is exceptional. Every piece is a masterpiece that transforms my living space.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Fatima Al-Rashidi',
    role: 'Interior Designer',
    content: 'Working with Prestige Plaza has been a game-changer. Their collection offers unmatched elegance and craftsmanship.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mohammed Al-Balushi',
    role: 'Business Owner',
    content: 'Outstanding service and premium quality. Prestige Plaza is my go-to for luxury furniture solutions.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl" />
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
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: '0 30px 60px rgba(217, 119, 6, 0.2)',
              }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-yellow-600/20 backdrop-blur-sm cursor-pointer"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star size={20} weight="fill" className="text-yellow-600" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-6 text-lg leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-yellow-600/20 pt-4">
                <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                <p className="text-yellow-600 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
