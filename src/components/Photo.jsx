import Image from "next/image";

export default function Photo({ img, name, about }) {
  return (
    <div className='max-w-max max-h-max'>
      <Image
        src={img}
        height='450'
        width='600'
        alt={name}
        className=' rounded-lg  hover:drop-shadow-xl duration-300 md:mx-4'
      />

      <div className=' w-5/6'>
        <p className='mt-3 text-tb-black font-medium '>{name}</p>
        <p className='text-neutral-400'>{about}</p>
      </div>
    </div>
  );
}
