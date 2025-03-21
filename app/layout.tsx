
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Kewi",
    description: "Cool asf",
};

export const viewport: Viewport = {
    initialScale: 1,
    width: "device-width",
    height: "device-height",
    minimumScale: 1,
    maximumScale: 1,
    viewportFit: "cover",
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "#27272a" },
        { media: "(prefers-color-scheme: light)", color: "#ffffff" }
    ],
    colorScheme: "dark"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="relative min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 text-zinc-100 overflow-hidden">
                    <GridBackground />
                    <div className="relative z-10 flex-grow flex flex-col">
                        {children}
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}

// Grid Background Component
function GridBackground() {
    return (
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gridnet" />
      </div>
    )
}