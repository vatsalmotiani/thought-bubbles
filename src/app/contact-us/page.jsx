import Form from "./Form";
import Title, { TitleBold } from "@/components/Title";

export default function page() {
  return (
    <div className='flex flex-col items-center justify-center mb-14 '>
      {/* <div className='rounded-3xl bg-neutral-200 w-[400px] h-auto me-8'></div> */}
      <TitleBold
        sectionName='Contact Us'
        heading='Get In Touch'
        // subheading={`Drop a message. We'd love to hear from you`}
      />
      <div className='w-full md:w-5/6'>
        <Form />
      </div>
    </div>
  );
}
