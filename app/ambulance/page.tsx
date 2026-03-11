"use client";

import { MapPin, Navigation, Phone, ShieldAlert, Timer } from "lucide-react";

export default function AmbulanceBooking() {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex flex-col md:flex-row bg-slate-50">
            {/* Left Panel: Booking Form & Status */}
            <div className="w-full md:w-1/2 lg:w-5/12 p-6 md:p-8 lg:p-12 flex flex-col h-full bg-white shadow-2xl shadow-slate-200/50 z-10 border-r border-slate-100">
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="flex h-3 w-3 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <span className="text-sm font-bold text-primary uppercase tracking-wider">Emergency Mode</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-slate-900">Book Ambulance</h1>
                    <p className="text-slate-500 mt-2">Specialized pet life-support ambulance will be dispatched immediately.</p>
                </div>

                <div className="flex-1">
                    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 mb-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full mt-1">
                                <Timer className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">Estimated Arrival</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-black text-primary">12-15</span>
                                    <span className="text-slate-500 font-medium pb-1">minutes</span>
                                </div>
                                <p className="text-sm text-slate-500 mt-1">Nearest unit is 3.2 km away from your location.</p>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Pickup Location</label>
                            <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    defaultValue="123 Main St, Appt 4B, New York, NY 10001"
                                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm font-medium text-slate-800"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Emergency Type</label>
                            <select className="w-full px-4 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm font-medium text-slate-800">
                                <option>Trauma / Accident</option>
                                <option>Breathing Difficulty</option>
                                <option>Severe Bleeding</option>
                                <option>Unconscious</option>
                                <option>Possible Poisoning</option>
                                <option>Other / Not Sure</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Select Pet (Optional)</label>
                            <select className="w-full px-4 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm font-medium text-slate-800">
                                <option>Max (Golden Retriever)</option>
                                <option>Luna (British Shorthair)</option>
                                <option>Unregistered Pet</option>
                            </select>
                        </div>

                        <div className="pt-4">
                            <button type="button" className="w-full bg-primary text-white text-lg font-bold py-4 rounded-xl shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all flex items-center justify-center gap-3 group">
                                <ShieldAlert className="w-6 h-6 group-hover:animate-pulse" /> Dispatch Ambulance Now
                            </button>
                            <p className="text-center text-xs text-slate-400 mt-4 font-medium">By requesting, you agree to our emergency response terms & fees.</p>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right Panel: Map Placeholder */}
            <div className="hidden md:block w-1/2 lg:w-7/12 relative bg-slate-200 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22e0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
                {/* Map Overlay to simulate UI */}
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />

                {/* Driver simulation card */}
                <div className="absolute bottom-12 right-12 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-sm w-full animate-in slide-in-from-bottom-8 duration-700">
                    <div className="flex gap-4 items-center">
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" alt="Driver" />
                            <div className="absolute -bottom-1 -right-1 bg-emerald-500 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Assigned Medic</p>
                            <h4 className="text-xl font-bold text-slate-800">John Davis</h4>
                            <div className="flex items-center gap-1 text-sm text-teal-600 font-semibold mt-1">
                                <Navigation className="w-4 h-4" /> Unit #402 En Route
                            </div>
                        </div>
                        <div className="ml-auto">
                            <button className="bg-primary/10 text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Phone className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
