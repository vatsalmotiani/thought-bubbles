"use client";
import { ArrowLeft } from "react-feather";
import Link from "next/link";

export function BackButton() {
  return (
    <Link
      href='/work/all'
      className='text-tb-black hover:text-neutral-600 duration-300 flex'
    >
      <ArrowLeft className='pe-2' />
      All Cases
    </Link>
  );
}
