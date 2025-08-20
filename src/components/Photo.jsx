import Image from "next/image";

export default function Photo({ img, name, about }) {
  return (
    <div className='w-full sm:max-w-max max-h-max'>
      <div className='relative overflow-hidden rounded-lg hover:drop-shadow-lg duration-300 transition-all'>
        <Image
          src={img}
          height='450'
          width='600'
          alt={name}
          className='w-full h-auto object-cover rounded-lg hover:scale-105 duration-300 transition-transform'
        />
      </div>

      <div className='w-full mt-3 px-1'>
        <p className='text-tb-black font-medium text-sm sm:text-base leading-tight'>{name}</p>
        <p className='text-neutral-400 text-xs sm:text-sm mt-1 leading-relaxed'>{about}</p>
      </div>
    </div>
  );
}
