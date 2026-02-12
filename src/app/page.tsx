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
      <footer className="py-8 border-t border-white/10 text-center text-white/40 text-sm flex flex-col gap-4">
        <div className="flex justify-center gap-6">
          <a href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="/delete-account" className="hover:text-emerald-400 transition-colors">Delete Account</a>
        </div>
        <p>&copy; {new Date().getFullYear()} PakGPT. Built for Pakistan 🇵🇰</p>
      </footer>
    </main>
  );
}
