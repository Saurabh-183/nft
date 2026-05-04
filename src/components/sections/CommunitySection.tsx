import Image from "next/image";

export default function CommunitySection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute left-48 bottom-0 w-[450px] h-[600px] rounded-full 
          bg-gradient-to-br from-[#DD24E1] to-[#5117F4] 
          blur-[130px] opacity-100 pointer-events-none" /> 
      <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-purple-600/20 blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/CommunitySectionImage.png"
            alt="Community Artwork"
            width={500}
            height={500}
            className="w-auto h-80 md:h-96 lg:h-[500px] object-contain z-10"
            priority
          />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="font-clash font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] text-white leading-[1.1] mb-8">
              Join The Community
              <br />
              And Get The Best NFT
              <br />
              Collection
            </h2>
           <button className="relative inline-flex items-center justify-center font-poppins font-semibold text-sm uppercase tracking-widest px-8 py-4 rounded-xl text-white overflow-hidden group">
            <svg
              className="absolute inset-0 w-full h-full z-0"
              viewBox="0 0 310 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 10C0 4.47715 4.47715 0 10 0H294.665C301.888 0 306.729 7.42292 303.816 14.0326L286.63 53.0326C285.031 56.6594 281.442 59 277.479 59H10C4.47715 59 0 54.5228 0 49V10Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="0"
                  y1="0"
                  x2="8.7351"
                  y2="88.6763"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#DD24E1" />
                  <stop offset="1" stopColor="#5117F4" />
                </linearGradient>
              </defs>
            </svg>
            <span className="relative z-10 flex items-center gap-2">
              JOIN COMMUNITY
            </span>
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}
