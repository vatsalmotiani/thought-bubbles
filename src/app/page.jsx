import HeroSection from "@/components/HeroSection";
import InfiniteScroller from "@/components/InfiniteScroller";
import Footer from "@/components/Footer";
import WorkDisplayTiles from "@/components/WorkDisplayTiles";
import CardHeroSection from "@/components/CardHeroSection";
import AboutUsSection from "@/components/AboutUsSection";

export default function Home() {
  return (
    <main className='flex flex-col'>
      <CardHeroSection />
      <AboutUsSection />
      {/* <HeroSection /> */}
      <section id='work'>
        <InfiniteScroller text={"Our Work"} />
        <WorkDisplayTiles />
      </section>
      <section id='contact'>
        <InfiniteScroller text={"Get In Touch"} />
        <Footer />
      </section>
    </main>
  );
}
