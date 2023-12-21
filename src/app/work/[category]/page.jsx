import CaseLarge from "@/components/CaseLarge";
import { slugify, slugifyList } from "@/lib/utils";
import caseList from "@/data/caseList";

export default function WorkCase({ params }) {
  const cat = params.category;
  return (
    <div className='flex flex-col items-center'>
      {cat !== "all"
        ? caseList
            .filter((caseStudy) => slugifyList(caseStudy.category).includes(cat))
            .map((filteredCase) => {
              return (
                <CaseLarge
                  key={filteredCase.id}
                  caseStudy={filteredCase}
                />
              );
            })
        : caseList.map((filteredCase) => {
            return (
              <CaseLarge
                key={filteredCase.id}
                caseStudy={filteredCase}
              />
            );
          })}
    </div>
  );
}
