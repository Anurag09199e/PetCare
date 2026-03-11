"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Heart, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#doctors", label: "Our Doctors" },
    { href: "#locations", label: "Locations" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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
                    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-teal-600 p-2 rounded-xl flex items-center justify-center">
                                <Heart className="h-5 w-5 text-white fill-white" />
                            </div>
                            <span className="font-extrabold text-2xl tracking-tight text-slate-900">
                                DD's MaxxPet
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
                        <div className="flex space-x-2 lg:space-x-6 mr-6">
                            {links.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "text-sm font-semibold transition-colors hover:text-teal-600 px-3 py-2 rounded-full",
                                            isActive ? "text-teal-600 bg-teal-50" : "text-slate-600"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="flex items-center space-x-4 pl-6 border-l border-slate-200">
                            <Link
                                href="/book"
                                className="text-sm font-bold bg-teal-600 text-white px-6 py-2.5 rounded-full hover:bg-teal-700 transition-colors flex items-center gap-2 shadow-sm"
                            >
                                <Calendar className="w-4 h-4" /> Book Appointment
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-900 hover:text-teal-600 p-2 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-md">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {links.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "block px-4 py-3 rounded-xl text-base font-semibold transition-colors",
                                        isActive
                                            ? "bg-teal-50 text-teal-600"
                                            : "text-slate-700 hover:bg-slate-50 hover:text-teal-600"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col px-2">
                            <Link
                                href="/book"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center gap-2 w-full bg-teal-600 text-white font-bold py-3.5 rounded-full shadow-sm"
                            >
                                <Calendar className="w-5 h-5" /> Book Appointment
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
