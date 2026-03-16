import "./globals.css";
import { BuildingProvider } from "@/components/BuildingContext";
import Navbar from "@/components/Navbar";
import { Schibsted_Grotesk } from "next/font/google";

const schibstedGrotesk = Schibsted_Grotesk({
    subsets: ["latin"],
    variable: "--font-schibsted",
    display: "swap",
    preload: false
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${schibstedGrotesk.variable} antialiased min-h-screen flex flex-col bg-white`}>
                <div className="border-b-2 border-gray-200">
                    <Navbar />
                </div>
                <div>
                    <BuildingProvider>
                        <main className="flex-1 overflow-hidden">{children}</main>
                    </BuildingProvider>
                </div>
            </body>
        </html>
    );
}
