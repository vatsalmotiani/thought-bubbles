"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DesktopDockNavbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Our Work", url: "/work" },
    { name: "Let's Talk", url: "/contact-us" },
  ];

  return (
    <div className='hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-[60]'>
      <div
        className='flex items-center gap-8 px-12 py-5 rounded-full'
        style={{
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(35px) brightness(1.25) saturate(1.4)",
          border: "1px solid rgba(255,255,255,0.3)",
          boxShadow: "inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -6px 12px rgba(0,0,0,0.04)",
        }}
      >
        <Link href={"/"}>
          <Image
            src='/tb-logo.svg'
            width='66'
            height='22'
            className='h-auto relative z-10'
            alt='Thought Bubbles Logo'
          />
        </Link>
        <div className='h-8 border-[1px] rounded-lg border-tb-body/10'></div>
        {navLinks.map((link) => {
          const isActive = pathname === link.url || (link.url !== "/" && pathname.startsWith(link.url));

          if (link.capsule) {
            return (
              <Link
                href={link.url}
                key={link.url}
              >
                <motion.span
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.94 }}
                  className='px-5 py-2 rounded-full text-[13px]'
                  style={{
                    background: "rgba(255,255,255,0.35)",
                    backdropFilter: "blur(26px)",
                    border: "1px solid rgba(255,255,255,0.35)",
                    fontWeight: 600,
                    color: isActive ? "#00B6E7" : "#1E1E1E",
                  }}
                >
                  {link.name}
                </motion.span>
              </Link>
            );
          }

          return (
            <Link
              href={link.url}
              key={link.url}
            >
              <motion.span
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.94 }}
                className='text-[13px]'
                style={{
                  fontWeight: 600,
                  color: isActive ? "#00B6E7" : "#1E1E1E",
                }}
              >
                {link.name}
              </motion.span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
