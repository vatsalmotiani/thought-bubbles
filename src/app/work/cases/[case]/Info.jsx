export function Info({ title, body, border = "t" }) {
  return (
    <div className={`border-${border}-2 border-neutral-200 flex flex-col md:flex-row md:justify-between py-6 md:py-8`}>
      <p className='text-tb-black font-medium mb-2 md:mb-0'>{title}</p>
      <p className=''>{body}</p>
    </div>
  );
}

export function Paragraph({ heading, body }) {
  return (
    <div className='flex flex-col'>
      {heading && <p className='font-poppins text-tb-black font-medium text-lg pb-2'>{heading}</p>}
      <p className='md:leading-8 md:text-lg max-w-full mb-8'>{body}</p>
    </div>
  );
}
