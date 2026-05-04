import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NFTme - Discover Rare Collections Of Art & NFT's",
  description: "Create, Explore, & Collect Digital Art NFTs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0F] text-white font-poppins antialiased">
        {children}
      </body>
    </html>
  );
}
