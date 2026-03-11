"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

interface ServiceHeroProps {
    title: string;
    description: string;
    category?: string;
}

export default function ServiceHero({ title, description, category = "Service" }: ServiceHeroProps) {
    return (
        <section className="relative min-h-[400px] flex items-center bg-slate-900 overflow-hidden">
            {/* Background/Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-teal-900/20" />
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                    <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-teal-500 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[10%] right-[20%] w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 mb-8 text-sm font-medium text-slate-400">
                        <Link href="/" className="hover:text-teal-400 transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" /> Home
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-teal-500">{category}</span>
                    </nav>

                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
                        {description}
                    </p>
                </motion.div>
            </div>

            {/* Decorative SVG Pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden pointer-events-none">
                <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-full translate-y-px">
                    <path d="M0 100L1440 100V0C1440 0 1080 80 720 80C360 80 0 0 0 0V100Z" fill="#f8fafc" />
                </svg>
            </div>
        </section>
    );
}
