import HeroSection from "@/components/HeroSection";
import ServicesShowcase from "@/components/ServicesShowcase";
import ClientsSection from "@/components/ClientsSection";
import CTASection from "@/components/CTASection";
import WorkDisplay from "@/components/WorkDisplay";
import InfiniteScroller from "@/components/InfiniteScroller";

export default function Home() {
  return (
    <div className='h-auto flex flex-col gap-16'>
      <HeroSection />
      {/* <ServicesShowcase /> */}
      <InfiniteScroller text={"About Us"} />
      <ClientsSection />
      <InfiniteScroller text={"Our Work"} />
      <WorkDisplay />
      {/* <CTASection /> */}
    </div>
  );
}
