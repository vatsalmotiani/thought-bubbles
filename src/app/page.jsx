import Title from "@/components/Title";
import Service from "@/components/Service";
import CaseSmall from "@/components/CaseSmall";
import OurWork from "@/sections/OurWork";
import Jumbotron from "@/sections/Jumbotron";
import Footer from "@/sections/Footer";

export default function Home() {
  const serviceList = ["Branding", "Copywriting", "Digital Marketing", "Social Media", "Production", "Logo", "Print"];
  return (
    <div className='h-screen'>
      <Jumbotron
        img={{ src: "", height: 22, width: 40, alt: "dummy" }}
        heading='test'
        subheading='test'
        body='test'
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
      <Footer />
    </div>
  );
}
