// TODO: Need Mobile Navbar to be above content when toggled. Currently moves the content

"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "react-feather";
import { motion } from "framer-motion";

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
      {navOpen && (
        <div className='md:hidden bg-white '>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navLinks.map(({ name, url, parent }) => {
              const isActive = pathname == url || pathname.startsWith(`${parent}`);
              return (
                <Link
                  key={url}
                  className={`p-2 block ${isActive ? "text-tb-black " : "text-neutral-400 hover:text-tb-body duration-300"}`}
                  href={url}
                  onClick={handleNav}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
