import Link from "next/link";
import { slugify } from "@/lib/utils";

export default function Service({ serviceName = "Branding" }) {
  return (
    <Link href={`/work/${slugify(serviceName)}`}>
      <div className='mx-2 w-max rounded-2xl  bg-gradient-to-l from-tb-black to-neutral-700'>
        <p className='py-4 px-6   font-poppins font-medium bg-clip-text text-white'>{serviceName}</p>
        {/* <p className='font-poppins font-medium bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-tb-blue'>{serviceName}</p> */}
      </div>
    </Link>
  );
}
