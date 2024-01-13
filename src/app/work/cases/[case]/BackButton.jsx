"use client";
import { ArrowLeft } from "react-feather";
import Link from "next/link";

export function BackButton() {
  return (
    <Link
      href='/work/all'
      className='text-neutral-400 hover:text-neutral-500 duration-300 flex'
    >
      <ArrowLeft className='pe-2' />
      All Cases
    </Link>
  );
}
