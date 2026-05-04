"use client";

import Image from "next/image";
import Link from "next/link";

const artists = [
  { id: 1, name: "Ferhat Deniz", image: "/FerhatDenizImage.png" },
  { id: 2, name: "Sebastian", image: "/Sebastianimage.png" },
  { id: 3, name: "Javier Miranda", image: "/JavierMirandaImage.png" },
  { id: 4, name: "Erick Butler", image: "/ErickButlerImage.png" },
];

export default function PopularArtists() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#DD24E1]/20 to-[#5117F4]/20 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <h2 className="font-clash font-bold text-4xl sm:text-5xl md:text-6xl text-white">
            Popular Artists
          </h2>

          <Link
            href="/artists"
            className="hidden sm:flex bg-white text-[#0A0A0F] font-clash font-semibold text-sm px-5 py-3.5 items-center gap-2 hover:bg-purple-100 transition-all duration-200 hover:scale-105 group"
          >
            View all Artists
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="#0A0A0F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Artists */}
        <div className="flex flex-wrap justify-center sm:justify-between gap-8 md:gap-12 lg:gap-16">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              
              {/* Avatar */}
              <div className="relative">
                <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-purple-500/50 transition-all duration-300 group-hover:scale-110">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Name */}
              <p className="font-clash font-normal text-white text-sm sm:text-base md:text-lg text-center group-hover:text-purple-300 transition-colors">
                {artist.name}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="sm:hidden mt-10 flex justify-center">
          <Link
            href="/artists"
            className="bg-white text-[#0A0A0F] font-clash font-semibold text-sm px-6 py-3 flex items-center gap-2"
          >
            View all Artists
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="#0A0A0F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}