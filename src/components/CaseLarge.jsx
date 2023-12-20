import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { slugify } from "@/lib/utils";

export default function CaseLarge({ caseStudy }) {
  return (
    <div className='w-fit flex justify-center items-center m-8'>
      <Link href={`/work/cases/${slugify(caseStudy.name)}`}>
        <Image
          src={caseStudy.img}
          height={430}
          width={502}
          alt={name}
          className='border-b-8 duration-300 rounded-3xl border-sky-200 drop-shadow-sm hover:border-tb-blue  hover:drop-shadow-lg'
        />
      </Link>

      <div className='ms-12 flex flex-col'>
        <p className={`font-poppins  text-tb-black text-2xl`}>{caseStudy.name}</p>
        {/* <p className={`font-noto text-tb-body pb-2`}>{category.join(", ")}</p> */}
        <p className={`font-noto py-6 text-base  text-tb-body w-96`}>{caseStudy.shortDescription}</p>

        <div className='flex pb-4'>
          {caseStudy.metrics
            ? caseStudy.metrics.map((m) => {
                return (
                  <div
                    key={m.metric}
                    className='flex flex-col me-8'
                  >
                    <p className={`font-noto  text-tb-black  font-medium`}>{m.metric}</p>
                    <p className={`font-noto  text-tb-body`}>{m.value}</p>
                  </div>
                );
              })
            : null}
        </div>
        <Button
          type='white'
          link={`/work/cases/${slugify(caseStudy.name)}`}
        />
      </div>
    </div>
  );
}
