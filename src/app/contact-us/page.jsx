import Form from "./Form";
import Title, { TitleBold } from "@/components/Title";

export default function page() {
  return (
    <div className='flex justify-center mb-14 mt-8'>
      {/* <div className='rounded-3xl bg-neutral-200 w-[400px] h-auto me-8'></div> */}
      <div className='flex flex-col mx-8 w-full sm:w-[600px]'>
        <TitleBold
          sectionName='Contact us'
          heading='Get In Touch'
          subheading={`Drop a message. We'd love to hear from you`}
        />
        <Form />
      </div>
    </div>
  );
}
