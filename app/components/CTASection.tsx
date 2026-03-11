"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

interface CTASectionProps {
    title?: string;
    description?: string;
    buttonText?: string;
}

export default function CTASection({
    title = "Ready to give your pet the best care?",
    description = "Join thousands of happy pet owners in Miami. Book your appointment today and see the difference compassionate care makes.",
    buttonText = "Book Appointment"
}: CTASectionProps) {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-slate-900 z-0" />
            <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl"
                >
                    <div className="w-16 h-16 bg-teal-500 rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-lg shadow-teal-500/20">
                        <Calendar className="w-8 h-8" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                        {title}
                    </h2>
                    <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/book"
                            className="w-full sm:w-auto px-10 py-5 bg-teal-600 hover:bg-teal-700 text-white font-black text-xl rounded-full transition-all transform hover:-translate-y-1 shadow-xl shadow-teal-900/40 flex items-center justify-center gap-2 group"
                        >
                            {buttonText}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
