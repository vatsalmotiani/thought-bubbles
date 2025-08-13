"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook, Mail, MapPin, Phone, ArrowUp } from "react-feather";

export default function Footer() {
  const navLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Work", url: "/work/all" },
    { name: "Contact", url: "/contact-us" },
  ];

  const services = [
    { name: "Branding", url: "/work/branding" },
    { name: "Digital Marketing", url: "/work/digital-marketing" },
    { name: "Social Media", url: "/work/social-media" },
    { name: "Production", url: "/work/production" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className='relative overflow-hidden'
      style={{ backgroundColor: "#F2F2F2" }}
    >
      {/* Cartoon Background with Doodles */}
      <div className='absolute inset-0'>
        <svg
          className='absolute inset-0 w-full h-full pointer-events-none'
          viewBox='0 0 1200 600'
          preserveAspectRatio='xMidYMid slice'
        >
          <defs>
            <pattern
              id='footerDots'
              x='0'
              y='0'
              width='50'
              height='50'
              patternUnits='userSpaceOnUse'
            >
              <circle
                cx='25'
                cy='25'
                r='1.5'
                fill='#00B6E7'
                opacity='0.15'
              />
            </pattern>
          </defs>
          <rect
            width='100%'
            height='100%'
            fill='url(#footerDots)'
          />

          {/* Animated doodle paths */}
          <motion.path
            d='M200,100 Q400,50 600,100 T1000,100'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='none'
            strokeLinecap='round'
            strokeDasharray='10,5'
            opacity='0.3'
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.path
            d='M100,400 C200,350 300,450 400,400 S600,350 700,400'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='none'
            strokeLinecap='round'
            strokeDasharray='8,4'
            opacity='0.2'
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Floating cartoon elements */}
          <motion.circle
            cx='200'
            cy='500'
            r='30'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='rgba(0, 182, 231, 0.1)'
            opacity='0.4'
            animate={{
              scale: [1, 1.2, 1],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx='1000'
            cy='200'
            r='40'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='none'
            strokeDasharray='12,6'
            opacity='0.3'
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Small floating doodles */}
          <motion.polygon
            points='800,150 820,170 810,190 790,190 780,170'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='rgba(0, 182, 231, 0.1)'
            opacity='0.3'
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className='lg:col-span-1'
          >
            <motion.div
              className='mb-6'
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src='/tb-logo.svg'
                width={200}
                height={40}
                className='h-auto'
                alt='Thought Bubbles Logo'
              />

              {/* Sparkle around logo */}
              <motion.div
                className='absolute top-0 right-0 w-2 h-2 rounded-full'
                style={{ backgroundColor: "#00B6E7" }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
            </motion.div>

            <div className='flex space-x-4'>
              {[
                { icon: Instagram, href: "https://www.instagram.com/thoughtbubbles_/" },
                { icon: Linkedin, href: "https://in.linkedin.com/in/thought-bubbles-advertising-0aa385290" },
                { icon: Facebook, href: "/" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    rotate: index % 2 === 0 ? 5 : -5,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className='relative group'
                >
                  <div
                    className='relative rounded-xl p-3 transition-all duration-300'
                    style={{
                      backgroundColor: "white",
                      border: "2px solid #00B6E7",
                      boxShadow: "3px 3px 0px #00B6E7",
                    }}
                  >
                    <social.icon
                      size={20}
                      style={{ color: "#1E1E1E" }}
                      className='group-hover:scale-110 transition-transform'
                    />
                  </div>

                  {/* Floating sparkle */}
                  <motion.div
                    className='absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full'
                    style={{ backgroundColor: "#00B6E7" }}
                    animate={{
                      scale: [0, 1.2, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
            viewport={{ once: true }}
          >
            <h3
              className='text-2xl font-oswald font-black mb-6'
              style={{
                color: "#1E1E1E",
                textShadow: "2px 2px 0px rgba(0, 182, 231, 0.2)",
              }}
            >
              Quick Links
            </h3>
            <ul className='space-y-4'>
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20, rotate: -2 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.url}
                    className='flex items-center group'
                  >
                    <motion.span
                      className='w-3 h-3 rounded-full mr-3 transition-all duration-300'
                      style={{ backgroundColor: "#00B6E7" }}
                      whileHover={{ scale: 1.5, rotate: 180 }}
                    />
                    <span
                      className='font-poppins transition-colors duration-300 group-hover:font-semibold'
                      style={{
                        color: "#828282",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#00B6E7")}
                      onMouseLeave={(e) => (e.target.style.color = "#828282")}
                    >
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
          >
            <h3
              className='text-2xl font-oswald font-black mb-6'
              style={{
                color: "#1E1E1E",
                textShadow: "2px 2px 0px rgba(0, 182, 231, 0.2)",
              }}
            >
              Our Services
            </h3>
            <ul className='space-y-4'>
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20, rotate: 2 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={service.url}
                    className='flex items-center group'
                  >
                    <motion.span
                      className='w-3 h-3 rounded-full mr-3 transition-all duration-300'
                      style={{ backgroundColor: "#00B6E7" }}
                      whileHover={{ scale: 1.5, rotate: 180 }}
                    />
                    <span
                      className='font-poppins transition-colors duration-300 group-hover:font-semibold'
                      style={{ color: "#828282" }}
                      onMouseEnter={(e) => (e.target.style.color = "#00B6E7")}
                      onMouseLeave={(e) => (e.target.style.color = "#828282")}
                    >
                      {service.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
          >
            <h3
              className='text-2xl font-oswald font-black mb-6'
              style={{
                color: "#1E1E1E",
                textShadow: "2px 2px 0px rgba(0, 182, 231, 0.2)",
              }}
            >
              Get In Touch
            </h3>
            <div className='space-y-6'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
                viewport={{ once: true }}
                className='flex items-start group'
              >
                <motion.div
                  className='relative mt-1'
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div
                    className='rounded-xl p-3'
                    style={{
                      backgroundColor: "white",
                      border: "2px solid #00B6E7",
                      boxShadow: "2px 2px 0px #00B6E7",
                    }}
                  >
                    <Mail
                      size={16}
                      style={{ color: "#00B6E7" }}
                    />
                  </div>
                </motion.div>
                <div className='ml-4'>
                  <p
                    className='font-poppins font-semibold text-sm'
                    style={{ color: "#1E1E1E" }}
                  >
                    Email
                  </p>
                  <a
                    href='mailto:manoj.motiani@thoughtbubbles.in'
                    className='font-poppins text-sm transition-colors duration-300'
                    style={{ color: "#828282" }}
                    onMouseEnter={(e) => (e.target.style.color = "#00B6E7")}
                    onMouseLeave={(e) => (e.target.style.color = "#828282")}
                  >
                    manoj.motiani@thoughtbubbles.in
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                viewport={{ once: true }}
                className='flex items-start group'
              >
                <motion.div
                  className='relative mt-1'
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <div
                    className='rounded-xl p-3'
                    style={{
                      backgroundColor: "white",
                      border: "2px solid #00B6E7",
                      boxShadow: "2px 2px 0px #00B6E7",
                    }}
                  >
                    <MapPin
                      size={16}
                      style={{ color: "#00B6E7" }}
                    />
                  </div>
                </motion.div>
                <div className='ml-4'>
                  <p
                    className='font-poppins font-semibold text-sm'
                    style={{ color: "#1E1E1E" }}
                  >
                    Address
                  </p>
                  <p
                    className='font-poppins text-sm'
                    style={{ color: "#828282" }}
                  >
                    A-6, 1st Floor, My Mother&apos;s society,
                    <br />
                    RC Marg, Chembur, Mumbai-40071
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section with Cartoon Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          viewport={{ once: true }}
          className='border-t-2 pt-8'
          style={{ borderColor: "#00B6E7", borderStyle: "dashed" }}
        >
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <motion.p
              className='font-poppins text-sm mb-4 md:mb-0'
              style={{ color: "#828282" }}
              whileHover={{ scale: 1.02 }}
            >
              © 2025 Thought Bubbles Advertising. All rights reserved.
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{
                scale: 1.1,
                y: -5,
                rotate: 10,
              }}
              whileTap={{ scale: 0.9 }}
              className='relative group'
            >
              <div
                className='rounded-full p-4 transition-all duration-300'
                style={{
                  backgroundColor: "white",
                  border: "3px solid #00B6E7",
                  boxShadow: "4px 4px 0px #00B6E7",
                }}
              >
                <ArrowUp
                  size={20}
                  style={{ color: "#1E1E1E" }}
                  className='group-hover:scale-110 transition-transform'
                />
              </div>

              {/* Bouncing sparkles */}
              <motion.div
                className='absolute -top-2 -right-2 w-3 h-3 rounded-full'
                style={{ backgroundColor: "#00B6E7" }}
                animate={{
                  scale: [0, 1.5, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom cartoon doodle */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
        <svg
          width='150'
          height='30'
          viewBox='0 0 150 30'
        >
          <motion.path
            d='M20,20 Q40,10 75,20 T130,20'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='none'
            strokeLinecap='round'
            strokeDasharray='6,3'
            opacity='0.4'
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    </footer>
  );
}

export function FooterCTA() {
  return (
    <footer
      className='relative overflow-hidden'
      style={{ backgroundColor: "#F2F2F2" }}
    >
      {/* Cartoon Background */}
      <div className='absolute inset-0'>
        <svg
          className='absolute inset-0 w-full h-full pointer-events-none'
          viewBox='0 0 800 400'
          preserveAspectRatio='xMidYMid slice'
        >
          <defs>
            <pattern
              id='ctaDots'
              x='0'
              y='0'
              width='40'
              height='40'
              patternUnits='userSpaceOnUse'
            >
              <circle
                cx='20'
                cy='20'
                r='1.5'
                fill='#00B6E7'
                opacity='0.1'
              />
            </pattern>
          </defs>
          <rect
            width='100%'
            height='100%'
            fill='url(#ctaDots)'
          />

          {/* Floating cartoon bubbles */}
          <motion.circle
            cx='150'
            cy='100'
            r='25'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='rgba(0, 182, 231, 0.1)'
            opacity='0.4'
            animate={{
              scale: [1, 1.3, 1],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx='650'
            cy='300'
            r='30'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='none'
            strokeDasharray='8,4'
            opacity='0.3'
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </div>

      <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className='relative'
        >
          <div
            className='relative rounded-3xl p-12'
            style={{
              backgroundColor: "white",
              border: "4px solid #00B6E7",
              boxShadow: "8px 8px 0px #00B6E7",
            }}
          >
            <h2
              className='text-4xl md:text-5xl font-oswald font-black mb-6'
              style={{
                color: "#1E1E1E",
                textShadow: "3px 3px 0px rgba(0, 182, 231, 0.2)",
              }}
            >
              Ready to Create Something Amazing?
            </h2>
            <p
              className='text-xl mb-8 font-poppins'
              style={{ color: "#828282" }}
            >
              Let&apos;s bring your vision to life with creativity that breaks through the noise.
            </p>

            <motion.div
              whileHover={{
                scale: 1.05,
                y: -3,
                rotate: 1,
              }}
              whileTap={{ scale: 0.95 }}
              className='inline-block'
            >
              <Link href='/contact-us'>
                <div
                  className='relative px-12 py-6 rounded-full font-oswald font-black text-xl text-white transition-all duration-300'
                  style={{
                    backgroundColor: "#00B6E7",
                    boxShadow: "5px 5px 0px #1E1E1E",
                  }}
                >
                  Let&apos;s Get Started
                  {/* Button sparkle */}
                  <motion.div
                    className='absolute -top-2 -right-2 w-4 h-4 rounded-full bg-white'
                    animate={{
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                </div>
              </Link>
            </motion.div>

            {/* Floating sparkles around CTA */}
            <motion.div
              className='absolute top-8 right-8 w-3 h-3 rounded-full'
              style={{ backgroundColor: "#00B6E7" }}
              animate={{
                scale: [0, 1.2, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1,
              }}
            />
            <motion.div
              className='absolute bottom-12 left-12 w-2 h-2 rounded-full'
              style={{ backgroundColor: "#00B6E7" }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 2,
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
          className='mt-12'
        >
          <motion.div
            className='mb-6'
            whileHover={{ scale: 1.02, rotate: 1 }}
          >
            <Image
              src='/tb-logo.svg'
              width={140}
              height={40}
              className='h-auto mx-auto'
              alt='Thought Bubbles Logo'
            />
          </motion.div>

          <div className='flex justify-center space-x-4'>
            {[
              { icon: Instagram, href: "https://www.instagram.com/thoughtbubbles_/" },
              { icon: Linkedin, href: "https://in.linkedin.com/in/thought-bubbles-advertising-0aa385290" },
              { icon: Facebook, href: "/" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{
                  scale: 1.15,
                  y: -5,
                  rotate: index % 2 === 0 ? 10 : -10,
                }}
                whileTap={{ scale: 0.9 }}
                className='relative group'
              >
                <div
                  className='rounded-xl p-3 transition-all duration-300'
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #00B6E7",
                    boxShadow: "3px 3px 0px #00B6E7",
                  }}
                >
                  <social.icon
                    size={20}
                    style={{ color: "#1E1E1E" }}
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
