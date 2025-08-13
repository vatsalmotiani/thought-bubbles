"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import serviceList from "@/data/services";

export default function ServicesShowcase() {
  const [hoveredService, setHoveredService] = useState(null);

  const serviceIcons = {
    Branding: "🎨",
    Copywriting: "✍️",
    "Digital Marketing": "📱",
    "Social Media": "📢",
    Production: "🎬",
    Logo: "✨",
    Print: "🖨️",
  };

  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-tb-black mb-6'>What We Do</h2>
          <p className='text-xl md:text-2xl text-tb-body max-w-3xl mx-auto font-poppins'>From concept to execution, we deliver comprehensive creative solutions that drive results</p>
        </motion.div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {serviceList.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredService(service)}
              onHoverEnd={() => setHoveredService(null)}
              className='group relative'
            >
              <motion.div
                className='bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl border border-gray-100 hover:border-tb-blue/30 transition-all duration-300 cursor-pointer h-full'
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 182, 231, 0.25)",
                }}
              >
                {/* Service Icon */}
                <div className='text-6xl mb-6 group-hover:scale-110 transition-transform duration-300'>{serviceIcons[service] || "🎯"}</div>

                {/* Service Name */}
                <h3 className='text-2xl font-bold text-tb-black mb-4 group-hover:text-tb-blue transition-colors duration-300'>{service}</h3>

                {/* Service Description */}
                <p className='text-tb-body leading-relaxed'>{getServiceDescription(service)}</p>

                {/* Hover Effect */}
                <motion.div
                  className='absolute inset-0 bg-gradient-to-br from-tb-blue/5 to-sky-300/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  initial={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <p className='text-lg text-tb-body mb-6'>Ready to bring your vision to life?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-tb-blue text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300'
          >
            Let's Talk
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function getServiceDescription(service) {
  const descriptions = {
    Branding: "Creative visual solutions that capture attention and communicate your brand's essence.",
    Copywriting: "Compelling copy that tells your story and drives action with strategic messaging.",
    "Digital Marketing": "Data-driven digital strategies that reach your audience where they are.",
    "Social Media": "Engaging social content that builds community and amplifies your message.",
    Production: "High-quality production services that bring your creative vision to life.",
    Logo: "Distinctive brand identities that make lasting impressions and build recognition.",
    Print: "Professional print materials that reinforce your brand message across all touchpoints.",
  };

  return descriptions[service] || "Professional creative services tailored to your needs.";
}
