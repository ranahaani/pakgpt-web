"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    {/* Logo Placeholder */}
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-bold">
                        P
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white">PakGPT</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="#features" className="text-sm font-medium text-white/70 hover:text-emerald-400 transition-colors">
                        Features
                    </Link>
                    <Link href="#use-cases" className="text-sm font-medium text-white/70 hover:text-emerald-400 transition-colors">
                        Use Cases
                    </Link>
                    <Link href="#testimonials" className="text-sm font-medium text-white/70 hover:text-emerald-400 transition-colors">
                        Testimonials
                    </Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" className="text-white">Sign In</Button>
                    <Button variant="glow">Download App</Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 gap-4">
                            <Link href="#features" className="text-sm font-medium text-white/80" onClick={() => setIsOpen(false)}>
                                Features
                            </Link>
                            <Link href="#use-cases" className="text-sm font-medium text-white/80" onClick={() => setIsOpen(false)}>
                                Use Cases
                            </Link>
                            <Button variant="glow" className="w-full">Download App</Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
