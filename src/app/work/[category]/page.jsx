import CaseLarge from "@/components/CaseLarge";
import { slugify, slugifyList } from "@/lib/utils";
import caseList from "@/data/caseList";
import CaseCard from "@/components/CaseCard";
import CaseSmall from "@/components/CaseSmall";

export default function WorkCase({ params }) {
  const cat = params.category;
  return (
    <div className='flex flex-wrap justify-center'>
      {cat !== "all"
        ? caseList
            .filter((caseStudy) => slugifyList(caseStudy.category).includes(cat))
            .map((filteredCase) => {
              return (
                <CaseSmall
                  key={filteredCase.id}
                  caseStudy={filteredCase}
                />
                // <CaseLarge
                //   key={filteredCase.id}
                //   caseStudy={filteredCase}
                // />
              );
            })
        : caseList.map((filteredCase) => {
            return (
              <CaseSmall
                key={filteredCase.id}
                caseStudy={filteredCase}
              />
              // <CaseLarge
              //   key={filteredCase.id}
              //   caseStudy={filteredCase}
              // />
            );
          })}
    </div>
  );
}
