"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon, ChevronRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardSimpleProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
    idx?: number;
}

export default function ServiceCardSimple({ title, description, icon: Icon, href, idx = 0 }: ServiceCardSimpleProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-bl-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500 opacity-50" />

            <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                    {description}
                </p>

                <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-teal-600 group-hover:text-teal-800 transition-colors"
                >
                    View Service <ChevronRight className="w-4 h-4" />
                </Link>
            </div>
        </motion.div>
    );
}
