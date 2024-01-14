"use client";
import { motion } from "framer-motion";
import { slugifyList } from "@/lib/utils";
import caseList from "@/data/caseList";
import CaseCard from "@/components/CaseCard";

export default function WorkCase({ params }) {
  const cat = params.category;
  return (
    <div className='flex flex-wrap justify-center xl:w-full mt-8'>
      {cat !== "all"
        ? caseList
            .filter((caseStudy) => slugifyList(caseStudy.category).includes(cat))
            .map((filteredCase) => {
              return (
                <motion.div
                  key={filteredCase.id}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, bounce: 0.4, duration: 0.8, type: "spring" } }}
                  viewport={{ once: true }}
                  className='mx-4 mb-8 md:mb-2'
                >
                  <CaseCard caseStudy={filteredCase} />
                </motion.div>
              );
            })
        : caseList.map((filteredCase) => {
            return (
              <motion.div
                key={filteredCase.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, bounce: 0.4, duration: 0.8, type: "spring" } }}
                viewport={{ once: true }}
                className='mx-4 mb-8 md:mb-2'
              >
                <CaseCard caseStudy={filteredCase} />
              </motion.div>
            );
          })}
    </div>
  );
}
