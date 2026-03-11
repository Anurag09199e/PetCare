"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
    name: string;
    petName: string;
    photo: string;
    rating: number;
    review: string;
    idx?: number;
}

export default function TestimonialCard({
    name,
    petName,
    photo,
    rating,
    review,
    idx = 0
}: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 relative"
        >
            {/* Star Rating */}
            <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={cn(
                            "w-4 h-4 transition-colors",
                            i < rating ? "fill-teal-500 text-teal-500" : "fill-slate-100 text-slate-100"
                        )}
                    />
                ))}
            </div>

            {/* Review Text */}
            <p className="text-slate-600 leading-relaxed mb-8 italic">
                "{review}"
            </p>

            {/* Author & Pet info */}
            <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <img
                            src={photo}
                            alt={name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-teal-500 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-2.5 h-2.5 bg-white rounded-full opacity-80" />
                    </div>
                </div>

                <div className="text-left">
                    <h4 className="font-black text-slate-900 leading-tight">{name}</h4>
                    <p className="text-teal-600 text-sm font-bold mt-1">
                        Parent of <span className="text-teal-700">{petName}</span>
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
