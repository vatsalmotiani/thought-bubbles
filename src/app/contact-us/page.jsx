import Form from "./Form";
import Title from "@/components/Title";

export default function page() {
  return (
    <div className='flex justify-center mt-8 mb-14'>
      {/* <div className='rounded-3xl bg-neutral-200 w-[400px] h-auto me-8'></div> */}
      <div className='flex flex-col w-[320px] sm:w-[600px]'>
        <Title
          heading='Get In Touch'
          subheading={`Drop a message. We'd love to hear from you`}
        />
        <Form />
      </div>
    </div>
  );
}
