import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import { Play, Pause, SpeakerHigh, SpeakerSimpleSlash, Maximize } from '@phosphor-icons/react';

interface VideoItem {
  id: number;
  src: string;
  title: string;
  subtitle: string;
}

const videos: VideoItem[] = [
  {
    id: 1,
    src: '/IMG_9403.webm',
    title: 'Craftsmanship',
    subtitle: 'The art of fine furniture making',
  },
  {
    id: 2,
    src: '/IMG_9404.webm',
    title: 'Showroom Experience',
    subtitle: 'Step into luxury living',
  },
  {
    id: 3,
    src: '/IMG_9406.webm',
    title: 'Interior Inspiration',
    subtitle: 'Designing your perfect space',
  },
];

function VideoCard({ video, isLarge = false }: { video: VideoItem; isLarge?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`relative group cursor-pointer overflow-hidden rounded-xl ${
        isLarge ? 'h-[500px] md:h-[600px]' : 'h-[300px] md:h-[350px]'
      }`}
      onClick={togglePlay}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={video.src}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Play Button Overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: isPlaying ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-20 h-20 bg-yellow-600/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: isPlaying
              ? '0 0 0 0 rgba(202, 138, 4, 0)'
              : '0 0 0 20px rgba(202, 138, 4, 0.2)',
          }}
          transition={{ duration: 1, repeat: isPlaying ? 0 : Infinity }}
        >
          <Play size={32} weight="fill" className="text-white ml-1" />
        </motion.div>
      </motion.div>

      {/* Controls Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <div className="mb-4">
          <h3
            className={`font-bold text-white mb-1 ${isLarge ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}
            style={{ fontFamily: 'Playfair Display' }}
          >
            {video.title}
          </h3>
          <p className={`text-gray-300 ${isLarge ? 'text-lg' : 'text-sm'}`}>{video.subtitle}</p>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center gap-3">
          <motion.button
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
          >
            {isPlaying ? <Pause size={18} weight="fill" /> : <Play size={18} weight="fill" className="ml-0.5" />}
          </motion.button>

          <motion.button
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
            }}
          >
            {isMuted ? <SpeakerSimpleSlash size={18} weight="fill" /> : <SpeakerHigh size={18} weight="fill" />}
          </motion.button>

          <motion.button
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              handleFullscreen();
            }}
          >
            <Maximize size={18} weight="fill" />
          </motion.button>
        </div>
      </motion.div>

      {/* Gold Border Glow */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-600/50 rounded-xl transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
}

export default function VideoShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
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
          <motion.span
            className="inline-block text-yellow-600 text-sm font-semibold tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience Our World
          </motion.span>
          <h2
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Discover the Art of Living
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Take a journey through our showroom and witness the craftsmanship, elegance, and attention to detail that defines Prestige Plaza.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured Large Video */}
          <div className="lg:row-span-2">
            <VideoCard video={videos[0]} isLarge={true} />
          </div>

          {/* Two Smaller Videos */}
          <VideoCard video={videos[1]} />
          <VideoCard video={videos[2]} />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-4 bg-yellow-600 text-white font-semibold rounded-sm hover:bg-yellow-700 transition-all inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play size={20} weight="fill" />
            Visit Our Showroom
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
