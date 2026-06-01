"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, ShieldAlert, CheckCircle2, Bone, 
  Wind, Activity, AlertTriangle
} from "lucide-react";
import Link from "next/link";

export default function DentalCarePage() {
  const [activeSign, setActiveSign] = useState<number | null>(null);

  const warningSigns = [
    { title: "Bad Breath", desc: "Often the first sign owners notice. 'Doggie breath' isn't normal—it's usually caused by bacteria.", icon: Wind },
    { title: "Difficulty Eating", desc: "Dropping food, chewing on one side, or suddenly preferring wet food over kibble.", icon: Bone },
    { title: "Red or Bleeding Gums", desc: "Healthy gums should be bubblegum pink. Red, swollen, or bleeding gums indicate gingivitis.", icon: Activity },
    { title: "Pawing at Mouth", desc: "A sign of active pain. Pets are very good at hiding dental pain until it becomes severe.", icon: AlertTriangle }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden border-b border-blue-100">
        <div className="absolute top-1/4 right-1/4 w-[40rem] h-[40rem] bg-cyan-100 rounded-full blur-[100px] pointer-events-none opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-6 border border-blue-200">
                <Sparkles className="w-4 h-4" /> Professional Dental Cleaning
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 font-serif leading-tight">
                Brilliant Smiles,<br/>
                <span className="text-blue-500">Better Health.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg mb-8">
                Dental disease affects 80% of pets by age 3. Prevent pain and organ damage with our state-of-the-art veterinary dentistry.
              </p>
              <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
                Book a Dental Assessment
              </button>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white z-10"
            >
              <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop" alt="Dog showing teeth" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* Floating 3D Tooth placeholder/icon */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl z-20 border border-slate-100 flex items-center justify-center"
            >
              <div className="text-center">
                <span className="block text-4xl mb-2">🦷</span>
                <span className="text-blue-600 font-black tracking-wider text-xs uppercase">Polished & Clean</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. The Silent Disease Section */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">The Silent Disease</h2>
            <p className="text-xl text-slate-400">
              Pets instinctively hide pain. By the time you notice these signs, dental disease is often already advanced. Hover over the cards to learn more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {warningSigns.map((sign, idx) => (
              <motion.div 
                key={idx}
                onHoverStart={() => setActiveSign(idx)}
                onHoverEnd={() => setActiveSign(null)}
                className="relative bg-slate-800 rounded-3xl p-8 border border-slate-700 overflow-hidden cursor-pointer h-64"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-10 -mt-10 blur-xl" />
                
                <AnimatePresence mode="wait">
                  {activeSign === idx ? (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="h-full flex flex-col justify-center"
                    >
                      <h4 className="text-xl font-bold text-blue-400 mb-4">{sign.title}</h4>
                      <p className="text-slate-300 leading-relaxed text-sm">{sign.desc}</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="icon"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col items-center justify-center text-center"
                    >
                      <div className="w-20 h-20 rounded-full bg-slate-700 flex items-center justify-center text-blue-400 mb-6">
                        <sign.icon className="w-10 h-10" />
                      </div>
                      <h4 className="text-xl font-bold text-white">{sign.title}</h4>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Before / After Comparison */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-blue-100 flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-black text-slate-900 mb-6">See the Difference</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Tartar buildup doesn't just look and smell bad—it harbors bacteria that enters the bloodstream, damaging the heart, liver, and kidneys.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our professional ultrasonic scaling removes hard calculus above and below the gumline, instantly improving your pet's comfort and long-term health.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500" />
                  <span className="font-bold text-slate-700">Ultrasonic Scaling</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500" />
                  <span className="font-bold text-slate-700">Subgingival Cleaning</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500" />
                  <span className="font-bold text-slate-700">High-Speed Polishing</span>
                </li>
              </ul>
            </div>
            
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-slate-200">
                <img src="https://images.unsplash.com/photo-1588147985440-621e25e9dd99?q=80&w=400&auto=format&fit=crop" alt="Dirty Teeth" className="w-full h-full object-cover filter sepia-[0.3]" />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Before</div>
              </div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white shadow-2xl transform lg:-translate-y-8">
                <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=400&auto=format&fit=crop" alt="Clean Teeth" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">After</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Cleaning Process Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our 5-Step Safety Protocol</h2>
            <p className="text-xl text-slate-600">A comprehensive dental cleaning requires anesthesia. Here is how we ensure maximum safety.</p>
          </div>

          <div className="space-y-8">
            {[
              { num: "01", title: "Pre-Anesthetic Bloodwork", desc: "We test liver and kidney function to ensure your pet can safely metabolize anesthesia." },
              { num: "02", title: "IV Catheter & Fluids", desc: "Maintains blood pressure and provides direct access for medications during the procedure." },
              { num: "03", title: "Advanced Monitoring", desc: "ECG, oxygen levels, blood pressure, and temperature are continuously monitored by a dedicated nurse." },
              { num: "04", title: "Full-Mouth Dental X-Rays", desc: "60% of dental disease hides below the gumline. We X-Ray every tooth to find hidden abscesses." },
              { num: "05", title: "Scaling, Polishing & Recovery", desc: "Tartar is removed, enamel is polished smooth to prevent future buildup, and your pet wakes up in a warm, cozy bed." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 md:gap-8 items-start group">
                <div className="text-5xl md:text-7xl font-black text-blue-100 group-hover:text-blue-500 transition-colors duration-300">
                  {step.num}
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
