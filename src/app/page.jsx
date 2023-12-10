import Title from "@/components/Title";
import Service from "@/components/Service";
import CaseSmall from "@/components/CaseSmall";

export default function Home() {
  const serviceList = ["Branding", "Copywriting", "Digital Marketing", "Social Media", "Production", "Logo", "Print"];
  return (
    <>
      <Title
        heading="We're your brand's best friend"
        subheading="We're the crew that turns brand dreams into reality. Explore our services - we're the wingmen your brand can't do without!"
      />
      <div className='flex my-6  justify-center'>
        {serviceList.map((service) => {
          return (
            <Service
              key={service}
              serviceName={service}
            />
          );
        })}
      </div>

      <Title
        sectionName='Our Work'
        heading='Helping Brands Break out of their Bubble'
        subheading="Here's where the magic happens! Get an inside look at our success stories—a mix of creativity, problem-solving, and awesome collaborations with our amazing clients."
      />
      <CaseSmall
        img='/assets/case0.jpg'
        name='Inter Times'
        category={["Branding"]}
      />
    </>
  );
}
