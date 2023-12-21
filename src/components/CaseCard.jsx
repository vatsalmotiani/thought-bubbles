import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/lib/utils";

export default function CaseCard({ caseStudy }) {
  return (
    <div>
      <Link
        className='flex flex-col'
        href={`/work/cases/${slugify(caseStudy.name)}`}
      >
        <Image
          src={caseStudy.img}
          height='0'
          width='0'
          alt={caseStudy.name}
          sizes='100vw'
          className='h-[430px] w-[500px] duration-300 rounded-3xl shadow-xl'
        />
        {/* <p className='ps-3 font-poppins text-tb-black font-medium text-lg'>{caseStudy.name}</p>
        <p className=' ps-3 text-gray-400'>{caseStudy.category.join(", ")}</p> */}
      </Link>
    </div>
  );
}
