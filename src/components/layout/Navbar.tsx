"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-16 py-5 bg-[#0A0A0F]/50 backdrop-blur-md border-b border-white/5">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center">
          <svg width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9769 19.9167C9.71113 18.6884 9 17.0223 9 15.2849C8.99997 14.4247 9.17453 13.5728 9.51373 12.778C9.85294 11.9832 10.3501 11.261 10.9769 10.6527C11.6037 10.0445 12.3479 9.56192 13.1668 9.23272C13.9858 8.90353 14.8636 8.73412 15.75 8.73417H27.0005C28.1939 8.73399 29.3383 8.27382 30.182 7.45487C31.0257 6.63592 31.4997 5.52525 31.4997 4.36717V0H36.0004V4.36717C36.0004 6.68361 35.0522 8.90519 33.3645 10.5432C31.6765 12.1811 29.3874 13.1013 27.0005 13.1013H15.75C15.1533 13.1013 14.581 13.3314 14.159 13.7409C13.7371 14.1504 13.5 14.7058 13.5 15.2849C13.5 15.864 13.7371 16.4195 14.159 16.829C14.581 17.2384 15.1533 17.4685 15.75 17.4685H27.0005C29.3874 17.4685 31.6765 18.3887 33.3645 20.0266C35.0522 21.6647 36.0004 23.8863 36.0004 26.2027V30.5697H31.5004V26.2025C31.5004 25.0442 31.0262 23.9334 30.1823 23.1145C29.3385 22.2955 28.194 21.8353 27.0005 21.8353H15.7497C13.9596 21.8353 12.2427 21.1453 10.9769 19.9167ZM26.9997 28.3867V30.5703H15.7497C11.5726 30.5703 7.5666 28.9598 4.61296 26.0934C1.65933 23.2269 9.03761e-10 19.3391 9.03761e-10 15.2853C-2.21554e-05 13.2781 0.40734 11.2905 1.19883 9.43608C1.99031 7.58162 3.15042 5.89662 4.61292 4.47728C6.07541 3.05795 7.81165 1.93206 9.7225 1.16392C11.6334 0.395784 13.6814 0.000426292 15.7497 0.000426292H26.9997V2.18401C26.9997 2.47082 26.9415 2.75481 26.8284 3.01978C26.7152 3.28474 26.5495 3.52549 26.3404 3.72827C26.1315 3.93104 25.8833 4.09187 25.6103 4.20157C25.3373 4.31126 25.0445 4.36767 24.749 4.36759H15.7492C14.2718 4.36758 12.8089 4.64995 11.444 5.19861C10.0791 5.74727 8.8389 6.55145 7.79423 7.56526C6.74957 8.57909 5.92089 9.78265 5.35552 11.1073C4.79015 12.4319 4.49916 13.8516 4.49916 15.2853C4.49921 18.181 5.68449 20.9578 7.79427 23.0053C9.90406 25.0528 12.7655 26.2031 15.7492 26.2031H24.7497C25.0452 26.2031 25.3378 26.2596 25.6108 26.3693C25.8836 26.479 26.1317 26.6398 26.3408 26.8426C26.5497 27.0455 26.7154 27.2862 26.8284 27.551C26.9415 27.816 26.9997 28.0999 26.9997 28.3867Z" fill="white"/>
          </svg>
        </div>
      </Link>

      {/* Desktop Nav Links and CTA Button */}
      <div className="hidden md:flex items-center gap-8 lg:gap-12">
        <Link href="/about" className="text-white  text-sm font-clash transition-colors duration-200 font-normal">
          About us
        </Link>
        <Link href="/store" className="text-white text-sm font-clash transition-colors duration-200 font-normal">
          Store
        </Link>
        <Link href="/games" className="text-white text-sm font-clash transition-colors duration-200 font-normal">
          Games
        </Link>
        <button className="bg-white text-[#0A0A0F] font-clash font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-white/90 transition-all duration-200 hover:scale-105">
          Connect Wallet
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0A0A0F]/95 backdrop-blur-md border-b border-white/10 py-6 px-6 flex flex-col gap-4 md:hidden">
          <Link href="/about" className="text-white/70 hover:text-white text-base font-clash transition-colors" onClick={() => setIsOpen(false)}>
            About us
          </Link>
          <Link href="/store" className="text-white/70 hover:text-white text-base font-clash transition-colors" onClick={() => setIsOpen(false)}>
            Store
          </Link>
          <Link href="/games" className="text-white/70 hover:text-white text-base font-clash transition-colors" onClick={() => setIsOpen(false)}>
            Games
          </Link>
          <button className="w-full bg-white text-[#0A0A0F] font-clash font-semibold text-sm px-5 py-3 rounded-lg mt-2">
            Connect Wallet
          </button>
        </div>
      )}
    </nav>
  );
}
