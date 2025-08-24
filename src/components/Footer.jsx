"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Linkedin, Facebook, Mail, MapPin, ArrowUp, Phone } from "react-feather";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [toast, setToast] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyToClipboard = (text, message) => {
    navigator.clipboard.writeText(text).then(() => {
      setToast(message);
      setTimeout(() => setToast(null), 2000);
    });
  };

  return (
    <footer className='relative overflow-hidden bg-transparent'>
      <div className='relative z-10 mx-auto px-6 md:px-10 lg:px-16 py-16'>
        {/* Contact Section */}
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-16'>
          {/* Left: Contact Info (40%) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className='flex flex-col justify-between space-y-6 w-full lg:col-span-2'
          >
            {/* Logo */}
            <div className='flex justify-center lg:justify-start'>
              <Image
                src='/tb-logo.svg'
                width={260}
                height={80}
                className='h-auto'
                alt='Thought Bubbles Logo'
              />
            </div>

            {/* Info */}
            <div className='space-y-4'>
              {/* Email */}
              <div
                className='flex items-start cursor-pointer cursor-effect-text'
                onClick={() => copyToClipboard("manoj.motiani@thoughtbubbles.in", "Email Address copied")}
              >
                <Mail
                  className='text-tb-body mt-1 mr-3'
                  size={20}
                />
                <div>
                  <p className='font-semibold text-tb-black'>Email</p>
                  <p className='text-tb-body break-words'>manoj.motiani@thoughtbubbles.in</p>
                </div>
              </div>

              {/* Phone */}
              <div
                className='flex items-start cursor-pointer cursor-effect-text'
                onClick={() => copyToClipboard("+919876543210", "Phone number copied")}
              >
                <Phone
                  className='text-tb-body mt-1 mr-3'
                  size={20}
                />
                <div>
                  <p className='font-semibold text-tb-black'>Phone</p>
                  <p className='text-tb-body'>+91 9876543210</p>
                </div>
              </div>

              {/* Address */}
              <Link
                href={"https://maps.app.goo.gl/DwT2JJrfy4PJG6aLA"}
                target='_blank'
                className='flex items-start cursor-effect-text'
              >
                <MapPin
                  className='text-tb-body mt-1 mr-3'
                  size={20}
                />
                <div>
                  <p className='font-semibold text-tb-black'>Address</p>
                  <p className='text-tb-body leading-relaxed'>
                    A-6, 1st Floor, My Mother's Society, <br />
                    RC Marg, Chembur, Mumbai-40071
                  </p>
                </div>
              </Link>
            </div>

            {/* Socials */}
            <div className='flex space-x-4 pt-4'>
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
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className='p-3 rounded-xl bg-white border border-gray-200 cursor-effect-text shadow-sm'
                >
                  <social.icon
                    size={20}
                    className='text-gray-700'
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form (60%) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className='w-full bg-white p-6 md:p-10 lg:p-12 rounded-3xl lg:col-span-3'
          >
            {/* Header */}
            <h3 className='text-2xl md:text-3xl font-bold text-tb-black mb-6'>Get in Touch</h3>

            <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Name */}
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>Full Name</label>
                <input
                  type='text'
                  placeholder='Enter your name'
                  className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-tb-blue outline-none'
                />
              </div>

              {/* Email */}
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>Email Address</label>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-tb-blue outline-none'
                />
              </div>

              {/* Mobile */}
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>Mobile Number</label>
                <input
                  type='tel'
                  placeholder='Enter your mobile'
                  className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-tb-blue outline-none'
                />
              </div>

              {/* Company */}
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>Company Name</label>
                <input
                  type='text'
                  placeholder='Enter your company'
                  className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-tb-blue outline-none'
                />
              </div>

              {/* Message */}
              <div className='md:col-span-2'>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>Message</label>
                <textarea
                  rows={4}
                  placeholder='Type your message...'
                  className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-tb-blue outline-none'
                ></textarea>
              </div>

              {/* Submit */}
              <div className='md:col-span-2'>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type='submit'
                  className='w-full px-8 py-3 rounded-xl bg-tb-blue text-white font-semibold hover:bg-[#009ecc] transition cursor-effect-text'
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Toast */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className='fixed bottom-6 right-6 bg-tb-blue text-white px-4 py-2 rounded-xl shadow-lg'
            >
              {toast}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          viewport={{ once: true }}
          className='border-t border-dashed border-tb-body/30 pt-8'
        >
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-sm text-gray-500 mb-4 md:mb-0 text-center md:text-left'>© 2025 Thought Bubbles Advertising. All rights reserved.</p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -5, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className='p-3 rounded-full border bg-white/80 shadow-sm cursor-effect-text'
            >
              <ArrowUp
                size={18}
                className='text-tb-black'
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
