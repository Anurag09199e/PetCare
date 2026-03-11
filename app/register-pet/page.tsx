"use client";

import { useState } from "react";
import { Camera, Heart, Activity, CalendarDays, PawPrint } from "lucide-react";

export default function RegisterPet() {
    const [activeTab, setActiveTab] = useState("basic");

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Register a Pet</h1>
                    <p className="mt-3 text-lg text-slate-500">Add your furry friend to get personalized emergency care options.</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                    {/* Tabs */}
                    <div className="flex border-b border-slate-200">
                        <button
                            onClick={() => setActiveTab("basic")}
                            className={`flex-1 py-4 px-6 text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${activeTab === "basic" ? "text-primary border-b-2 border-primary bg-primary/5" : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                                }`}
                        >
                            <PawPrint className="w-4 h-4" /> Basic Info
                        </button>
                        <button
                            onClick={() => setActiveTab("medical")}
                            className={`flex-1 py-4 px-6 text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${activeTab === "medical" ? "text-primary border-b-2 border-primary bg-primary/5" : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                                }`}
                        >
                            <Activity className="w-4 h-4" /> Medical History
                        </button>
                    </div>

                    <form className="p-8">
                        {activeTab === "basic" && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                                {/* Photo Upload */}
                                <div className="flex justify-center">
                                    <div className="relative group cursor-pointer">
                                        <div className="w-32 h-32 rounded-full border-4 border-slate-100 bg-slate-50 flex items-center justify-center group-hover:border-primary/30 transition-colors overflow-hidden">
                                            <Camera className="w-10 h-10 text-slate-300 group-hover:text-primary transition-colors" />
                                        </div>
                                        <div className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg border-2 border-white">
                                            <Camera className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Pet Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-colors" placeholder="Buddy" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Species</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-slate-700">
                                            <option>Dog</option>
                                            <option>Cat</option>
                                            <option>Bird</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Breed</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-colors" placeholder="Golden Retriever" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">Age (Years)</label>
                                            <input type="number" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-colors" placeholder="3" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">Weight (kg)</label>
                                            <input type="number" step="0.1" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-colors" placeholder="25.5" />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 flex justify-end">
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab("medical")}
                                        className="bg-navy-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
                                    >
                                        Next Step
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === "medical" && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Ongoing Medical Conditions</label>
                                    <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-colors" placeholder="E.g., Diabetes, Arthritis (leave blank if none)" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Current Medications</label>
                                    <textarea rows={2} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-colors" placeholder="List any medications your pet takes regularly" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2"><Heart className="w-4 h-4 text-slate-400" /> Allergies</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-colors" placeholder="Food or medication allergies" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2"><CalendarDays className="w-4 h-4 text-slate-400" /> Last Rabies Vaccine</label>
                                        <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-slate-600" />
                                    </div>
                                </div>

                                <div className="pt-6 flex justify-between items-center">
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab("basic")}
                                        className="text-slate-600 font-medium hover:text-slate-900 transition-colors"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30 flex items-center gap-2"
                                    >
                                        <PawPrint className="w-4 h-4" /> Register Pet
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
