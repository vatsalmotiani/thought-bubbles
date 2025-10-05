"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Linkedin, Facebook, ArrowUp } from "react-feather";
import Link from "next/link";
import { useState } from "react";

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
            <ContactForm />
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
            <ContactForm />
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

/* Contact Form */
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    honeypot: "", // Anti-bot field
    timestamp: Date.now(),
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation patterns
  const patterns = {
    name: /^[a-zA-Z\s]{2,50}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^[6-9]\d{9}$/,
    company: /^[a-zA-Z0-9\s&.,'-]{2,100}$/,
    message: /^[\s\S]{10,500}$/,
  };

  // Suspicious pattern detection
  const isSuspicious = (text) => {
    const suspiciousPatterns = [/<script/i, /javascript:/i, /on\w+\s*=/i, /(https?:\/\/){2,}/i, /(\w)\1{10,}/, /<iframe/i, /eval\(/i, /(viagra|cialis|casino|lottery)/i];
    return suspiciousPatterns.some((pattern) => pattern.test(text));
  };

  const validateField = (name, value) => {
    if (!value && ["name", "email", "phone", "message"].includes(name)) {
      return "This field is required";
    }

    if (isSuspicious(value)) {
      return "Invalid content detected";
    }

    switch (name) {
      case "name":
        if (!patterns.name.test(value)) {
          return "Please enter a valid name (letters only)";
        }
        break;
      case "email":
        if (!patterns.email.test(value)) {
          return "Please enter a valid email address";
        }
        break;
      case "phone":
        if (!patterns.phone.test(value)) {
          return "Please enter a valid Indian mobile number";
        }
        break;
      case "company":
        if (value && !patterns.company.test(value)) {
          return "Please enter a valid company name";
        }
        break;
      case "message":
        if (!patterns.message.test(value)) {
          return "Message must be between 10-500 characters";
        }
        break;
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot check (bots usually fill this)
    if (formData.honeypot) {
      console.log("Bot detected");
      return;
    }

    // Time-based check (form filled too quickly - likely a bot)
    const timeSpent = Date.now() - formData.timestamp;
    if (timeSpent < 3000) {
      setErrors({ submit: "Please take your time filling the form" });
      return;
    }

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!["honeypot", "timestamp"].includes(key)) {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate submission
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      // Reset form or show success message
    }, 1500);
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5'>
      <div>
        <label className='block text-xs font-medium text-gray-600 mb-1.5'>
          Full Name<span className='text-tb-blue'>*</span>
        </label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter your name'
          maxLength={50}
          className={`w-full px-3.5 py-2.5 md:py-3 text-sm rounded-lg border ${errors.name ? "border-red-400 focus:ring-red-400/30" : "border-gray-300 focus:ring-tb-blue/30 focus:border-tb-blue"} outline-none transition-all`}
        />
        {errors.name && <p className='text-xs text-red-500 mt-1'>{errors.name}</p>}
      </div>

      <div>
        <label className='block text-xs font-medium text-gray-600 mb-1.5'>
          Email Address<span className='text-tb-blue'>*</span>
        </label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email'
          maxLength={100}
          className={`w-full px-3.5 py-2.5 md:py-3 text-sm rounded-lg border ${errors.email ? "border-red-400 focus:ring-red-400/30" : "border-gray-300 focus:ring-tb-blue/30 focus:border-tb-blue"} outline-none transition-all`}
        />
        {errors.email && <p className='text-xs text-red-500 mt-1'>{errors.email}</p>}
      </div>

      <div>
        <label className='block text-xs font-medium text-gray-600 mb-1.5'>
          Mobile Number<span className='text-tb-blue'>*</span>
        </label>
        <input
          type='tel'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          placeholder='10-digit mobile number'
          maxLength={10}
          className={`w-full px-3.5 py-2.5 md:py-3 text-sm rounded-lg border ${errors.phone ? "border-red-400 focus:ring-red-400/30" : "border-gray-300 focus:ring-tb-blue/30 focus:border-tb-blue"} outline-none transition-all`}
        />
        {errors.phone && <p className='text-xs text-red-500 mt-1'>{errors.phone}</p>}
      </div>

      <div>
        <label className='block text-xs font-medium text-gray-600 mb-1.5'>Company Name</label>
        <input
          type='text'
          name='company'
          value={formData.company}
          onChange={handleChange}
          placeholder='Enter your company'
          maxLength={100}
          className={`w-full px-3.5 py-2.5 md:py-3 text-sm rounded-lg border ${errors.company ? "border-red-400 focus:ring-red-400/30" : "border-gray-300 focus:ring-tb-blue/30 focus:border-tb-blue"} outline-none transition-all`}
        />
        {errors.company && <p className='text-xs text-red-500 mt-1'>{errors.company}</p>}
      </div>

      {/* Honeypot field - hidden from users */}
      <input
        type='text'
        name='honeypot'
        value={formData.honeypot}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete='off'
        className='absolute opacity-0 pointer-events-none'
        aria-hidden='true'
      />

      <div className='md:col-span-2'>
        <label className='block text-xs font-medium text-gray-600 mb-1.5'>
          Message<span className='text-tb-blue'>*</span>
        </label>
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          rows={3}
          placeholder='Type your message (10-500 characters)...'
          maxLength={500}
          className={`w-full px-3.5 py-2.5 md:py-3 text-sm rounded-lg border ${errors.message ? "border-red-400 focus:ring-red-400/30" : "border-gray-300 focus:ring-tb-blue/30 focus:border-tb-blue"} outline-none transition-all resize-none`}
        ></textarea>
        {errors.message && <p className='text-xs text-red-500 mt-1'>{errors.message}</p>}
        <p className='text-xs text-gray-500 mt-1'>{formData.message.length}/500</p>
      </div>

      {errors.submit && (
        <div className='md:col-span-2'>
          <p className='text-xs text-red-500'>{errors.submit}</p>
        </div>
      )}

      <div className='md:col-span-2'>
        <motion.button
          whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`w-full px-6 py-2.5 md:py-3 text-sm md:text-base rounded-lg ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-tb-blue hover:bg-[#009ecc] cursor-effect-text"} text-white font-medium transition-colors shadow-sm hover:shadow-md`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>
      </div>
    </div>
  );
}
