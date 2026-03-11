"use client";

import { Search, Filter } from "lucide-react";
import VetCard, { VetConfig } from "../components/VetCard";

const hospitals: VetConfig[] = [
    {
        id: "h1",
        name: "City Pet Emergency Care",
        specialty: "24/7 ER, Surgery, Trauma",
        distance: "2.4 km",
        rating: 4.9,
        reviews: 342,
        imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop",
        isOpen: true,
        phone: "1-800-555-0101"
    },
    {
        id: "h2",
        name: "Sunset Veterinary Clinic",
        specialty: "General Practice, Dentistry",
        distance: "3.8 km",
        rating: 4.7,
        reviews: 890,
        imageUrl: "https://images.unsplash.com/photo-1584820927498-cafe2c1ddcc8?q=80&w=800&auto=format&fit=crop",
        isOpen: true,
        phone: "1-800-555-0102"
    },
    {
        id: "h3",
        name: "Midtown Animal Hospital",
        specialty: "Internal Medicine, Cardiology",
        distance: "5.1 km",
        rating: 4.8,
        reviews: 512,
        imageUrl: "https://plus.unsplash.com/premium_photo-1661962381223-be124e5414d6?q=80&w=800&auto=format&fit=crop",
        isOpen: false,
        phone: "1-800-555-0103"
    },
    {
        id: "h4",
        name: "Valley Pet Surgery Center",
        specialty: "Orthopedics, Neurology",
        distance: "7.2 km",
        rating: 4.9,
        reviews: 128,
        imageUrl: "https://plus.unsplash.com/premium_photo-1661963051187-2bece41e6c27?q=80&w=800&auto=format&fit=crop",
        isOpen: true,
        phone: "1-800-555-0104"
    }
];

export default function Hospitals() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div>
                        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Vets & Hospitals</h1>
                        <p className="mt-2 text-lg text-slate-500">Find and book appointments with top-rated veterinary clinics nearby.</p>
                    </div>

                    <div className="flex gap-3 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search clinics, specialties..."
                                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm"
                            />
                        </div>
                        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-2xl text-slate-600 font-semibold hover:bg-slate-50 transition-colors shadow-sm">
                            <Filter className="w-5 h-5" />
                            <span className="hidden sm:inline">Filters</span>
                        </button>
                    </div>
                </div>

                {/* Filters/Pills */}
                <div className="flex gap-3 overflow-x-auto pb-6 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                    <button className="shrink-0 px-5 py-2.5 rounded-full bg-teal-600 text-white font-medium text-sm shadow-md">All Clinics</button>
                    <button className="shrink-0 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-slate-300 font-medium text-sm transition-colors shadow-sm">24/7 Emergency</button>
                    <button className="shrink-0 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-slate-300 font-medium text-sm transition-colors shadow-sm">General Checkup</button>
                    <button className="shrink-0 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-slate-300 font-medium text-sm transition-colors shadow-sm">Surgery</button>
                    <button className="shrink-0 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-slate-300 font-medium text-sm transition-colors shadow-sm">Dentistry</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {hospitals.map(vet => (
                        <VetCard key={vet.id} vet={vet} />
                    ))}
                </div>

                <div className="flex justify-center">
                    <button className="px-8 py-3 rounded-xl border-2 border-slate-300 text-slate-600 font-bold hover:border-slate-400 hover:bg-slate-100 transition-colors">
                        Load More Hospitals
                    </button>
                </div>
            </div>
        </div>
    );
}
