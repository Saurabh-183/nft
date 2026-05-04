import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedArtwork from "@/components/sections/FeaturedArtwork";
import TrendingSection from "@/components/sections/TrendingSection";
import PopularArtists from "@/components/sections/PopularArtists";
import CommunitySection from "@/components/sections/CommunitySection";

export default function Home() {
  return (
    <main className="bg-[#0A0A0F] min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedArtwork />
      <TrendingSection />
      <PopularArtists />
      <CommunitySection />
      <Footer />
    </main>
  );
}
