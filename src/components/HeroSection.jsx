"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { servicesWithIcons } from "@/data/services"; // Import your service list
import { slugify } from "@/lib/utils"; // Import your slugify function

// Icon imports
import { PenTool, Camera, Globe, Smartphone, Monitor, Megaphone, MessageCircle } from "lucide-react";

// Icon mapping - match your service names to icons
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
  const router = useRouter();

  // Create services data from your servicesWithIcons
  const services = servicesWithIcons.map((service, index) => {
    const baseDistance = 120;
    const distanceIncrement = 40;

    return {
      id: index + 1,
      name: service.name,
      icon: service.icon,
      color: service.color,
      distance: baseDistance + index * distanceIncrement,
      speed: 20 + index * 3,
      size: 45 + index * 2,
      url: `/work?category=${slugify(service.name)}`,
    };
  });

  // Helper function to generate colors
  function getServiceColor(index) {
    const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#F7DC6F", "#BB8FCE", "#F8C471", "#A2D9CE"];
    return colors[index % colors.length];
  }

  const handleServiceClick = (url) => {
    router.push(url);
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
          opacity: hoveredService ? 0.1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {hoveredService && (
          <motion.div
            key={hoveredService}
            className='text-tb-black text-3xl sm:text-4xl md:text-[6rem] lg:text-[6rem] xl:text-[12rem] font-black select-none whitespace-nowrap'
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
              className='absolute top-[35%] left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-20'
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
            {[150, 225, 300, 375].map((radius, index) => (
              <motion.div
                key={`ring-${index}`}
                className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-dashed rounded-full opacity-30'
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
              const orbitalRadius = service.distance;
              const orbitDuration = service.speed;

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
                        backgroundColor: service.color,
                        borderColor: darkenColor(service.color, 20),
                        boxShadow: hoveredService === service.id ? `0 0 15px ${service.color}` : "2px 2px 0px rgba(0,0,0,0.2)",
                      }}
                    >
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
                            backgroundColor: service.color,
                            color: "white",
                            boxShadow: "2px 2px 0px rgba(0,0,0,0.2)",
                          }}
                        >
                          {service.name}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
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
