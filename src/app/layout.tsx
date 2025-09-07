import "./globals.css";
import { BuildingProvider } from "@/components/BuildingContext";
import Navbar from "@/components/Navbar";
import { Schibsted_Grotesk } from "next/font/google";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-schibsted',
  display: 'swap',
  preload: false,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={`h-screen flex flex-col overflow-x-hidden ${schibstedGrotesk.variable}`}>
        <Navbar />
        <div className="h-0.5 bg-gray-200"></div>
        <BuildingProvider>
          <main className="flex-1 overflow-hidden">
            {children}
          </main>
        </BuildingProvider>
      </body>
    </html>
  );
}
