import Link from "next/link";

export default function Button({ link = "/", content = "View", type = "blue" }) {
  switch (type.toLowerCase()) {
    case "blue":
      return (
        <Link href={link}>
          <div className=' bg-sky-400 border-2 border-sky-500 rounded-xl drop-shadow-sm max-w-max px-6 py-3 text-white hover:bg-tb-blue duration-300 hover:drop-shadow-lg'>{content}</div>
        </Link>
      );
    case "white":
      return (
        <Link href={link}>
          <div className=' bg-white border-2 border-neutral-100 rounded-2xl  max-w-max px-8 py-3 mt-4 hover:text-neutral-600 hover:bg-neutral-100 duration-300 hover:drop-shadow-sm'>{content}</div>
        </Link>
      );
    case "submit":
      return <button className='w-full disabled:bg-sky-200 disabled:border-sky-200 disabled:drop-shadow-none bg-sky-400 border-2 border-sky-500 rounded-xl drop-shadow-sm px-6 py-3 mt-4 text-white hover:bg-tb-blue duration-300 hover:drop-shadow-lg'>{content}</button>;
  }
}
