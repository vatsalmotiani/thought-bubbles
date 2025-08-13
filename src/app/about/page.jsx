"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='relative py-20 bg-gradient-to-br from-white via-blue-50 to-tb-blue/10 overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden'>
          <motion.div
            className='absolute -top-40 -right-40 w-80 h-80 bg-tb-blue/20 rounded-full blur-3xl'
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-5xl md:text-6xl lg:text-7xl font-oswald font-bold text-tb-black mb-6'
            >
              About Thought
              <span className='block text-tb-blue'>Bubbles</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-xl md:text-2xl text-tb-body max-w-4xl mx-auto font-poppins'
            >
              Where creativity meets strategy. We craft actionable ideas that break through the noise and deliver results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-4xl md:text-5xl font-oswald font-bold text-tb-black mb-8'>Our Story</h2>
              <div className='space-y-6 text-lg text-tb-body leading-relaxed font-poppins'>
                <p>Founded in 2009, Thought Bubbles Advertising emerged from a simple belief: that great advertising should be both creative and actionable. We're not just another agency – we're a creative thought-shop that believes in the power of insightful, witty, and colloquial communication.</p>
                <p>Our founder, Manoj Motiani, brings 27 years of diverse industry experience to every project. His dynamic approach ensures that every session, every campaign, and every creative solution is not just educational but also entertaining.</p>
                <p>We believe in setting brand tone and manner through relevant communication for both tactical campaigns and strong thematic initiatives. Our work speaks the language of the people while maintaining the sophistication that premium brands demand.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='bg-gradient-to-br from-tb-blue/20 to-sky-300/20 rounded-3xl p-8'>
                <div className='text-center'>
                  <div className='text-6xl mb-4'>🎯</div>
                  <h3 className='text-2xl font-bold text-tb-black mb-4'>Our Mission</h3>
                  <p className='text-tb-body text-lg'>To create advertising that doesn't just look good, but works hard. We believe in actionable creatives that drive real business results.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-20 bg-tb-bg'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-oswald font-bold text-tb-black mb-6'>What Drives Us</h2>
            <p className='text-xl text-tb-body max-w-3xl mx-auto font-poppins'>Our core values shape every decision, every campaign, and every relationship we build.</p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                icon: "💡",
                title: "Creative Excellence",
                description: "We push boundaries and challenge conventions to deliver work that stands out in a crowded marketplace.",
              },
              {
                icon: "🎯",
                title: "Strategic Thinking",
                description: "Every creative decision is backed by strategic insight and business understanding.",
              },
              {
                icon: "🤝",
                title: "Partnership",
                description: "We believe in building lasting relationships with our clients, not just delivering projects.",
              },
              {
                icon: "🚀",
                title: "Results-Driven",
                description: "Our work is measured by the impact it creates, not just the awards it wins.",
              },
              {
                icon: "🎨",
                title: "Innovation",
                description: "We constantly explore new technologies and creative approaches to stay ahead of the curve.",
              },
              {
                icon: "🌟",
                title: "Authenticity",
                description: "We stay true to our values and deliver work that reflects our genuine passion for creativity.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300'
              >
                <div className='text-5xl mb-4'>{value.icon}</div>
                <h3 className='text-xl font-bold text-tb-black mb-4'>{value.title}</h3>
                <p className='text-tb-body leading-relaxed'>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-oswald font-bold text-tb-black mb-6'>Meet Our Founder</h2>
            <p className='text-xl text-tb-body max-w-3xl mx-auto font-poppins'>The creative mind behind Thought Bubbles and the driving force of our success.</p>
          </motion.div>

          <div className='max-w-4xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='bg-gradient-to-br from-blue-50 to-tb-blue/10 rounded-3xl p-8 md:p-12'
            >
              <div className='text-center'>
                <div className='w-32 h-32 bg-tb-blue rounded-full mx-auto mb-6 flex items-center justify-center'>
                  <span className='text-4xl text-white font-bold'>MM</span>
                </div>
                <h3 className='text-3xl font-bold text-tb-black mb-4'>Manoj Motiani</h3>
                <p className='text-xl text-tb-blue font-semibold mb-6'>Creative Head & Founder</p>
                <div className='space-y-4 text-lg text-tb-body leading-relaxed font-poppins text-left max-w-3xl mx-auto'>
                  <p>With over 27 years of diverse industry experience, Manoj has been the creative force behind countless successful campaigns and brand transformations.</p>
                  <p>His dynamic approach to creativity and leadership has made Thought Bubbles not just an agency, but a creative partner that clients trust and rely on.</p>
                  <p>Manoj's passion for education and knowledge sharing has led to inspiring sessions with students from institutions like Jagran Lakecity University, where he shares insights that spark creativity and innovation.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-sky-300 via-tb-blue to-sky-400'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-4xl md:text-5xl font-oswald font-bold text-white mb-6'
          >
            Ready to Work Together?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='text-xl text-white/90 mb-8 font-poppins'
          >
            Let's create something extraordinary that breaks through the noise and delivers real results for your brand.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='flex flex-col sm:flex-row gap-4 justify-center'
          >
            <Link href='/contact-us'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-white text-tb-blue px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300'
              >
                Get Started
              </motion.button>
            </Link>
            <Link href='/work/all'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-tb-blue transition-all duration-300'
              >
                View Our Work
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
