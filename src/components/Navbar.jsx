"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "react-feather";
// ... (previous imports)

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
      name: "Contact Us",
      url: "/contact-us",
    },
  ];

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className='bg-white md:bg-transparent w-full font-medium  md:pb-4 border-neutral-100 '>
      <div className=' mx-auto pb-4 md:pb-0 pt-4 px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center '>
            <div className='flex-shrink-0'>
              <Link
                href='/'
                onClick={() => setNavOpen(false)}
              >
                <motion.div whileHover={{ scale: 0.96 }}>
                  <Image
                    src='/tb-logo.svg'
                    width='100'
                    height='0'
                    sizes='100vw'
                    className='h-auto'
                    alt='Thought Bubbles Logo'
                  />
                </motion.div>
              </Link>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='ml-4 flex items-center space-x-4 '>
              {navLinks.map(({ name, url, parent }) => {
                const isActive = pathname == url || pathname.startsWith(`${parent}`);

                return (
                  <Link
                    key={url}
                    className={`px-4 ${isActive ? "text-tb-black " : "text-neutral-400 hover:text-tb-body duration-300"}`}
                    href={url}
                  >
                    <motion.div whileHover={{ scale: 0.96 }}>{name}</motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className='md:hidden flex items-center'>
            <button
              className='inline-flex items-center justify-center p-2 rounded-md'
              onClick={handleNav}
            >
              {navOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {/* MOBILE VERSION WHEN OPEN*/}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className='md:hidden bg-white h-full fixed top-0 bottom-0 left-0 right-0 z-50'
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 1, scale: 1 }}
          >
            <div className='md:hidden flex justify-end p-4'>
              <motion.button
                className='inline-flex items-center mt-3 p-2 rounded-md'
                onClick={handleNav}
                whileHover={{ scale: 0.96 }}
              >
                {navOpen ? <X /> : <Menu />}
              </motion.button>
            </div>
            <div className='-mt-9 flex flex-col h-full items-center justify-center'>
              {navLinks.map(({ name, url, parent }, index) => {
                const isActive = pathname == url || pathname.startsWith(`${parent}`);
                return (
                  <motion.div
                    key={url}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <Link
                      className={`pb-14 text-4xl block ${isActive ? "text-tb-black " : "text-neutral-400 hover:text-tb-body duration-300"}`}
                      href={url}
                      onClick={handleNav}
                    >
                      {name}
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
