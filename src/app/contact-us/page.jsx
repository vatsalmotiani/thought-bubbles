import Form from "./Form";
import Title, { TitleBold } from "@/components/Title";
import Map from "./Map";

export default function page() {
  return (
    <div className='flex flex-col items-center justify-center mb-8 sm:mb-10 md:mb-14 px-4 sm:px-6'>
      {/* <div className='rounded-3xl bg-neutral-200 w-[400px] h-auto me-8'></div> */}
      <TitleBold
        sectionName='Contact Us'
        heading='Get In Touch'
        // subheading={`Drop a message. We'd love to hear from you`}
      />
      <div className='w-full md:w-5/6 mx-auto flex flex-col md:flex-row gap-6 md:gap-8 mt-6 sm:mt-8'>
        <div className='w-full md:w-1/2 order-2 md:order-1'>
          <Map />
        </div>
        <div className='w-full md:w-1/2 order-1 md:order-2'>
          <Form />
        </div>
      </div>
    </div>
  );
}
