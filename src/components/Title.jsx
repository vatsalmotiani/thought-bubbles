import Reveal from "./Reveal";

const Title = ({ sectionName, heading, subheading }) => {
  return (
    <div className='flex flex-col items-center text-center px-4 sm:px-6'>
      <span className='w-full sm:w-5/6 lg:w-[720px]'>
        {sectionName && (
          <p className='font-caveat text-tb-blue font-bold text-xl sm:text-2xl md:text-3xl mb-2'>{sectionName}</p>
        )}
        <p className='font-poppins text-tb-black font-medium py-2 sm:py-3 md:py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight'>{heading}</p>
        {subheading && (
          <p className='text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto'>{subheading}</p>
        )}
      </span>
    </div>
  );
};

export function TitleBold({ sectionName, heading, subheading }) {
  return (
    <div className='flex flex-col items-center justify-center text-center px-4 sm:px-6'>
      <span className='w-full text-center flex flex-col items-center'>
        {sectionName && (
          <p className='font-caveat text-tb-blue ps-3 pb-2 font-bold text-xl sm:text-2xl md:text-3xl'>{sectionName}</p>
        )}
        <p className='font-oswald font-bold uppercase tracking-tight text-tb-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl leading-tight'>{heading}</p>
        {subheading && (
          <p className='leading-relaxed text-tb-black mt-3 sm:mt-4 text-sm sm:text-base md:text-lg sm:w-5/6 lg:w-[720px]'>{subheading}</p>
        )}
      </span>
    </div>
  );
}

export default Title;
