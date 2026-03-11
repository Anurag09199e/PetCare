"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SOSButtonProps {
    className?: string;
    size?: "sm" | "md" | "lg";
}

export default function SOSButton({ className, size = "md" }: SOSButtonProps) {
    const sizeClasses = {
        sm: "w-12 h-12",
        md: "w-16 h-16",
        lg: "w-24 h-24",
    };

    const iconClasses = {
        sm: "w-5 h-5",
        md: "w-7 h-7",
        lg: "w-10 h-10",
    };

    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className={cn("absolute bg-primary rounded-full", sizeClasses[size])}
                style={{ width: "150%", height: "150%" }}
            />

            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0, 0.4],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                }}
                className={cn("absolute bg-primary rounded-full", sizeClasses[size])}
                style={{ width: "200%", height: "200%" }}
            />

            <Link href="/ambulance">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                        "relative z-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-red-500/40 border-2 border-red-400/30",
                        sizeClasses[size]
                    )}
                >
                    <PhoneCall className={cn(iconClasses[size], "animate-pulse")} />
                </motion.button>
            </Link>
        </div>
    );
}
