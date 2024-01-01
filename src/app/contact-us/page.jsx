import Form from "./Form";

export default function page() {
  return (
    <div className='flex justify-center mt-14 mb-24'>
      <div className='rounded-3xl bg-neutral-200 w-[400px] h-auto me-8'></div>
      <div className='flex flex-col w-[600px]'>
        <p className='font-poppins font-medium text-2xl text-tb-black mb-4'>Get In Touch</p>
        <Form />
      </div>
    </div>
  );
}
