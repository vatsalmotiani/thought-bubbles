const Title = ({ sectionName, heading, subheading }) => {
  return (
    <div className='flex flex-col items-center text-center '>
      <span className=' max-w-4xl'>
        <p className='font-caveat lowercase text-tb-blue text-3xl font-bold '>{sectionName}</p>
        <p className='font-poppins text-tb-black text-3xl font-medium py-4'>{heading}</p>
        <p className='leading-6'>{subheading}</p>
      </span>
    </div>
  );
};

export default Title;
