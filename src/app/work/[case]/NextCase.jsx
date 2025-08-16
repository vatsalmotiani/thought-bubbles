// TODO: Random Case Logic

import CaseCard from "@/components/CaseCard";
import caseList from "@/data/caseList";

export function NextCase({ name }) {
  const filteredList = caseList.filter((c) => c.name !== name);
  const randomCase = filteredList[Math.floor(Math.random() * filteredList.length)];

  return (
    filteredList.length > 0 && (
      <div className='flex flex-col mt-6 sm:mt-8 px-4 sm:px-6'>
        <p className='font-poppins font-medium text-tb-black text-xl sm:text-2xl pb-4 sm:pb-6 text-center sm:text-left'>Next Case</p>
        <div className='flex justify-center sm:justify-start'>
          <CaseCard caseStudy={randomCase} />
        </div>
      </div>
    )
  );
}
