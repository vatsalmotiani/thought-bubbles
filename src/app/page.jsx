import HeroSection from "@/components/HeroSection";
import ServicesShowcase from "@/components/ServicesShowcase";
import AboutUsSection from "@/components/AboutUsSection";
import CTASection from "@/components/CTASection";
import WorkDisplay from "@/components/WorkDisplay";
import InfiniteScroller from "@/components/InfiniteScroller";
import Footer from "@/components/Footer";
import WorkDisplayTiles from "@/components/WorkDisplayTiles";

export default function Home() {
  return (
    <div className='h-auto flex flex-col gap-16'>
      <section id='jumbotron'>
        <HeroSection />
      </section>
      {/* <ServicesShowcase /> */}
      {/* <section id='about'>
        <InfiniteScroller text={"About Us"} />
        <AboutUsSection />
      </section> */}
      <section id='work'>
        <InfiniteScroller text={"Our Work"} />
        {/* <WorkDisplay /> */}
        <WorkDisplayTiles />
      </section>
      <section id='contact'>
        <InfiniteScroller text={"Get In Touch"} />
        <Footer />
      </section>
      {/* <CTASect9ion /> */}
    </div>
  );
}
