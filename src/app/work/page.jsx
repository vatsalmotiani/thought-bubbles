"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronDown, Filter, Grid } from "lucide-react";
import { slugify, unslugify, slugifyList } from "@/lib/utils";
import caseList from "@/data/caseList";
import serviceList from "@/data/services";
import { notFound } from "next/navigation";

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

// Case Card Component
const CaseCard = ({ caseStudy, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, rotate: -2 }}
    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
    transition={{
      delay: 0.1 + index * 0.1,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{
      scale: 1.02,
      rotate: index % 2 === 0 ? 1 : -1,
      y: -8,
    }}
    className='relative group cursor-pointer'
  >
    <div
      className='relative rounded-3xl border-4 overflow-hidden transform'
      style={{
        backgroundColor: "white",
        borderColor: "#00B6E7",
        boxShadow: "8px 8px 0px #00B6E7",
      }}
    >
      <div className='aspect-video overflow-hidden'>
        <img
          src={caseStudy.image || caseStudy.mainImage}
          alt={caseStudy.title}
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
        />
      </div>

      <div className='p-6'>
        <h3
          className='text-xl font-black mb-2'
          style={{ color: "#1E1E1E" }}
        >
          {caseStudy.title}
        </h3>
        <p
          className='text-sm font-medium mb-3'
          style={{ color: "#828282" }}
        >
          {caseStudy.description || caseStudy.shortDesc}
        </p>
        <div className='flex flex-wrap gap-2'>
          {caseStudy.category.map((cat, i) => (
            <span
              key={i}
              className='px-3 py-1 rounded-full text-xs font-bold border-2'
              style={{
                backgroundColor: "rgba(0, 182, 231, 0.1)",
                borderColor: "#00B6E7",
                color: "#00B6E7",
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Floating sparkle */}
    <motion.div
      className='absolute -top-2 -right-2 w-6 h-6 rounded-full'
      style={{ backgroundColor: "#00B6E7" }}
      animate={{
        scale: [0, 1, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: index * 0.3,
      }}
    />
  </motion.div>
);

// Category Navigation
const CategoryNavigation = ({ services, activeCategory, onCategoryChange }) => (
  <div className='hidden md:flex w-full justify-center mt-8 mb-12'>
    <div
      className='flex items-center gap-3 p-2 rounded-3xl border-4'
      style={{
        backgroundColor: "white",
        borderColor: "#00B6E7",
        boxShadow: "4px 4px 0px #00B6E7",
      }}
    >
      <motion.button
        onClick={() => onCategoryChange("All")}
        className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${activeCategory === "All" ? "text-white" : "hover:bg-blue-50"}`}
        style={{
          backgroundColor: activeCategory === "All" ? "#00B6E7" : "transparent",
          color: activeCategory === "All" ? "white" : "#1E1E1E",
        }}
        whileHover={{ scale: 0.96 }}
        whileTap={{ scale: 0.94 }}
      >
        All
      </motion.button>
      {services.map((service, i) => (
        <motion.button
          key={i}
          onClick={() => onCategoryChange(service)}
          className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${activeCategory === service ? "text-white" : "hover:bg-blue-50"}`}
          style={{
            backgroundColor: activeCategory === service ? "#00B6E7" : "transparent",
            color: activeCategory === service ? "white" : "#1E1E1E",
          }}
          whileHover={{ scale: 0.96 }}
          whileTap={{ scale: 0.94 }}
        >
          {service}
        </motion.button>
      ))}
    </div>
  </div>
);

// Mobile Dropdown
const MobileDropdown = ({ services, activeCategory, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);

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
          <motion.button
            onClick={() => {
              onCategoryChange("All");
              setIsOpen(false);
            }}
            className='w-full px-6 py-3 text-left font-medium hover:bg-blue-50 transition-colors'
            style={{ color: "#1E1E1E" }}
            whileHover={{ x: 4 }}
          >
            All
          </motion.button>
          {services.map((service, i) => (
            <motion.button
              key={i}
              onClick={() => {
                onCategoryChange(service);
                setIsOpen(false);
              }}
              className='w-full px-6 py-3 text-left font-medium hover:bg-blue-50 transition-colors'
              style={{ color: "#1E1E1E" }}
              whileHover={{ x: 4 }}
            >
              {service}
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

// Main Component
export default function WorkShowcase() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Filter cases based on active category
  const filteredCases = activeCategory === "All" ? caseList : caseList.filter((caseStudy) => caseStudy.category.includes(activeCategory));

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
    <section
      ref={containerRef}
      className='relative min-h-screen py-16 overflow-hidden'
      style={{ backgroundColor: "#F2F2F2" }}
    >
      {/* Animated Background */}
      <div className='absolute inset-0'>
        <svg
          className='absolute inset-0 w-full h-full'
          viewBox='0 0 1200 800'
          preserveAspectRatio='xMidYMid slice'
        >
          <defs>
            <pattern
              id='work-dots'
              x='0'
              y='0'
              width='60'
              height='60'
              patternUnits='userSpaceOnUse'
            >
              <circle
                cx='30'
                cy='30'
                r='2'
                fill='#00B6E7'
                opacity='0.1'
              />
            </pattern>
          </defs>

          <rect
            width='100%'
            height='100%'
            fill='url(#work-dots)'
          />

          {/* Animated doodle paths */}
          <motion.path
            d='M100,300 Q300,200 500,300 T900,300'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='none'
            strokeLinecap='round'
            strokeDasharray='12,6'
            opacity='0.2'
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>

        {/* Floating bubbles */}
        {bubbles.map((bubble) => (
          <FloatingBubble
            key={bubble.id}
            {...bubble}
          />
        ))}
      </div>

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
              OUR WORK
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className='text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6'
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

          {/* Animated underline doodle */}
          <svg
            className='mx-auto mt-4'
            width='200'
            height='15'
            viewBox='0 0 200 15'
          >
            <motion.path
              d='M10,8 Q50,3 100,8 T190,8'
              stroke='#00B6E7'
              strokeWidth='3'
              fill='none'
              strokeLinecap='round'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
            />
          </svg>
        </motion.div>

        {/* Filter Navigation */}
        <CategoryNavigation
          services={serviceList}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <MobileDropdown
          services={serviceList}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Cases Grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'
          layout
        >
          {filteredCases.map((caseStudy, index) => (
            <CaseCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              index={index}
            />
          ))}
        </motion.div>

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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mt-20'
        >
          <div className='relative inline-block'>
            <motion.div
              className='relative px-8 py-4 rounded-3xl border-4'
              style={{
                backgroundColor: "white",
                borderColor: "#00B6E7",
                boxShadow: "6px 6px 0px #00B6E7",
              }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <p
                className='font-medium'
                style={{ color: "#1E1E1E" }}
              >
                Love what you see? <span style={{ color: "#00B6E7", fontWeight: "600" }}>Let's create your story!</span>
              </p>
            </motion.div>

            {/* Floating sparkles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className='absolute w-3 h-3 rounded-full'
                style={{
                  backgroundColor: "#00B6E7",
                  left: `${20 + i * 30}%`,
                  top: `${-5 + (i % 2) * 10}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
