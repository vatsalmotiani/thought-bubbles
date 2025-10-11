"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Linkedin, Facebook, ArrowUp } from "react-feather";
import Link from "next/link";
import { useState } from "react";
import FooterContactForm from "./FooterContactForm";

export default function Footer() {
  const [toast, setToast] = useState(null);

  const scrollToTop = () => {
    window.dispatchEvent(new Event("stopCountdownAutoScroll"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyToClipboard = (text, message) => {
    navigator.clipboard.writeText(text).then(() => {
      setToast(message);
      setTimeout(() => setToast(null), 2000);
    });
  };

  return (
    <footer className='relative overflow-hidden bg-transparent font-space'>
      <div className='relative z-10 mx-auto px-5 md:px-10 lg:px-16 py-12 md:py-16'>
        {/* ---------- DESKTOP ---------- */}
        <div className='hidden lg:grid grid-cols-5 gap-12 lg:gap-16 mb-12'>
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className='flex flex-col justify-between space-y-8 w-full lg:col-span-2'
          >
            {/* Logo */}
            <div className='flex justify-start'>
              <Image
                src='/tb-logo.svg'
                width={220}
                height={50}
                className='h-auto w-[220px]'
                alt='Thought Bubbles Logo'
                priority
              />
            </div>

            {/* Info */}
            <div className='space-y-5'>
              <div
                className='group cursor-pointer cursor-effect-text'
                onClick={() => copyToClipboard("manoj.motiani@thoughtbubbles.in", "Email copied")}
              >
                <p className='text-xs font-medium text-tb-body  tracking-wide mb-1'>Email</p>
                <p className='text-tb-black group-hover:text-tb-blue transition-colors duration-200'>manoj.motiani@thoughtbubbles.in</p>
              </div>

              <div
                className='group cursor-pointer cursor-effect-text'
                onClick={() => copyToClipboard("+919876543210", "Phone copied")}
              >
                <p className='text-xs font-medium text-tb-body  tracking-wide mb-1'>Phone</p>
                <p className='text-tb-black group-hover:text-tb-blue transition-colors duration-200'>+91 9876543210</p>
              </div>

              <Link
                href='https://maps.app.goo.gl/DwT2JJrfy4PJG6aLA'
                target='_blank'
                className='group cursor-effect-text block'
              >
                <p className='text-xs font-medium text-tb-body  tracking-wide mb-1'>Address</p>
                <p className='text-tb-black group-hover:text-tb-blue transition-colors duration-200 leading-relaxed'>
                  A-6, 1st Floor, My Mother&apos;s Society, <br />
                  RC Marg, Chembur, Mumbai-40071
                </p>
              </Link>
            </div>

            {/* Socials */}
            <div className='flex space-x-3 pt-2'>
              {[
                { icon: Instagram, href: "https://www.instagram.com/thoughtbubbles_/" },
                { icon: Linkedin, href: "https://in.linkedin.com/in/thought-bubbles-advertising-0aa385290" },
                { icon: Facebook, href: "/" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className='p-2.5 rounded-lg bg-white/60 border border-gray-200 cursor-effect-text shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200'
                >
                  <social.icon
                    size={18}
                    className='text-gray-700'
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className='w-full bg-white/60 p-10 rounded-2xl lg:col-span-3'
          >
            <h3 className='text-2xl font-semibold text-tb-black mb-6'>Get in Touch</h3>
            <FooterContactForm />
          </motion.div>
        </div>

        {/* ---------- MOBILE ---------- */}
        <div className='flex flex-col space-y-8 lg:hidden'>
          {/* Logo */}
          <div className='flex justify-start'>
            <Image
              src='/tb-logo.svg'
              width={140}
              height={40}
              className='h-auto w-[140px]'
              alt='Thought Bubbles Logo'
              priority
            />
          </div>

          {/* Contact Form - Priority */}
          <div>
            <h3 className='text-xl font-semibold text-tb-black mb-5'>Get in Touch</h3>
            <FooterContactForm />
          </div>

          {/* Contact Info - Compact */}
          <div className='grid grid-cols-1 gap-5 pt-4'>
            <div
              className='group cursor-pointer cursor-effect-text'
              onClick={() => copyToClipboard("manoj.motiani@thoughtbubbles.in", "Email copied")}
            >
              <p className='text-xs font-medium text-tb-body uppercase tracking-wide mb-0.5'>Email</p>
              <p className='text-sm text-tb-black group-active:text-tb-blue transition-colors'>manoj.motiani@thoughtbubbles.in</p>
            </div>

            <div
              className='group cursor-pointer cursor-effect-text'
              onClick={() => copyToClipboard("+919876543210", "Phone copied")}
            >
              <p className='text-xs font-medium text-tb-body uppercase tracking-wide mb-0.5'>Phone</p>
              <p className='text-sm text-tb-black group-active:text-tb-blue transition-colors'>+91 9876543210</p>
            </div>

            <Link
              href='https://maps.app.goo.gl/DwT2JJrfy4PJG6aLA'
              target='_blank'
              className='group cursor-effect-text'
            >
              <p className='text-xs font-medium text-tb-body uppercase tracking-wide mb-0.5'>Address</p>
              <p className='text-sm text-tb-black group-active:text-tb-blue transition-colors leading-relaxed'>A-6, 1st Floor, My Mother&apos;s Society, RC Marg, Chembur, Mumbai-40071</p>
            </Link>
          </div>

          {/* Socials - Compact */}
          <div className='flex space-x-2.5 pt-2'>
            {[
              { icon: Instagram, href: "https://www.instagram.com/thoughtbubbles_/" },
              { icon: Linkedin, href: "https://in.linkedin.com/in/thought-bubbles-advertising-0aa385290" },
              { icon: Facebook, href: "/" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-lg bg-white/60 border border-gray-200 cursor-effect-text shadow-sm active:scale-95 transition-transform'
              >
                <social.icon
                  size={16}
                  className='text-gray-700'
                />
              </a>
            ))}
          </div>
        </div>

        {/* ---------- Toast ---------- */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className='fixed bottom-6 right-6 bg-tb-blue text-white px-4 py-2.5 rounded-lg shadow-lg text-sm font-medium z-50'
            >
              {toast}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ---------- Bottom Strip ---------- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='border-t border-dashed border-tb-body/20 pt-6 mt-10'
        >
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-xs md:text-sm text-gray-500 text-center md:text-left'>© 2025 Thought Bubbles Advertising. All rights reserved.</p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className='p-2.5 rounded-full border bg-white/80 shadow-sm cursor-effect-text hover:shadow-md transition-shadow'
            >
              <ArrowUp
                size={16}
                className='text-tb-black'
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
