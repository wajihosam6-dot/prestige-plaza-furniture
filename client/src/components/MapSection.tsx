import { motion } from 'motion/react';
import { MapPin, Phone, Clock, EnvelopeOpen } from '@phosphor-icons/react';

export default function MapSection() {

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'HCC5+MR9, Bawshar St, Muscat, Oman',
      color: 'text-yellow-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+968 7725 7779',
      color: 'text-yellow-600',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: '9:00 AM - 9:00 PM (Daily)',
      color: 'text-yellow-600',
    },
    {
      icon: EnvelopeOpen,
      title: 'Email',
      content: 'info@prestigeplaza.om',
      color: 'text-yellow-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
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
          className="text-center mb-16"
        >
          <h2
            className="text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Visit Our Showroom
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Experience our luxury furniture collection in person
          </p>
          <div className="w-24 h-1 bg-yellow-600 mx-auto" />
        </motion.div>

        {/* Map and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.123456!2d58.4099259!3d23.571356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM0JzE2LjkiTiA1OMKwMjQnNDMuMSJF!5e0!3m2!1sen!2som!4v1"
              width="100%"
              height="100%"
              className="w-full h-96 lg:h-[500px] rounded-lg shadow-2xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Prestige Plaza Location"
            />
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`${info.color} flex-shrink-0 mt-1`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Icon size={28} weight="fill" />
                    </motion.div>
                    <div>
                      <h3
                        className="text-lg font-bold text-gray-800 mb-1"
                        style={{ fontFamily: 'Playfair Display' }}
                      >
                        {info.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA Button */}
            <motion.a
              href="https://maps.app.goo.gl/Prjgb5z2F24gLqck7"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white font-semibold rounded-lg text-center hover:shadow-lg transition-all mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Get Directions
            </motion.a>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4
                className="text-2xl font-bold mb-2 text-yellow-600"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Expert Staff
              </h4>
              <p className="text-gray-300">
                Our experienced team is ready to help you find the perfect furniture for your space.
              </p>
            </div>
            <div className="text-center">
              <h4
                className="text-2xl font-bold mb-2 text-yellow-600"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Free Consultation
              </h4>
              <p className="text-gray-300">
                Get personalized design advice and interior styling recommendations.
              </p>
            </div>
            <div className="text-center">
              <h4
                className="text-2xl font-bold mb-2 text-yellow-600"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Delivery Service
              </h4>
              <p className="text-gray-300">
                Fast and reliable delivery to your home with professional installation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
