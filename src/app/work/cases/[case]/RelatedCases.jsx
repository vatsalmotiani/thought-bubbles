"use client";
import CaseSmall from "@/components/CaseSmall";
import caseList from "@/data/caseList";

export function RelatedCases({ name }) {
  return (
    <div className='flex flex-col'>
      <p className='font-poppins text-tb-black text-2xl  pb-4'>Checkout Other Case Studies</p>
      <div className='flex'>
        {caseList
          .filter((c) => c.name !== name)
          .map((filteredCase) => {
            return (
              <span
                key={filteredCase.id}
                className='me-8'
              >
                <CaseSmall caseStudy={filteredCase} />
              </span>
            );
          })}
      </div>
    </div>
  );
}
