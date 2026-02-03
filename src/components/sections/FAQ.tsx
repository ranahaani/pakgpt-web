"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Is PakGPT free to use?",
        answer: "Yes! PakGPT offers a generous free tier for all users. We also have premium plans for power users needing higher limits."
    },
    {
        question: "Does it support voice chat?",
        answer: "Voice interaction is currently in beta and will be rolling out to all users very soon."
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. We prioritize user privacy and adhere to strict data protection standards. Your conversations are private."
    },
    {
        question: "Can I use it for education?",
        answer: "PakGPT is optimized for students, covering curriculum topics for Pakistani boards, MDCAT, and ECAT."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Frequently Asked <span className="text-emerald-400">Questions</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex items-center justify-between w-full p-6 text-left"
                            >
                                <span className="text-lg font-medium text-white">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-emerald-500" />
                                ) : (
                                    <Plus className="w-5 h-5 text-white/50" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-white/60 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
