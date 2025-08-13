"use client";
import { useState, useEffect } from "react";

const works = [
  {
    id: 1,
    title: "Creative Campaign",
    desc: "A vibrant marketing push blending design and strategy.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=center",
  },
  {
    id: 2,
    title: "Brand Identity",
    desc: "Crafting a unique and memorable brand experience.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop&crop=center",
  },
  {
    id: 3,
    title: "Product Launch",
    desc: "Driving awareness and engagement for a new product.",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop&crop=center",
  },
];

// Doodle SVG Components
function FloatingBubbles() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 40,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <svg
      className='absolute inset-0 w-full h-full pointer-events-none overflow-visible'
      style={{ zIndex: 1 }}
    >
      <defs>
        <filter id='wobble'>
          <feTurbulence
            baseFrequency='0.02'
            numOctaves='3'
            result='noise'
          />
          <feDisplacementMap
            in='SourceGraphic'
            in2='noise'
            scale='2'
          />
        </filter>
      </defs>

      {bubbles.map((bubble) => (
        <g key={bubble.id}>
          <circle
            cx={`${bubble.x}%`}
            cy={`${bubble.y}%`}
            r={bubble.size}
            fill='none'
            stroke='#00B6E7'
            strokeWidth='2'
            strokeDasharray='5,3'
            filter='url(#wobble)'
            opacity='0.4'
            style={{
              animation: `float ${bubble.duration}s ease-in-out infinite`,
              animationDelay: `${bubble.delay}s`,
            }}
          />
          <circle
            cx={`${bubble.x + 5}%`}
            cy={`${bubble.y - 3}%`}
            r={bubble.size * 0.3}
            fill='#00B6E7'
            opacity='0.2'
            style={{
              animation: `bounce ${bubble.duration * 0.7}s ease-in-out infinite`,
              animationDelay: `${bubble.delay + 1}s`,
            }}
          />
        </g>
      ))}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: scale(1) translateY(0px);
          }
          50% {
            transform: scale(1.2) translateY(-10px);
          }
        }
      `}</style>
    </svg>
  );
}

function DoodlePath() {
  return (
    <svg
      className='absolute top-20 left-10 w-64 h-32 pointer-events-none'
      style={{ zIndex: 2 }}
    >
      <path
        d='M10,50 Q30,10 60,50 T120,50 Q140,30 160,50 T210,50'
        fill='none'
        stroke='#00B6E7'
        strokeWidth='3'
        strokeLinecap='round'
        strokeDasharray='8,4'
        opacity='0.6'
        style={{
          animation: "drawPath 4s ease-in-out infinite",
        }}
      />
      <style jsx>{`
        @keyframes drawPath {
          0% {
            stroke-dashoffset: 100;
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </svg>
  );
}

function CartoonStars() {
  return (
    <svg
      className='absolute top-32 right-20 w-48 h-48 pointer-events-none'
      style={{ zIndex: 2 }}
    >
      <g style={{ animation: "sparkle 3s ease-in-out infinite" }}>
        <path
          d='M50,10 L55,25 L70,25 L58,35 L63,50 L50,40 L37,50 L42,35 L30,25 L45,25 Z'
          fill='#00B6E7'
          opacity='0.7'
          transform='scale(0.6)'
        />
        <path
          d='M120,30 L123,38 L131,38 L125,43 L128,51 L120,46 L112,51 L115,43 L109,38 L117,38 Z'
          fill='#00B6E7'
          opacity='0.5'
          transform='scale(0.4)'
        />
      </g>
      <style jsx>{`
        @keyframes sparkle {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: rotate(180deg) scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </svg>
  );
}

// Animation hook
function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);

  const ref = (node) => {
    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(node);
    }
  };

  return [ref, isVisible];
}

// Cartoon Work Card
function CartoonWorkCard({ work, index, isVisible }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const cardStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? (isHovered ? "translateY(-10px) rotate(1deg) scale(1.05)" : "translateY(0px) rotate(0deg) scale(1)") : "translateY(60px) scale(0.8)",
    transition: `all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)`,
    transitionDelay: isVisible ? `${index * 0.3}s` : "0s",
  };

  return (
    <div className='relative'>
      {/* Hand-drawn border effect */}
      <svg
        className='absolute inset-0 w-full h-full pointer-events-none'
        style={{ zIndex: 1 }}
      >
        <rect
          x='4'
          y='4'
          width='calc(100% - 8px)'
          height='calc(100% - 8px)'
          fill='none'
          stroke='#00B6E7'
          strokeWidth='2'
          strokeDasharray='10,5'
          rx='20'
          opacity='0.4'
          style={{
            animation: "wiggle 6s ease-in-out infinite",
          }}
        />
        <style jsx>{`
          @keyframes wiggle {
            0%,
            100% {
              stroke-dashoffset: 0;
            }
            50% {
              stroke-dashoffset: 15;
            }
          }
        `}</style>
      </svg>

      <div
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className='relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500'
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)",
          border: "3px solid #00B6E7",
          borderStyle: "dashed",
          zIndex: 2,
        }}
      >
        {/* Cartoon image frame */}
        <div className='relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 border-3 border-dashed border-blue-200'>
          <img
            src={work.img}
            alt={work.title}
            className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? "scale-110 rotate-2" : "scale-100 rotate-0"} ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImageLoaded(true)}
            style={{
              filter: isHovered ? "brightness(1.1) contrast(1.1) saturate(1.2)" : "brightness(1) contrast(1) saturate(1)",
            }}
          />
          {!imageLoaded && <div className='absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 animate-pulse' />}

          {/* Cartoon highlight */}
          <div
            className='absolute top-4 right-4 w-8 h-8 bg-white rounded-full opacity-70'
            style={{
              transform: isHovered ? "scale(1.3) translate(-2px, -2px)" : "scale(1)",
              transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
            }}
          />
        </div>

        {/* Text with cartoon styling */}
        <div className='mt-8'>
          <h3
            className='text-2xl font-bold text-gray-800 mb-3'
            style={{
              transform: isHovered ? "rotate(-1deg)" : "rotate(0deg)",
              transition: "all 0.3s ease",
            }}
          >
            {work.title}
          </h3>
          <p className='text-gray-600 text-lg leading-relaxed'>{work.desc}</p>
        </div>

        {/* Cartoon button */}
        <button
          className='mt-8 group relative overflow-hidden'
          onClick={() => alert(`Viewing ${work.title} project`)}
          style={{
            background: "linear-gradient(45deg, #00B6E7, #0099CC)",
            borderRadius: "25px",
            padding: "12px 24px",
            border: "3px solid #0088BB",
            transform: isHovered ? "rotate(-2deg) scale(1.05)" : "rotate(0deg) scale(1)",
            transition: "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          }}
        >
          <span className='relative text-white font-bold text-lg z-10'>View Project ✨</span>
          <div
            className='absolute inset-0 bg-gradient-to-r from-yellow-300 to-pink-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300'
            style={{ borderRadius: "22px" }}
          />
        </button>

        {/* Floating decorative elements */}
        {isHovered && (
          <div className='absolute -top-2 -right-2 pointer-events-none'>
            <div
              className='w-6 h-6 bg-yellow-300 rounded-full'
              style={{
                animation: "popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
              }}
            />
            <style jsx>{`
              @keyframes popIn {
                0% {
                  transform: scale(0) rotate(0deg);
                }
                100% {
                  transform: scale(1) rotate(360deg);
                }
              }
            `}</style>
          </div>
        )}
      </div>
    </div>
  );
}

export default function WorkShowcase() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal();

  return (
    <section
      className='relative w-full py-20 overflow-hidden min-h-screen'
      style={{ background: "#F2F2F2" }}
    >
      {/* Cartoon background elements */}
      <FloatingBubbles />
      <DoodlePath />
      <CartoonStars />

      {/* More doodle elements */}
      <svg
        className='absolute bottom-20 left-1/4 w-32 h-32 pointer-events-none'
        style={{ zIndex: 1 }}
      >
        <circle
          cx='60'
          cy='60'
          r='50'
          fill='none'
          stroke='#00B6E7'
          strokeWidth='3'
          strokeDasharray='15,5'
          opacity='0.3'
          style={{ animation: "spin 20s linear infinite" }}
        />
        <style jsx>{`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </svg>

      {/* Section content */}
      <div className='relative z-10 max-w-7xl mx-auto px-6'>
        {/* Cartoon Header */}
        <div
          ref={headerRef}
          className='text-center mb-20'
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0px) rotate(0deg)" : "translateY(30px) rotate(-3deg)",
            transition: "all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          }}
        >
          <div className='relative inline-block'>
            <h2
              className='text-5xl md:text-7xl font-black mb-6'
              style={{
                fontFamily: '"Comic Sans MS", "Chalkduster", fantasy',
                color: "#1E1E1E",
                textShadow: "4px 4px 0px #00B6E7, 8px 8px 0px rgba(0,182,231,0.3)",
              }}
            >
              Our Work
            </h2>

            {/* Cartoon underline */}
            <svg className='absolute -bottom-4 left-0 w-full h-8'>
              <path
                d='M0,20 Q50,5 100,15 T200,10 Q250,20 300,15 T400,20'
                fill='none'
                stroke='#00B6E7'
                strokeWidth='4'
                strokeLinecap='round'
                opacity='0.7'
                style={{
                  animation: "drawUnderline 2s ease-out 0.5s both",
                }}
              />
              <style jsx>{`
                @keyframes drawUnderline {
                  from {
                    stroke-dasharray: 400;
                    stroke-dashoffset: 400;
                  }
                  to {
                    stroke-dasharray: 400;
                    stroke-dashoffset: 0;
                  }
                }
              `}</style>
            </svg>
          </div>

          <p className='mt-8 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>Showcasing creativity, innovation, and impactful storytelling with a sprinkle of magic! ✨</p>
        </div>

        {/* Work cards */}
        <div
          ref={cardsRef}
          className='grid md:grid-cols-3 gap-12'
        >
          {works.map((work, index) => (
            <CartoonWorkCard
              key={work.id}
              work={work}
              index={index}
              isVisible={cardsVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
