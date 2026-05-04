import type { NFTItem } from "@/lib/types";

interface NFTCardProps {
  item: NFTItem;
  className?: string;
}

export default function NFTCard({ item, className = "" }: NFTCardProps) {
  return (
    <div className={`group cursor-pointer ${className}`}>
      {/* Artist name + price */}
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-clash font-semibold text-white text-lg sm:text-xl leading-tight">
            {item.artist}
          </h3>
          <p className="text-white/40 font-poppins text-xs mt-0.5">{item.title}</p>
        </div>
        <span className="text-purple-400 font-clash font-semibold text-sm mt-1">{item.price} ETH</span>
      </div>

      {/* Image */}
      <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900">
        <div className={`absolute inset-0 ${item.gradient}`} />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        {/* Place bid on hover */}
        <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-[#0A0A0F] font-clash font-semibold text-xs px-4 py-2 rounded-lg">
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
}
