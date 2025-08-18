"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { Home, Info, Folder, MessageCircle } from "lucide-react";

export default function DesktopDockNavbar() {
  const pathname = usePathname();
  const [isShrunk, setIsShrunk] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [dockHovered, setDockHovered] = useState(false);

  // scroll => shrink
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 60) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // links
  const navLinks = [
    { name: "Home", url: "/", Icon: Home },
    { name: "About Us", url: "/about", Icon: Info },
    { name: "Our Work", url: "/work", Icon: Folder },
    { name: "Let's Talk", url: "/contact-us", Icon: MessageCircle },
  ];

  // container scale logic
  const containerScale = dockHovered ? 1 : isShrunk ? 0.65 : 1;

  return (
    <div className='flex fixed bottom-3 left-1/2 -translate-x-1/2 z-[60] w-full justify-center'>
      <motion.div
        onMouseEnter={() => setDockHovered(true)}
        onMouseLeave={() => setDockHovered(false)}
        animate={{ scale: containerScale }}
        transition={{ type: "spring", stiffness: 250, damping: 30 }}
        style={{ transformOrigin: "bottom center" }}
        className='flex items-center gap-4 sm:gap-6 px-6 sm:px-12 py-3 sm:py-5 rounded-full w-max bg-[rgba(255,255,255,0.18)] backdrop-blur-3xl border border-[rgba(255,255,255,0.3)] shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-6px_12px_rgba(0,0,0,0.04)]'
      >
        <Link href='/'>
          <Image
            src='/tb-logo.svg'
            width={66}
            height={22}
            alt='Thought Bubbles Logo'
          />
        </Link>

        <div className='h-6 sm:h-8 border-[1px] rounded-lg border-tb-body/10' />

        {navLinks.map(({ name, url, Icon }, i) => {
          const isActive = pathname === url || (url !== "/" && pathname.startsWith(url));
          const shouldExpand = isActive || hoveredIndex === i;

          return (
            <Link
              key={url}
              href={url}
            >
              <motion.div
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{ scale: shouldExpand ? 1.08 : 1 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className='flex items-center px-4 py-2 cursor-pointer'
              >
                <Icon
                  size={18}
                  className={isActive ? "text-[#00B6E7]" : "text-[#1E1E1E]"}
                />
                <motion.span
                  initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                  animate={{
                    width: shouldExpand ? "auto" : 0,
                    opacity: shouldExpand ? 1 : 0,
                    marginLeft: shouldExpand ? 12 : 0,
                  }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className='overflow-hidden text-[12px] sm:text-[13px] font-semibold whitespace-nowrap'
                  style={{ color: isActive ? "#00B6E7" : "#1E1E1E" }}
                >
                  {name}
                </motion.span>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
