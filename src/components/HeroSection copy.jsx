"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PenTool, Camera, Globe, Smartphone, Monitor, Megaphone, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function RedesignedHeroSection() {
  const containerRef = useRef(null);
  const [hoveredService, setHoveredService] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Services data for the solar system
  const services = [
    {
      id: 1,
      name: "Branding",
      icon: PenTool,
      color: "#FF6B6B",
      distance: 120,
      speed: 20,
      size: 50,
      url: "/work/branding",
    },
    {
      id: 2,
      name: "Photography",
      icon: Camera,
      color: "#4ECDC4",
      distance: 160,
      speed: 25,
      size: 45,
      url: "/work/photography",
    },
    {
      id: 3,
      name: "Web Design",
      icon: Globe,
      color: "#45B7D1",
      distance: 200,
      speed: 30,
      size: 55,
      url: "/work/web-design",
    },
    {
      id: 4,
      name: "Mobile Apps",
      icon: Smartphone,
      color: "#F7DC6F",
      distance: 140,
      speed: 22,
      size: 48,
      url: "/work/mobile-apps",
    },
    {
      id: 5,
      name: "UI/UX",
      icon: Monitor,
      color: "#BB8FCE",
      distance: 180,
      speed: 28,
      size: 52,
      url: "/work/ui-ux",
    },
    {
      id: 6,
      name: "Marketing",
      icon: Megaphone,
      color: "#F8C471",
      distance: 220,
      speed: 35,
      size: 46,
      url: "/work/marketing",
    },
  ];

  // Floating bubbles for background
  const bubbles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: 20 + Math.random() * 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 8 + Math.random() * 8,
  }));

  const handleServiceClick = (url) => {
    // In a real app, you'd use router.push(url) or similar
    console.log(`Navigating to: ${url}`);
  };

  return (
    <section
      ref={containerRef}
      className='relative min-h-screen flex items-center overflow-hidden'
      style={{ backgroundColor: "#F2F2F2" }}
    >
      {/* Animated Background SVG */}
      <div className='absolute inset-0'>
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
              width='40'
              height='40'
              patternUnits='userSpaceOnUse'
            >
              <circle
                cx='20'
                cy='20'
                r='1.5'
                fill='#00B6E7'
                opacity='0.2'
              />
            </pattern>
          </defs>

          {/* Dotted background pattern */}
          <rect
            width='100%'
            height='100%'
            fill='url(#dots)'
          />

          {/* Animated doodle paths */}
          <motion.path
            d='M50,300 Q200,200 350,300 T600,300'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='none'
            strokeLinecap='round'
            strokeDasharray='8,4'
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />

          <motion.circle
            cx='150'
            cy='150'
            r='40'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='none'
            opacity='0.25'
            strokeDasharray='12,8'
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          />
        </svg>
      </div>

      {/* Floating Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className='absolute rounded-full border-2 pointer-events-none'
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            borderColor: "#00B6E7",
            opacity: 0.2,
            backgroundColor: "rgba(0, 182, 231, 0.1)",
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.sin(bubble.id) * 15, 0],
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bubble.delay,
            repeatType: "loop",
          }}
        />
      ))}

      {/* Background Service Text - Top 1/3 of screen, 100% width */}
      <motion.div
        className='absolute top-0 left-0 w-full h-1/3 flex items-center justify-center pointer-events-none z-5 overflow-hidden'
        initial={{ opacity: 0 }}
        animate={{
          opacity: hoveredService ? 0.1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {hoveredService && (
          <motion.div
            key={hoveredService}
            className='text-tb-black text-4xl sm:text-4xl md:text-[6rem] lg:text-[6rem] xl:text-[12rem] font-black select-none whitespace-nowrap'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {services.find((s) => s.id === hoveredService)?.name.toUpperCase()}
          </motion.div>
        )}
      </motion.div>

      {/* Desktop Layout */}
      <div className='hidden lg:flex relative z-10 w-full h-full'>
        {/* Left Content - 30% */}

        {/* Right Content - Solar System 70% */}
        <motion.div
          className='w-[100%] flex items-center justify-center relative'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className='relative w-[500px] h-[500px]'>
            {/* Background Stars */}
            {[
              { x: 50, y: 80, size: 16, delay: 0 },
              { x: 400, y: 120, size: 12, delay: 1 },
              { x: 100, y: 400, size: 14, delay: 2 },
              { x: 450, y: 350, size: 10, delay: 0.5 },
              { x: 300, y: 50, size: 18, delay: 1.5 },
            ].map((star, index) => (
              <motion.div
                key={`star-${index}`}
                className='absolute'
                style={{ left: star.x, top: star.y }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3 + star.delay,
                  repeat: Infinity,
                  delay: star.delay,
                  repeatType: "loop",
                }}
              >
                <svg
                  width={star.size}
                  height={star.size}
                  viewBox='0 0 24 24'
                >
                  <path
                    d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
                    fill='#00B6E7'
                    stroke='#0084C7'
                    strokeWidth='1'
                  />
                </svg>
              </motion.div>
            ))}

            {/* Central Company Logo */}
            <motion.div
              className='absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-20'
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "loop",
              }}
            >
              <Image
                src='/tb-logo.svg'
                width={200}
                height={200}
                className='h-auto'
                alt='Thought Bubbles Logo'
              />
            </motion.div>

            {/* Orbital Rings */}
            {[140, 180, 220, 260].map((radius, index) => (
              <motion.div
                key={`ring-${index}`}
                className='absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-dashed rounded-full opacity-30'
                style={{
                  width: `${radius * 2}px`,
                  height: `${radius * 2}px`,
                  borderColor: "#1E1E1E",
                }}
              />
            ))}

            {/* Service Planets */}
            {services.map((service, index) => {
              const Icon = service.icon;
              const orbitalRadius = 140 + (index % 4) * 40;
              const orbitDuration = 15 + index * 3;

              return (
                <motion.div
                  key={service.id}
                  className='absolute top-1/2 left-1/2 cursor-pointer z-10'
                  style={{
                    transformOrigin: "0 0",
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: orbitDuration,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                  onHoverStart={() => setHoveredService(service.id)}
                  onHoverEnd={() => setHoveredService(null)}
                  onClick={() => handleServiceClick(service.url)}
                >
                  <motion.div
                    className='absolute'
                    style={{
                      left: `${orbitalRadius}px`,
                      top: "-20px",
                      width: "40px",
                      height: "40px",
                    }}
                    whileHover={{ scale: 1.3 }}
                    animate={{
                      rotate: [0, -360],
                    }}
                    transition={{
                      rotate: {
                        duration: orbitDuration,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                      },
                      scale: { duration: 0.3 },
                    }}
                  >
                    <div
                      className='w-10 h-10 rounded-full border-3 flex items-center justify-center relative overflow-hidden'
                      style={{
                        backgroundColor: "#00B6E7",
                        borderColor: "#0084C7",
                        boxShadow: hoveredService === service.id ? "0 0 15px rgba(0, 182, 231, 0.7)" : "2px 2px 0px rgba(0,0,0,0.2)",
                      }}
                    >
                      {/* Planet surface patterns */}
                      {index === 0 && (
                        <div className='absolute inset-0 opacity-40'>
                          <div className='w-2 h-2 bg-blue-800 rounded-full absolute top-1 left-2'></div>
                          <div className='w-1 h-1 bg-blue-800 rounded-full absolute top-3 right-2'></div>
                          <div className='w-1.5 h-1.5 bg-blue-800 rounded-full absolute bottom-2 left-1'></div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className='absolute inset-0 opacity-30'>
                          <div className='w-full h-0.5 bg-blue-800 absolute top-2'></div>
                          <div className='w-full h-0.5 bg-blue-800 absolute bottom-3'></div>
                        </div>
                      )}

                      {index === 2 && service.id === 3 && (
                        <div className='absolute -inset-1'>
                          <div
                            className='w-12 h-1 border border-blue-800 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50'
                            style={{
                              transform: "translateX(-50%) translateY(-50%) rotateX(75deg)",
                            }}
                          ></div>
                        </div>
                      )}

                      <Icon
                        size={16}
                        style={{ color: "white" }}
                      />

                      {/* Tooltip */}
                      <motion.div
                        className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-30'
                        initial={{ opacity: 0, y: -10 }}
                        animate={{
                          opacity: hoveredService === service.id ? 1 : 0,
                          y: hoveredService === service.id ? 0 : -10,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <div
                          className='px-3 py-1 rounded-full text-xs font-bold'
                          style={{
                            backgroundColor: "#00B6E7",
                            color: "white",
                            boxShadow: "2px 2px 0px rgba(0,0,0,0.2)",
                          }}
                        >
                          {service.name}
                        </div>
                      </motion.div>

                      {/* Hover glow effect */}
                      {hoveredService === service.id && (
                        <motion.div
                          className='absolute -inset-1 rounded-full'
                          style={{
                            background: "radial-gradient(circle, rgba(0, 182, 231, 0.3) 0%, transparent 70%)",
                          }}
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "loop",
                          }}
                        />
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Rocket/Comet */}
            <motion.div
              className='absolute top-1/2 left-1/2 z-10'
              style={{ transformOrigin: "0 0" }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <motion.div
                className='absolute'
                style={{
                  left: "320px",
                  top: "-15px",
                }}
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
              >
                <svg
                  width='30'
                  height='30'
                  viewBox='0 0 30 30'
                >
                  <path
                    d='M15 5 L20 15 L15 25 L10 15 Z'
                    fill='#00B6E7'
                    stroke='#0084C7'
                    strokeWidth='2'
                  />
                  <circle
                    cx='15'
                    cy='12'
                    r='3'
                    fill='white'
                    stroke='#00B6E7'
                    strokeWidth='1'
                  />
                  <path
                    d='M10 15 L5 20 L10 20 Z'
                    fill='#0084C7'
                  />
                  <path
                    d='M20 15 L25 20 L20 20 Z'
                    fill='#0084C7'
                  />
                  <motion.path
                    d='M15 25 L12 30 L15 28 L18 30 Z'
                    fill='#00B6E7'
                    opacity='0.7'
                    animate={{
                      d: ["M15 25 L12 30 L15 28 L18 30 Z", "M15 25 L11 32 L15 29 L19 32 Z", "M15 25 L12 30 L15 28 L18 30 Z"],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className='lg:hidden relative z-10 w-full h-full flex flex-col'>
        {/* Mobile Solar System - Top */}
        <motion.div
          className='flex-1 flex items-center justify-center relative px-4'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className='relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px]'>
            {/* Mobile Central Logo */}
            <motion.div
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "loop",
              }}
            >
              <div
                className='w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white font-black text-lg sm:text-xl border-2'
                style={{
                  backgroundColor: "#00B6E7",
                  borderColor: "#1E1E1E",
                }}
              >
                TB
              </div>
            </motion.div>

            {/* Mobile Service Planets */}
            {services.slice(0, 4).map((service, index) => {
              const Icon = service.icon;
              const orbitalRadius = 80 + (index % 2) * 30;
              const orbitDuration = 12 + index * 2;

              return (
                <motion.div
                  key={service.id}
                  className='absolute top-1/2 left-1/2 cursor-pointer z-10'
                  style={{
                    transformOrigin: "0 0",
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: orbitDuration,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                  onHoverStart={() => setHoveredService(service.id)}
                  onHoverEnd={() => setHoveredService(null)}
                  onClick={() => handleServiceClick(service.url)}
                >
                  <motion.div
                    className='absolute'
                    style={{
                      left: `${orbitalRadius}px`,
                      top: "-16px",
                      width: "32px",
                      height: "32px",
                    }}
                    whileHover={{ scale: 1.2 }}
                    animate={{
                      rotate: [0, -360],
                    }}
                    transition={{
                      rotate: {
                        duration: orbitDuration,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                      },
                      scale: { duration: 0.3 },
                    }}
                  >
                    <div
                      className='w-8 h-8 rounded-full border-2 flex items-center justify-center relative'
                      style={{
                        backgroundColor: "#00B6E7",
                        borderColor: "#0084C7",
                        boxShadow: "1px 1px 0px rgba(0,0,0,0.2)",
                      }}
                    >
                      <Icon
                        size={12}
                        style={{ color: "white" }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Mobile Content - Bottom */}
        <motion.div
          className='px-4 sm:px-8 pb-8 text-center'
          style={{ opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Mobile Subtitle */}
          <motion.p
            className='text-lg sm:text-xl mb-8 leading-relaxed font-poppins'
            style={{ color: "#828282" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            We create <span style={{ color: "#00B6E7", fontWeight: "600" }}>extraordinary</span> digital experiences that make your brand unforgettable.
          </motion.p>

          {/* Mobile CTA Buttons - Smaller */}
          <motion.div
            className='flex flex-col sm:flex-row gap-3 justify-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.button
              className='relative group'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className='relative px-6 py-3 rounded-full font-black text-base text-white transform transition-all'
                style={{
                  backgroundColor: "#00B6E7",
                  boxShadow: "3px 3px 0px #1E1E1E",
                }}
              >
                Start Project
              </div>
            </motion.button>

            <motion.button
              className='relative group'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className='relative px-6 py-3 rounded-full font-black text-base border-3 transform transition-all'
                style={{
                  backgroundColor: "white",
                  borderColor: "#00B6E7",
                  color: "#00B6E7",
                  boxShadow: "3px 3px 0px #00B6E7",
                }}
              >
                View Work
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
      >
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
          }}
          className='relative'
        >
          <div
            className='w-10 h-16 border-3 rounded-full flex justify-center'
            style={{ borderColor: "#00B6E7", backgroundColor: "white" }}
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
              className='w-1.5 h-4 rounded-full mt-2'
              style={{ backgroundColor: "#00B6E7" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
