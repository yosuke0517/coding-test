import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalHeader from "@/app/components/GlobalHeader";
import GlobalFooter from "@/app/components/GlobalFooter";
import {FOOTER_HEIGHT, HEADER_HEIGHT} from "@/app/utils/const";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodingTest",
  description: "Coding Test for Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
      <GlobalHeader/>
      <main className="flex-grow" style={{paddingTop: HEADER_HEIGHT, paddingBottom: FOOTER_HEIGHT}}>
          {children}
      </main>
      <GlobalFooter/>
      </body>
      </html>
  );
}
