import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Luminexis — Walk freely. Live independently.",
  description:
    "Smart wearable technology that guides, protects, and empowers people with vision and hearing loss.",
  openGraph: {
    title: "Luminexis — Walk freely. Live independently.",
    description:
      "Standalone assistive wearables designed for dignity, independence, and the Indian environment.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#e0e5e8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${outfit.variable} ${jetbrains.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
