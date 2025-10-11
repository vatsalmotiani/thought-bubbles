import InfiniteScroller from "@/components/InfiniteScroller";
import Footer from "@/components/Footer";
import WorkDisplayTiles from "@/components/WorkDisplayTiles";
import CardHeroSection from "@/components/CardHeroSection";
import HeroTextScaler from "@/components/ScaleHero";
import CountdownScroll from "@/components/CountdownSection";
import BottomCTAPopup from "@/components/BottomCTA";

export default function Home() {
  return (
    <main className='flex flex-col'>
      <BottomCTAPopup />
      <HeroTextScaler />
      <CardHeroSection />
      <CountdownScroll />
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
