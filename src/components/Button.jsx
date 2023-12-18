import Link from "next/link";

export default function Button({ link = "/", content = "View", type = "blue" }) {
  switch (type.toLowerCase()) {
    case "blue":
      return (
        <Link href={link}>
          <div className={`font-poppins bg-sky-400 border-2 border-sky-500 rounded-xl drop-shadow-sm max-w-max px-6 py-3 mt-4 text-white hover:bg-tb-blue duration-300 hover:drop-shadow-lg`}>{content}</div>
        </Link>
      );
    case "white":
      return (
        <Link href={link}>
          <div className={`font-noto bg-white border-2 border-gray-200 rounded-2xl  max-w-max px-8 py-3 mt-4 text-tb-body hover:text-gray-600 hover:bg-gray-100 duration-300 hover:drop-shadow-sm`}>{content}</div>
        </Link>
      );
  }
}
