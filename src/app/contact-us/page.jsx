"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Zap } from "lucide-react";
import AnimatedForm from "./Form";
import Map from "./Map";

export default function ContactPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Floating bubble data
  const bubbles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: 20 + Math.random() * 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 12 + Math.random() * 8,
  }));

  return (
    <div
      ref={containerRef}
      className='min-h-screen'
      style={{ backgroundColor: "#F2F2F2" }}
    >
      {/* Animated Background Elements */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        <svg
          className='absolute inset-0 w-full h-full'
          viewBox='0 0 1200 800'
          preserveAspectRatio='xMidYMid slice'
        >
          <defs>
            <pattern
              id='contact-dots'
              x='0'
              y='0'
              width='60'
              height='60'
              patternUnits='userSpaceOnUse'
            >
              <circle
                cx='30'
                cy='30'
                r='2'
                fill='#00B6E7'
                opacity='0.1'
              />
            </pattern>
          </defs>

          <rect
            width='100%'
            height='100%'
            fill='url(#contact-dots)'
          />

          {/* Animated contact-themed doodles */}
          <motion.path
            d='M100,200 Q300,100 500,200 Q700,300 900,200'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='none'
            strokeLinecap='round'
            strokeDasharray='15,10'
            opacity='0.2'
            animate={{
              pathLength: [0, 1, 0],
              strokeDashoffset: [0, -50, -100],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Floating envelope shapes */}
          <motion.rect
            x='50'
            y='500'
            width='60'
            height='40'
            rx='5'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='rgba(0, 182, 231, 0.05)'
            opacity='0.3'
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx='1000'
            cy='600'
            r='50'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='none'
            opacity='0.15'
            strokeDasharray='20,10'
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>

        {/* Floating Bubbles */}
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className='absolute rounded-full border-2'
            style={{
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              borderColor: "#00B6E7",
              opacity: 0.15,
              backgroundColor: "rgba(0, 182, 231, 0.03)",
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(bubble.id) * 25, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bubble.delay,
            }}
          />
        ))}
      </div>

      <div className='relative z-10'>
        {/* Hero Section */}
        <section className='py-32 px-4'>
          <div className='max-w-6xl mx-auto text-center'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className='mb-12'
            >
              <motion.h1
                className='text-7xl md:text-9xl font-black leading-tight mb-8'
                style={{ color: "#1E1E1E", fontFamily: "Oswald, sans-serif" }}
                animate={{
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Get In
                <motion.span
                  className='block'
                  style={{ color: "#00B6E7" }}
                  animate={{
                    rotate: [0, -3, 3, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  Touch
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className='relative mb-16'
              >
                <p
                  className='text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed'
                  style={{ color: "#828282", fontFamily: "Poppins, sans-serif" }}
                >
                  Ready to create something <span style={{ color: "#00B6E7", fontWeight: "700" }}>amazing</span> together?
                  <br />
                  Drop us a message and let's start the conversation!
                </p>

                {/* Animated doodle underlines */}
                <svg
                  className='absolute -bottom-8 left-1/2 transform -translate-x-1/2'
                  width='350'
                  height='30'
                  viewBox='0 0 350 30'
                >
                  <motion.path
                    d='M20,20 Q100,5 175,20 T330,20'
                    stroke='#00B6E7'
                    strokeWidth='4'
                    fill='none'
                    strokeLinecap='round'
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                  />
                </svg>
              </motion.div>
            </motion.div>

            {/* Contact Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className='flex flex-wrap justify-center gap-8 mb-20'
            >
              {[
                { icon: Mail, label: "24h Response Time" },
                { icon: Phone, label: "Direct Communication" },
                { icon: Zap, label: "Quick Turnaround" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className='relative group'
                  whileHover={{
                    scale: 1.05,
                    rotate: index % 2 === 0 ? 2 : -2,
                    y: -5,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className='relative rounded-3xl p-6 border-3 transform'
                    style={{
                      backgroundColor: "white",
                      borderColor: "#00B6E7",
                      boxShadow: "6px 6px 0px #00B6E7",
                    }}
                  >
                    <motion.div
                      className='relative inline-block mb-4'
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      <div
                        className='relative rounded-2xl p-4 border-3'
                        style={{
                          backgroundColor: "#00B6E7",
                          borderColor: "#1E1E1E",
                          boxShadow: "3px 3px 0px #1E1E1E",
                        }}
                      >
                        <stat.icon
                          size={28}
                          color='white'
                        />
                      </div>
                    </motion.div>
                    <div
                      className='text-sm uppercase tracking-wider font-bold'
                      style={{ color: "#1E1E1E" }}
                    >
                      {stat.label}
                    </div>
                  </div>

                  {/* Floating sparkles around cards */}
                  <motion.div
                    className='absolute -top-2 -right-2 w-4 h-4 rounded-full'
                    style={{ backgroundColor: "#1E1E1E" }}
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className='py-16 px-4'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
              {/* Map Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.h2
                  className='text-4xl md:text-5xl font-black mb-8'
                  style={{ color: "#1E1E1E", fontFamily: "Oswald, sans-serif" }}
                  animate={{
                    rotate: [0, 1, -1, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Find <span style={{ color: "#00B6E7" }}>Us</span>
                </motion.h2>
                <Map />
              </motion.div>

              {/* Contact Form Section */}
              <AnimatedForm />
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className='py-16 px-4'>
          <div className='max-w-5xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <motion.div
                className='relative group'
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div
                  className='relative rounded-3xl p-12 border-4 transform'
                  style={{
                    backgroundColor: "white",
                    borderColor: "#00B6E7",
                    boxShadow: "12px 12px 0px #00B6E7",
                  }}
                >
                  <motion.h3
                    className='text-3xl md:text-4xl font-black mb-8'
                    style={{ color: "#1E1E1E" }}
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Other Ways to Reach Us
                  </motion.h3>

                  <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {[
                      { icon: Mail, title: "Email", info: "hello@thoughtbubbles.in" },
                      { icon: Phone, title: "Phone", info: "+91 98765 43210" },
                      { icon: MapPin, title: "Office", info: "Mumbai, India" },
                    ].map((contact, index) => (
                      <motion.div
                        key={index}
                        className='relative'
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div
                          className='relative rounded-2xl p-6 border-2'
                          style={{
                            backgroundColor: "#F2F2F2",
                            borderColor: "#00B6E7",
                          }}
                        >
                          <motion.div
                            className='relative inline-block mb-4'
                            whileHover={{ scale: 1.2, rotate: 10 }}
                          >
                            <div
                              className='relative rounded-xl p-3 border-2'
                              style={{
                                backgroundColor: "#00B6E7",
                                borderColor: "#1E1E1E",
                              }}
                            >
                              <contact.icon
                                size={24}
                                color='white'
                              />
                            </div>
                          </motion.div>
                          <h4
                            className='text-lg font-bold mb-2'
                            style={{ color: "#1E1E1E" }}
                          >
                            {contact.title}
                          </h4>
                          <p style={{ color: "#828282" }}>{contact.info}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating elements around contact info */}
                  <motion.div
                    className='absolute -top-6 -right-6 w-12 h-12 rounded-full'
                    style={{ backgroundColor: "#00B6E7" }}
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: 1,
                    }}
                  />
                  <motion.div
                    className='absolute -bottom-6 -left-6 w-8 h-8 rounded-full'
                    style={{ backgroundColor: "#1E1E1E" }}
                    animate={{
                      scale: [1, 0, 1],
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      delay: 2,
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
