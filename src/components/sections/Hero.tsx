"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlayStoreIcon } from "@/components/ui/icons";

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
                        Your intelligent companion for knowledge, creativity, and daily life—fluent in <span className="text-emerald-300 font-medium">Urdu, English, and Roman Urdu</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-10 flex flex-col sm:flex-row gap-4"
                    >
                        <Link href="https://play.google.com/store/apps/details?id=com.pakgpt.app" target="_blank">
                            <Button variant="glow" size="lg" className="rounded-full">
                                <PlayStoreIcon className="mr-2 h-5 w-5" />
                                Get it on Google Play
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg" className="rounded-full group border-white/10 hover:border-emerald-500/50">
                            See How It Works
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </motion.div>

                    {/* 3D Phone Mockup with Float Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                        transition={{ duration: 1, delay: 0.5, type: "spring" }}
                        className="mt-16 relative w-full max-w-[300px] md:max-w-[380px] mx-auto perspective-1000"
                    >
                        {/* Floating Container */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10"
                        >
                            <div className="relative aspect-[9/19] rounded-[3rem] overflow-hidden shadow-2xl shadow-emerald-500/20 border-[8px] border-gray-900 bg-gray-900">
                                <Image
                                    src="/iphone-mockup.png"
                                    alt="PakGPT App Interface"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Glass Reflection Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                            </div>
                        </motion.div>

                        {/* Ambient Glows */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-emerald-500/20 blur-[100px] rounded-full -z-10 animate-pulse" />
                        <motion.div
                            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-20 bg-emerald-400/10 blur-[60px] rounded-full -z-10"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
