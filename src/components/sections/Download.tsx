"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Smartphone, Download as DownloadIcon } from "lucide-react";

export function Download() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-16 flex flex-col items-center"
                >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                        <Smartphone className="w-8 h-8" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to Experience the <span className="text-emerald-400">Future?</span>
                    </h2>

                    <p className="text-white/60 text-lg mb-10 max-w-xl">
                        Download PakGPT today and start chatting in your own language.
                        Available now on Android. iOS coming soon.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <Button variant="glow" size="lg" className="px-8 py-6 text-lg rounded-xl w-full sm:w-auto">
                            <DownloadIcon className="mr-2 h-5 w-5" />
                            Download on Google Play
                        </Button>
                        <Button variant="outline" size="lg" disabled className="px-8 py-6 text-lg rounded-xl w-full sm:w-auto opacity-50 cursor-not-allowed border-white/10 hover:bg-transparent">
                            iOS Coming Soon
                        </Button>
                    </div>

                    <p className="mt-8 text-sm text-white/30">
                        Version 1.0.0 • Free for everyone
                    </p>

                </motion.div>

            </div>
        </section>
    );
}
