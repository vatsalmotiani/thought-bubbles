"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { servicesWithIcons } from "@/data/services";
import { slugify } from "@/lib/utils";

// Icon imports
import { PenTool, Camera, Globe, Smartphone, Monitor, Megaphone, MessageCircle } from "lucide-react";

// Icon mapping
const iconMap = {
  Branding: PenTool,
  Photography: Camera,
  "Web Design": Globe,
  "Mobile Apps": Smartphone,
  "UI/UX": Monitor,
  Marketing: Megaphone,
  "Social Media": MessageCircle,
};

export default function RedesignedHeroSection() {
  const containerRef = useRef(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [autoHighlightedService, setAutoHighlightedService] = useState(null);
  const [isUserHovering, setIsUserHovering] = useState(false);
  const [mounted, setMounted] = useState(false);
  const autoHighlightIntervalRef = useRef(null);
  const router = useRouter();

  // Desktop orbits - larger and more spaced out
  const desktopOrbits = [
    { rx: 180, ry: 120 }, // First orbit
    { rx: 280, ry: 180 }, // Second orbit
    { rx: 380, ry: 240 }, // Third orbit
    { rx: 480, ry: 300 }, // Fourth orbit
  ];

  // Mobile orbits - vertical ellipses
  const mobileOrbits = [
    { rx: 90, ry: 140 },
    { rx: 130, ry: 180 },
    { rx: 170, ry: 220 },
    { rx: 210, ry: 260 },
  ];

  // Distribute services across orbits
  const distributeServices = () => {
    const distributed = [];
    let serviceIndex = 0;

    // First orbit: 1 service
    if (serviceIndex < servicesWithIcons.length) {
      distributed.push({
        ...servicesWithIcons[serviceIndex],
        id: serviceIndex + 1,
        orbitIndex: 0,
        startAngle: 0,
      });
      serviceIndex++;
    }

    // Remaining orbits: distribute evenly
    const remainingServices = servicesWithIcons.length - 1;
    const servicesPerOrbit = Math.ceil(remainingServices / 3);

    for (let orbit = 1; orbit <= 3; orbit++) {
      for (let i = 0; i < servicesPerOrbit && serviceIndex < servicesWithIcons.length; i++) {
        const service = servicesWithIcons[serviceIndex];
        const servicesInThisOrbit = Math.min(servicesPerOrbit, servicesWithIcons.length - serviceIndex);
        const angleStep = 360 / servicesInThisOrbit;

        distributed.push({
          ...service,
          id: serviceIndex + 1,
          orbitIndex: orbit,
          startAngle: i * angleStep,
        });
        serviceIndex++;
      }
    }

    return distributed;
  };

  const services = distributeServices().map((service) => ({
    ...service,
    speed: 30 + service.orbitIndex * 8,
    url: `/work?category=${slugify(service.name)}`,
  }));

  // Auto-highlight effect
  useEffect(() => {
    setMounted(true);

    const startAutoHighlight = () => {
      if (services.length === 0) return;

      let currentIndex = 0;
      setAutoHighlightedService(services[currentIndex].id);

      autoHighlightIntervalRef.current = setInterval(() => {
        if (!isUserHovering) {
          currentIndex = (currentIndex + 1) % services.length;
          setAutoHighlightedService(services[currentIndex].id);
        }
      }, 2500); // Slightly faster rotation
    };

    const timeoutId = setTimeout(startAutoHighlight, 500);

    return () => {
      clearTimeout(timeoutId);
      if (autoHighlightIntervalRef.current) {
        clearInterval(autoHighlightIntervalRef.current);
      }
    };
  }, [services.length]);

  useEffect(() => {
    if (isUserHovering) {
      if (autoHighlightIntervalRef.current) {
        clearInterval(autoHighlightIntervalRef.current);
      }
    } else {
      if (mounted && services.length > 0) {
        const currentIndex = services.findIndex((s) => s.id === autoHighlightedService);
        let nextIndex = currentIndex >= 0 ? (currentIndex + 1) % services.length : 0;

        autoHighlightIntervalRef.current = setInterval(() => {
          setAutoHighlightedService(services[nextIndex].id);
          nextIndex = (nextIndex + 1) % services.length;
        }, 2500);
      }
    }
  }, [isUserHovering, mounted, services.length, autoHighlightedService]);

  const handleServiceClick = (url) => {
    router.push(url);
  };

  const handleMouseEnter = (serviceId) => {
    setIsUserHovering(true);
    setHoveredService(serviceId);
  };

  const handleMouseLeave = () => {
    setIsUserHovering(false);
    setHoveredService(null);
  };

  return (
    <section
      ref={containerRef}
      className='relative min-h-screen flex items-center overflow-hidden bg-transparent'
    >
      {/* Background Service Text */}
      <motion.div
        className='absolute top-0 left-0 w-full h-1/3 flex items-center justify-center pointer-events-none z-5 overflow-hidden'
        initial={{ opacity: 0 }}
        animate={{
          opacity: hoveredService || autoHighlightedService ? 0.1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {(hoveredService || autoHighlightedService) && (
          <motion.div
            key={hoveredService || autoHighlightedService}
            className='text-tb-black text-[6vw] sm:text-[7vw] md:text-[8vw] lg:text-[6rem] xl:text-[8rem] font-black select-none whitespace-nowrap text-center'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              maxWidth: "90vw",
              wordBreak: "keep-all",
              overflow: "hidden",
            }}
          >
            {services.find((s) => s.id === (hoveredService || autoHighlightedService))?.name.toUpperCase()}
          </motion.div>
        )}
      </motion.div>

      {/* Desktop Layout */}
      <div className='hidden md:flex relative z-10 w-full h-full'>
        <motion.div
          className='w-full flex items-center justify-center relative'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className='relative w-[1000px] h-[800px]'>
            {/* Background Stars */}
            {[
              { x: 80, y: 100, size: 16, delay: 0 },
              { x: 920, y: 120, size: 12, delay: 1 },
              { x: 100, y: 700, size: 14, delay: 2 },
              { x: 950, y: 680, size: 10, delay: 0.5 },
              { x: 500, y: 60, size: 18, delay: 1.5 },
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

            {/* Central Company Logo - Now properly centered */}
            <motion.div
              className='absolute top-1/3 left-[40%] transform -translate-x-1/2 -translate-y-1/2 z-10'
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
                width={240}
                height={240}
                className='w-[240px] h-[240px]'
                alt='Thought Bubbles Logo'
              />
            </motion.div>

            {/* Desktop Elliptical Orbital Rings */}
            {desktopOrbits.map((orbit, index) => (
              <motion.div
                key={`ring-${index}`}
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-dashed opacity-30 z-0'
                style={{
                  width: `${orbit.rx * 2}px`,
                  height: `${orbit.ry * 2}px`,
                  borderColor: "#1E1E1E",
                  borderRadius: "50%",
                }}
              />
            ))}

            {/* Desktop Service Planets */}
            {services.map((service) => {
              const Icon = service.icon;
              const isAutoHighlighted = autoHighlightedService === service.id && !hoveredService;
              const orbit = desktopOrbits[service.orbitIndex];

              const createEllipticalKeyframes = () => {
                const keyframes = [];
                for (let i = 0; i <= 360; i += 10) {
                  const angle = ((i + service.startAngle) * Math.PI) / 180;
                  const x = orbit.rx * Math.cos(angle);
                  const y = orbit.ry * Math.sin(angle);
                  keyframes.push({ x, y });
                }
                return keyframes;
              };

              return (
                <motion.div
                  key={service.id}
                  className='absolute top-1/2 left-1/2 cursor-pointer z-20' // Higher z-index than logo
                  style={{
                    width: "50px",
                    height: "50px",
                    transform: "translate(-25px, -25px)",
                  }}
                  animate={{
                    x: createEllipticalKeyframes().map((k) => k.x),
                    y: createEllipticalKeyframes().map((k) => k.y),
                  }}
                  transition={{
                    duration: service.speed,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                  onMouseEnter={() => handleMouseEnter(service.id)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleServiceClick(service.url)}
                >
                  <motion.div
                    className='flex items-center justify-center w-full h-full'
                    whileHover={{ scale: 1.3 }}
                    animate={{
                      scale: isAutoHighlighted ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      scale: isAutoHighlighted
                        ? {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                          }
                        : { duration: 0.3 },
                    }}
                  >
                    <div
                      className='w-12 h-12 rounded-full border-3 flex items-center justify-center relative overflow-visible'
                      style={{
                        backgroundColor: service.color,
                        borderColor: darkenColor(service.color, 20),
                        boxShadow: hoveredService === service.id ? `0 0 20px ${service.color}` : isAutoHighlighted ? `0 0 15px ${service.color}, 0 0 30px rgba(135, 206, 235, 0.5)` : "2px 2px 0px rgba(0,0,0,0.2)",
                      }}
                    >
                      <Icon
                        size={20}
                        style={{ color: "white" }}
                      />

                      {/* Enhanced auto-highlight effect */}
                      {isAutoHighlighted && !hoveredService && (
                        <>
                          <motion.div
                            className='absolute inset-0 rounded-full pointer-events-none'
                            style={{
                              boxShadow: `0 0 25px ${service.color}, 0 0 50px rgba(135, 206, 235, 0.7)`,
                            }}
                            animate={{
                              opacity: [0, 0.9, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.div
                            className='absolute inset-0 rounded-full border-2 pointer-events-none'
                            style={{
                              borderColor: "#87CEEB",
                            }}
                            animate={{
                              scale: [1, 2.5],
                              opacity: [0.8, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeOut",
                            }}
                          />
                        </>
                      )}

                      {/* Tooltip with "Explore" text */}
                      {hoveredService === service.id && (
                        <motion.div
                          className='absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap z-50 pointer-events-none'
                          style={{
                            bottom: service.orbitIndex >= 2 ? "60px" : "-50px",
                            top: service.orbitIndex < 2 ? "60px" : "auto",
                          }}
                          initial={{ opacity: 0, y: service.orbitIndex >= 2 ? 10 : -10 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <div
                            className='px-4 py-2 rounded-full text-sm font-bold max-w-[140px] text-center'
                            style={{
                              backgroundColor: service.color,
                              color: "white",
                              boxShadow: "2px 2px 0px rgba(0,0,0,0.2)",
                            }}
                          >
                            Explore
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className='flex md:hidden relative z-10 w-full h-full items-center justify-center px-4'>
        <motion.div
          className='relative w-[380px] h-[600px] sm:w-[420px] sm:h-[680px]'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Mobile Background Stars */}
          {[
            { x: 50, y: 80, size: 12, delay: 0 },
            { x: 320, y: 100, size: 10, delay: 1 },
            { x: 60, y: 500, size: 11, delay: 2 },
            { x: 330, y: 480, size: 9, delay: 0.5 },
          ].map((star, index) => (
            <motion.div
              key={`mobile-star-${index}`}
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

          {/* Mobile Central Logo */}
          <motion.div
            className='absolute top-[36%] left-[33%] transform -translate-x-1/2 -translate-y-1/2 z-10'
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
              width={140}
              height={140}
              className='w-[140px] h-[140px] sm:w-[160px] sm:h-[160px]'
              alt='Thought Bubbles Logo'
            />
          </motion.div>

          {/* Mobile Orbital Rings */}
          {mobileOrbits.map((orbit, index) => (
            <motion.div
              key={`mobile-ring-${index}`}
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-dashed opacity-20 z-0'
              style={{
                width: `${orbit.rx * 2}px`,
                height: `${orbit.ry * 2}px`,
                borderColor: "#1E1E1E",
                borderRadius: "50%",
              }}
            />
          ))}

          {/* Mobile Service Planets */}
          {services.map((service) => {
            const Icon = service.icon;
            const isAutoHighlighted = autoHighlightedService === service.id && !hoveredService;
            const orbit = mobileOrbits[service.orbitIndex];

            const createMobileEllipticalKeyframes = () => {
              const keyframes = [];
              for (let i = 0; i <= 360; i += 10) {
                const angle = ((i + service.startAngle) * Math.PI) / 180;
                const x = orbit.rx * Math.cos(angle);
                const y = orbit.ry * Math.sin(angle);
                keyframes.push({ x, y });
              }
              return keyframes;
            };

            return (
              <motion.div
                key={`mobile-${service.id}`}
                className='absolute top-1/2 left-1/2 cursor-pointer z-20' // Higher z-index than logo
                style={{
                  width: "40px",
                  height: "40px",
                  transform: "translate(-20px, -20px)",
                }}
                animate={{
                  x: createMobileEllipticalKeyframes().map((k) => k.x),
                  y: createMobileEllipticalKeyframes().map((k) => k.y),
                }}
                transition={{
                  duration: service.speed,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
                onTouchStart={() => handleMouseEnter(service.id)}
                onTouchEnd={handleMouseLeave}
                onClick={() => handleServiceClick(service.url)}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className='flex items-center justify-center w-full h-full relative'
                  animate={{
                    scale: isAutoHighlighted ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    scale: isAutoHighlighted
                      ? {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }
                      : { duration: 0.3 },
                  }}
                >
                  <div
                    className='w-10 h-10 rounded-full border-2 flex items-center justify-center relative overflow-visible'
                    style={{
                      backgroundColor: service.color,
                      borderColor: darkenColor(service.color, 20),
                    }}
                  >
                    <Icon
                      size={16}
                      style={{ color: "white" }}
                    />

                    {/* Mobile Auto-highlight effect */}
                    {isAutoHighlighted && !hoveredService && (
                      <>
                        <motion.div
                          className='absolute inset-0 rounded-full pointer-events-none'
                          style={{
                            boxShadow: `0 0 15px ${service.color}, 0 0 30px rgba(135, 206, 235, 0.6)`,
                          }}
                          animate={{
                            opacity: [0, 0.9, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <motion.div
                          className='absolute inset-0 rounded-full border-2 pointer-events-none'
                          style={{
                            borderColor: "#87CEEB",
                          }}
                          animate={{
                            scale: [1, 2],
                            opacity: [0.8, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />
                      </>
                    )}

                    {/* Mobile Tooltip */}
                    {hoveredService === service.id && (
                      <motion.div
                        className='absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap z-50 pointer-events-none'
                        style={{
                          bottom: service.orbitIndex >= 2 ? "45px" : "-40px",
                          top: service.orbitIndex < 2 ? "45px" : "auto",
                        }}
                        initial={{ opacity: 0, y: service.orbitIndex >= 2 ? 8 : -8 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <div
                          className='px-3 py-1 rounded-full text-xs font-bold text-center'
                          style={{
                            backgroundColor: service.color,
                            color: "white",
                            boxShadow: "1px 1px 0px rgba(0,0,0,0.2)",
                          }}
                        >
                          Explore
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// Helper function to darken colors
function darkenColor(color, percent) {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = ((num >> 8) & 0x00ff) - amt;
  const B = (num & 0x0000ff) - amt;
  return `#${(0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 + (B < 255 ? (B < 1 ? 0 : B) : 255)).toString(16).slice(1)}`;
}
