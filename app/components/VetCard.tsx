"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Phone, CalendarPlus, Clock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface VetConfig {
    id: string;
    name: string;
    specialty: string;
    distance: string;
    rating: number;
    reviews: number;
    imageUrl: string;
    isOpen: boolean;
    phone: string;
}

interface VetCardProps {
    vet: VetConfig;
    className?: string;
}

export default function VetCard({ vet, className }: VetCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={cn(
                "group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col",
                className
            )}
        >
            <div className="relative h-48 w-full overflow-hidden">
                <img
                    src={vet.imageUrl}
                    alt={vet.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm text-slate-700">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    {vet.rating} <span className="text-slate-400 font-medium">({vet.reviews})</span>
                </div>
                <div className="absolute top-4 left-4">
                    {vet.isOpen ? (
                        <span className="bg-emerald-500 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                            <Clock className="w-3 h-3" /> Open Now
                        </span>
                    ) : (
                        <span className="bg-slate-800 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                            <Clock className="w-3 h-3" /> Closed
                        </span>
                    )}
                </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 line-clamp-1 group-hover:text-secondary transition-colors">{vet.name}</h3>
                <p className="text-secondary font-medium text-sm mt-1">{vet.specialty}</p>

                <div className="flex items-center gap-2 mt-3 text-slate-500 text-sm bg-slate-50 p-2.5 rounded-xl">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="truncate">{vet.distance} Away</span>
                </div>

                <div className="mt-auto pt-5 grid grid-cols-2 gap-3">
                    <a href={`tel:${vet.phone}`} className="flex-1">
                        <button className="w-full py-2.5 rounded-xl text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                            <Phone className="w-4 h-4" /> Call
                        </button>
                    </a>
                    <Link href={`/hospitals/${vet.id}/book`} className="flex-1">
                        <button className="w-full py-2.5 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                            <CalendarPlus className="w-4 h-4" /> Book
                        </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
