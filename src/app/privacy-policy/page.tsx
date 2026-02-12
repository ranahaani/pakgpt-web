import { Header } from "@/components/layout/Header";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30 font-sans">
      <Header />

      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
          <p className="text-white/60 mb-8">
            Last Updated: January 8, 2026
          </p>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <p>
              PakGPT ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how our mobile application collects, uses, and safeguards your information.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">1. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-white/90 mb-3">A. Permissions and Device Data</h3>
              <p className="mb-4">Our app requires the following permissions to provide its core functionality:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong className="text-white">Location (Coarse and Fine):</strong> Used to display accurate local weather updates, prayer times, and location-relevant suggestions. This data is processed to fetch relevant content and is not stored permanently on our servers for tracking purposes.</li>
                <li><strong className="text-white">Microphone:</strong> Used to enable voice chat and voice command features. Audio data is processed to convert speech to text and is not stored after processing.</li>
                <li><strong className="text-white">Camera and Photo Gallery:</strong> Used to allow you to upload profile pictures or share images within the chat. We only access images that you specifically select.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white/90 mb-3">B. Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Phone Number:</strong> We use your phone number for secure authentication via OTP (One-Time Password) to create and manage your unique account.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information solely for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Authenticating your identity and securing your account.</li>
                <li>Providing personalized AI responses and services (e.g., weather, local insights).</li>
                <li>Improving app performance and fixing technical issues.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">3. Data Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell your personal data. We may share data with trusted third-party services solely for the purpose of operating the app:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Google Firebase:</strong> For authentication and secure cloud database services.</li>
                <li><strong className="text-white">Generative AI Providers:</strong> Anonymized query data is processed to generate AI responses.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">4. Your Rights</h2>
              <p>
                You have the right to request the deletion of your account and all associated data at any time by contacting us or visiting our <span className="text-emerald-400 underline">Account Deletion Page</span>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:support@mail.pakgpt.app" className="text-emerald-400 hover:text-emerald-300 transition-colors">support@mail.pakgpt.app</a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <footer className="py-8 border-t border-white/10 text-center text-white/40 text-sm">
        <p>&copy; {new Date().getFullYear()} PakGPT. Built for Pakistan 🇵🇰</p>
      </footer>
    </main>
  );
}
