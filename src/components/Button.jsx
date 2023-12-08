import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Button({ link, content }) {
  return (
    <div className={`${poppins.className} bg-sky-400 border-2 border-sky-500 rounded-xl drop-shadow-sm max-w-max px-6 py-3 mt-4 text-white hover:bg-tb-blue duration-300 hover:drop-shadow-lg`}>
      <Link href={link}>{content}</Link>
    </div>
  );
}
