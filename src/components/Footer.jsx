"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook, Mail, MapPin, ArrowUp } from "react-feather";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className='relative overflow-hidden bg-transparent'>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Main Footer Content */}
        <div className='flex flex-col lg:flex-row gap-12 mb-16'>
          {/* Left - Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className='lg:w-1/3 flex justify-center lg:justify-start'
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src='/tb-logo.svg'
                width={300}
                height={50}
                className='h-auto'
                alt='Thought Bubbles Logo'
              />
            </motion.div>
          </motion.div>

          {/* Right - Contact Info + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
            className='lg:w-2/3'
          >
            {/* Address + Email Side by Side */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8'>
              {/* Email */}
              <div className='flex items-start'>
                <div
                  className='rounded-xl p-3 mr-4'
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #00B6E7",
                    boxShadow: "2px 2px 0px #00B6E7",
                  }}
                >
                  <Mail
                    size={18}
                    style={{ color: "#00B6E7" }}
                  />
                </div>
                <div>
                  <p className='font-poppins font-semibold text-sm text-[#1E1E1E]'>Email</p>
                  <a
                    href='mailto:manoj.motiani@thoughtbubbles.in'
                    className='font-poppins text-sm text-[#828282] hover:text-[#00B6E7] transition-colors duration-300'
                  >
                    manoj.motiani@thoughtbubbles.in
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className='flex items-start'>
                <div
                  className='rounded-xl p-3 mr-4'
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #00B6E7",
                    boxShadow: "2px 2px 0px #00B6E7",
                  }}
                >
                  <MapPin
                    size={18}
                    style={{ color: "#00B6E7" }}
                  />
                </div>
                <div>
                  <p className='font-poppins font-semibold text-sm text-[#1E1E1E]'>Address</p>
                  <p className='font-poppins text-sm text-[#828282]'>
                    A-6, 1st Floor, My Mother&apos;s Society,
                    <br />
                    RC Marg, Chembur, Mumbai-40071
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className='flex space-x-4 mb-8'>
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
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
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
              className='font-poppins text-sm mb-4 md:mb-0 text-[#828282]'
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
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
