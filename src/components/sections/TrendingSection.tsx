import Link from "next/link";
import Image from "next/image";
import { trendingNFTs } from "@/lib/data";

export default function TrendingSection() {
  return (
    <section className="relative py-16 md:py-24 trending-bg overflow-hidden">
     <div className="absolute bottom-0 left-0 w-[700px] h-[1000px] rounded-full bg-[#DD24E1] blur-[200px]" />
      <div className="absolute top-0 right-0 w-[700px] h-[1000px] rounded-full bg-[#5117F4] blur-[200px]" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-12 md:mb-16">
          <h2 className="font-clash font-semibold text-4xl sm:text-5xl md:text-6xl text-white mb-4">
            Trending This Week
          </h2>
          <p className="text-white font-poppins text-base max-w-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-x-12 lg:gap-y-16">          
          <div className="hidden md:block" />
          <TrendingCard item={trendingNFTs[0]} />
          <div className="md:-mt-80 mt-0">
          <TrendingCard item={trendingNFTs[1]} />
          </div>
          <div className="md:mt-3">
            <TrendingCard item={trendingNFTs[2]} />
          </div>
          <div  className="md:-mt-80 mt-0">
          <TrendingCard item={trendingNFTs[3]} />
          </div>
          <TrendingCard item={trendingNFTs[4]} />
          <div  className="md:-mt-80 mt-0">
            <TrendingCard item={trendingNFTs[5]} />
          </div>
          <div className="flex items-end justify-end">
            <Link
              href="/marketplace"
              className="bg-white text-[#0A0A0F] font-clash font-semibold text-sm px-6 py-3.5 flex items-center gap-2 hover:scale-105 transition"
            >
              Explore More →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

interface TrendingCardProps {
  item: {
    artist: string;
    title: string;
    price: string;
    gradient: string;
  };
}

function TrendingCard({ item }: TrendingCardProps) {
  const isImage = item.gradient.startsWith("/");

  return (
    <div className="group cursor-pointer">
            <div className="flex justify-between mb-3">
        <div>
          <h3 className="text-white text-xl font-semibold">{item.artist}</h3>
          <p className="text-white text-xs">{item.title}</p>
        </div>
        <span className="text-purple-400 text-sm">{item.price} ETH</span>
      </div>
      <div className="relative overflow-hidden aspect-[4/3]">
        {isImage ? (
          <Image
            src={item.gradient}
            alt={item.artist}
            fill
            className="object-cover"
          />
        ) : (
          <div className={`absolute inset-0 ${item.gradient}`} />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <ArtPreview artist={item.artist} />
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition">
          <button className="bg-white text-black px-4 py-2 rounded-lg text-xs">
            Place Bid
          </button>
        </div>

      </div>
    </div>
  );
}

function ArtPreview({ artist }: { artist: string }) {
  if (artist === "Ferhat Deniz") {
    return <div className="w-20 h-20" />;
  }
  if (artist === "Sebastian") {
    return <div className="w-20 h-20" />;
  }
  if (artist === "Polina Kondrashova") {
    return <div className="w-20 h-20" />;
  }
  if (artist === "Javier Miranda") {
    return <div className="w-20 h-20" />;
  }
  if (artist === "Milad Fakurian") {
    return <div className="w-20 h-20" />;
  }
  if (artist === "Erick Butler") {
    return <div className="w-20 h-20" />;
  }

  return null;
}