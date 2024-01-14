import Reveal from "./Reveal";

const Title = ({ sectionName, heading, subheading }) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <span className='w-full px-4 sm:w-5/6 lg:w-[720px]'>
        <p className='font-caveat lowercase text-tb-blue font-bold text-2xl sm:text-3xl'>{sectionName}</p>
        <p className='font-poppins text-tb-black font-medium py-2 sm:py-4 text-2xl sm:text-3xl'>{heading}</p>
        <p className='leading-6'>{subheading}</p>
      </span>
    </div>
  );
};

export function TitleBold({ sectionName, heading, subheading }) {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <span className='w-full px-4 sm:w-5/6 lg:w-[720px]'>
        <p className='font-caveat lowercase text-tb-blue ps-3 pb-2 font-bold text-2xl sm:text-3xl'>{sectionName}</p>
        <p className='me-2 font-bold uppercase text-tb-black text-3xl xl:text-7xl '>{heading}</p>
        <p className='leading-6  text-tb-black mt-4 '>{subheading}</p>
      </span>
    </div>
  );
}

export default Title;
