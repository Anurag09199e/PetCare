"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Heart, Calendar, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { href: "/", label: "Home" },
    {
        href: "#services",
        label: "Services",
        dropdown: [
            { href: "/services/wellness", label: "Wellness" },
            { href: "/services/vaccinations", label: "Vaccinations" },
            { href: "/services/dental-care", label: "Dental Care" },
            { href: "/services/grooming", label: "Grooming" },
            { href: "/services/diagnostics", label: "Diagnostics" },
            { href: "/services/surgery", label: "Surgery" },
        ]
    },
    { href: "#doctors", label: "Our Doctors" },
    { href: "#locations", label: "Locations" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-800 py-3"
                    : "bg-slate-900 py-4 border-b border-slate-800/50"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-teal-500 p-2 rounded-xl flex items-center justify-center group-hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20">
                                <Heart className="h-5 w-5 text-slate-900 fill-slate-900" />
                            </div>
                            <span className="font-extrabold text-2xl tracking-tight text-white">
                                Dr. Ajay Sood Dog & Cat Clinic
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
                        <div className="flex space-x-2 lg:space-x-6 mr-6">
                            {links.map((link) => {
                                const isActive = pathname === link.href;
                                const hasDropdown = !!link.dropdown;

                                return (
                                    <div
                                        key={link.label}
                                        className="relative group"
                                        onMouseEnter={() => hasDropdown && setHoveredLink(link.label)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                    >
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "text-sm font-semibold transition-colors px-3 py-2 rounded-full flex items-center gap-1",
                                                isActive ? "text-teal-400 bg-slate-800" : "text-slate-300 hover:text-teal-400 hover:bg-slate-800/50"
                                            )}
                                        >
                                            {link.label}
                                            {hasDropdown && <ChevronDown className={cn("w-4 h-4 transition-transform", hoveredLink === link.label && "rotate-180")} />}
                                        </Link>

                                        {/* Dropdown Menu */}
                                        <AnimatePresence>
                                            {hasDropdown && hoveredLink === link.label && (
                                                <div style={{ perspective: "1000px" }} className="absolute left-0 mt-2 pt-2 z-50">
                                                    <motion.div
                                                        initial={{ opacity: 0, rotateX: -30, y: -20, scale: 0.9 }}
                                                        animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, rotateX: -30, y: -20, scale: 0.9 }}
                                                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                                        style={{ transformOrigin: "top" }}
                                                        className="w-56 bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden py-2"
                                                    >
                                                        {link.dropdown?.map((sub) => (
                                                            <Link
                                                                key={sub.href}
                                                                href={sub.href}
                                                                className="block px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-teal-400 transition-colors"
                                                            >
                                                                {sub.label}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                </div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex items-center space-x-4 pl-6 border-l border-slate-700">
                            <Link
                                href="/book"
                                className="text-sm font-bold bg-teal-500 text-slate-900 px-6 py-2.5 rounded-full hover:bg-teal-400 transition-colors flex items-center gap-2 shadow-lg shadow-teal-500/20"
                            >
                                <Calendar className="w-4 h-4" /> Book Appointment
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-teal-400 p-2 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 shadow-2xl overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            {links.map((link) => {
                                const isActive = pathname === link.href;
                                const hasDropdown = !!link.dropdown;
                                const isExpanded = mobileExpanded === link.label;

                                return (
                                    <div key={link.label} className="space-y-1">
                                        <div className="flex items-center justify-between">
                                            <Link
                                                href={link.href}
                                                onClick={() => !hasDropdown && setIsOpen(false)}
                                                className={cn(
                                                    "block px-4 py-3 rounded-xl text-base font-semibold transition-colors flex-grow",
                                                    isActive
                                                        ? "bg-slate-800 text-teal-400"
                                                        : "text-slate-300 hover:bg-slate-800 hover:text-teal-400"
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                            {hasDropdown && (
                                                <button
                                                    onClick={() => setMobileExpanded(isExpanded ? null : link.label)}
                                                    className="p-3 text-slate-400"
                                                >
                                                    <ChevronDown className={cn("w-5 h-5 transition-transform", isExpanded && "rotate-180")} />
                                                </button>
                                            )}
                                        </div>

                                        {/* Mobile Submenu */}
                                        <AnimatePresence>
                                            {hasDropdown && isExpanded && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="pl-4 space-y-1 overflow-hidden"
                                                >
                                                    {link.dropdown?.map((sub) => (
                                                        <Link
                                                            key={sub.href}
                                                            href={sub.href}
                                                            onClick={() => setIsOpen(false)}
                                                            className="block px-4 py-2.5 text-sm font-medium text-slate-400 hover:text-teal-400"
                                                        >
                                                            {sub.label}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                            <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col px-2">
                                <Link
                                    href="/book"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full bg-teal-500 text-slate-900 font-bold py-3.5 rounded-full shadow-lg shadow-teal-500/20"
                                >
                                    <Calendar className="w-5 h-5" /> Book Appointment
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

