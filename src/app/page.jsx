import Title from "@/components/Title";
import Service from "@/components/Service";
import CaseSmall from "@/components/CaseSmall";
import OurWork from "@/sections/OurWork";
import Jumbotron from "@/sections/Jumbotron";

export default function Home() {
  const serviceList = ["Branding", "Copywriting", "Digital Marketing", "Social Media", "Production", "Logo", "Print"];
  return (
    <div className='h-screen'>
      <Jumbotron
        img={{ src: "/assets/JumboDes.png", width: 610, height: 354, alt: "dummy" }}
        heading='Think Different'
        subheading='Take the next step and try different'
        body='Est sint laboris ut nisi amet velit cillum fugiat deserunt. Labore id quis irure irure consectetur esse. Occaecat Lorem do labore minim dolor qui occaecat laborum Lorem labore veniam reprehenderit ex cupidatat mollit. Qui est ipsum ullamco ullamco voluptate non. Consequat ea anim ea velit qeo'
      />
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

      {/* <OurWork /> */}
    </div>
  );
}
