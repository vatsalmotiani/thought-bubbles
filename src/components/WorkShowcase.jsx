"use client";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CaseCard from "@/components/CaseCard";
import caseList from "@/data/caseList";
import Link from "next/link";

export default function WorkShowcase() {
  const featuredCases = caseList.filter((item) => item.favourite === true);

  return (
    <section className='py-20 bg-tb-bg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-tb-black mb-6'>Featured Work</h2>
          <p className='text-xl md:text-2xl text-tb-body max-w-3xl mx-auto font-poppins'>Discover how we've helped brands break out of their bubble with creative campaigns that deliver results</p>
        </motion.div>

        {/* Work Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='mb-12'
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className='mx-2 sm:mx-4 md:mx-8'
          >
            <CarouselContent>
              {featuredCases.map((caseStudy) => (
                <CarouselItem
                  key={caseStudy.id}
                  className='basis-full sm:basis-1/2 lg:basis-1/3 flex justify-center'
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CaseCard caseStudy={caseStudy} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='bg-white border-2 border-tb-blue text-tb-blue hover:bg-tb-blue hover:text-white' />
            <CarouselNext className='bg-white border-2 border-tb-blue text-tb-blue hover:bg-tb-blue hover:text-white' />
          </Carousel>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <Link href='/work/all'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-tb-blue text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300'
            >
              View All Case Studies
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
