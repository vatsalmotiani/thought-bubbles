"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Award, Users, Target, Zap, Star, TrendingUp, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import EnquireNowForm from "@/components/EnquireNowForm";

export default function AboutPage() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const handleSpaceshipClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  const handleSubmitted = () => {
    setShowForm(false);
    setSubmitted(true);
  };

  const values = [
    {
      icon: Star,
      title: "Creative Excellence",
      description: "We push boundaries and challenge conventions to deliver work that stands out in a crowded marketplace.",
      rotation: 2,
    },
    {
      icon: Target,
      title: "Strategic Thinking",
      description: "Every creative decision is backed by strategic insight and business understanding.",
      rotation: -1,
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We believe in building lasting relationships with our clients, not just delivering projects.",
      rotation: 1,
    },
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description: "Our work is measured by the impact it creates, not just the awards it wins.",
      rotation: -2,
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly explore new technologies and creative approaches to stay ahead of the curve.",
      rotation: 3,
    },
    {
      icon: Heart,
      title: "Authenticity",
      description: "We stay true to our values and deliver work that reflects our genuine passion for creativity.",
      rotation: -1,
    },
  ];

  return (
    <>
      <div
        ref={containerRef}
        className='min-h-screen'
      >
        {/* Story Section */}
        <section className='py-24 relative overflow-hidden'>
          <div className='relative z-10 max-w-7xl mx-auto px-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2
                  className='text-6xl md:text-7xl font-black mb-8'
                  style={{ color: "#1E1E1E", fontFamily: "Oswald, sans-serif" }}
                >
                  Our <span style={{ color: "#00B6E7" }}>Story</span>
                </h2>

                <div
                  className='space-y-8 text-lg leading-relaxed'
                  style={{ color: "#828282" }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='relative'
                  >
                    <div
                      className='relative rounded-2xl p-6 border-3 transform'
                      style={{
                        backgroundColor: "white",
                        borderColor: "#00B6E7",
                        boxShadow: "4px 4px 0px rgba(0, 182, 231, 0.3)",
                      }}
                    >
                      <p>
                        Founded in <span style={{ color: "#00B6E7", fontWeight: "700" }}>2009</span>, Thought Bubbles Advertising emerged from a simple belief: that great advertising should be both creative and actionable.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className='relative'
                  >
                    <div
                      className='relative rounded-2xl p-6 border-3 transform'
                      style={{
                        backgroundColor: "white",
                        borderColor: "#00B6E7",
                        boxShadow: "4px 4px 0px rgba(0, 182, 231, 0.3)",
                      }}
                    >
                      <p>
                        Our founder, <span style={{ color: "#00B6E7", fontWeight: "700" }}>Manoj Motiani</span>, brings <span style={{ color: "#00B6E7", fontWeight: "700" }}>27 years</span> of diverse industry experience to every project.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className='relative'
                  >
                    <div
                      className='relative rounded-2xl p-6 border-3 transform'
                      style={{
                        backgroundColor: "white",
                        borderColor: "#00B6E7",
                        boxShadow: "4px 4px 0px rgba(0, 182, 231, 0.3)",
                      }}
                    >
                      <p>
                        We believe in setting brand tone through <span style={{ color: "#00B6E7", fontWeight: "700" }}>relevant communication</span> that speaks the language of the people.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                viewport={{ once: true }}
                className='relative'
              >
                <div
                  className='relative rounded-3xl p-12 border-4 transform'
                  style={{
                    backgroundColor: "white",
                    borderColor: "#00B6E7",
                    boxShadow: "12px 12px 0px #00B6E7",
                  }}
                >
                  <div className='text-center'>
                    <div
                      className='relative rounded-full p-6 border-3 mb-8 inline-block'
                      style={{
                        backgroundColor: "#00B6E7",
                        borderColor: "#1E1E1E",
                        boxShadow: "4px 4px 0px #1E1E1E",
                      }}
                    >
                      <Target
                        size={48}
                        color='white'
                      />
                    </div>
                    <h3
                      className='text-4xl font-black mb-6'
                      style={{ color: "#1E1E1E" }}
                    >
                      Our Mission
                    </h3>
                    <p
                      className='text-lg leading-relaxed'
                      style={{ color: "#828282" }}
                    >
                      To create advertising that doesn't just look good, but works hard. We believe in actionable creatives that drive real business results.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className='py-24 relative overflow-hidden'>
          <div className='relative z-10 max-w-7xl mx-auto px-4'>
            <div className='text-center mb-20'>
              <h2
                className='text-6xl md:text-7xl font-black mb-8'
                style={{ color: "#1E1E1E", fontFamily: "Oswald, sans-serif" }}
              >
                What <span style={{ color: "#00B6E7" }}>Drives</span> Us
              </h2>
              <p
                className='text-xl max-w-3xl mx-auto'
                style={{ color: "#828282" }}
              >
                Our core values shape every decision, every campaign, and every relationship we build.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='relative'
                >
                  <div
                    className='relative rounded-3xl p-8 border-3 transform h-full'
                    style={{
                      backgroundColor: "white",
                      borderColor: "#00B6E7",
                      boxShadow: "6px 6px 0px rgba(0, 182, 231, 0.4)",
                    }}
                  >
                    <div
                      className='relative rounded-2xl p-4 border-3 mb-6 inline-block'
                      style={{
                        backgroundColor: "#00B6E7",
                        borderColor: "#1E1E1E",
                        boxShadow: "3px 3px 0px #1E1E1E",
                      }}
                    >
                      <value.icon
                        size={32}
                        color='white'
                      />
                    </div>

                    <h3
                      className='text-2xl font-black mb-4'
                      style={{ color: "#1E1E1E" }}
                    >
                      {value.title}
                    </h3>
                    <p
                      className='leading-relaxed'
                      style={{ color: "#828282" }}
                    >
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='relative py-32 overflow-hidden'>
          <div className='relative z-10 max-w-6xl mx-auto px-4 text-center'>
            <div
              className='relative rounded-3xl p-12 border-4 transform'
              style={{
                backgroundColor: "white",
                borderColor: "#00B6E7",
                boxShadow: "12px 12px 0px #00B6E7",
              }}
            >
              <h2
                className='text-6xl md:text-7xl font-black mb-8'
                style={{ color: "#1E1E1E", fontFamily: "Oswald, sans-serif" }}
              >
                Ready to Work <span style={{ color: "#00B6E7" }}>Together?</span>
              </h2>

              <p
                className='text-2xl mb-12 max-w-3xl mx-auto leading-relaxed'
                style={{ color: "#828282" }}
              >
                Let's create something <span style={{ color: "#00B6E7", fontWeight: "700" }}>extraordinary</span> that breaks through the noise and delivers real results for your brand.
              </p>

              <div className='flex flex-col sm:flex-row gap-8 justify-center items-center'>
                <button
                  className='relative px-12 py-6 rounded-full font-black text-xl text-white transform border-4'
                  onClick={handleSpaceshipClick}
                  style={{
                    backgroundColor: "#00B6E7",
                    borderColor: "#1E1E1E",
                    boxShadow: "6px 6px 0px #1E1E1E",
                  }}
                >
                  <span className='flex items-center gap-3'>
                    Get Started
                    <ArrowRight size={24} />
                  </span>
                </button>

                <button
                  className='relative px-12 py-6 rounded-full font-black text-xl border-4 transform'
                  style={{
                    backgroundColor: "#F2F2F2",
                    borderColor: "#00B6E7",
                    color: "#00B6E7",
                    boxShadow: "6px 6px 0px #00B6E7",
                  }}
                >
                  <Link
                    href={"/work"}
                    className='flex items-center gap-3'
                  >
                    View Our Work
                    <ArrowRight size={24} />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <AnimatePresence>
        {showForm && (
          <EnquireNowForm
            onClose={handleClose}
            onSubmitted={handleSubmitted}
            type='none'
          />
        )}
      </AnimatePresence>
    </>
  );
}
