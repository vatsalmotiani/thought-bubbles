"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "react-feather";

export default function Navbar() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Work",
      url: "/work/all",
      parent: "/work",
    },
    {
      name: "Contact",
      url: "/contact-us",
    },
  ];

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background blur overlay when nav is open */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/20 backdrop-blur-sm z-30'
            onClick={handleNav}
          />
        )}
      </AnimatePresence>

      <nav
        id='top'
        className='fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out'
      >
        {/* Cartoon-style background with doodles */}
        <motion.div
          className={`absolute inset-0 transition-all duration-500 ${scrolled ? "opacity-100" : "opacity-95"}`}
          style={{
            backgroundColor: scrolled ? "#F2F2F2" : "rgba(242, 242, 242, 0.8)",
            backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
          }}
        >
          {/* Doodle pattern overlay */}
          <svg
            className='absolute inset-0 w-full h-full pointer-events-none'
            viewBox='0 0 400 80'
            preserveAspectRatio='xMidYMid slice'
          >
            <defs>
              <pattern
                id='navDots'
                x='0'
                y='0'
                width='30'
                height='30'
                patternUnits='userSpaceOnUse'
              >
                <circle
                  cx='15'
                  cy='15'
                  r='1'
                  fill='#00B6E7'
                  opacity='0.15'
                />
              </pattern>
            </defs>
            <rect
              width='100%'
              height='100%'
              fill='url(#navDots)'
            />

            {/* Floating doodle elements */}
            <motion.circle
              cx='50'
              cy='40'
              r='3'
              fill='#00B6E7'
              opacity='0.3'
              animate={{
                scale: [1, 1.3, 1],
                y: [0, -2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx='350'
              cy='30'
              r='2'
              fill='#00B6E7'
              opacity='0.4'
              animate={{
                scale: [1, 1.5, 1],
                y: [0, 3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* Wavy doodle line */}
            <motion.path
              d='M0,60 Q50,50 100,60 T200,60 Q250,50 300,60 T400,60'
              stroke='#00B6E7'
              strokeWidth='1'
              fill='none'
              opacity='0.2'
              strokeDasharray='3,2'
              animate={{
                pathLength: [0, 1, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>

          {/* Comic-style border */}
          {/* <div
            className='absolute bottom-0 left-0 right-0 h-1'
            style={{
              backgroundColor: "#00B6E7",
              opacity: scrolled ? 0.6 : 0.3,
            }}
          /> */}
        </motion.div>

        <div className='relative mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-20'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <Link
                  href='/'
                  onClick={() => setNavOpen(false)}
                >
                  <motion.div
                    whileHover={{
                      scale: 0.95,
                      y: -2,
                      rotate: 1,
                    }}
                    whileTap={{ scale: 0.9 }}
                    className='relative group'
                  >
                    {/* Cartoon-style logo glow */}
                    <motion.div
                      className='absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                      style={{
                        backgroundColor: "rgba(0, 182, 231, 0.1)",
                        filter: "blur(8px)",
                      }}
                      animate={{
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <Image
                      src='/tb-logo.svg'
                      width='120'
                      height='40'
                      className='h-auto relative z-10'
                      alt='Thought Bubbles Logo'
                    />

                    {/* Sparkle effects around logo */}
                    <motion.div
                      className='absolute -top-1 -right-1 w-2 h-2 rounded-full'
                      style={{ backgroundColor: "#00B6E7" }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                    />
                  </motion.div>
                </Link>
              </div>
            </div>

            <div className='flex items-center z-50'>
              <motion.button
                whileHover={{
                  scale: 0.95,
                  rotate: navOpen ? 0 : 5,
                  y: -1,
                }}
                whileTap={{ scale: 0.85 }}
                className='relative group inline-flex items-center justify-center p-3 rounded-2xl cursor-pointer overflow-hidden'
                onClick={handleNav}
                style={{
                  backgroundColor: "white",
                  border: "3px solid #00B6E7",
                  boxShadow: "4px 4px 0px #00B6E7",
                  color: "#1E1E1E",
                }}
              >
                {/* Comic-style button shine */}
                <motion.div
                  className='absolute top-1 left-1 right-1 h-1 rounded-full'
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Icon transition with bounce */}
                <motion.div
                  animate={{
                    rotate: navOpen ? 180 : 0,
                    scale: navOpen ? 1.1 : 1,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 300,
                  }}
                  className='relative z-10'
                >
                  {navOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* FULL OPEN Navbar with Cartoon Theme */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className='fixed top-0 bottom-0 left-0 right-0 z-40 overflow-hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: "#F2F2F2",
            }}
          >
            {/* Cartoon background with floating doodles */}
            <svg
              className='absolute inset-0 w-full h-full pointer-events-none'
              viewBox='0 0 800 600'
              preserveAspectRatio='xMidYMid slice'
            >
              <defs>
                <pattern
                  id='fullNavDots'
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
                    opacity='0.1'
                  />
                </pattern>
              </defs>
              <rect
                width='100%'
                height='100%'
                fill='url(#fullNavDots)'
              />

              {/* Animated doodle paths */}
              <motion.path
                d='M100,100 Q200,50 300,100 T500,100'
                stroke='#00B6E7'
                strokeWidth='2'
                fill='none'
                strokeLinecap='round'
                strokeDasharray='8,4'
                opacity='0.3'
                animate={{
                  pathLength: [0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.path
                d='M600,400 C650,350 750,450 800,400'
                stroke='#00B6E7'
                strokeWidth='2'
                fill='none'
                strokeLinecap='round'
                strokeDasharray='6,3'
                opacity='0.2'
                animate={{
                  pathLength: [0, 1, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              {/* Floating cartoon bubbles */}
              <motion.circle
                cx='150'
                cy='450'
                r='25'
                stroke='#00B6E7'
                strokeWidth='2'
                fill='rgba(0, 182, 231, 0.1)'
                opacity='0.4'
                animate={{
                  scale: [1, 1.2, 1],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.circle
                cx='650'
                cy='150'
                r='35'
                stroke='#00B6E7'
                strokeWidth='2'
                fill='none'
                strokeDasharray='10,5'
                opacity='0.3'
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </svg>

            <div className='flex flex-col h-full justify-center items-center px-4 relative z-10'>
              {navLinks.map(({ name, url, parent }, index) => {
                const isActive = pathname == url || pathname.startsWith(`${parent}`);
                return (
                  <motion.div
                    key={url}
                    initial={{ y: 50, opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, scale: 0.9, rotate: 5 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 25,
                    }}
                    className='mb-8 sm:mb-10 md:mb-12 lg:mb-16'
                  >
                    <Link
                      href={url}
                      onClick={handleNav}
                      className='block'
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          y: -8,
                          rotate: index % 2 === 0 ? 2 : -2,
                        }}
                        whileTap={{
                          scale: 0.95,
                          rotate: 0,
                        }}
                        className={`relative font-oswald font-black text-4xl sm:text-5xl md:text-6xl text-center transition-all duration-300 ${isActive ? "text-blue-600" : "text-gray-800 hover:text-blue-600"}`}
                        style={{
                          color: isActive ? "#00B6E7" : "#1E1E1E",
                          textShadow: isActive ? "3px 3px 0px rgba(0, 182, 231, 0.2)" : "2px 2px 0px rgba(30, 30, 30, 0.1)",
                        }}
                      >
                        <span className='relative z-10'>{name}</span>

                        {/* Cartoon-style active indicator */}
                        {isActive && (
                          <motion.div
                            className='absolute -bottom-6 left-1/2 transform -translate-x-1/2'
                            initial={false}
                          >
                            {/* Hand-drawn underline */}
                            <svg
                              width='120'
                              height='20'
                              viewBox='0 0 120 20'
                            >
                              <motion.path
                                d='M10,15 Q30,5 60,15 T110,15'
                                stroke='#00B6E7'
                                strokeWidth='4'
                                fill='none'
                                strokeLinecap='round'
                                animate={{
                                  pathLength: [0, 1],
                                }}
                                transition={{
                                  duration: 0.8,
                                  ease: "easeOut",
                                }}
                              />
                            </svg>

                            {/* Sparkle dots */}
                            <motion.div
                              className='absolute -top-2 left-8 w-2 h-2 rounded-full'
                              style={{ backgroundColor: "#00B6E7" }}
                              animate={{
                                scale: [0, 1.5, 0],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: 0.3,
                              }}
                            />
                            <motion.div
                              className='absolute -top-1 right-8 w-1.5 h-1.5 rounded-full'
                              style={{ backgroundColor: "#00B6E7" }}
                              animate={{
                                scale: [0, 1.2, 0],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: 0.6,
                              }}
                            />
                          </motion.div>
                        )}

                        {/* Hover sparkle effect */}
                        <motion.div
                          className='absolute -top-2 -right-2 w-3 h-3 rounded-full'
                          style={{ backgroundColor: "#00B6E7" }}
                          animate={{
                            scale: [0, 1, 0],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.5,
                          }}
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Cartoon-style footer doodle */}
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
              <svg
                width='100'
                height='30'
                viewBox='0 0 100 30'
              >
                <motion.path
                  d='M10,20 Q25,10 50,20 T90,20'
                  stroke='#00B6E7'
                  strokeWidth='2'
                  fill='none'
                  strokeLinecap='round'
                  strokeDasharray='4,2'
                  animate={{
                    pathLength: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
