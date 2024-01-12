import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/lib/utils";
import { ArrowRight } from "react-feather";

export default function CaseCard({ caseStudy }) {
  return (
    <div className='max-w-max max-h-max'>
      <Link
        className='md:mx-4 '
        href={`/work/cases/${slugify(caseStudy.name)}`}
      >
        <Image
          src={caseStudy.img}
          height='450'
          width='600'
          alt={caseStudy.name}
          className=' rounded-lg  hover:drop-shadow-xl duration-300'
        />

        <div className='w-5/6'>
          <p className='mt-3 text-tb-black font-medium '>{caseStudy.name}</p>
          <div className='flex text-neutral-400 mt-2 hover:text-neutral-500 duration-300'>
            <span className='text-sm me-2'>View Case Study</span>
            <ArrowRight size={18} />
          </div>
          {/* <p className='text-neutral-400'>{caseStudy.category.join(", ")}</p> */}
        </div>
      </Link>
    </div>
  );
}
