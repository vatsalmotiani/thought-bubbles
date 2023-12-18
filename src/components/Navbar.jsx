"use client";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
      <div className={`font-poppins text-lg lowercase`}>
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
