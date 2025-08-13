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
    <footer className='relative bg-gradient-to-br from-slate-50 via-white to-cyan-50 overflow-hidden'>
      {/* Subtle Background Effects */}
      <div className='absolute inset-0'>
        <motion.div
          className='absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className='absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='lg:col-span-1'
          >
            <div className='mb-6'>
              <Image
                src='/tb-logo.svg'
                width={200}
                height={40}
                className='h-auto'
                alt='Thought Bubbles Logo'
              />
            </div>
            {/* <p className='text-slate-600 text-sm leading-relaxed mb-6'>Where creativity meets strategy. We craft actionable ideas that break through the noise and deliver exceptional results.</p> */}
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
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className='relative group'
                >
                  <div className='absolute inset-0 bg-gradient-to-br from-cyan-100/50 to-cyan-200/50 rounded-lg blur-sm group-hover:blur-md transition-all duration-300' />
                  <div className='relative bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-slate-200 group-hover:bg-white group-hover:border-cyan-300 transition-all duration-300 shadow-sm hover:shadow-md'>
                    <social.icon
                      size={20}
                      className='text-slate-600 group-hover:text-cyan-600'
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className='text-slate-800 text-xl font-bold mb-6'>Quick Links</h3>
            <ul className='space-y-4'>
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.url}
                    className='text-slate-600 hover:text-cyan-600 transition-colors duration-300 flex items-center group'
                  >
                    <span className='w-2 h-2 bg-cyan-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300' />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className='text-slate-800 text-xl font-bold mb-6'>Our Services</h3>
            <ul className='space-y-4'>
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={service.url}
                    className='text-slate-600 hover:text-cyan-600 transition-colors duration-300 flex items-center group'
                  >
                    <span className='w-2 h-2 bg-cyan-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300' />
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className='text-slate-800 text-xl font-bold mb-6'>Get In Touch</h3>
            <div className='space-y-4'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className='flex items-start group'
              >
                <div className='relative mt-1'>
                  <div className='absolute inset-0 bg-gradient-to-br from-cyan-100/50 to-cyan-200/50 rounded-lg blur-sm group-hover:blur-md transition-all duration-300' />
                  <div className='relative bg-cyan-50/80 backdrop-blur-sm rounded-lg p-2 border border-cyan-200 group-hover:border-cyan-300 transition-all duration-300'>
                    <Mail
                      size={16}
                      className='text-cyan-600'
                    />
                  </div>
                </div>
                <div className='ml-3'>
                  <p className='text-slate-500 text-sm'>Email</p>
                  <a
                    href='mailto:manoj.motiani@thoughtbubbles.in'
                    className='text-slate-700 hover:text-cyan-600 transition-colors duration-300'
                  >
                    manoj.motiani@thoughtbubbles.in
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className='flex items-start group'
              >
                <div className='relative mt-1'>
                  <div className='absolute inset-0 bg-gradient-to-br from-cyan-100/50 to-cyan-200/50 rounded-lg blur-sm group-hover:blur-md transition-all duration-300' />
                  <div className='relative bg-cyan-50/80 backdrop-blur-sm rounded-lg p-2 border border-cyan-200 group-hover:border-cyan-300 transition-all duration-300'>
                    <MapPin
                      size={16}
                      className='text-cyan-600'
                    />
                  </div>
                </div>
                <div className='ml-3'>
                  <p className='text-slate-500 text-sm'>Address</p>
                  <p className='text-slate-700 text-sm'>
                    A-6, 1st Floor, My Mother&apos;s society,
                    <br />
                    RC Marg, Chembur, Mumbai-40071
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='border-t border-slate-200 pt-8'
        >
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-slate-500 text-sm mb-4 md:mb-0'>© 2024 Thought Bubbles Advertising. All rights reserved.</p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className='relative group'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-cyan-100/50 to-cyan-200/50 rounded-lg blur-sm group-hover:blur-md transition-all duration-300' />
              <div className='relative bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-slate-200 group-hover:bg-white group-hover:border-cyan-300 transition-all duration-300 shadow-sm hover:shadow-md'>
                <ArrowUp
                  size={20}
                  className='text-slate-600 group-hover:text-cyan-600'
                />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export function FooterCTA() {
  return (
    <footer className='relative bg-gradient-to-br from-slate-50 via-white to-cyan-50 overflow-hidden'>
      {/* Subtle Background Effects */}
      <div className='absolute inset-0'>
        <motion.div
          className='absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='relative'
        >
          <div className='absolute inset-0 bg-gradient-to-br from-white/60 to-slate-50/40 rounded-2xl blur-lg' />
          <div className='relative bg-white/70 backdrop-blur-sm rounded-2xl p-12 border border-slate-200 shadow-lg'>
            <h2 className='text-4xl md:text-5xl font-oswald font-bold text-slate-800 mb-6'>Ready to Create Something Amazing?</h2>
            <p className='text-xl text-slate-600 mb-8 font-poppins'>Let&apos;s bring your vision to life with creativity that breaks through the noise.</p>

            <motion.div
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className='inline-block'
            >
              <Link href='/contact-us'>
                <div className='relative group'>
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300' />
                  <div className='relative bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300'>Let&apos;s Get Started</div>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='mt-12'
        >
          <div className='mb-6'>
            <Image
              src='/tb-logo.svg'
              width={140}
              height={40}
              className='h-auto'
              alt='Thought Bubbles Logo'
            />
          </div>

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
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className='relative group'
              >
                <div className='absolute inset-0 bg-gradient-to-br from-cyan-100/50 to-cyan-200/50 rounded-lg blur-sm group-hover:blur-md transition-all duration-300' />
                <div className='relative bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-slate-200 group-hover:bg-white group-hover:border-cyan-300 transition-all duration-300 shadow-sm hover:shadow-md'>
                  <social.icon
                    size={20}
                    className='text-slate-600 group-hover:text-cyan-600'
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
