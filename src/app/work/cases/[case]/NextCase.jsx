// TODO: Random Case Logic

import CaseCard from "@/components/CaseCard";
import caseList from "@/data/caseList";

export function NextCase({ name }) {
  const filteredList = caseList.filter((c) => c.name !== name);
  const randomCase = filteredList[Math.floor(Math.random() * filteredList.length)];

  return (
    filteredList.length > 0 && (
      <div className='flex flex-col mt-8'>
        <p className='font-poppins font-medium text-tb-black text-2xl  pb-4'>Next Case</p>
        <CaseCard caseStudy={randomCase} />
      </div>
    )
  );
}
