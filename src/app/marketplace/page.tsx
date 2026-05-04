import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { trendingNFTs } from "@/lib/data";

const categories = ["All", "Art", "Photography", "Music", "Gaming", "Collectibles"];

const allNFTs = [
  ...trendingNFTs,
  {
    id: "7",
    artist: "Nina Walsh",
    title: "Aurora Dreams",
    price: "3.1",
    gradient: "bg-gradient-to-br from-green-400 via-teal-500 to-cyan-600",
  },
  {
    id: "8",
    artist: "Omar Hassan",
    title: "Desert Wind",
    price: "1.8",
    gradient: "bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-400",
  },
  {
    id: "9",
    artist: "Lena Novak",
    title: "Electric Soul",
    price: "4.2",
    gradient: "bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-400",
  },
];

export default function MarketplacePage() {
  return (
    <main className="bg-[#0A0A0F] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-10">
            <p className="text-purple-400 font-poppins text-sm font-medium tracking-widest uppercase mb-3">
              Explore
            </p>
            <h1 className="font-clash font-bold text-5xl sm:text-6xl md:text-7xl text-white mb-4">
              Marketplace
            </h1>
            <p className="text-white/40 font-poppins text-sm max-w-md mx-auto">
              Browse thousands of rare NFTs from the world&apos;s most talented digital artists.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`font-poppins text-sm px-4 sm:px-5 py-2 rounded-full transition-all duration-200 ${
                  i === 0
                    ? "bg-purple-600 text-white"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* NFT Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {allNFTs.map((nft) => (
              <div key={nft.id} className="group cursor-pointer">
                <div className={`w-full aspect-[4/3] rounded-xl ${nft.gradient} relative overflow-hidden mb-3`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-[#0A0A0F] font-clash font-semibold text-xs px-4 py-2 rounded-lg">
                      Place Bid
                    </button>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-clash font-semibold text-white text-lg">{nft.artist}</h3>
                    <p className="text-white/40 font-poppins text-xs mt-0.5">{nft.title}</p>
                  </div>
                  <span className="text-purple-400 font-clash font-semibold text-sm">{nft.price} ETH</span>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="btn-primary font-poppins font-semibold text-sm px-8 py-4 rounded-xl text-white">
              Load More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
