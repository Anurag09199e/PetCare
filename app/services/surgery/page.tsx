"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HeartPulse, Shield, Thermometer, 
  ChevronDown, Activity, Clock, HeartHandshake 
} from "lucide-react";
import Link from "next/link";

export default function SurgeryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const aftercareFaqs = [
    { q: "How long will my pet be groggy after anesthesia?", a: "It is completely normal for pets to be sleepy or mildly disoriented for 12-24 hours following anesthesia. Keep them in a quiet, warm, and safe space." },
    { q: "When can they eat again?", a: "Unless instructed otherwise by your surgeon, you can offer a small meal (about 1/4 of their normal portion) later in the evening after surgery. If they vomit, wait until the next morning." },
    { q: "How do I care for the incision site?", a: "Check the incision twice daily for excessive redness, swelling, or discharge. Do NOT let your pet lick it. An E-collar (cone) must be worn at all times until the sutures are removed or dissolved." },
    { q: "What if my pet is in pain?", a: "We will send you home with specific pain management medications. Do NOT give human pain relievers (like Tylenol or Advil) as they are highly toxic to pets. If you suspect the prescribed medication isn't enough, call us immediately." }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-indigo-50 rounded-full blur-[100px] transform translate-x-1/4 -translate-y-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-bold text-sm mb-6 border border-indigo-100">
                <Shield className="w-4 h-4" /> Board-Certified Standards
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                Advanced <span className="text-indigo-600">Surgical Care</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg mb-8">
                We know that surgery can be scary for a pet parent. Our mission is to provide the highest level of safety, pain management, and transparent communication to give you peace of mind.
              </p>
              <button className="px-8 py-4 rounded-full bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/30">
                Schedule a Consultation
              </button>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 z-10"
            >
              <img src="https://images.unsplash.com/photo-1584820927498-cafe2c1ddcc8?q=80&w=800&auto=format&fit=crop" alt="Veterinary Surgery" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* Floating Safety Badge */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 border border-slate-100 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                <HeartPulse className="w-7 h-7" />
              </div>
              <div>
                <p className="text-slate-900 font-bold">Continuous Vitals</p>
                <p className="text-sm text-slate-500">ECG, SpO2, Temp</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. The Surgery Journey */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">The Day of Surgery</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Here is exactly what you and your pet can expect, from morning drop-off to afternoon pick-up.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { time: "08:00 AM", title: "Drop-off & Pre-Op", desc: "Your pet settles into a cozy, quiet ward. We run pre-anesthetic bloodwork and perform a final physical exam." },
              { time: "10:00 AM", title: "Anesthesia & Prep", desc: "An IV catheter is placed for fluids and medication. Pre-medication is given to relax your pet and manage pain before surgery even begins." },
              { time: "11:00 AM", title: "The Procedure", desc: "The surgeon operates while a dedicated veterinary technician continuously monitors all vital signs using advanced equipment." },
              { time: "02:00 PM", title: "Recovery & Go Home", desc: "Your pet wakes up in a warm bed with a nurse by their side. We call you with an update and schedule a discharge time." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 relative overflow-hidden group hover:border-indigo-300 hover:shadow-xl transition-all"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150" />
                <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-bold text-xs tracking-wider mb-6 relative z-10">
                  {step.time}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Safety First Panel */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Activity className="w-full h-full text-indigo-500 transform translate-x-1/2 scale-150" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Uncompromising Safety Standards</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                We treat every surgery, from a routine spay to a complex orthopedic repair, with the exact same level of caution and monitoring. 
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Dedicated Nurse", desc: "A technician is assigned solely to monitor anesthesia.", icon: HeartHandshake },
                  { title: "ECG Monitoring", desc: "Real-time tracking of the heart's electrical activity.", icon: Activity },
                  { title: "IV Fluids", desc: "Maintains blood pressure and supports kidney function.", icon: Shield },
                  { title: "Thermal Support", desc: "Bair Hugger warming blankets prevent hypothermia.", icon: Thermometer }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-2xl">
                    <item.icon className="w-8 h-8 text-indigo-400 mb-4" />
                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-slate-800 border border-slate-700 p-8 md:p-12 rounded-[3rem] shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-indigo-400" /> Pain Management Protocol
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Animals feel pain just like we do. We use a <strong>multi-modal approach</strong> to pain management, which means we combine different types of medications (local blocks, anti-inflammatories, and opioids) to attack pain from multiple angles.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  By starting pain medication <em>before</em> the surgery begins, we prevent the nervous system from fully registering the pain trauma, resulting in a much smoother, faster, and more comfortable recovery at home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Aftercare FAQ Accordion */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-6">Post-Operative Care Guide</h2>
            <p className="text-xl text-slate-600">How to care for your pet once they return home.</p>
          </div>
          
          <div className="space-y-4">
            {aftercareFaqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100 transition-colors"
                >
                  <span className="text-lg font-bold text-slate-900 pr-8">{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === idx ? 'bg-indigo-100 text-indigo-600' : 'bg-white text-slate-400 border border-slate-200'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
