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
    <nav className='bg-white md:bg-transparent w-full md:pb-4 border-neutral-100 '>
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
          {/* <div className='hidden md:block'>
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
          </div> */}
          {/* <div className='md:hidden flex items-center'> */}
          <div className='flex items-center z-50'>
            <button
              className='inline-flex items-center justify-center z-100 p-2 rounded-md cursor-pointer text-neutral-400 hover:text-tb-body'
              onClick={handleNav}
            >
              {navOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {/* FULL OPEN Navbar*/}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className='bg-white h-full fixed top-0 bottom-0 left-0 right-0 z-20 '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            // exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            {/* <div className='flex justify-end pt-4 pe-7'>
              <motion.div
                className='inline-flex items-center mt-3 p-2 rounded-md cursor-pointer text-neutral-400 hover:text-tb-body'
                onClick={handleNav}
                whileHover={{ scale: 0.9 }}
              >
                {navOpen ? <X /> : <Menu />}
              </motion.div>
            </div> */}

            <div className='flex flex-col h-full justify-center items-center'>
              {navLinks.map(({ name, url, parent }, index) => {
                const isActive = pathname == url || pathname.startsWith(`${parent}`);
                return (
                  <motion.div
                    key={url}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 + index * 0.1 }}
                  >
                    <Link
                      className={`mb-8 md:mb-14 font-oswald uppercase font-medium text-6xl sm:text-7xl block ${isActive ? "text-tb-black " : "text-neutral-400 hover:text-tb-body duration-300"}`}
                      href={url}
                      onClick={handleNav}
                    >
                      <motion.div whileHover={{ scale: 0.97, bounce: 0.4, duration: 0.2, delay: 0 }}>{name}</motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            {/* <div className='flex flex-col h-full items-center justify-center'>
              {navLinks.map(({ name, url, parent }, index) => {
                const isActive = pathname == url || pathname.startsWith(`${parent}`);
                return (
                  <motion.div
                    key={url}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.4 + index * 0.2 }}
                  >
                    <Link
                      className={`mb-14 text-4xl md:text-6xl block ${isActive ? "text-tb-black " : "text-neutral-400 hover:text-tb-body duration-300"}`}
                      href={url}
                      onClick={handleNav}
                    >
                      {name}
                    </Link>
                  </motion.div>
                );
              })}
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
