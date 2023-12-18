import Image from "next/image";
// FONT

export default function Jumbotron({ img, heading, subheading, body }) {
  return (
    // <div className={`flex mt-20 mb-60 justify-center items-center`}>
    //   <Image
    //     src={img.src}
    //     alt={img.alt}
    //     height={img.height}
    //     width={img.width}
    //     className='mx-20'
    //   />
    //   <div className={`w-1/3 `}>
    //     {/* <p className={` font-caveat  text-tb-blue text-9xl font-bold w-1/2 drop-shadow-sm mb-8`}>{heading}</p> */}
    //     <p className={` font-poppins text-tb-dark text-2xl  py-4 `}>{subheading}</p>
    //     <p className={` font-noto text-gray-500 text-lg `}>{body}</p>
    //   </div>
    // </div>
    <div className={`flex flex-col my-20 justify-center items-center`}>
      <Image
        src={img.src}
        alt={img.alt}
        height={img.height}
        width={img.width}
        className='mx-20 mb-20'
      />
      {/* <div className={`w-2/3 2xl:w-1/3`}>
        <p className={` font-caveat  text-tb-blue text-9xl font-bold w-1/2 drop-shadow-sm mb-8`}>{heading}</p>
        <p className={` font-poppins text-tb-dark text-2xl  py-4 `}>{subheading}</p>
        <p className={` font-noto text-gray-500 text-lg `}>{body}</p>
      </div> */}
    </div>
  );
}
