"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-4">
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className={cn(
                        "bg-white rounded-2xl border border-slate-100 transition-all duration-300 overflow-hidden",
                        openIndex === idx ? "shadow-md border-teal-100 ring-1 ring-teal-50" : "hover:border-slate-200"
                    )}
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className={cn(
                                "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                                openIndex === idx ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-500"
                            )}>
                                <HelpCircle className="w-4 h-4" />
                            </div>
                            <span className={cn(
                                "font-bold text-lg transition-colors",
                                openIndex === idx ? "text-teal-900" : "text-slate-800"
                            )}>
                                {item.question}
                            </span>
                        </div>
                        <ChevronDown className={cn(
                            "w-5 h-5 text-slate-400 transition-transform duration-300",
                            openIndex === idx && "rotate-180 text-teal-600"
                        )} />
                    </button>

                    <AnimatePresence>
                        {openIndex === idx && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-2">
                                    <p className="pt-4">{item.answer}</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
