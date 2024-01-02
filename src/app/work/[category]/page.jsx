import CaseLarge from "@/components/CaseLarge";
import { slugify, slugifyList, getRandom } from "@/lib/utils";
import caseList from "@/data/caseList";
import CaseCard from "@/components/CaseCard";
import CaseSmall from "@/components/CaseSmall";
import tailwindColours from "@/data/tailwindColours";

export default function WorkCase({ params }) {
  const cat = params.category;
  return (
    <div className='flex flex-wrap justify-center'>
      {cat !== "all"
        ? caseList
            .filter((caseStudy) => slugifyList(caseStudy.category).includes(cat))
            .map((filteredCase) => {
              return (
                <CaseCard
                  key={filteredCase.id}
                  caseStudy={filteredCase}
                />
              );
            })
        : caseList.map((filteredCase) => {
            return (
              <CaseCard
                key={filteredCase.id}
                caseStudy={filteredCase}
              />
            );
          })}
    </div>
  );
}
