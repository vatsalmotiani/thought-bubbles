"use client";
import { motion } from "framer-motion";
import { slugifyList } from "@/lib/utils";
import caseList from "@/data/caseList";
import { Carousel, CarouselContent, CarouselPrevious, CarouselItem, CarouselNext } from "@/components/ui/carousel";
import CaseCard from "@/components/CaseCard";
import CaseLarge from "@/components/CaseLarge";

// export default function WorkCase({ params }) {
//   const cat = params.category;
//   return (
//     <div className='flex flex-wrap justify-center md:w-5/6 mt-8'>
//       {cat !== "all"
//         ? caseList
//             .filter((caseStudy) => slugifyList(caseStudy.category).includes(cat))
//             .map((filteredCase) => {
//               return (
//                 <motion.div
//                   key={filteredCase.id}
//                   initial={{ opacity: 0, y: 100, rotate: -10 }}
//                   whileInView={{ opacity: 1, y: 0, rotate: 0, transition: { delay: 0.2, bounce: 0.4, duration: 0.8, type: "spring" } }}
//                   viewport={{ once: true }}
//                   className='mx-4 mb-8 md:mb-2'
//                 >
//                   <CaseCard caseStudy={filteredCase} />
//                 </motion.div>
//               );
//             })
//         : caseList.map((filteredCase) => {
//             return (
//               <motion.div
//                 key={filteredCase.id}
//                 initial={{ opacity: 0, y: 100, rotate: -10 }}
//                 whileInView={{ opacity: 1, y: 0, rotate: 0, transition: { delay: 0.2, bounce: 0.4, duration: 0.8, type: "spring" } }}
//                 viewport={{ once: true }}
//                 className='mx-4 mb-8 md:mb-2'
//               >
//                 <CaseCard caseStudy={filteredCase} />
//               </motion.div>
//             );
//           })}
//     </div>
//   );
// }
export default function WorkCase({ params }) {
  const cat = params.category;
  return (
    <div className=''>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className=''
      >
        <CarouselContent>
          {caseList
            .filter((item) => item.favourite === true) // only favoutites
            .map((filteredCase) => {
              return (
                <CarouselItem
                  key={filteredCase.id}
                  className='basis-full sm:basis-1/2 lg:basis-1/3 flex justify-center'
                >
                  <CaseLarge caseStudy={filteredCase} />
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
