import { slugify } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function CaseSmall({ caseStudy }) {
  return (
    <div>
      <Link href={`/work/cases/${slugify(caseStudy.name)}`}>
        <Image
          src={caseStudy.img}
          height={0}
          width={0}
          sizes='100vw'
          alt={caseStudy.name}
          className='h-[350px] w-[400px] my-3 drop-shadow-sm duration-300 rounded-3xl'
        />
      </Link>

      <p className='ps-3 text-tb-black'>{caseStudy.name}</p>

      {/* <p className=' ps-3 text-gray-400'>{caseStudy.category.join(", ")}</p> */}
      {/* <p className=' ps-3 text-tb-body'>{caseStudy.shortDescription}</p> */}
    </div>
  );
}
