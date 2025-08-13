"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Image, Edit3, Smartphone, Share2, Video, Star, Printer, ArrowRight } from "react-feather";
import serviceList from "@/data/services";

export default function ServicesShowcase() {
  const [hoveredService, setHoveredService] = useState(null);

  const serviceIcons = {
    Branding: Image,
    Copywriting: Edit3,
    "Digital Marketing": Smartphone,
    "Social Media": Share2,
    Production: Video,
    Logo: Star,
    Print: Printer,
  };

  const serviceUrls = {
    Branding: "/work/branding",
    Copywriting: "/work/copywriting",
    "Digital Marketing": "/work/digital-marketing",
    "Social Media": "/work/social-media",
    Production: "/work/production",
    Logo: "/work/logo",
    Print: "/work/print",
  };

  return (
    <section className='py-24 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-cyan-100/20 relative overflow-hidden'>
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
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <h2 className='text-5xl md:text-6xl lg:text-7xl font-oswald font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-cyan-600 to-cyan-700 mb-8'>What We Do</h2>
          <p className='text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto font-poppins'>From concept to execution, we deliver comprehensive creative solutions that drive results</p>
        </motion.div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {serviceList.map((service, index) => {
            const IconComponent = serviceIcons[service];
            const serviceUrl = serviceUrls[service];

            return (
              <Link
                key={service}
                href={serviceUrl}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredService(service)}
                  onHoverEnd={() => setHoveredService(null)}
                  className='group relative block'
                >
                  <div className='relative'>
                    <div className='absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-md backdrop-blur-sm group-hover:blur-lg transition-all duration-300' />
                    <motion.div
                      className='relative bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-sm group-hover:shadow-md transition-all duration-300 cursor-pointer h-full'
                      whileHover={{
                        y: -4,
                        scale: 1.01,
                      }}
                    >
                      {/* Service Icon */}
                      <motion.div
                        className='relative mb-6'
                        whileHover={{ scale: 1.05, rotate: 2 }}
                      >
                        <div className='absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-cyan-600/10 rounded-xl blur-md' />
                        <div className='relative bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl p-4 w-16 h-16 flex items-center justify-center'>
                          <IconComponent
                            size={32}
                            className='text-white'
                          />
                        </div>
                      </motion.div>

                      {/* Service Name */}
                      <h3 className='text-2xl font-bold text-slate-800 mb-4 group-hover:text-cyan-600 transition-colors duration-300'>{service}</h3>

                      {/* Service Description */}
                      <p className='text-slate-700 leading-relaxed mb-6'>{getServiceDescription(service)}</p>

                      {/* Arrow Icon */}
                      <motion.div
                        className='flex items-center text-cyan-600 font-semibold group-hover:text-cyan-700 transition-colors duration-300'
                        initial={false}
                        animate={{ x: hoveredService === service ? 3 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className='mr-2'>Learn More</span>
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
              </Link>
            );
          })}
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
              <p className='text-lg text-slate-700 mb-6 font-medium'>Ready to bring your vision to life?</p>
              <Link href='/contact-us'>
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className='relative group'
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300' />
                  <div className='relative bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300'>Let&apos;s Talk</div>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function getServiceDescription(service) {
  const descriptions = {
    Branding: "Creative visual solutions that capture attention and communicate your brand's essence with stunning design.",
    Copywriting: "Compelling copy that tells your story and drives action with strategic, persuasive messaging.",
    "Digital Marketing": "Data-driven digital strategies that reach your audience where they are and deliver measurable results.",
    "Social Media": "Engaging social content that builds community, amplifies your message, and creates meaningful connections.",
    Production: "High-quality production services that bring your creative vision to life with professional excellence.",
    Logo: "Distinctive brand identities that make lasting impressions and build recognition across all platforms.",
    Print: "Professional print materials that reinforce your brand message across all touchpoints with premium quality.",
  };

  return descriptions[service] || "Professional creative services tailored to your needs and designed for success.";
}
