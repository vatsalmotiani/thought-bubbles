"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "react-feather";
import Reveal from "./Reveal";

export default function Navbar() {
  const pathname = usePathname();

  const [navOpen, setNavOpen] = useState(false);
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

  return (
    <nav
      id='top'
      className='fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/20'
    >
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <Link
                href='/'
                onClick={() => setNavOpen(false)}
              >
                <motion.div 
                  whileHover={{ scale: 0.96 }}
                  className="relative"
                >
                  <Image
                    src='/tb-logo.svg'
                    width='120'
                    height='40'
                    className='h-auto'
                    alt='Thought Bubbles Logo'
                  />
                </motion.div>
              </Link>
            </div>
          </div>
          
          <div className='flex items-center z-50'>
            <motion.button
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.95 }}
              className='inline-flex items-center justify-center p-3 rounded-xl cursor-pointer text-neutral-600 hover:text-tb-blue hover:bg-white/50 transition-all duration-300'
              onClick={handleNav}
            >
              {navOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* FULL OPEN Navbar*/}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className='bg-white/95 backdrop-blur-xl h-screen fixed top-0 bottom-0 left-0 right-0 z-40'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <div className='flex flex-col h-full justify-center items-center px-4'>
              {navLinks.map(({ name, url, parent }, index) => {
                const isActive = pathname == url || pathname.startsWith(`${parent}`);
                return (
                  <motion.div
                    key={url}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      className={`mb-8 sm:mb-10 md:mb-12 lg:mb-16 font-medium text-3xl sm:text-4xl md:text-5xl block text-center ${isActive ? "text-tb-blue" : "text-neutral-600 hover:text-tb-blue duration-300"}`}
                      href={url}
                      onClick={handleNav}
                    >
                      <motion.div
                        whileHover={{ scale: 0.97, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                      >
                        {name}
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute -bottom-2 left-0 right-0 h-1 bg-tb-blue rounded-full"
                            initial={false}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
