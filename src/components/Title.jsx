const Title = ({ sectionName, heading = "Heading", subheading = "Subheading Text" }) => {
  return (
    <div className='flex flex-col items-center text-center '>
      <span className=' max-w-4xl'>
        <p className={`font-caveat lowercase text-tb-blue text-2xl font-bold `}>{sectionName}</p>
        <p className={`font-poppins text-tb-black text-2xl font-medium py-4`}>{heading}</p>
        <p className={`font-noto text-tb-body leading-6`}>{subheading}</p>
      </span>
    </div>
  );
};

export default Title;
