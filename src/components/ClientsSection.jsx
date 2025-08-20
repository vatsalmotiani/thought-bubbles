"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import clientList from "@/data/clients";

export default function ClientsSection() {
  const featuredClients = clientList.filter((c) => c.favourite === true);

  return (
    <section className='py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          {/* <h2 className='text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-tb-black mb-6'>Trusted By</h2> */}
          <p className='text-xl md:text-2xl text-tb-body max-w-3xl mx-auto font-poppins'>Building bridges since 2009. We have proudly collaborated with esteemed clients, fostering lasting connections and delivering impactful results.</p>
        </motion.div>

        {/* Clients Grid */}
        <div className='flex justify-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`flex justify-center gap-8 md:gap-12 items-center flex-wrap`}
          >
            {featuredClients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className='flex justify-center items-center p-4'
              >
                <Image
                  src={client.logo}
                  width={80}
                  height={64}
                  alt={client.name}
                  className='max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0'
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='mt-20 gap-8 text-center flex flex-wrap items-center justify-center'
        >
          <div className='p-6'>
            <motion.div
              className='text-5xl md:text-6xl font-bold text-tb-blue mb-4'
              whileInView={{ scale: [0.8, 1.2, 1] }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              15+
            </motion.div>
            <h3 className='text-xl font-semibold text-tb-black mb-2'>Years of Excellence</h3>
            <p className='text-tb-body'>Delivering creative solutions since 2009</p>
          </div>

          <div className='p-6'>
            <motion.div
              className='text-5xl md:text-6xl font-bold text-tb-blue mb-4'
              whileInView={{ scale: [0.8, 1.2, 1] }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              500+
            </motion.div>
            <h3 className='text-xl font-semibold text-tb-black mb-2'>Campaigns Delivered</h3>
            <p className='text-tb-body'>Successful projects across diverse industries</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
