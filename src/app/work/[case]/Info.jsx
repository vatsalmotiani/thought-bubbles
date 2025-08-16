export function Info({ title, body, border = "t" }) {
  return (
    <div className={`border-${border}-2 border-neutral-200 flex flex-col md:flex-row md:justify-between py-4 sm:py-5 md:py-6 lg:py-8`}>
      <p className='text-tb-black font-medium mb-2 md:mb-0 text-sm sm:text-base'>{title}</p>
      <p className='text-sm sm:text-base leading-relaxed'>{body}</p>
    </div>
  );
}

export function Paragraph({ heading, body }) {
  return (
    <div className='flex flex-col'>
      {heading && <p className='font-poppins text-tb-black font-medium text-base sm:text-lg pb-2 sm:pb-3'>{heading}</p>}
      <p className='text-sm sm:text-base md:text-lg leading-relaxed md:leading-8 max-w-full mb-6 sm:mb-8'>{body}</p>
    </div>
  );
}
