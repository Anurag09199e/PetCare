"use client";

import { Plus, Bell, Activity, Calendar } from "lucide-react";
import Link from "next/link";
import PetCard, { PetConfig } from "../components/PetCard";

const myPets: PetConfig[] = [
    {
        id: "1",
        name: "Max",
        breed: "Golden Retriever",
        age: "3 Years",
        imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=600&auto=format&fit=crop",
        healthStatus: "Excellent",
        lastCheckup: "Oct 15, 2023",
        nextVaccine: "Mar 10, 2024",
    },
    {
        id: "2",
        name: "Luna",
        breed: "British Shorthair",
        age: "2 Years",
        imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop",
        healthStatus: "Good",
        lastCheckup: "Jan 05, 2024",
        nextVaccine: "Jan 05, 2025",
    }
];

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header Options */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">My Dashboard</h1>
                        <p className="text-slate-500 mt-1">Manage your pets' health and appointments.</p>
                    </div>
                    <div className="flex gap-3 w-full sm:w-auto">
                        <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-primary hover:border-primary/30 transition-colors shadow-sm">
                            <Bell className="w-5 h-5" />
                        </button>
                        <Link href="/register-pet" className="flex-1 sm:flex-none">
                            <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-md">
                                <Plus className="w-4 h-4" /> Add Pet
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5">
                        <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center shrink-0">
                            <Activity className="w-7 h-7 text-teal-600" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-500">Overall Health</p>
                            <h3 className="text-2xl font-bold text-slate-800">Excellent</h3>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5">
                        <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center shrink-0">
                            <Calendar className="w-7 h-7 text-teal-600" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-500">Upcoming Appointments</p>
                            <h3 className="text-2xl font-bold text-slate-800">1 <span className="text-sm font-medium text-slate-400">next week</span></h3>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-teal-600 to-navy-900 p-6 rounded-3xl shadow-lg flex flex-col justify-center relative overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer">
                        <div className="absolute top-0 right-0 p-4 opacity-20 transform translate-x-1/4 -translate-y-1/4">
                            <div className="w-24 h-24 bg-white rounded-full blur-2xl" />
                        </div>
                        <Link href="/ambulance" className="relative z-10 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-bold text-white/80 uppercase tracking-wider mb-1">Emergency</p>
                                <h3 className="text-lg font-bold text-white">Book Ambulance</h3>
                            </div>
                            <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                                <Plus className="w-6 h-6 text-white" />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* My Pets Section */}
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        My Registered Pets
                        <span className="bg-slate-200 text-slate-600 text-xs px-2.5 py-1 rounded-full">{myPets.length}</span>
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {myPets.map(pet => (
                            <PetCard key={pet.id} pet={pet} />
                        ))}
                    </div>
                </div>

                {/* Recent Activity/Records */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-slate-900">Recent Medical Records</h2>
                        <button className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">View All</button>
                    </div>
                    <div className="space-y-4">
                        {[
                            { date: "Oct 15, 2023", title: "General Checkup - Max", doctor: "Dr. Sarah Jenkins", type: "Checkup" },
                            { date: "Sep 02, 2023", title: "Rabies Vaccination - Luna", doctor: "Dr. Mike Ross", type: "Vaccine" }
                        ].map((record, i) => (
                            <div key={i} className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 font-bold shrink-0">
                                        {record.date.split(" ")[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">{record.title}</h4>
                                        <p className="text-sm text-slate-500">{record.doctor}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">{record.type}</span>
                                    <button className="text-sm font-semibold text-secondary hover:underline">Download PDF</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
