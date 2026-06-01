"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Stethoscope, Heart, Activity, CheckCircle2, 
  Shield, Eye, Bone, ArrowRight, Star, Plus
} from "lucide-react";
import Link from "next/link";

export default function WellnessPage() {
  const [activeCheck, setActiveCheck] = useState("heart");

  const checkupAreas: Record<string, any> = {
    eyes: { title: "Eyes & Vision", desc: "We check for cataracts, glaucoma, and signs of systemic disease that often show first in the eyes.", icon: Eye, color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200" },
    heart: { title: "Heart & Lungs", desc: "Using a stethoscope to listen for murmurs, irregular rhythms, and clear lung capacity.", icon: Heart, color: "text-rose-500", bg: "bg-rose-50", border: "border-rose-200" },
    joints: { title: "Joints & Mobility", desc: "Physical palpation of the spine and joints to detect early arthritis or pain.", icon: Bone, color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-200" },
    internal: { title: "Internal Organs", desc: "Abdominal palpation to check the liver, kidneys, and intestines for abnormalities.", icon: Activity, color: "text-teal-500", bg: "bg-teal-50", border: "border-teal-200" }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50 rounded-l-full transform translate-x-1/3 opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-4 block">
                  Proactive Care
                </span>
                <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 font-serif leading-tight">
                  Wellness <br/>
                  <span className="text-emerald-500">& Preventative</span> Plans
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  The foundation of a long, happy life. Our comprehensive wellness exams catch hidden issues before they become serious emergencies.
                </p>
                <div className="flex gap-4">
                  <Link href="#plans" className="px-8 py-4 rounded-full bg-emerald-500 text-white font-bold text-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/30">
                    View Pricing Plans
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8 }}
                className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl z-10"
              >
                <img src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop" alt="Vet examining dog" className="w-full h-full object-cover" />
              </motion.div>
              
              {/* Floating badges */}
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-500">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="font-bold text-slate-800">Healthy Heart</span>
              </motion.div>

              <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-10 -right-10 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="font-bold text-slate-800">Full Protection</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Checkup Tool */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Inside the Exam Room</h2>
            <p className="text-xl text-slate-400">Click to explore the nose-to-tail evaluation your pet receives.</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 rounded-[2.5rem] flex flex-col lg:flex-row gap-12">
            
            {/* Interactive List */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
              {Object.keys(checkupAreas).map((key) => {
                const isActive = activeCheck === key;
                const area = checkupAreas[key];
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCheck(key)}
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${isActive ? `${area.bg} ${area.border} border shadow-lg` : 'hover:bg-slate-700/50 border border-transparent'}`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isActive ? area.bg : 'bg-slate-700'} ${isActive ? area.color : 'text-slate-400'}`}>
                      <area.icon className="w-6 h-6" />
                    </div>
                    <span className={`font-bold text-lg ${isActive ? 'text-slate-900' : 'text-slate-300'}`}>
                      {area.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Display Panel */}
            <div className="w-full lg:w-2/3 relative h-[300px] lg:h-auto bg-slate-900 rounded-[2rem] border border-slate-700 overflow-hidden flex items-center p-8 md:p-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCheck}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <div className={`w-20 h-20 rounded-3xl ${checkupAreas[activeCheck].bg} flex items-center justify-center ${checkupAreas[activeCheck].color} mb-8`}>
                    {React.createElement(checkupAreas[activeCheck].icon, { className: "w-10 h-10" })}
                  </div>
                  <h3 className="text-4xl font-black mb-4">{checkupAreas[activeCheck].title}</h3>
                  <p className="text-xl text-slate-400 leading-relaxed">
                    {checkupAreas[activeCheck].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Preventative vs Reactive Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            <div className="w-full md:w-1/2 bg-rose-50 p-10 md:p-16 rounded-[3rem] border border-rose-100">
              <h3 className="text-3xl font-black text-rose-900 mb-6">Reactive Care</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-rose-200 flex items-center justify-center text-rose-700 shrink-0 mt-1">-</div>
                  <p className="text-rose-800 text-lg">Waiting for symptoms means diseases are often advanced and harder to treat.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-rose-200 flex items-center justify-center text-rose-700 shrink-0 mt-1">-</div>
                  <p className="text-rose-800 text-lg">Higher emergency veterinary bills and expensive surgeries.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-rose-200 flex items-center justify-center text-rose-700 shrink-0 mt-1">-</div>
                  <p className="text-rose-800 text-lg">More stress, pain, and anxiety for your beloved pet.</p>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 bg-emerald-500 p-10 md:p-16 rounded-[3rem] shadow-2xl text-white transform md:-translate-y-4">
              <div className="inline-block px-4 py-1.5 bg-emerald-400 rounded-full text-sm font-bold tracking-wider uppercase mb-6 shadow-inner">
                Our Approach
              </div>
              <h3 className="text-3xl font-black mb-6">Proactive Wellness</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-200 shrink-0 mt-1" />
                  <p className="text-emerald-50 text-lg">Catch issues via bloodwork and exams long before physical symptoms appear.</p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-200 shrink-0 mt-1" />
                  <p className="text-emerald-50 text-lg">Lower lifetime medical costs through preventative management.</p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-200 shrink-0 mt-1" />
                  <p className="text-emerald-50 text-lg">A longer, happier, and dramatically more comfortable life for your pet.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Membership Plans */}
      <section id="plans" className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Wellness Memberships</h2>
            <p className="text-xl text-slate-600">Spread the cost of essential annual care into affordable monthly payments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Basic Care", price: "$29", desc: "Essential annual preventative care.", features: ["1 Comprehensive Exam", "Core Vaccinations", "Annual Heartworm Test", "10% off grooming"] },
              { title: "Complete Health", price: "$49", desc: "Best for active adult pets.", popular: true, features: ["2 Comprehensive Exams", "All Vaccinations", "Full Blood Panel", "Fecal Exam", "15% off dental cleanings"] },
              { title: "Senior Support", price: "$69", desc: "Tailored for pets 7+ years old.", features: ["2 Senior Exams", "Extensive Blood & Urine Tests", "Blood Pressure Check", "X-Rays (1 set)", "20% off medications"] }
            ].map((plan, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className={`bg-white rounded-[2.5rem] p-8 border ${plan.popular ? 'border-emerald-500 shadow-2xl ring-4 ring-emerald-500/10' : 'border-slate-200 shadow-lg'} relative`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase shadow-md">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-black text-slate-900 mb-2">{plan.title}</h3>
                <p className="text-slate-500 mb-6">{plan.desc}</p>
                <div className="flex items-end gap-1 mb-8">
                  <span className="text-5xl font-black text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 font-medium mb-1">/mo</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-slate-700 font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold text-lg transition-colors ${plan.popular ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                  Select Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
