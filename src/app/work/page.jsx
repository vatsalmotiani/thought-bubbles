"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown, Filter, Grid } from "lucide-react";
import { slugify, unslugify, slugifyList } from "@/lib/utils";
import caseList from "@/data/caseList";
import serviceList from "@/data/services";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CaseStudyDisplay from "@/components/CaseCard";

// Floating bubble component
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
          <motion.div
            whileHover={{ scale: 0.96 }}
            whileTap={{ scale: 0.94 }}
          >
            All
          </motion.div>
        </button>
        {services.map((service, i) => (
          <button
            key={i}
            onClick={() => handleCategoryChange(service)}
            className={`${serviceClass} ${activeCategory === service ? `${activeServiceClass}` : "text-[#1E1E1E] hover:text-[#00B6E7]"}`}
          >
            <motion.div
              whileHover={{ scale: 0.96 }}
              whileTap={{ scale: 0.94 }}
            >
              {service}
            </motion.div>
          </button>
        ))}
      </div>
    </div>
  );
};

// Updated Mobile Dropdown
const MobileDropdown = ({ services, activeCategory, setActiveCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", slugify(category));
    window.history.pushState({}, "", `${pathname}?${params.toString()}`);
    setActiveCategory(category);
    setIsOpen(false);
  };

  return (
    <div className='md:hidden relative mb-8'>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center justify-between w-full max-w-xs mx-auto px-6 py-4 rounded-2xl border-4 font-bold'
        style={{
          backgroundColor: "white",
          borderColor: "#00B6E7",
          boxShadow: "4px 4px 0px #00B6E7",
          color: "#1E1E1E",
        }}
        whileTap={{ scale: 0.98 }}
      >
        <span>{activeCategory}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown
            size={20}
            color='#00B6E7'
          />
        </motion.div>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-xs rounded-2xl border-4 overflow-hidden z-20'
          style={{
            backgroundColor: "white",
            borderColor: "#00B6E7",
            boxShadow: "4px 4px 0px #00B6E7",
          }}
        >
          <button
            onClick={() => handleCategoryChange("All")}
            className='w-full px-6 py-3 text-left font-medium hover:bg-blue-50 transition-colors'
            style={{ color: "#1E1E1E" }}
          >
            <motion.div whileHover={{ x: 4 }}>All</motion.div>
          </button>
          {services.map((service, i) => (
            <button
              key={i}
              onClick={() => handleCategoryChange(service)}
              className='w-full px-6 py-3 text-left font-medium hover:bg-blue-50 transition-colors'
              style={{ color: "#1E1E1E" }}
            >
              <motion.div whileHover={{ x: 4 }}>{service}</motion.div>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

// Updated Main Component
export default function WorkShowcase() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredCases, setFilteredCases] = useState(caseList);

  // Initialize category from URL on first load
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      const categoryFromUrl = unslugify(categoryParam);
      if (serviceList.includes(categoryFromUrl)) {
        setActiveCategory(categoryFromUrl);
        setFilteredCases(caseList.filter((caseStudy) => caseStudy.category.includes(categoryFromUrl)));
      }
    }
  }, [searchParams]);

  // Filter cases whenever activeCategory changes
  useEffect(() => {
    const newFilteredCases = activeCategory === "All" ? caseList : caseList.filter((caseStudy) => caseStudy.category.includes(activeCategory));
    setFilteredCases(newFilteredCases);
  }, [activeCategory]);

  // Generate floating bubbles
  const bubbles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: 15 + Math.random() * 35,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 12,
  }));

  return (
    <section className='relative min-h-screen py-16 overflow-hidden'>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className='text-center mb-16'
        >
          {/* Cartoon badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='inline-flex items-center gap-2 px-6 py-3 rounded-full border-3 mb-6'
            style={{
              backgroundColor: "white",
              borderColor: "#00B6E7",
              boxShadow: "4px 4px 0px #00B6E7",
            }}
          >
            <Grid
              size={20}
              color='#00B6E7'
            />
            <span
              className='font-bold text-sm'
              style={{ color: "#1E1E1E" }}
            >
              Our Work
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className='text-5xl md:text-6xl lg:text-7xl font-oswald uppercase font-black leading-tight mb-6'
            style={{
              color: "#1E1E1E",
              fontFamily: "Oswald, sans-serif",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our Creative
            <motion.span
              className='block'
              style={{ color: "#00B6E7" }}
              animate={{
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Playground
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='text-lg md:text-xl max-w-3xl mx-auto font-medium'
            style={{ color: "#828282" }}
          >
            Dive into our collection of <span style={{ color: "#00B6E7", fontWeight: "600" }}>creative campaigns</span> and see how we bring brands to life with that extra sprinkle of magic.
          </motion.p>
        </motion.div>
        {/* Updated Filter Navigation */}
        <CategoryNavigation
          services={serviceList}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <MobileDropdown
          services={serviceList}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Cases Grid */}
        <CaseStudyDisplay
          caseStudies={filteredCases}
          withAnimation={true}
        />

        {/* Empty state */}
        {filteredCases.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className='text-center py-20'
          >
            <div
              className='inline-block p-8 rounded-3xl border-4'
              style={{
                backgroundColor: "white",
                borderColor: "#00B6E7",
                boxShadow: "8px 8px 0px #00B6E7",
              }}
            >
              <Filter
                size={48}
                color='#00B6E7'
                className='mx-auto mb-4'
              />
              <h3
                className='text-2xl font-black mb-2'
                style={{ color: "#1E1E1E" }}
              >
                No cases found
              </h3>
              <p style={{ color: "#828282" }}>Try selecting a different category to see our amazing work!</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Floating bubbles */}
      {bubbles.map((bubble) => (
        <FloatingBubble
          key={bubble.id}
          {...bubble}
        />
      ))}
    </section>
  );
}
