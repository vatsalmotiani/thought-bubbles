import Link from "next/link";
import { slugify } from "@/lib/utils";

export default function Service({ serviceName = "Branding" }) {
  return (
    <Link href={`/work/${slugify(serviceName)}`}>
      <div className='mx-2 bg-white  w-max rounded-3xl  py-7	px-11 border-b-4 border-sky-200 drop-shadow-sm hover:border-tb-blue hover:drop-shadow-lg duration-300 '>
        <p className={`font-poppins font-medium text-xl  bg-clip-text text-transparent  bg-gradient-to-r from-sky-300 to-tb-blue `}>{serviceName}</p>
      </div>
    </Link>
  );
}
