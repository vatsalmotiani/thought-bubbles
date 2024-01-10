"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { motion } from "framer-motion";
import faqList from "@/data/faqList";

export function FAQ() {
  return (
    <div className='py-8 lg:py-14 flex flex-col items-center lg:flex-row align-middle justify-center bg-tb-black'>
      <Image
        src='assets/faq-des.svg'
        alt='FAQ'
        height={425}
        width={350}
        className='lg:ms-8'
      />

      <div className='mx-8 lg:mx-14 flex flex-col mt-14 lg:mt-0'>
        <p className='font-poppins font-medium text-xl lg:text-2xl text-white'>Got any questions? We&apos;ve got you!</p>
        <Accordion
          type='single'
          collapsible
          defaultValue='item-1'
        >
          {faqList.map((faq) => {
            return (
              <motion.div
                key={faq.id}
                whileHover={{ scale: 1.01 }}
                className='max-w-[720px]'
              >
                <AccordionItem value={`item-${faq.id}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
