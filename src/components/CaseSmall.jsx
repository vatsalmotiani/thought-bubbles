import { slugify } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function CaseSmall({ caseStudy }) {
  return (
    <div>
      <Link href={`/work/cases/${slugify(caseStudy.name)}`}>
        <Image
          src={caseStudy.img}
          height={300}
          width={350}
          alt={caseStudy.name}
          className='my-3 border-b-8 duration-300 rounded-3xl border-sky-300 hover:border-tb-blue drop-shadow-sm'
        />
      </Link>

      <p className='font-poppins ps-3  text-tb-black font-medium text-lg'>{caseStudy.name}</p>
      <p className=' ps-3 text-gray-400'>{caseStudy.category.join(", ")}</p>
      {/* <p className=' ps-3 text-tb-body'>{caseStudy.shortDescription}</p> */}
    </div>
  );
}
