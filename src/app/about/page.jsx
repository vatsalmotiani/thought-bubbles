"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Award, Users, Target, Zap, Star, TrendingUp, Heart } from "react-feather";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div
      ref={containerRef}
      className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-blue-100/20'
    >
      {/* Hero Section */}
      <section className='relative py-32 bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20 overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden'>
          <motion.div
            className='absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-blue-600/15 rounded-full blur-3xl'
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ y }}
          />
          <motion.div
            className='absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-300/15 to-blue-500/15 rounded-full blur-3xl'
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ y }}
          />
        </div>

        <div
          className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
          style={{ opacity }}
        >
          <div className='text-center'>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className='mb-8'
            >
              <div className='relative inline-block'>
                <div className='absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-lg' />
                <div className='relative bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg'>
                  <Image
                    src='/tb-logo.svg'
                    alt='Thought Bubbles Logo'
                    width={120}
                    height={120}
                    className='mx-auto drop-shadow-sm'
                  />
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className='text-6xl sm:text-7xl md:text-8xl font-oswald font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-cyan-600 to-blue-700 leading-none mb-8'
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className='bg-gradient-to-r from-slate-800 via-cyan-600 to-blue-700 bg-[length:200%_200%] bg-clip-text text-transparent'
              >
                About Thought
              </motion.span>
              <motion.span
                animate={{
                  backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className='block bg-gradient-to-r from-blue-600 via-cyan-700 to-blue-800 bg-[length:200%_200%] bg-clip-text text-transparent'
              >
                Bubbles
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className='text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto font-poppins font-medium'
            >
              Where <span className='text-blue-600 font-semibold'>creativity</span> meets <span className='text-blue-700 font-semibold'>strategy</span>. We craft <span className='text-blue-800 font-semibold'>actionable ideas</span> that break through the noise and deliver exceptional results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-24 bg-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/30' />
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='text-5xl md:text-6xl font-oswald font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-blue-600 mb-8'
              >
                Our Story
              </motion.h2>
              <div className='space-y-6 text-lg text-slate-700 leading-relaxed font-poppins'>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Founded in <span className='text-blue-600 font-semibold'>2009</span>, Thought Bubbles Advertising emerged from a simple belief: that great advertising should be both creative and actionable. We&apos;re not just another agency – we&apos;re a creative thought-shop that believes in the power of insightful, witty, and colloquial communication.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Our founder, <span className='text-blue-700 font-semibold'>Manoj Motiani</span>, brings <span className='text-blue-800 font-semibold'>27 years</span> of diverse industry experience to every project. His dynamic approach ensures that every session, every campaign, and every creative solution is not just educational but also entertaining.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  We believe in setting brand tone and manner through relevant communication for both tactical campaigns and strong thematic initiatives. Our work speaks the language of the people while maintaining the sophistication that premium brands demand.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl blur-lg' />
                <div className='relative bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-sm'>
                  <div className='text-center'>
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className='relative inline-block mb-6'
                    >
                      <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl blur-md' />
                      <div className='relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4'>
                        <Target
                          size={48}
                          className='text-white'
                        />
                      </div>
                    </motion.div>
                    <h3 className='text-3xl font-bold text-slate-800 mb-6'>Our Mission</h3>
                    <p className='text-slate-700 text-lg leading-relaxed'>To create advertising that doesn&apos;t just look good, but works hard. We believe in actionable creatives that drive real business results and create lasting impact.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden'>
        <div className='absolute inset-0'>
          <motion.div
            className='absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-3xl'
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='text-center mb-20'
          >
            <h2 className='text-5xl md:text-6xl font-oswald font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-blue-600 mb-8'>What Drives Us</h2>
            <p className='text-xl text-slate-700 max-w-3xl mx-auto font-poppins'>Our core values shape every decision, every campaign, and every relationship we build.</p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                icon: Star,
                title: "Creative Excellence",
                description: "We push boundaries and challenge conventions to deliver work that stands out in a crowded marketplace.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Target,
                title: "Strategic Thinking",
                description: "Every creative decision is backed by strategic insight and business understanding.",
                color: "from-blue-600 to-blue-700",
              },
              {
                icon: Users,
                title: "Partnership",
                description: "We believe in building lasting relationships with our clients, not just delivering projects.",
                color: "from-blue-700 to-blue-800",
              },
              {
                icon: TrendingUp,
                title: "Results-Driven",
                description: "Our work is measured by the impact it creates, not just the awards it wins.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Zap,
                title: "Innovation",
                description: "We constantly explore new technologies and creative approaches to stay ahead of the curve.",
                color: "from-blue-600 to-blue-700",
              },
              {
                icon: Heart,
                title: "Authenticity",
                description: "We stay true to our values and deliver work that reflects our genuine passion for creativity.",
                color: "from-blue-700 to-blue-800",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className='relative group'
              >
                <div className='absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-md backdrop-blur-sm group-hover:blur-lg transition-all duration-300' />
                <div className='relative bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-sm group-hover:shadow-md transition-all duration-300 h-full'>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className='relative inline-block mb-6'
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-xl blur-md opacity-20`} />
                    <div className={`relative bg-gradient-to-br ${value.color} rounded-xl p-4`}>
                      <value.icon
                        size={32}
                        className='text-white'
                      />
                    </div>
                  </motion.div>
                  <h3 className='text-xl font-bold text-slate-800 mb-4'>{value.title}</h3>
                  <p className='text-slate-700 leading-relaxed'>{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-24 bg-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-50/30 to-blue-100/20' />
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='text-center mb-20'
          >
            <h2 className='text-5xl md:text-6xl font-oswald font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-blue-600 mb-8'>Meet Our Founder</h2>
            <p className='text-xl text-slate-700 max-w-3xl mx-auto font-poppins'>The creative mind behind Thought Bubbles and the driving force of our success.</p>
          </motion.div>

          <div className='max-w-5xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl blur-lg' />
              <div className='relative bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-sm'>
                <div className='text-center'>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className='relative inline-block mb-8'
                  >
                    <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full blur-lg' />
                    <div className='relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-full p-8 w-32 h-32 mx-auto flex items-center justify-center'>
                      <span className='text-4xl text-white font-bold'>MM</span>
                    </div>
                  </motion.div>
                  <h3 className='text-4xl font-bold text-slate-800 mb-4'>Manoj Motiani</h3>
                  <p className='text-2xl text-blue-600 font-semibold mb-8'>Creative Head & Founder</p>
                  <div className='space-y-6 text-lg text-slate-700 leading-relaxed font-poppins text-left max-w-4xl mx-auto'>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      With over <span className='text-blue-600 font-semibold'>27 years</span> of diverse industry experience, Manoj has been the creative force behind countless successful campaigns and brand transformations.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      His dynamic approach to creativity and leadership has made Thought Bubbles not just an agency, but a creative partner that clients trust and rely on.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      Manoj&apos;s passion for education and knowledge sharing has led to inspiring sessions with students from institutions like <span className='text-blue-700 font-semibold'>Jagran Lakecity University</span>, where he shares insights that spark creativity and innovation.
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 relative overflow-hidden'>
        <div className='absolute inset-0'>
          <motion.div
            className='absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl'
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='relative'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-white/2 rounded-2xl blur-lg' />
            <div className='relative bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20'>
              <h2 className='text-5xl md:text-6xl font-oswald font-bold text-white mb-8'>Ready to Work Together?</h2>
              <p className='text-xl text-slate-300 mb-10 font-poppins'>Let&apos;s create something extraordinary that breaks through the noise and delivers real results for your brand.</p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='flex flex-col sm:flex-row gap-6 justify-center'
              >
                <Link href='/contact-us'>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className='relative group'
                  >
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300' />
                    <div className='relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300'>Get Started</div>
                  </motion.button>
                </Link>
                <Link href='/work/all'>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className='relative group'
                  >
                    <div className='absolute inset-0 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300' />
                    <div className='relative bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/20'>View Our Work</div>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
