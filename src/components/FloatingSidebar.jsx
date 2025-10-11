"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

export default function FloatingSidebar() {
  const navItems = [
    { id: "jumbotron", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  const [activeId, setActiveId] = useState(navItems[0].id);
  const ticking = useRef(false);

  // Smooth scroll on click (doesn't affect wheel/trackpad scrolling)
  const handleClick = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id); // optimistic highlight on click
  }, []);

  // Compute which section is closest to the viewport center
  useEffect(() => {
    const getActive = () => {
      const center = window.scrollY + window.innerHeight / 2;
      let closest = { id: activeId, dist: Number.POSITIVE_INFINITY };

      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + window.scrollY + rect.height / 2;
        const dist = Math.abs(elCenter - center);
        if (dist < closest.dist) closest = { id, dist };
      }

      if (closest.id && closest.id !== activeId) setActiveId(closest.id);
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        getActive();
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll(); // initial

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav
      aria-label='Section navigation'
      className='pointer-events-none fixed left-6 top-1/2 -translate-y-1/2 z-50'
    >
      <ul className='flex flex-col gap-6'>
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li
              key={item.id}
              className='pointer-events-auto cursor-effect-text'
            >
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                onClick={(e) => handleClick(e, item.id)}
                className='group relative block overflow-hidden font-noto text-[11px] tracking-wide select-none'
              >
                {/* Slot-style hover */}
                <motion.span
                  initial={{ y: 0 }}
                  whileHover={{ y: "-100%" }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className='relative block'
                >
                  <span className={"block transition-colors duration-200 " + (isActive ? "text-tb-black" : "text-tb-black/50 group-hover:text-tb-black")}>{item.label}</span>
                  <span className={"absolute top-full left-0 block transition-colors duration-200 " + (isActive ? "text-tb-black" : "text-tb-black/50 group-hover:text-tb-black")}>{item.label}</span>
                </motion.span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
