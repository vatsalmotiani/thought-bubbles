"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Careers",
      url: "/careers",
    },
    {
      name: "Work",
      url: "/work",
    },
    {
      name: "Contact Us",
      url: "/contact-us",
    },
  ];
  return (
    <div className='flex justify-around items-center px-6 py-6'>
      <div className='flex items-center '>
        <Link href='/'>
          <Image
            src='/tb-logo.svg'
            width={137}
            height={66}
            alt='Thought Bubbles Logo'
          />
        </Link>
      </div>
      <div className={`${poppins.className} text-lg lowercase`}>
        {navLinks.map(({ name, url }) => {
          const isActive = pathname.startsWith(url);
          return (
            <Link
              key={url}
              className={`px-4  hover:text-cyan-500 duration-300 ${isActive ? "text-tb-blue" : "text-gray-500"}`}
              href={url}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
