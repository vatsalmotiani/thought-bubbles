"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Users, Target, Zap, Star, TrendingUp, Heart, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Floating bubble data
  const bubbles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: 15 + Math.random() * 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 12 + Math.random() * 16,
  }));

  const values = [
    {
      icon: Star,
      title: "Creative Excellence",
      description: "We push boundaries and challenge conventions to deliver work that stands out in a crowded marketplace.",
      rotation: 2,
    },
    {
      icon: Target,
      title: "Strategic Thinking",
      description: "Every creative decision is backed by strategic insight and business understanding.",
      rotation: -1,
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We believe in building lasting relationships with our clients, not just delivering projects.",
      rotation: 1,
    },
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description: "Our work is measured by the impact it creates, not just the awards it wins.",
      rotation: -2,
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly explore new technologies and creative approaches to stay ahead of the curve.",
      rotation: 3,
    },
    {
      icon: Heart,
      title: "Authenticity",
      description: "We stay true to our values and deliver work that reflects our genuine passion for creativity.",
      rotation: -1,
    },
  ];

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
              id='dots'
              x='0'
              y='0'
              width='50'
              height='50'
              patternUnits='userSpaceOnUse'
            >
              <circle
                cx='25'
                cy='25'
                r='1.5'
                fill='#00B6E7'
                opacity='0.15'
              />
            </pattern>
            <filter id='roughPaper'>
              <feTurbulence
                baseFrequency='0.04'
                numOctaves='5'
                result='noise'
                seed='3'
              />
              <feDisplacementMap
                in='SourceGraphic'
                in2='noise'
                scale='2'
              />
            </filter>
          </defs>

          <rect
            width='100%'
            height='100%'
            fill='url(#dots)'
          />

          {/* Animated doodle paths */}
          <motion.path
            d='M50,300 Q200,150 400,300 T800,300'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='none'
            strokeLinecap='round'
            strokeDasharray='12,6'
            opacity='0.3'
            animate={{
              pathLength: [0, 1, 0],
              strokeDashoffset: [0, -100, -200],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.path
            d='M1100,500 Q950,350 800,500 T500,500'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='none'
            strokeLinecap='round'
            strokeDasharray='8,4'
            opacity='0.25'
            animate={{
              pathLength: [1, 0, 1],
              strokeDashoffset: [100, 0, -100],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Floating circles */}
          <motion.circle
            cx='150'
            cy='150'
            r='60'
            stroke='#00B6E7'
            strokeWidth='3'
            fill='none'
            opacity='0.2'
            strokeDasharray='15,10'
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.circle
            cx='1050'
            cy='650'
            r='40'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='rgba(0, 182, 231, 0.1)'
            opacity='0.3'
            animate={{
              scale: [1, 0.8, 1],
              rotate: [360, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
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
              opacity: 0.2,
              backgroundColor: "rgba(0, 182, 231, 0.05)",
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.sin(bubble.id) * 30, 0],
              scale: [1, 1.3, 1],
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

      {/* Story Section */}
      <section className='py-24 relative overflow-hidden'>
        <div className='relative z-10 max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h2
                className='text-6xl md:text-7xl font-black mb-8'
                style={{ color: "#1E1E1E", fontFamily: "Oswald, sans-serif" }}
                animate={{
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Our <span style={{ color: "#00B6E7" }}>Story</span>
              </motion.h2>

              <div
                className='space-y-8 text-lg leading-relaxed'
                style={{ color: "#828282" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className='relative'
                >
                  <div
                    className='relative rounded-2xl p-6 border-3 transform'
                    style={{
                      backgroundColor: "white",
                      borderColor: "#00B6E7",
                      boxShadow: "4px 4px 0px rgba(0, 182, 231, 0.3)",
                    }}
                  >
                    <p>
                      Founded in <span style={{ color: "#00B6E7", fontWeight: "700" }}>2009</span>, Thought Bubbles Advertising emerged from a simple belief: that great advertising should be both creative and actionable.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className='relative'
                >
                  <div
                    className='relative rounded-2xl p-6 border-3 transform'
                    style={{
                      backgroundColor: "white",
                      borderColor: "#00B6E7",
                      boxShadow: "4px 4px 0px rgba(0, 182, 231, 0.3)",
                    }}
                  >
                    <p>
                      Our founder, <span style={{ color: "#00B6E7", fontWeight: "700" }}>Manoj Motiani</span>, brings <span style={{ color: "#00B6E7", fontWeight: "700" }}>27 years</span> of diverse industry experience to every project.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className='relative'
                >
                  <div
                    className='relative rounded-2xl p-6 border-3 transform'
                    style={{
                      backgroundColor: "white",
                      borderColor: "#00B6E7",
                      boxShadow: "4px 4px 0px rgba(0, 182, 231, 0.3)",
                    }}
                  >
                    <p>
                      We believe in setting brand tone through <span style={{ color: "#00B6E7", fontWeight: "700" }}>relevant communication</span> that speaks the language of the people.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
              className='relative'
            >
              <motion.div
                className='relative group'
                whileHover={{ scale: 1.02, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className='relative rounded-3xl p-12 border-4 transform'
                  style={{
                    backgroundColor: "white",
                    borderColor: "#00B6E7",
                    boxShadow: "12px 12px 0px #00B6E7",
                  }}
                >
                  <motion.div
                    className='text-center'
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className='relative inline-block mb-8'
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <div
                        className='relative rounded-full p-6 border-3'
                        style={{
                          backgroundColor: "#00B6E7",
                          borderColor: "#1E1E1E",
                          boxShadow: "4px 4px 0px #1E1E1E",
                        }}
                      >
                        <Target
                          size={48}
                          color='white'
                        />
                      </div>
                    </motion.div>
                    <h3
                      className='text-4xl font-black mb-6'
                      style={{ color: "#1E1E1E" }}
                    >
                      Our Mission
                    </h3>
                    <p
                      className='text-lg leading-relaxed'
                      style={{ color: "#828282" }}
                    >
                      To create advertising that doesn't just look good, but works hard. We believe in actionable creatives that drive real business results.
                    </p>
                  </motion.div>

                  {/* Floating elements around mission card */}
                  <motion.div
                    className='absolute -top-4 -right-4 w-8 h-8 rounded-full'
                    style={{ backgroundColor: "#1E1E1E" }}
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: 1,
                    }}
                  />
                  <motion.div
                    className='absolute -bottom-4 -left-4 w-6 h-6 rounded-full'
                    style={{ backgroundColor: "#00B6E7" }}
                    animate={{
                      scale: [1, 0, 1],
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: 2,
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-24 relative overflow-hidden'>
        <div className='relative z-10 max-w-7xl mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className='text-center mb-20'
          >
            <motion.h2
              className='text-6xl md:text-7xl font-black mb-8'
              style={{ color: "#1E1E1E", fontFamily: "Oswald, sans-serif" }}
              animate={{
                rotate: [0, -2, 2, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              What <span style={{ color: "#00B6E7" }}>Drives</span> Us
            </motion.h2>
            <p
              className='text-xl max-w-3xl mx-auto'
              style={{ color: "#828282" }}
            >
              Our core values shape every decision, every campaign, and every relationship we build.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotate: value.rotation,
                  y: -10,
                }}
                className='relative group'
              >
                <div
                  className='relative rounded-3xl p-8 border-3 transform h-full'
                  style={{
                    backgroundColor: "white",
                    borderColor: "#00B6E7",
                    boxShadow: "6px 6px 0px rgba(0, 182, 231, 0.4)",
                  }}
                >
                  <motion.div
                    className='relative inline-block mb-6'
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className='relative rounded-2xl p-4 border-3'
                      style={{
                        backgroundColor: "#00B6E7",
                        borderColor: "#1E1E1E",
                        boxShadow: "3px 3px 0px #1E1E1E",
                      }}
                    >
                      <value.icon
                        size={32}
                        color='white'
                      />
                    </div>
                  </motion.div>

                  <h3
                    className='text-2xl font-black mb-4'
                    style={{ color: "#1E1E1E" }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className='leading-relaxed'
                    style={{ color: "#828282" }}
                  >
                    {value.description}
                  </p>

                  {/* Floating sparkle for each card */}
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className='relative py-32 overflow-hidden'>
        <div className='relative z-10 max-w-6xl mx-auto px-4 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className='mb-12'
          >
            {/* Logo with cartoon styling */}
            <motion.div
              className='relative inline-block'
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className='relative rounded-3xl p-12 border-4 transform'
                style={{
                  backgroundColor: "white",
                  borderColor: "#00B6E7",
                  boxShadow: "12px 12px 0px #00B6E7",
                }}
              >
                <motion.h2
                  className='text-6xl md:text-7xl font-black mb-8'
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
                  Ready to Work <span style={{ color: "#00B6E7" }}>Together?</span>
                </motion.h2>

                <p
                  className='text-2xl mb-12 max-w-3xl mx-auto leading-relaxed'
                  style={{ color: "#828282" }}
                >
                  Let's create something <span style={{ color: "#00B6E7", fontWeight: "700" }}>extraordinary</span> that breaks through the noise and delivers real results for your brand.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className='flex flex-col sm:flex-row gap-8 justify-center items-center'
                >
                  <motion.button
                    className='relative group'
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className='relative px-12 py-6 rounded-full font-black text-xl text-white transform border-4'
                      style={{
                        backgroundColor: "#00B6E7",
                        borderColor: "#1E1E1E",
                        boxShadow: "6px 6px 0px #1E1E1E",
                      }}
                    >
                      <span className='flex items-center gap-3'>
                        Get Started
                        <ArrowRight size={24} />
                      </span>

                      <motion.div
                        className='absolute -top-2 -right-2 w-6 h-6 rounded-full'
                        style={{ backgroundColor: "#1E1E1E" }}
                        animate={{
                          scale: [0, 1, 0],
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: 0.5,
                        }}
                      />
                    </div>
                  </motion.button>

                  <motion.button
                    className='relative group'
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className='relative px-12 py-6 rounded-full font-black text-xl border-4 transform'
                      style={{
                        backgroundColor: "#F2F2F2",
                        borderColor: "#00B6E7",
                        color: "#00B6E7",
                        boxShadow: "6px 6px 0px #00B6E7",
                      }}
                    >
                      <span className='flex items-center gap-3'>
                        View Our Work
                        <ArrowRight size={24} />
                      </span>
                    </div>
                  </motion.button>
                </motion.div>

                {/* Floating elements around CTA */}
                <motion.div
                  className='absolute -top-8 -left-8 w-16 h-16 rounded-full'
                  style={{ backgroundColor: "#00B6E7" }}
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />
                <motion.div
                  className='absolute -bottom-8 -right-8 w-12 h-12 rounded-full'
                  style={{ backgroundColor: "#1E1E1E" }}
                  animate={{
                    scale: [1, 0, 1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: 2,
                  }}
                />
                <motion.div
                  className='absolute top-1/2 -right-12 w-8 h-8 rounded-full'
                  style={{ backgroundColor: "#00B6E7" }}
                  animate={{
                    scale: [0, 1, 0],
                    x: [0, 20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 3,
                  }}
                />
              </div>
            </motion.div>

            {/* Background doodle elements */}
            <svg
              className='absolute -top-20 -left-20 w-40 h-40 opacity-10'
              viewBox='0 0 100 100'
            >
              <motion.path
                d='M20,50 Q50,20 80,50 Q50,80 20,50'
                stroke='#00B6E7'
                strokeWidth='3'
                fill='none'
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </svg>

            <svg
              className='absolute -bottom-20 -right-20 w-32 h-32 opacity-10'
              viewBox='0 0 100 100'
            >
              <motion.circle
                cx='50'
                cy='50'
                r='30'
                stroke='#00B6E7'
                strokeWidth='4'
                fill='none'
                strokeDasharray='10,5'
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
