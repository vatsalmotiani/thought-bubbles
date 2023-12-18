import Image from "next/image";
import Link from "next/link";

export default function CaseSmall({ img, name, category, link = "/" }) {
  return (
    <div>
      <Link href={link}>
        <Image
          src={img}
          height={300}
          width={350}
          alt={name}
          className='my-3 border-b-8 duration-300 rounded-3xl border-sky-300 hover:border-tb-blue drop-shadow-sm'
        />
      </Link>

      <p className={`font-poppins ps-3  text-tb-black font-medium text-lg`}>{name}</p>
      <p className={`font-noto ps-3 text-gray-500`}>{category.join(", ")}</p>
    </div>
  );
}
