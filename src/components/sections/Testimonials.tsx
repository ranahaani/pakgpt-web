"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Ahmed Raza",
        role: "Medical Student",
        text: "MDCAT ki tayari ke liye best app hai! Concepts Urdu mein samajhna itna asaan kabhi nahi tha.",
        stars: 5,
    },
    {
        name: "Fatima Ali",
        role: "Freelancer",
        text: "I use the image generator for my design projects. The prompt understanding in Roman Urdu is a game changer.",
        stars: 5,
    },
    {
        name: "Usman Khan",
        role: "Developer",
        text: "Finally, an AI that understands Pakistani context. No more explaining 'load shedding' or 'chai' references!",
        stars: 5,
    },
    {
        name: "Sana Mir",
        role: "Content Creator",
        text: "YouTube summaries save me hours of research time. Highly recommended for every Pakistani content creator.",
        stars: 5,
    },
    {
        name: "Bilal Ahmed",
        role: "Business Owner",
        text: "Customer support emails writing has become so easy with English to Urdu translation features.",
        stars: 5,
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 relative overflow-hidden bg-white/[0.02]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Loved by <span className="text-emerald-400">Thousands</span>
                    </h2>
                    <p className="text-white/60 text-lg">
                        Join the growing community of users enhancing their productivity with PakGPT.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="w-full md:w-[350px] p-6 rounded-2xl bg-[#0f1211] border border-white/5 hover:border-emerald-500/30 transition-all hover:-translate-y-1"
                        >
                            <div className="flex gap-1 mb-4 text-emerald-500">
                                {[...Array(t.stars)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-white/80 mb-6 leading-relaxed italic">
                                &quot;{t.text}&quot;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <div className="font-semibold text-white">{t.name}</div>
                                    <div className="text-sm text-white/40">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
