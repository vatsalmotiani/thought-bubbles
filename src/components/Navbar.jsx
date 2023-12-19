"use client";
import Image from "next/image";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
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
      url: "/work/all",
    },
    {
      name: "Contact Us",
      url: "/contact-us",
    },
  ];
  return (
    <div className='flex justify-around items-center px-6 pt-8'>
      <Link href='/'>
        <Image
          src='/tb-logo.svg'
          width={137}
          height={66}
          alt='Thought Bubbles Logo'
        />
      </Link>

      <div className={`font-poppins text-lg lowercase`}>
        {navLinks.map(({ name, url }) => {
          const isActive = pathname.startsWith(`${url}`);
          return (
            <Link
              key={url}
              className={`px-8  hover:text-cyan-500 duration-300 ${isActive ? "text-tb-blue " : "text-tb-black"}`}
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
