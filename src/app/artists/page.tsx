import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const artists = [
  { name: "Ferhat Deniz", pieces: 24, volume: "42.3 ETH", gradient: "from-amber-400 to-orange-600" },
  { name: "Sebastian", pieces: 18, volume: "38.1 ETH", gradient: "from-pink-500 to-purple-700" },
  { name: "Javier Miranda", pieces: 31, volume: "55.8 ETH", gradient: "from-slate-400 to-gray-700" },
  { name: "Erick Butler", pieces: 15, volume: "29.4 ETH", gradient: "from-red-500 to-red-700" },
  { name: "Polina Kondrashova", pieces: 22, volume: "47.6 ETH", gradient: "from-blue-400 to-indigo-700" },
  { name: "Milad Fakurian", pieces: 19, volume: "33.2 ETH", gradient: "from-cyan-400 to-teal-700" },
  { name: "Nina Walsh", pieces: 27, volume: "61.0 ETH", gradient: "from-green-400 to-emerald-700" },
  { name: "Omar Hassan", pieces: 12, volume: "21.7 ETH", gradient: "from-amber-500 to-yellow-700" },
];

export default function ArtistsPage() {
  return (
    <main className="bg-[#0A0A0F] min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <p className="text-purple-400 font-poppins text-sm font-medium tracking-widest uppercase mb-3">
            Creators
          </p>
          <h1 className="font-clash font-bold text-5xl sm:text-6xl md:text-7xl text-white mb-4">
            Popular Artists
          </h1>
          <p className="text-white/40 font-poppins text-sm max-w-md mx-auto">
            Discover the most talented digital artists creating and selling NFTs on our platform.
          </p>
        </div>
      </section>

      {/* Artists List */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          {/* Top Leaderboard */}
          <div className="mb-12">
            <h2 className="font-clash font-semibold text-xl text-white/60 mb-6">Top Sellers This Week</h2>
            <div className="space-y-3">
              {artists.slice(0, 5).map((artist, i) => (
                <div
                  key={artist.name}
                  className="flex items-center gap-4 sm:gap-6 p-4 rounded-xl bg-white/3 border border-white/5 hover:border-purple-500/30 hover:bg-white/5 transition-all duration-200 cursor-pointer group"
                >
                  <span className="font-clash font-bold text-white/30 text-lg w-6 text-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${artist.gradient} flex-shrink-0 group-hover:scale-105 transition-transform`} />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-clash font-semibold text-white text-base sm:text-lg truncate">{artist.name}</h3>
                    <p className="text-white/40 font-poppins text-xs">{artist.pieces} artworks</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-clash font-semibold text-white text-sm sm:text-base">{artist.volume}</p>
                    <p className="text-green-400 font-poppins text-xs">+12.4%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Artists Grid */}
          <h2 className="font-clash font-semibold text-xl text-white/60 mb-6">All Artists</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
            {artists.map((artist) => (
              <div key={artist.name} className="group cursor-pointer text-center">
                <div className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto rounded-full bg-gradient-to-br ${artist.gradient} mb-3 ring-2 ring-white/10 group-hover:ring-purple-500/50 group-hover:scale-105 transition-all duration-300`} />
                <h3 className="font-clash font-semibold text-white text-sm sm:text-base mb-1 group-hover:text-purple-300 transition-colors">{artist.name}</h3>
                <p className="text-white/40 font-poppins text-xs">{artist.pieces} artworks</p>
                <p className="text-purple-400 font-poppins text-xs mt-0.5">{artist.volume}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute inset-0 section-bg-purple pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative">
          <h2 className="font-clash font-bold text-4xl sm:text-5xl text-white mb-4">
            Are You an Artist?
          </h2>
          <p className="text-white/40 font-poppins text-sm mb-8 max-w-md mx-auto">
            Join thousands of creators already selling on NFTme. List your first artwork today.
          </p>
          <button className="btn-primary font-poppins font-semibold text-sm px-8 py-4 rounded-xl text-white">
            Start Creating
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
