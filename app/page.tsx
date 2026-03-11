"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart, Shield, Stethoscope, Scissors,
  Syringe, Bone, Activity, Clock,
  MapPin, Phone, Mail, ChevronRight,
  Star, Quote, Users, Calendar
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans">

      {/* Full Immersive Hero Section (Option 3) */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/_antigravity_artifacts/happy_dog_hero_bg_1773212143824.png"
            alt="Happy Dog Background"
            className="w-full h-full object-cover scale-105"
          />
          {/* Multi-layered Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>

        {/* Floating Interaction Elements (Micro-cards) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[10%] bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div className="pr-4">
                <div className="text-white font-bold text-sm">Emergency 24/7</div>
                <div className="text-white/60 text-xs text-nowrap">Ready for your pet</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -1, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[25%] left-[8%] bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div className="pr-4">
                <div className="text-white font-bold text-sm">Top Rated Care</div>
                <div className="text-white/60 text-xs text-nowrap">Miami's #1 Choice</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Central Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Now Accepting New Patients
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9]">
                Welcome To <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">
                  Miami Animal Clinic
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-blue-100/80 max-w-2xl mx-auto font-medium">
                Premier veterinary care tailored for your pets. <br className="hidden md:block" />
                Expert doctors, compassionate treatment, modern facility.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 pt-4">
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-black text-white">Call Us Today: (786) 542-6070</p>
                <p className="text-blue-200/60 font-medium">7337 SW 8th St, Miami, FL 33144</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link href="/book" className="w-full sm:w-auto min-w-[200px] px-10 py-5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-lg shadow-2xl shadow-emerald-500/20 transition-all transform hover:-translate-y-1 hover:scale-105 active:scale-95 text-center">
                  Book Appointment
                </Link>
                <button className="w-full sm:w-auto min-w-[200px] px-10 py-5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-black text-lg backdrop-blur-md transition-all transform hover:-translate-y-1 hover:scale-105 active:scale-95">
                  Get Directions
                </button>
              </div>

              {/* Socials & Rating */}
              <div className="flex flex-col md:flex-row items-center gap-8 pt-8 opacity-60 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-4">
                  {['Facebook', 'Google', 'Twitter', 'Youtube'].map((p) => (
                    <a key={p} href="#" className="w-6 h-6 border border-white/40 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors">
                      <div className="w-3 h-3 border-2 border-current rounded-[2px]" />
                    </a>
                  ))}
                </div>
                <div className="h-px w-8 bg-white/20 hidden md:block" />
                <div className="flex items-center gap-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider">Top Rated Clinic</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Background Graphics */}
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Section Transition */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto translate-y-[2px]">
            <path d="M0 120L1440 120L1440 0C1440 0 1080 120 720 120C360 120 0 0 0 0L0 120Z" fill="white" />
          </svg>
        </div>
      </section>


      {/* Treatments & Services */}
      <section id="services" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-4 block">
              Comprehensive Care
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Treatments & Services
            </h2>
            <p className="text-lg text-slate-600">
              From routine checkups to advanced surgical procedures, our clinic is equipped to handle all of your pet's health needs with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Wellness Exams", desc: "Comprehensive physical checkups to ensure your pet's long-term health and catch issues early.", icon: Stethoscope, href: "/services/wellness-exams" },
              { title: "Vaccinations", desc: "Protect your furry friends from dangerous diseases with our complete vaccination protocols.", icon: Syringe, href: "/services/vaccinations" },
              { title: "Dental Care", desc: "Professional cleaning and dental surgery to keep those canines and incisors sparkling and healthy.", icon: Bone, href: "/services/dental-care" },
              { title: "Grooming & Spa", desc: "Luxurious grooming services including baths, haircuts, and nail trims in a stress-free environment.", icon: Scissors, href: "/services/grooming-spa" },
              { title: "Diagnostics", desc: "State-of-the-art laboratory and imaging services for quick and accurate medical diagnoses.", icon: Activity, href: "/services/diagnostics" },
              { title: "Surgery", desc: "Safe, monitored surgical procedures ranging from routine spays/neuters to advanced operations.", icon: Shield, href: "/services/surgery" },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group bg-slate-50 rounded-[1.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-600 mb-6">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{service.desc}</p>
                <Link href={service.href} className="flex items-center gap-2 text-sm font-bold text-teal-600 group-hover:text-teal-800 transition-colors">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Specialties */}
      <section className="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs font-black uppercase tracking-widest mb-4">
              Advanced Care
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Our Specialties
            </h2>
            <p className="text-lg text-slate-600">
              State-of-the-art care across all disciplines of veterinary medicine. Click any specialty to learn more.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Cancer Care", img: "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?q=80&w=400&h=600&auto=format&fit=crop" },
              { name: "Cardiology", img: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=400&h=600&auto=format&fit=crop" },
              { name: "Orthopaedics", img: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=400&h=600&auto=format&fit=crop" },
              { name: "Minimally Invasive", img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=400&h=600&auto=format&fit=crop" },
              { name: "Ophthalmology", img: "https://images.unsplash.com/photo-1532187863486-abf51ad655ee?q=80&w=400&h=600&auto=format&fit=crop" },
              { name: "Neurology", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&h=600&auto=format&fit=crop" },
              { name: "Exotic Pets", img: "https://images.unsplash.com/photo-1582234057032-1f4868a2bf5b?q=80&w=400&h=600&auto=format&fit=crop" },
              { name: "Dental Care", img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=400&h=600&auto=format&fit=crop" },
              { name: "Physiotherapy", img: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=400&h=600&auto=format&fit=crop" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="group relative aspect-[4/5] rounded-[1.25rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-white font-black text-sm lg:text-base leading-tight transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {item.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-teal-400 font-bold tracking-wider uppercase text-sm mb-4 block">Meet The Experts</span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Our World-Class Veterinarians</h2>
              <p className="text-lg text-slate-400">Passionate animal lovers and highly skilled medical professionals dedicated to providing the best care for your pets.</p>
            </div>
            <button className="px-8 py-4 rounded-full bg-slate-800 border border-slate-700 text-white font-bold text-sm hover:bg-slate-700 transition-colors whitespace-nowrap shadow-sm">
              View All Staff
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Sarah Jenkins", role: "Lead Veterinarian", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" },
              { name: "Dr. Michael Chen", role: "Veterinary Surgeon", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop" },
              { name: "Dr. Emily Davis", role: "Feline Specialist", img: "https://images.unsplash.com/photo-1594824436951-7f12bc3ac92e?q=80&w=800&auto=format&fit=crop" }
            ].map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative rounded-[1.5rem] overflow-hidden aspect-[3/4] cursor-pointer bg-slate-800"
              >
                <img src={doc.img} alt={doc.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">{doc.name}</h3>
                    <p className="text-teal-400 font-medium mb-4">{doc.role}</p>
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-500 transition-colors">
                        <Star className="w-4 h-4 text-white" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-500 transition-colors">
                        <Mail className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Locations */}
      <section id="locations" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 lg:p-16 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Find Our Clinic</h2>
                <p className="text-lg text-slate-600 mb-8">Conveniently located in the heart of the city with dedicated parking for our patients. We've designed our clinic to feel like a second home.</p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-5 rounded-[1.25rem] bg-white shadow-sm border border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Miami Animal Clinic</h4>
                      <p className="text-slate-600 text-sm mb-2">7337 SW 8th St<br />Miami, FL 33144</p>
                      <a href="#" className="text-sm font-bold text-teal-600 hover:text-teal-800 transition-colors">Get Directions →</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-[1.25rem] bg-white shadow-sm border border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Opening Hours</h4>
                      <p className="text-slate-600 text-sm">Mon - Fri: 8:00 AM - 8:00 PM<br />Sat - Sun: 9:00 AM - 5:00 PM</p>
                      <p className="text-xs font-bold text-teal-600 mt-2">24/7 Emergency Services Available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative aspect-square lg:aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-sm border border-slate-200 bg-white">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" alt="Map Location" className="w-full h-full object-cover" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100 animate-bounce">
                      <Heart className="w-7 h-7 text-teal-500 fill-teal-500" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black/10 rounded-full blur-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
