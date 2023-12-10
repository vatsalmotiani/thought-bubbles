import { Poppins } from "next/font/google";
import Link from "next/link";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Service({ serviceName = "Branding" }) {
  return (
    <Link href={`/work`}>
      <div className='mx-2 bg-white  w-max rounded-3xl  py-7	px-11 border-b-4 border-sky-200 drop-shadow-sm hover:border-tb-blue hover:drop-shadow-lg duration-300 '>
        <p className={`${poppins.className} font-medium text-xl text-tb-blue leading-3`}>{serviceName}</p>
      </div>
    </Link>
  );
}
