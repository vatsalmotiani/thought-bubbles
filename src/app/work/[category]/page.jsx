"use client";
import { motion } from "framer-motion";
import { slugifyList, unslugify } from "@/lib/utils";
import caseList from "@/data/caseList";
import CaseCard from "@/components/CaseCard";

export default function WorkCase({ params }) {
  const cat = params.category;
  return (
    <div className='flex flex-wrap justify-center xl:w-full mt-8'>
      {/* <div className='flex w-full'>
        <p className='sm:hidden ps-6 pb-4 text-tb-black font-medium '>{unslugify(cat)} Cases:</p>
      </div> */}

      {cat !== "all"
        ? caseList
            .filter((caseStudy) => slugifyList(caseStudy.category).includes(cat))
            .map((filteredCase, i) => {
              return (
                <motion.div
                  key={filteredCase.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.1, bounce: 0.2, duration: 0.3, type: "spring" } }}
                  viewport={{ once: true }}
                  className='mx-4 mb-8 md:mb-2'
                >
                  <CaseCard caseStudy={filteredCase} />
                </motion.div>
              );
            })
        : caseList.map((filteredCase, i) => {
            return (
              <motion.div
                key={filteredCase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.1, bounce: 0.2, duration: 0.3, type: "spring" } }}
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
