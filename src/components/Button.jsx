import { Poppins, Noto_Sans } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Button({ link = "/", content = "View", type = "blue" }) {
  switch (type) {
    case "blue":
      return (
        <div className={`${poppins.className} bg-sky-400 border-2 border-sky-500 rounded-xl drop-shadow-sm max-w-max px-6 py-3 mt-4 text-white hover:bg-tb-blue duration-300 hover:drop-shadow-lg`}>
          <Link href={link}>{content}</Link>
        </div>
      );
    case "white":
      return (
        <div className={`${noto.className} bg-white border-2 border-gray-200 rounded-2xl  max-w-max px-8 py-3 mt-4 text-gray-500 hover:text-gray-600 hover:bg-gray-100 duration-300 hover:drop-shadow-sm`}>
          <Link href={link}>{content}</Link>
        </div>
      );
  }
}
