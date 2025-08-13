"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Star, Zap, Target } from "react-feather";
import Image from "next/image";

export default function WorkShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Dummy work data - replace with real data later
  const workItems = [
    {
      id: 1,
      title: "Brand Transformation",
      category: "Branding",
      description: "Complete brand overhaul for a leading tech company",
      image: "/assets/dummy1.jpg",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      id: 2,
      title: "Digital Campaign",
      category: "Digital Marketing",
      description: "Multi-platform digital marketing campaign",
      image: "/assets/dummy1.jpg",
      color: "from-cyan-600 to-cyan-700",
    },
    {
      id: 3,
      title: "Social Media Strategy",
      category: "Social Media",
      description: "Comprehensive social media presence development",
      image: "/assets/dummy1.jpg",
      color: "from-cyan-700 to-cyan-800",
    },
    {
      id: 4,
      title: "Print Campaign",
      category: "Print",
      description: "High-impact print advertising campaign",
      image: "/assets/dummy1.jpg",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      id: 5,
      title: "Logo Design",
      category: "Logo",
      description: "Distinctive logo design for startup",
      image: "/assets/dummy1.jpg",
      color: "from-cyan-600 to-cyan-700",
    },
    {
      id: 6,
      title: "Video Production",
      category: "Production",
      description: "Professional video content creation",
      image: "/assets/dummy1.jpg",
      color: "from-cyan-700 to-cyan-800",
    },
  ];

  return (
    <section
      ref={containerRef}
      className='py-24 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-cyan-100/20 relative overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <motion.div
          className='absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-cyan-600/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ y }}
        />
      </div>

      <div
        className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
        style={{ opacity }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <h2 className='text-5xl md:text-6xl lg:text-7xl font-oswald font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-cyan-600 to-cyan-700 mb-8'>Our Work</h2>
          <p className='text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto font-poppins'>Scroll to explore our creative portfolio and see how we bring ideas to life</p>
        </motion.div>

        {/* Fancy Carousel */}
        <div className='relative'>
          {/* Cards Container */}
          <div className='flex flex-col gap-8'>
            {workItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-12`}
              >
                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className='relative group flex-1'
                >
                  <div className='relative'>
                    <div className='absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-md backdrop-blur-sm group-hover:blur-lg transition-all duration-300' />
                    <motion.div
                      className='relative bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-sm group-hover:shadow-md transition-all duration-300 overflow-hidden'
                      whileHover={{ rotateY: 5 }}
                    >
                      {/* Category Badge */}
                      <div className='flex items-center justify-between mb-6'>
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${item.color}`}>{item.category}</span>
                        {/* <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className='relative'
                        >
                          <div className='absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-cyan-600/10 rounded-lg blur-sm' />
                          <div className='relative bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg p-2'>
                            <Star size={20} className='text-white' />
                          </div>
                        </motion.div> */}
                      </div>

                      {/* Content */}
                      <h3 className='text-2xl font-bold text-slate-800 mb-4 group-hover:text-cyan-600 transition-colors duration-300'>{item.title}</h3>
                      <p className='text-slate-700 leading-relaxed mb-6'>{item.description}</p>

                      {/* CTA */}
                      <motion.div
                        className='flex items-center text-cyan-600 font-semibold group-hover:text-cyan-700 transition-colors duration-300'
                        whileHover={{ x: 5 }}
                      >
                        <span className='mr-2'>View Project</span>
                        <ArrowRight
                          size={16}
                          className='group-hover:translate-x-1 transition-transform duration-300'
                        />
                      </motion.div>

                      {/* Hover Effect */}
                      <motion.div
                        className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                        initial={false}
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Image Placeholder */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className='flex-1 relative'
                >
                  <div className='relative'>
                    <div className='absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-cyan-600/10 rounded-2xl blur-lg' />
                    <motion.div
                      className='relative bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 shadow-sm'
                      whileHover={{ scale: 1.02, rotateY: -5 }}
                      style={{ minHeight: "300px" }}
                    >
                      <div className='flex items-center justify-center h-full'>
                        <div className='text-center'>
                          <div className='w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                            <Zap
                              size={32}
                              className='text-white'
                            />
                          </div>
                          <p className='text-cyan-600 font-semibold'>Project Image</p>
                          <p className='text-cyan-500 text-sm'>Coming Soon</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className='text-center mt-16'
          >
            <div className='relative inline-block'>
              <div className='absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-md' />
              <div className='relative bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/30 shadow-sm'>
                <p className='text-slate-700 mb-4 font-medium'>Keep scrolling to see more</p>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className='w-6 h-6 mx-auto'
                >
                  <div className='w-full h-full border-2 border-cyan-600/30 rounded-full flex justify-center'>
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className='w-1 h-2 bg-cyan-600 rounded-full mt-1'
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-center mt-20'
        >
          <div className='relative inline-block'>
            <div className='absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-md' />
            <div className='relative bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/30 shadow-sm'>
              <p className='text-lg text-slate-700 mb-6 font-medium'>Ready to see more of our work?</p>
              <Link href='/work/all'>
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className='relative group'
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300' />
                  <div className='relative bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300'>View Full Portfolio</div>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
