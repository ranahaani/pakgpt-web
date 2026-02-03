"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Moon, Palette, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const useCases = [
    {
        id: "student",
        label: "Student",
        icon: GraduationCap,
        chat: [
            { role: "user", text: "Can you explain Newton's Second Law in Urdu?" },
            { role: "ai", text: "Bilkul! Newton ka doosra qanoon (Second Law) kehta hai ke kisi cheez par lagne wali force uske mass aur acceleration ke barabar hoti hai. Formula: F = ma." }
        ]
    },
    {
        id: "islamic",
        label: "Islamic",
        icon: Moon,
        chat: [
            { role: "user", text: "What is the dua for traveling?" },
            { role: "ai", text: "Safar ki dua yeh hai: 'Subhanallathi sakh-khara lana hatha wama kunna lahu muqrinin...' (Glory be to Him who has subjected this to us...)" }
        ]
    },
    {
        id: "creative",
        label: "Creative",
        icon: Palette,
        chat: [
            { role: "user", text: "Generate an image of a futuristic Lahore." },
            { role: "ai", text: "Sure! Generating a high-res image of futuristic Lahore with neon Minar-e-Pakistan... 🎨" }
        ]
    },
    {
        id: "general",
        label: "Daily Life",
        icon: Search,
        chat: [
            { role: "user", text: "Best Biryani spot in Karachi?" },
            { role: "ai", text: "Karachi mein bohot options hain! Student Biryani aur Naseeb Biryani top favorites hain. Aapko spicy pasand hai ya mild?" }
        ]
    }
];

export function UseCases() {
    const [activeTab, setActiveTab] = useState("student");

    return (
        <section id="use-cases" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Built for <span className="text-emerald-400">Every Pakistani</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        See how PakGPT adapts to your needs, from education to entertainment.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">

                    {/* Tabs */}
                    <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-1/3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                        {useCases.map((useCase) => (
                            <button
                                key={useCase.id}
                                onClick={() => setActiveTab(useCase.id)}
                                className={cn(
                                    "flex items-center gap-4 p-4 rounded-xl text-left transition-all min-w-[200px] lg:min-w-0 border",
                                    activeTab === useCase.id
                                        ? "bg-emerald-500/10 border-emerald-500/50 text-white"
                                        : "bg-white/5 border-transparent text-white/50 hover:bg-white/10 hover:text-white"
                                )}
                            >
                                <div className={cn(
                                    "p-2 rounded-lg",
                                    activeTab === useCase.id ? "bg-emerald-500 text-black" : "bg-white/10"
                                )}>
                                    <useCase.icon className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-lg">{useCase.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Interactive Chat Display */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative bg-[#102219] border border-emerald-500/20 rounded-3xl p-6 min-h-[400px] shadow-2xl overflow-hidden backdrop-blur-sm">
                            <div className="absolute top-0 left-0 right-0 h-14 bg-black/20 border-b border-white/5 flex items-center px-6 gap-3">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                <div className="ml-auto text-xs text-emerald-500/50 font-mono">PakGPT v1.0</div>
                            </div>

                            <div className="mt-12 space-y-6">
                                <AnimatePresence mode="wait">
                                    {useCases.find(u => u.id === activeTab)?.chat.map((msg, idx) => (
                                        <motion.div
                                            key={`${activeTab}-${idx}`}
                                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, scale: 0.98 }}
                                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                                            className={cn(
                                                "flex w-full",
                                                msg.role === "user" ? "justify-end" : "justify-start"
                                            )}
                                        >
                                            <div className={cn(
                                                "max-w-[85%] p-4 rounded-2xl text-sm md:text-base leading-relaxed shadow-lg",
                                                msg.role === "user"
                                                    ? "bg-[#13ec80] text-[#102219] rounded-tr-sm font-medium"
                                                    : "bg-white/10 text-white rounded-tl-sm border border-white/5"
                                            )}>
                                                {msg.text}
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
