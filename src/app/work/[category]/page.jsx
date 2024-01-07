"use client";
import { motion } from "framer-motion";
import { slugifyList } from "@/lib/utils";
import caseList from "@/data/caseList";
import CaseCard from "@/components/CaseCard";

export default function WorkCase({ params }) {
  const cat = params.category;
  return (
    <div className='flex flex-wrap justify-center md:w-5/6 mt-8'>
      {cat !== "all"
        ? caseList
            .filter((caseStudy) => slugifyList(caseStudy.category).includes(cat))
            .map((filteredCase) => {
              return (
                <motion.div
                  key={filteredCase.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.15, delay: 0.25 } }}
                  viewport={{ once: true }}
                  className='mx-4 mb-8'
                >
                  <CaseCard caseStudy={filteredCase} />
                </motion.div>
              );
            })
        : caseList.map((filteredCase) => {
            return (
              <motion.div
                key={filteredCase.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.15, delay: 0.25 } }}
                viewport={{ once: true }}
                className='mx-4 mb-8'
              >
                <CaseCard caseStudy={filteredCase} />
              </motion.div>
            );
          })}
    </div>
  );
}
