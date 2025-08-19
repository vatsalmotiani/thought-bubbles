"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import AnimatedForm from "./Form";
import Map from "./Map";

export default function ContactPage() {
  return (
    <div className='min-h-screen'>
      <section className='text-center pt-24 pb-8 px-4'>
        <motion.h1
          className='text-6xl md:text-8xl font-black mb-6'
          style={{ color: "#1E1E1E", fontFamily: "Oswald, sans-serif" }}
          animate={{ rotate: [0, 2, -2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          Get In <span style={{ color: "#00B6E7" }}>Touch</span>
        </motion.h1>
      </section>

      <section className='px-4 pb-16'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <AnimatedForm />
          {/* <Map /> */}
        </div>
      </section>
    </div>
  );
}
