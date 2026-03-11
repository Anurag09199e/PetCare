"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    MapPin, Phone, Clock, Mail,
    Calendar, User, Heart, Stethoscope,
    ClipboardList, AlertCircle, ChevronDown
} from "lucide-react";

export default function BookAppointment() {
    const scrollToForm = () => {
        const element = document.getElementById("booking-form-section");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/_antigravity_artifacts/book_hero_bg_1773213706872.png"
                        alt="Veterinarian with pet"
                        className="w-full h-full object-cover scale-105"
                    />
                    {/* Soft Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/40" />
                    <div className="absolute inset-0 backdrop-blur-[1px]" />
                </div>

                {/* Content Centered */}
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 border border-teal-500/30 backdrop-blur-md text-teal-300 text-sm font-bold tracking-wide uppercase">
                            Trusted Veterinary Care
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-tight">
                                Book an Appointment <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">
                                    for Your Pet
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-medium">
                                Schedule a visit with our expert veterinarians and give your pet the best care possible.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <button
                                onClick={scrollToForm}
                                className="w-full sm:w-auto min-w-[200px] px-8 py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-black text-lg shadow-xl shadow-teal-900/20 transition-all transform hover:-translate-y-1 active:scale-95"
                            >
                                Book Appointment
                            </button>
                            <a
                                href="tel:7865426070"
                                className="w-full sm:w-auto min-w-[200px] px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-black text-lg backdrop-blur-md transition-all transform hover:-translate-y-1 active:scale-95 text-center"
                            >
                                Call Clinic
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Curve Transition */}
                <div className="absolute bottom-0 left-0 right-0 z-30">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto translate-y-[2px]">
                        <path d="M0 120L1440 120L1440 0C1440 0 1080 120 720 120C360 120 0 0 0 0L0 120Z" fill="#f8fafc" />
                    </svg>
                </div>
            </section>

            {/* Main Content Section */}
            <section id="booking-form-section" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                        {/* Left Side: Booking Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-2 bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 md:p-12"
                        >
                            <div className="mb-10">
                                <h2 className="text-3xl font-black text-slate-900">Patient Details</h2>
                                <p className="text-slate-500 mt-2">Please fill in the information below to secure your slot.</p>
                            </div>

                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Owner Info */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            <User className="w-4 h-4 text-teal-600" /> Pet Owner Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-teal-600" /> Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="(555) 000-0000"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-teal-600" /> Email Address
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                                        />
                                    </div>

                                    {/* Pet Info */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            <Heart className="w-4 h-4 text-teal-600" /> Pet Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Buddy"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            Pet Type
                                        </label>
                                        <div className="relative">
                                            <select className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none appearance-none">
                                                <option>Dog</option>
                                                <option>Cat</option>
                                                <option>Bird</option>
                                                <option>Other</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Service & Doctor */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            <ClipboardList className="w-4 h-4 text-teal-600" /> Service Selection
                                        </label>
                                        <div className="relative">
                                            <select className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none appearance-none">
                                                <option>General Checkup</option>
                                                <option>Vaccination</option>
                                                <option>Dental Care</option>
                                                <option>Surgery</option>
                                                <option>Grooming</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            <Stethoscope className="w-4 h-4 text-teal-600" /> Doctor Selection
                                        </label>
                                        <div className="relative">
                                            <select className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none appearance-none">
                                                <option>Dr. Sarah Jenkins</option>
                                                <option>Dr. Michael Chen</option>
                                                <option>Dr. Emily Davis</option>
                                                <option>Any Available Doctor</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Date & Time */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-teal-600" /> Appointment Date
                                        </label>
                                        <input
                                            type="date"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-teal-600" /> Appointment Time
                                        </label>
                                        <input
                                            type="time"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                                        />
                                    </div>

                                    {/* Notes */}
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            <ClipboardList className="w-4 h-4 text-teal-600" /> Additional Notes
                                        </label>
                                        <textarea
                                            rows={4}
                                            placeholder="Tell us about your pet's condition or any special requirements..."
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none resize-none"
                                        />
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button className="w-full py-5 rounded-2xl bg-teal-600 text-white font-black text-xl hover:bg-teal-700 shadow-xl shadow-teal-900/20 transition-all transform hover:-translate-y-1 active:scale-95">
                                        Book Appointment Now
                                    </button>
                                    <p className="text-center text-slate-400 text-sm mt-4">
                                        By booking, you agree to our terms of service and privacy policy.
                                    </p>
                                </div>
                            </form>
                        </motion.div>

                        {/* Right Side: Clinic Info Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6 lg:sticky lg:top-32"
                        >
                            <div className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-xl border border-slate-800">
                                <h3 className="text-2xl font-black mb-8">Clinic Information</h3>

                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Our Location</h4>
                                            <p className="text-slate-400 leading-relaxed">
                                                7337 SW 8th St<br />
                                                Miami, FL 33144
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Contact Us</h4>
                                            <p className="text-slate-400">(786) 542-6070</p>
                                            <p className="text-slate-400">hello@miamianimalclinic.com</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                                            <div className="flex justify-between gap-8 text-slate-400 mt-2">
                                                <span className="font-medium">Mon - Fri</span>
                                                <span>8:00 AM - 8:00 PM</span>
                                            </div>
                                            <div className="flex justify-between gap-8 text-slate-400 mt-1">
                                                <span className="font-medium">Sat - Sun</span>
                                                <span>9:00 AM - 5:00 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="flex items-center gap-3 mb-4 text-emerald-400">
                                        <AlertCircle className="w-5 h-5" />
                                        <span className="font-black uppercase tracking-wider text-sm">Emergency 24/7</span>
                                    </div>
                                    <p className="text-slate-400 text-sm mb-4">
                                        For critical emergencies outside of regular hours, please call our emergency line immediately.
                                    </p>
                                    <p className="text-2xl font-black text-white">(786) 542-6070</p>
                                </div>
                            </div>

                            {/* Sub-card: Trust */}
                            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 italic">
                                <p className="text-slate-600 leading-relaxed">
                                    "We treat every pet as if they were our own. Your companion's health and happiness is our ultimate mission."
                                </p>
                                <div className="mt-4 font-bold text-teal-600">— Dr. Sarah Jenkins</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
