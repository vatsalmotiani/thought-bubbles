import HeroSection from "@/components/HeroSection";
import InfiniteScroller from "@/components/InfiniteScroller";
import Footer from "@/components/Footer";
import WorkDisplayTiles from "@/components/WorkDisplayTiles";

export default function Home() {
  return (
    <main className='flex flex-col'>
      <HeroSection />
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
