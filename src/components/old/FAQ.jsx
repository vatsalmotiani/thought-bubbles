"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { motion } from "framer-motion";
import faqList from "@/data/faqList";

export function FAQ() {
  return (
    <div className='py-6 sm:py-8 lg:py-14 flex flex-col items-center lg:flex-row align-middle justify-center bg-tb-black px-4 sm:px-6'>
      <Image
        src='assets/faq-des.svg'
        alt='FAQ'
        height={425}
        width={350}
        className='w-[250px] sm:w-[300px] lg:w-[350px] h-auto lg:ms-8'
      />

      <div className='mx-2 sm:mx-4 lg:mx-14 flex flex-col mt-8 sm:mt-10 lg:mt-0 w-full lg:w-auto'>
        <p className='font-poppins font-medium text-lg sm:text-xl lg:text-2xl text-white text-center lg:text-left mb-4 sm:mb-6'>Got any questions? We&apos;ve got you!</p>
        <Accordion
          type='single'
          collapsible
          defaultValue='item-1'
          className='w-full'
        >
          {faqList.map((faq) => {
            return (
              <motion.div
                key={faq.id}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className='max-w-[720px] w-full'
              >
                <AccordionItem value={`item-${faq.id}`}>
                  <AccordionTrigger className='text-sm sm:text-base lg:text-lg text-left'>{faq.question}</AccordionTrigger>
                  <AccordionContent className='text-sm sm:text-base text-gray-300 leading-relaxed'>{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
