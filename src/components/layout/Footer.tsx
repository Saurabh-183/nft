import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0D0D14]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between py-10 mb-10 gap-6">
          <Link href="/" className="font-clash font-bold text-2xl text-white tracking-tight">
            NFTme
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link href="/" className="text-white  text-base font-poppins transition-colors">
              Explore
            </Link>
            <Link href="/marketplace" className="text-white text-base font-poppins transition-colors">
              Marketplace
            </Link>
            <Link href="/artists" className="text-white  text-base font-poppins transition-colors">
              Artists
            </Link>
            <Link href="/about" className="text-white text-base font-poppins transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-purple-500 transition-colors duration-200 group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="#0A0A0F" strokeWidth="2" className="group-hover:stroke-white transition-colors" />
                <circle cx="12" cy="12" r="4" stroke="#0A0A0F" strokeWidth="2" className="group-hover:stroke-white transition-colors" />
                <circle cx="17.5" cy="6.5" r="1" fill="#0A0A0F" className="group-hover:fill-white transition-colors" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-purple-500 transition-colors duration-200 group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#0A0A0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-purple-500 transition-colors duration-200 group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="#0A0A0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors" />
              </svg>
            </a>
          </div>
        </div>

        <div className="py-5 flex sm:flex-row items-start justify-start gap-3 text-white text-xs font-poppins">
        <span>
           Privacy policy
          </span>
  <span>| </span><span>Copyright @ NFTme 2024. All Rights Reserved. </span><span> | </span> 
         
         <span>
 Terms of service
         </span>
         
        </div>
      </div>
    </footer>
  );
}
