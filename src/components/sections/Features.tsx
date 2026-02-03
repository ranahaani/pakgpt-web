"use client";

import { motion } from "framer-motion";
import {
    Languages,
    BookOpen,
    ChefHat,
    Sparkles,
    Mic,
    Moon
} from "lucide-react";

const features = [
    {
        icon: Languages,
        title: "Multilingual Mastery",
        description: "Whether you speak Urdu, English, or Roman Urdu, PakGPT understands you perfectly. Seamless code-switching included.",
    },
    {
        icon: BookOpen,
        title: "Student's Best Friend",
        description: "Ace your exams with specialized knowledge for MDCAT, ECAT, and Board exams. Concepts explained in your language.",
    },
    {
        icon: Sparkles,
        title: "Image Generation",
        description: "Turn your imagination into reality. Create stunning AI art using prompts in Urdu or English.",
    },
    {
        icon: ChefHat,
        title: "Daily Life Assistant",
        description: "From Desi recipes to kitchen hacks, get help with everyday tasks tailored to the Pakistani lifestyle.",
    },
    {
        icon: Moon,
        title: "Islamic Guidance",
        description: "Accurate prayer times, Quranic verses, and authentic Duas right at your fingertips. Culturally sensitive and respectful.",
    },
    {
        icon: Mic,
        title: "Voice Interactions",
        description: "Coming Soon: Talk to PakGPT naturally. Voice input and output for a hands-free experience.",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 relative bg-black/50">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Why Choose <span className="text-emerald-400">PakGPT?</span>
                    </h2>
                    <p className="text-white/60 text-lg">
                        Generic AI doesn&apos;t get our context. PakGPT is built for Pakistan, by Pakistan.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-white/60 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
