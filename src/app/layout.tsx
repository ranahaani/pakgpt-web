import type { Metadata } from "next";
import { Inter, Noto_Nastaliq_Urdu } from "next/font/google"; // Import Google Fonts
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
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
        className={`${inter.variable} ${notonastaliq.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
