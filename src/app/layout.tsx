import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BuildingProvider } from "@/components/BuildingContext";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <Navbar />
        <div className="h-0.5 bg-gray-200 mb-4"></div>
        <BuildingProvider>
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </BuildingProvider>
      </body>
    </html>
  );
}
