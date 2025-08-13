import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/lib/utils";
import { ArrowRight } from "react-feather";

export default function CaseCard({ caseStudy }) {
  return (
    <div className='w-full sm:max-w-max max-h-max'>
      <Link
        className='block'
        href={`/work/cases/${slugify(caseStudy.name)}`}
      >
        <div className='relative overflow-hidden rounded-lg hover:drop-shadow-xl duration-300 transition-all'>
          <Image
            src={caseStudy.img}
            height='450'
            width='600'
            alt={caseStudy.name}
            className='w-full h-auto object-cover hover:scale-105 duration-300 transition-transform'
          />
        </div>

        <div className='w-full mt-3 px-1'>
          <p className='text-tb-black font-medium text-sm sm:text-base leading-tight'>{caseStudy.name}</p>
          <div className='flex items-center text-neutral-400 mt-2 hover:text-neutral-500 duration-300'>
            <span className='text-xs sm:text-sm me-2 font-inter'>View Case Study</span>
            <ArrowRight size={16} className='sm:w-[18px] sm:h-[18px]' />
          </div>
          {/* <p className='text-neutral-400'>{caseStudy.category.join(", ")}</p> */}
        </div>
      </Link>
    </div>
  );
}
