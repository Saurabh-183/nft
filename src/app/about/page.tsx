import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const teamMembers = [
  { name: "Alex Rivera", role: "Founder & CEO", gradient: "from-purple-500 to-indigo-600" },
  { name: "Sarah Chen", role: "Creative Director", gradient: "from-pink-500 to-rose-600" },
  { name: "Marcus Kim", role: "Lead Developer", gradient: "from-cyan-500 to-blue-600" },
  { name: "Priya Patel", role: "Head of Partnerships", gradient: "from-amber-500 to-orange-600" },
];

const stats = [
  { value: "32k+", label: "Digital Artworks" },
  { value: "20k+", label: "Artists Worldwide" },
  { value: "10k+", label: "Live Auctions" },
  { value: "$50M+", label: "Total Volume" },
];

export default function AboutPage() {
  return (
    <main className="bg-[#0A0A0F] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none" />
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <p className="text-purple-400 font-poppins text-sm font-medium tracking-widest uppercase mb-4">
            About NFTme
          </p>
          <h1 className="font-clash font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.0] mb-6">
            The Future of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Digital Art
            </span>
          </h1>
          <p className="text-white/50 font-poppins text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            NFTme is the premier marketplace for discovering, collecting, and trading rare digital
            artworks and NFTs from the world&apos;s most talented creators.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-clash font-bold text-4xl sm:text-5xl text-white mb-2">{stat.value}</p>
                <p className="text-white/40 font-poppins text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-purple-700/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left */}
            <div>
              <p className="text-purple-400 font-poppins text-sm font-medium tracking-widest uppercase mb-4">
                Our Mission
              </p>
              <h2 className="font-clash font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight">
                Empowering
                <br />
                Digital Creators
              </h2>
              <p className="text-white/50 font-poppins text-sm sm:text-base leading-relaxed mb-6">
                We believe every digital artist deserves a platform that values their creativity and
                protects their work. NFTme provides the tools, community, and marketplace to help
                artists thrive in the Web3 economy.
              </p>
              <p className="text-white/50 font-poppins text-sm sm:text-base leading-relaxed">
                From emerging talents to established names, we curate the finest collections and
                connect creators with collectors who appreciate genuine artistry.
              </p>
            </div>
            {/* Right — visual */}
            <div className="grid grid-cols-2 gap-4">
              {["from-purple-500 to-indigo-700", "from-pink-500 to-rose-700", "from-cyan-500 to-blue-700", "from-amber-500 to-orange-700"].map((grad, i) => (
                <div key={i} className={`aspect-square rounded-2xl bg-gradient-to-br ${grad} opacity-80`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 border-t border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-14">
            <p className="text-purple-400 font-poppins text-sm font-medium tracking-widest uppercase mb-4">
              The Team
            </p>
            <h2 className="font-clash font-bold text-4xl sm:text-5xl md:text-6xl text-white">
              Meet the Visionaries
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="group text-center">
                <div className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl bg-gradient-to-br ${member.gradient} mb-4 group-hover:scale-105 transition-transform duration-300`} />
                <h3 className="font-clash font-semibold text-white text-sm sm:text-base">{member.name}</h3>
                <p className="text-white/40 font-poppins text-xs mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <h2 className="font-clash font-bold text-4xl sm:text-5xl text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-white/40 font-poppins text-sm mb-8 max-w-md mx-auto">
            Have questions about NFTme or want to partner with us? We&apos;d love to hear from you.
          </p>
          <a
            href="mailto:hello@nftme.com"
            className="btn-primary inline-block font-poppins font-semibold text-sm px-8 py-4 rounded-xl text-white"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
