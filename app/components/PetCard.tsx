"use client";

import { motion } from "framer-motion";
import { Activity, Clock, Syringe, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface PetConfig {
    id: string;
    name: string;
    breed: string;
    age: string;
    imageUrl: string;
    healthStatus: "Excellent" | "Good" | "Needs Attention";
    lastCheckup: string;
    nextVaccine: string;
}

interface PetCardProps {
    pet: PetConfig;
    className?: string;
}

export default function PetCard({ pet, className }: PetCardProps) {
    const statusColors = {
        "Excellent": "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
        "Good": "text-blue-500 bg-blue-500/10 border-blue-500/20",
        "Needs Attention": "text-amber-500 bg-amber-500/10 border-amber-500/20",
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
                "bg-white rounded-3xl p-5 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300",
                className
            )}
        >
            <div className="flex gap-5">
                <div className="relative h-24 w-24 rounded-2xl overflow-hidden shrink-0 border-2 border-slate-50">
                    <img src={pet.imageUrl} alt={pet.name} className="object-cover w-full h-full" />
                </div>

                <div className="flex-1 w-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">{pet.name}</h3>
                            <p className="text-sm text-slate-500 font-medium">{pet.breed} • {pet.age}</p>
                        </div>
                        <div className={cn("px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1.5", statusColors[pet.healthStatus])}>
                            <Activity className="w-3.5 h-3.5" />
                            {pet.healthStatus}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-3">
                        <div className="flex items-center gap-2 text-slate-600 bg-slate-50 p-2 rounded-xl text-xs font-medium">
                            <Clock className="w-4 h-4 text-secondary" />
                            <div className="truncate">
                                <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Last Checkup</span>
                                {pet.lastCheckup}
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 bg-slate-50 p-2 rounded-xl text-xs font-medium">
                            <Syringe className="w-4 h-4 text-primary" />
                            <div className="truncate">
                                <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Next Vaccine</span>
                                {pet.nextVaccine}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 flex gap-3">
                <Link href={`/dashboard/pets/${pet.id}`} className="flex-1">
                    <button className="w-full py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                        View Profile <ChevronRight className="w-4 h-4" />
                    </button>
                </Link>
            </div>
        </motion.div>
    );
}
