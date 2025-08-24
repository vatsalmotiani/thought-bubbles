"use client";
import Image from "next/image";
import { motion } from "framer-motion";
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
      setTimeout(() => setToast(null), 2000); // hide after 2s
    });
  };

  return (
    <footer className='relative overflow-hidden bg-transparent'>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Contact Form + Info Section */}
        <div className='flex flex-col lg:flex-row gap-16 mb-16'>
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className='lg:w-2/3 bg-white/70 rounded-2xl p-8 border border-gray-200'
          >
            <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Name */}
              <div className='col-span-1'>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>Full Name</label>
                <input
                  type='text'
                  placeholder='Enter your name'
                  className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-tb-blue outline-none'
                />
              </div>

              {/* Email */}
              <div className='col-span-1'>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>Email Address</label>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-tb-blue outline-none'
                />
              </div>

              {/* Mobile */}
              <div className='col-span-1'>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>Mobile Number</label>
                <input
                  type='tel'
                  placeholder='Enter your mobile'
                  className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-tb-blue outline-none'
                />
              </div>

              {/* Company Name */}
              <div className='col-span-1'>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>Company Name</label>
                <input
                  type='text'
                  placeholder='Enter your company'
                  className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-tb-blue outline-none'
                />
              </div>

              {/* Message */}
              <div className='col-span-1 md:col-span-2'>
                <label className='block text-sm font-semibold text-gray-700 mb-1'>Message</label>
                <textarea
                  rows={4}
                  placeholder='Type your message...'
                  className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-tb-blue outline-none'
                ></textarea>
              </div>

              {/* Submit */}
              <div className='flex justify-center '>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type='submit'
                  className='w-full px-6 py-3 rounded-xl bg-tb-blue text-white font-semibold  hover:bg-[#009ecc] transition cursor-effect-text'
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Right Side - Logo + Contact Info + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
            className='lg:w-1/3 flex flex-col justify-between space-y-6'
          >
            {/* Logo */}
            <div className='flex justify-center lg:justify-start'>
              <Image
                src='/tb-logo.svg'
                width={220}
                height={60}
                className='h-auto'
                alt='Thought Bubbles Logo'
              />
            </div>

            {/* Info */}
            <div className='space-y-4'>
              {/* Email */}
              <div
                className='flex items-start cursor-pointer cursor-effect-text'
                onClick={() => copyToClipboard("manoj.motiani@thoughtbubbles.in", "Email Address copied to clipboard")}
              >
                <Mail
                  className='text-tb-body mt-1 mr-3'
                  size={20}
                />
                <div>
                  <p className='font-semibold text-tb-black'>Email</p>
                  <p className='text-tb-body'>manoj.motiani@thoughtbubbles.in</p>
                </div>
              </div>

              {/* Phone */}
              <div
                className='flex items-start cursor-pointer cursor-effect-text'
                onClick={() => copyToClipboard("+919876543210", "Phone number copied to clipboard")}
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
                  <p className='text-tb-body'>
                    A-6, 1st Floor, My Mother's Society,
                    <br />
                    RC Marg, Chembur, Mumbai-40071
                  </p>
                </div>
              </Link>
            </div>

            {/* Social Icons */}
            <div className='flex space-x-4'>
              {[
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/thoughtbubbles_/",
                },
                {
                  icon: Linkedin,
                  href: "https://in.linkedin.com/in/thought-bubbles-advertising-0aa385290",
                },
                { icon: Facebook, href: "/" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className='p-3 rounded-xl bg-white/70 border border-gray-300 cursor-effect-text'
                >
                  <social.icon
                    size={20}
                    className='text-gray-700'
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Toast */}
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

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          viewport={{ once: true }}
          className='border-t pt-8 border-dashed border-tb-body/30'
        >
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <motion.p className='text-sm text-gray-500 mb-4 md:mb-0'>© 2025 Thought Bubbles Advertising. All rights reserved.</motion.p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -5, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className='p-3 rounded-full border-2  bg-white/60 cursor-effect-text'
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
