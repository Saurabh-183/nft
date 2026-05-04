"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

function useCountdown(
  initialHours: number,
  initialMinutes: number,
  initialSeconds: number
): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}

export default function FeaturedArtwork() {
  const timeLeft = useCountdown(18, 57, 14);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#0A0A0F]">
       <div className="absolute left-[120px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none">
        <div
          className="absolute inset-0 rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, #DD24E1 0%, #5117F4 60%, transparent 90%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 flex justify-center z-10">
            <Image
              src="/bitcoin.png"
              alt="Featured Artwork"
              width={600}
              height={600}
              className="w-full max-w-[520px] rounded-2xl 
              shadow-[0_0_120px_rgba(139,92,246,0.35)]"
            />
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="font-clash font-medium text-[44px] sm:text-[56px] md:text-[64px] lg:text-[68px] leading-[1.1] text-white mb-4">
              Bitcoin <br /> Art Work
            </h2>

            <p className="text-white font-poppins text-sm mb-10">
              Created by{" "}
              <span className="text-[#DD24E1] font-medium cursor-pointer hover:opacity-80 transition">
                Jonathan Borba
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-8 sm:gap-10 mb-10">
                            <div className="text-center lg:text-left">
                <p className="text-white text-sm mb-1">Current Bid</p>
                <p className="text-white text-3xl sm:text-4xl font-semibold">
                  1.09 ETH
                </p>
                <p className="text-white text-sm mt-1">$1,835</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-white/10" />
              <div className="text-center lg:text-left">
                <p className="text-white text-sm mb-2">
                  Auction Ends In
                </p>

                <div className="flex items-center justify-center lg:justify-start gap-3 text-white">
                  <span className="text-3xl sm:text-4xl font-semibold">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="text-white text-2xl">:</span>

                  <span className="text-3xl sm:text-4xl font-semibold">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="text-white/40 text-2xl">:</span>

                  <span className="text-3xl sm:text-4xl font-semibold">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex justify-center lg:justify-start gap-6 text-xs text-white mt-2">
                  <span>Hours</span>
                  <span>Minutes</span>
                  <span>Seconds</span>
                </div>
              </div>
            </div>
            <button className="bg-white text-black font-medium text-sm px-6 py-3.5 flex items-center justify-center lg:justify-start gap-2 hover:bg-white/90 transition-all duration-200 hover:scale-105 group">
              View Art Work
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}