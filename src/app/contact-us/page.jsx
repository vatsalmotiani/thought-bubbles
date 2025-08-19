"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import AnimatedForm from "./Form";
import Map from "./Map";

export default function ContactPage() {
  return (
    <div
      className='min-h-screen'
      style={{ backgroundColor: "#F2F2F2" }}
    >
      <section className='text-center py-24 px-4'>
        <motion.h1
          className='text-6xl md:text-8xl font-black mb-6'
          style={{ color: "#1E1E1E", fontFamily: "Oswald, sans-serif" }}
          animate={{ rotate: [0, 2, -2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          Get In <span style={{ color: "#00B6E7" }}>Touch</span>
        </motion.h1>
        <p
          className='text-xl max-w-3xl mx-auto'
          style={{ color: "#828282" }}
        >
          Ready to work together? Drop us a quick message below.
        </p>
      </section>

      <section className='px-4 py-16'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <AnimatedForm />
          <Map />
        </div>
      </section>

      <section className='px-4 pb-20'>
        <div className='max-w-4xl mx-auto'>
          <div
            className='rounded-3xl p-10 border-4 text-center'
            style={{
              backgroundColor: "white",
              borderColor: "#00B6E7",
              boxShadow: "8px 8px 0px #00B6E7",
            }}
          >
            <h3
              className='text-2xl font-black mb-6'
              style={{ color: "#1E1E1E" }}
            >
              Other Ways to Reach Us
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {[
                { icon: Mail, label: "Email", value: "hello@thoughtbubbles.in" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: MapPin, label: "Office", value: "Mumbai, India" },
              ].map((c, i) => (
                <div
                  key={i}
                  className='rounded-2xl p-6 border-2'
                  style={{ backgroundColor: "#F2F2F2", borderColor: "#00B6E7" }}
                >
                  <div className='flex items-center justify-center mb-3'>
                    <c.icon
                      size={24}
                      color='#00B6E7'
                    />
                  </div>
                  <div
                    className='font-bold text-sm'
                    style={{ color: "#1E1E1E" }}
                  >
                    {c.label}
                  </div>
                  <div
                    className='text-sm'
                    style={{ color: "#828282" }}
                  >
                    {c.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
