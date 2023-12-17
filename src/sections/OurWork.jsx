import Title from "@/components/Title";
import CaseSmall from "@/components/CaseSmall";
import Button from "@/components/Button";

export default function OurWork() {
  return (
    <div className='bg-white flex flex-col items-center w-screen py-16'>
      <Title
        sectionName='Our Work'
        heading='Helping Brands Break out of their Bubble'
        subheading="Here's where the magic happens! Get an inside look at our success stories—a mix of creativity, problem-solving, and awesome collaborations with our amazing clients."
      />
      <div className='flex my-8'>
        <span className='me-8'>
          <CaseSmall
            img='/assets/case0.jpg'
            name='Inter Times'
            category={["Branding"]}
          />
        </span>
        <span className=''>
          <CaseSmall
            img='/assets/case0.jpg'
            name='Inter Times'
            category={["Branding"]}
          />
        </span>
      </div>
      <Button
        link='/work'
        type='White'
        content='View All'
      />
    </div>
  );
}
