const Title = ({ sectionName, heading, subheading }) => {
  return (
    <div className='flex flex-col items-center text-center '>
      <span className='w-5/6 lg:w-[720px]'>
        <p className='font-caveat lowercase text-tb-blue font-bold md:text-3xl text-xl'>{sectionName}</p>
        <p className='font-poppins text-tb-black font-medium py-2 md:py-4 text-xl md:text-2xl'>{heading}</p>
        <p className='leading-6 '>{subheading}</p>
      </span>
    </div>
  );
};

export default Title;
