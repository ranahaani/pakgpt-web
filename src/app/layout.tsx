import type { Metadata } from "next";
import { Outfit, Noto_Nastaliq_Urdu } from "next/font/google"; // Import Google Fonts
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"], // Including thin/light weights
});

const notonastaliq = Noto_Nastaliq_Urdu({
  variable: "--font-urdu",
  weight: ["400", "700"], // Regular and Bold
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PakGPT - Pakistan's Own AI Assistant",
  description: "Culturally aware, multilingual AI assistant for Pakistan. Available in Urdu, English, and Roman Urdu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${notonastaliq.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
