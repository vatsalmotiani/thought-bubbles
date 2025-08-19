"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { Home, Info, Folder, MessageCircle } from "lucide-react";
import { Instagram, Linkedin, Facebook, Mail, MapPin, ArrowUp } from "react-feather";

export default function DesktopDockNavbar() {
  const pathname = usePathname();

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [dockHovered, setDockHovered] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [footerProgress, setFooterProgress] = useState(0);

  useEffect(() => {
    setFooterProgress(0);
    setIsShrunk(true);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = document.body.scrollHeight - window.innerHeight;
      const offsetIntoBottom = Math.max(0, window.scrollY - (pageHeight - 200));
      const progress = Math.min(offsetIntoBottom / 200, 1);
      setFooterProgress(progress);

      if (progress === 0 && window.scrollY > 60) setIsShrunk(true);
      if (progress === 0 && window.scrollY <= 60) setIsShrunk(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // -------------------------------------------
  // Remap progress so that 0–0.15 is still "dock"
  const delayed = Math.max(0, footerProgress - 0.15) / 0.85;
  // -------------------------------------------

  // height 0→140px based on delayed
  const smoothHeight = delayed * 140;

  // micro-step width from delayed value
  const rawWidth = delayed;
  const stepped = Math.floor(rawWidth * 50) / 50; // 50 steps
  const width = stepped > 0 ? `${20 + stepped * 80}%` : "auto";

  const containerScale =
    footerProgress > 0
      ? 1 // <-- force full dock scale while transitioning to footer
      : dockHovered
      ? 1
      : isShrunk
      ? 0.65
      : 1;

  // expand labels only after width is ~90% of the page
  const showLabels = stepped >= 0.875;

  // extra items at different thresholds
  const showEmailAddress = delayed >= 0.65;
  const showSocialCopyright = delayed >= 0.85;

  const borderRadius = 30;

  const navLinks = [
    { name: "Home", url: "/", Icon: Home },
    { name: "About Us", url: "/about", Icon: Info },
    { name: "Our Work", url: "/work", Icon: Folder },
    { name: "Let's Talk", url: "/contact-us", Icon: MessageCircle },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className='fixed bottom-3 left-1/2 -translate-x-1/2 z-[60] w-full flex justify-center'>
      <motion.div
        onMouseEnter={() => setDockHovered(true)}
        onMouseLeave={() => setDockHovered(false)}
        initial={{ width: "auto", borderRadius: 30 }}
        animate={{ scale: containerScale, width, borderRadius }}
        transition={{ type: "spring", stiffness: 230, damping: 26 }}
        style={{ transformOrigin: "bottom center" }}
        className='flex flex-col items-center bg-[rgba(255,255,255,0.18)] backdrop-blur-3xl border border-[rgba(255,255,255,0.3)] shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-6px_12px_rgba(0,0,0,0.04)] overflow-hidden'
      >
        <div className='flex items-center gap-4 sm:gap-6 px-6 sm:px-12 py-3 sm:py-5'>
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
            const shouldExpand = isActive || hoveredIndex === i || (footerProgress > 0 && stepped >= 0.875);

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
        </div>

        {/* Content morph -------------------------------------------------- */}
        <motion.div
          animate={{ height: smoothHeight }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className='w-full overflow-hidden px-6 sm:px-12 '
        >
          {showEmailAddress && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className='flex flex-col gap-2 text-[11px] text-[#1E1E1E] pb-2'
            >
              <div className='flex items-start'>
                <Mail
                  size={14}
                  className='text-[#00B6E7] mr-2'
                />
                <a
                  href='mailto:manoj.motiani@thoughtbubbles.in'
                  className='hover:underline text-tb-body'
                >
                  manoj.motiani@thoughtbubbles.in
                </a>
              </div>
              <div className='flex items-start'>
                <MapPin
                  size={14}
                  className='text-[#00B6E7] mr-2'
                />
                <p className='text-tb-body'>A-6, 1st Floor, My Mother's Society, RC Marg, Chembur, Mumbai 400071</p>
              </div>
            </motion.div>
          )}

          {showSocialCopyright && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className='text-[11px] text-[#1E1E1E]'
            >
              <div className='flex justify-between items-center pb-2'>
                <div className='flex space-x-3'>
                  <a
                    href='https://www.instagram.com/thoughtbubbles_/'
                    target='_blank'
                  >
                    <Instagram
                      color='#828282'
                      size={16}
                    />
                  </a>
                  <a
                    href='https://in.linkedin.com/in/thought-bubbles-advertising-0aa385290'
                    target='_blank'
                  >
                    <Linkedin
                      color='#828282'
                      size={16}
                    />
                  </a>
                  <a
                    href='/'
                    target='_blank'
                  >
                    <Facebook
                      color='#828282'
                      size={16}
                    />
                  </a>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToTop}
                  className='rounded-full p-2 border-2 border-[#00B6E7] bg-white shadow-sm'
                >
                  <ArrowUp size={14} />
                </motion.button>
              </div>
              <div className='pt-1 border-t border-[#00B6E7] text-tb-body text-center text-[10px]'>© 2025 Thought Bubbles Advertising. All rights reserved.</div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
