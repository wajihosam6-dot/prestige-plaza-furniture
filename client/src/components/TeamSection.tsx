import { motion } from 'motion/react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Ahmed Al-Mansouri',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 20+ years in luxury furniture industry.',
  },
  {
    id: 2,
    name: 'Layla Al-Rashidi',
    role: 'Design Director',
    bio: 'Award-winning designer specializing in contemporary luxury.',
  },
  {
    id: 3,
    name: 'Khalid Al-Balushi',
    role: 'Operations Manager',
    bio: 'Expert in supply chain and customer satisfaction.',
  },
  {
    id: 4,
    name: 'Fatima Al-Zahra',
    role: 'Customer Relations',
    bio: 'Dedicated to ensuring exceptional customer experience.',
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
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
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto" />
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(217, 119, 6, 0.15)',
              }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all border-t-4 border-yellow-600"
            >
              {/* Avatar */}
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold"
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                }}
                transition={{ duration: 0.6 }}
              >
                {member.name.charAt(0)}
              </motion.div>

              {/* Name */}
              <h3
                className="text-2xl font-bold text-neutral-800 mb-2 text-center"
                style={{ fontFamily: 'Playfair Display' }}
              >
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-yellow-600 font-semibold text-center mb-4">{member.role}</p>

              {/* Bio */}
              <p className="text-neutral-600 text-center text-sm leading-relaxed">{member.bio}</p>

              {/* Social Links */}
              <motion.div
                className="flex justify-center gap-4 mt-6 pt-6 border-t border-neutral-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="text-neutral-400 hover:text-yellow-600 transition-colors"
                    whileHover={{ scale: 1.2 }}
                  >
                    {social.charAt(0)}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
