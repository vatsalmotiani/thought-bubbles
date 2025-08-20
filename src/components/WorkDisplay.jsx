"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { slugify, unslugify } from "@/lib/utils";
import caseList from "@/data/caseList";
import serviceList from "@/data/services";
import { usePathname, useSearchParams } from "next/navigation";
import CaseStudyDisplay from "@/components/CaseCard";

// ---------------- Floating bubble ----------------
const FloatingBubble = ({ size, x, y, delay, duration }) => (
  <motion.div
    className='absolute rounded-full border-2'
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
      borderColor: "#00B6E7",
      opacity: 0.15,
      backgroundColor: "rgba(0, 182, 231, 0.05)",
    }}
    animate={{
      y: [0, -20, 0],
      x: [0, Math.sin(delay) * 10, 0],
      scale: [1, 1.1, 1],
      rotate: [0, 360],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
  />
);

// ---------------- Category Navigation ----------------
const CategoryNavigation = ({ services, activeCategory, setActiveCategory }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const serviceClass = "px-3 sm:px-4 py-2 mx-1 sm:mx-2 font-medium xl:mx-2 duration-300 whitespace-nowrap text-sm sm:text-base";
  const activeServiceClass = "bg-[#00B6E7] text-white rounded-xl sm:rounded-2xl border-2 border-neutral-100";

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", slugify(category));
    window.history.pushState({}, "", `${pathname}?${params.toString()}`);
    setActiveCategory(category);
  };

  return (
    <div className='hidden md:flex w-full justify-center mt-8 mb-12'>
      <div
        className='flex items-center gap-3 p-2 rounded-3xl border-4'
        style={{
          backgroundColor: "white",
          borderColor: "#00B6E7",
          boxShadow: "4px 4px 0px #00B6E7",
        }}
      >
        <button
          onClick={() => handleCategoryChange("All")}
          className={`${serviceClass} ${activeCategory === "All" ? `${activeServiceClass}` : "text-[#1E1E1E] hover:text-[#00B6E7]"}`}
        >
          All
        </button>
        {services.map((service, i) => (
          <button
            key={i}
            onClick={() => handleCategoryChange(service)}
            className={`${serviceClass} ${activeCategory === service ? `${activeServiceClass}` : "text-[#1E1E1E] hover:text-[#00B6E7]"}`}
          >
            {service}
          </button>
        ))}
      </div>
    </div>
  );
};

// ---------------- Main ----------------
export default function WorkDisplay() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredCases, setFilteredCases] = useState(caseList);

  // Initialize from URL
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      const categoryFromUrl = unslugify(categoryParam);
      if (serviceList.includes(categoryFromUrl)) {
        setActiveCategory(categoryFromUrl);
        setFilteredCases(caseList.filter((c) => c.category.includes(categoryFromUrl)));
      }
    }
  }, [searchParams]);

  useEffect(() => {
    const newFilteredCases = activeCategory === "All" ? caseList : caseList.filter((c) => c.category.includes(activeCategory));
    setFilteredCases(newFilteredCases);
  }, [activeCategory]);

  const bubbles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: 15 + Math.random() * 35,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 12,
  }));

  return (
    <section
      id='work-display'
      className='relative min-h-screen py-16 overflow-hidden'
    >
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <CategoryNavigation
          services={serviceList}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <CaseStudyDisplay
          caseStudies={filteredCases}
          withAnimation={true}
        />
      </div>

      {bubbles.map((b) => (
        <FloatingBubble
          key={b.id}
          {...b}
        />
      ))}
    </section>
  );
}
