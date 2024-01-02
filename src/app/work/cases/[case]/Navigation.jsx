"use client";
import Link from "next/link";
import { slugify } from "@/lib/utils";

export function Navigation({ name, pathname }) {
  return (
    <div className='flex items-center font-poppins text-tb-black font-medium text-lg duration-300 '>
      <Link
        href={`/work/cases/${slugify(name)}`}
        className={`me-8 px-4 py-2 duration-300 ${pathname === `/work/cases/${slugify(name)}` ? "bg-neutral-100 rounded-2xl  " : " hover:text-tb-body"}`}
      >
        About
      </Link>
      <Link
        href={`/work/cases/${slugify(name)}/gallery`}
        className={`me-8 px-4 py-2 duration-300 ${pathname === `/work/cases/${slugify(name)}/gallery` ? "bg-neutral-100 rounded-2xl  " : " hover:text-tb-body"}`}
      >
        Gallery
      </Link>
    </div>
  );
}
