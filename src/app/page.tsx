import { Header } from "@/components/layout/Header";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Download } from "@/components/sections/Download";
import { UseCases } from "@/components/sections/UseCases";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      <Header />
      <Hero />
      <Features />
      <UseCases />
      <Testimonials />
      <Download />
      <FAQ />

      {/* Footer Placeholder */}
      <footer className="py-8 border-t border-white/10 text-center text-white/40 text-sm">
        <p>&copy; {new Date().getFullYear()} PakGPT. Built for Pakistan 🇵🇰</p>
      </footer>
    </main>
  );
}
