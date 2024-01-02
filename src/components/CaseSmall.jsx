import { slugify } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function CaseSmall({ caseStudy }) {
  return (
    <div className='max-w-max'>
      <Link href={`/work/cases/${slugify(caseStudy.name)}`}>
        <Image
          src={caseStudy.img}
          height={350}
          width={400}
          alt={caseStudy.name}
          className='my-3 drop-shadow-sm duration-300 rounded-3xl'
        />
      </Link>

      <p className='ps-3 text-tb-black'>{caseStudy.name}</p>

      {/* <p className=' ps-3 text-gray-400'>{caseStudy.category.join(", ")}</p> */}
      {/* <p className=' ps-3 text-tb-body'>{caseStudy.shortDescription}</p> */}
    </div>
  );
}
