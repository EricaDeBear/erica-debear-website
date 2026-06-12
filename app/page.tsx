import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import StatsStrip from "@/components/StatsStrip";
import MeetTeam from "@/components/MeetTeam";
import AsSeenIn from "@/components/AsSeenIn";
import Testimonials from "@/components/Testimonials";
import FeaturedProperties from "@/components/FeaturedProperties";
import InstagramFollow from "@/components/InstagramFollow";
import AboutBlurb from "@/components/AboutBlurb";
import MarketVideos from "@/components/MarketVideos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header transparent />
      <ScrollReveal />
      <main>
        <Hero />
        <StatsStrip />
        <MeetTeam />
        <AsSeenIn />
        <Testimonials />
        <FeaturedProperties />
        <InstagramFollow />
        <AboutBlurb />
        <MarketVideos />
      </main>
      <Footer />
    </>
  );
}
