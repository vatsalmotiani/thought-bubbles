import Image from "next/image";

export default function Jumbotron({ img, heading, subheading, body }) {
  return (
    <div className='h-5/6 flex justify-center items-center  '>
      <Image
        src={img.src}
        alt={img.alt}
        height={img.height}
        width={img.width}
      />
      <div className=''>
        <p className='text-4xl font-bold'>{heading}</p>
        <p className='text-2xl'>{subheading}</p>
        <p className='text-lg'>{body}</p>
      </div>
    </div>
  );
}
