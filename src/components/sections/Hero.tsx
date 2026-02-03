"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400 mb-6"
                    >
                        <Sparkles className="h-3.5 w-3.5" />
                        <span className="font-medium">Pakistan&apos;s First Culturally Aware AI</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl"
                    >
                        The Intelligence that <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">
                            Speaks Your Language
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl text-center leading-relaxed"
                    >
                        From <span className="text-emerald-300 font-medium">MDCAT prep</span> to <span className="text-emerald-300 font-medium">Daily Recipes</span>, PakGPT understands Urdu, English, and Roman Urdu seamlessly.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-10 flex flex-col sm:flex-row gap-4"
                    >
                        <Button variant="glow" size="lg" className="rounded-full">
                            Get it on Google Play
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full group border-white/10 hover:border-emerald-500/50">
                            See How It Works
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </motion.div>

                    {/* Hero Visual Placeholder - To be replaced by 3D Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                        className="mt-20 relative w-full max-w-5xl"
                    >
                        <div className="relative aspect-video rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl shadow-emerald-900/20">
                            <div className="absolute inset-0 flex items-center justify-center text-white/20">
                                {/* Replace with actual mockup image */}
                                <span className="text-lg">[3D Phone Mockup Visual]</span>
                            </div>
                            {/* Decorative glows */}
                            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-emerald-500/20 blur-[80px]" />
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-400/10 blur-[80px]" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
