"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { 
  Activity, Zap, Microscope, Monitor, 
  Clock, ShieldAlert, FileSearch
} from "lucide-react";

const Counter = ({ end, suffix = "", label }: { end: number, suffix?: string, label: string }) => {
  const nodeRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(0, end, {
        duration: 2,
        onUpdate(value) {
          if (nodeRef.current) nodeRef.current.textContent = Math.round(value) + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [inView, end, suffix]);

  return (
    <div className="text-center">
      <h3 ref={nodeRef} className="text-5xl font-black text-cyan-400 mb-2">0{suffix}</h3>
      <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">{label}</p>
    </div>
  );
};

export default function DiagnosticsPage() {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    { title: "Digital X-Ray", desc: "High-resolution imaging in seconds. We can instantly detect bone fractures, joint issues, and internal blockages with minimal radiation exposure to your pet.", icon: Monitor, image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" },
    { title: "In-House Lab", desc: "Our comprehensive IDEXX laboratory allows us to run full blood panels, urinalysis, and organ function tests while you wait.", icon: Microscope, image: "https://images.unsplash.com/photo-1582719478250-c89402bb73e9?q=80&w=800&auto=format&fit=crop" },
    { title: "Ultrasound", desc: "Non-invasive, real-time imaging of soft tissues. Perfect for examining the heart (Echocardiogram) and abdominal organs without surgery.", icon: Activity, image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-cyan-600/20 rounded-full blur-[150px] pointer-events-none" />
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-900/50 text-cyan-400 font-bold text-sm mb-6 border border-cyan-800">
                <Zap className="w-4 h-4" /> State-of-the-Art Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                Advanced <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Diagnostics</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                Because pets can't tell us what hurts. We use human-grade medical technology to find answers quickly and accurately.
              </p>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-slate-800 shadow-[0_0_50px_rgba(8,145,178,0.2)]"
            >
              <img src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=800&auto=format&fit=crop" alt="Veterinary Diagnostics" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Rapid Results</h4>
                    <p className="text-sm text-slate-400">Most bloodwork completed in under 15 minutes.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-16 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Counter end={15} suffix=" Min" label="Average Lab Time" />
            <Counter end={99} suffix="%" label="Diagnostic Accuracy" />
            <Counter end={24} suffix="/7" label="Emergency Testing" />
          </div>
        </div>
      </section>

      {/* 3. Technology Showcase */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Inside The Lab</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Click through our advanced diagnostic suites to see how we investigate complex health issues.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 bg-slate-900 border border-slate-800 rounded-[3rem] p-4 overflow-hidden">
            <div className="w-full lg:w-1/3 flex flex-col gap-2 p-4">
              {technologies.map((tech, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTech(idx)}
                  className={`flex items-center gap-4 p-6 rounded-2xl transition-all duration-300 text-left ${activeTech === idx ? 'bg-cyan-950/50 border border-cyan-800 shadow-[0_0_30px_rgba(8,145,178,0.2)]' : 'hover:bg-slate-800 border border-transparent'}`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors ${activeTech === idx ? 'bg-cyan-500 text-slate-900' : 'bg-slate-800 text-slate-500'}`}>
                    <tech.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${activeTech === idx ? 'text-white' : 'text-slate-400'}`}>{tech.title}</h3>
                  </div>
                </button>
              ))}
            </div>

            <div className="w-full lg:w-2/3 relative h-[400px] lg:h-auto rounded-[2rem] overflow-hidden bg-slate-950">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTech}
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <img src={technologies[activeTech].image} alt={technologies[activeTech].title} className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex items-end p-10 md:p-16">
                    <div className="max-w-xl">
                      <h3 className="text-4xl font-black text-white mb-4 flex items-center gap-4">
                        {technologies[activeTech].title}
                        <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)] animate-pulse" />
                      </h3>
                      <p className="text-xl text-slate-300 leading-relaxed">
                        {technologies[activeTech].desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Value of Fast Diagnostics */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6">Why In-House Matters</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                When your pet is sick, waiting days for an outside laboratory to return blood test results is unacceptable. Our in-house lab provides answers while you are still in the exam room.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 shrink-0 mt-1 border border-cyan-800">
                    <FileSearch className="w-4 h-4" />
                  </div>
                  <p className="text-slate-300 text-lg">Immediate diagnosis means treatment starts immediately, increasing survival rates in emergencies.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 shrink-0 mt-1 border border-cyan-800">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <p className="text-slate-300 text-lg">Pre-anesthetic testing is done right before surgery to ensure maximum safety for your pet.</p>
                </li>
              </ul>
            </div>
            
            <div className="relative p-2 rounded-[2rem] bg-gradient-to-tr from-slate-800 to-cyan-900">
              <div className="bg-slate-950 rounded-[1.8rem] p-10 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Standard Blood Panel (CBC & Chem 17)</h3>
                
                <div className="space-y-6">
                  {/* Mock UI for a lab result loading */}
                  <div>
                    <div className="flex justify-between text-sm font-bold text-slate-400 mb-2">
                      <span>Red Blood Cells (RBC)</span>
                      <span className="text-cyan-400">Normal</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "45%" }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-cyan-500 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-bold text-slate-400 mb-2">
                      <span>White Blood Cells (WBC)</span>
                      <span className="text-cyan-400">Normal</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "60%" }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-cyan-500 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-bold text-slate-400 mb-2">
                      <span>Kidney Function (BUN/CREA)</span>
                      <span className="text-cyan-400">Normal</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "35%" }} transition={{ duration: 1, delay: 0.6 }} className="h-full bg-cyan-500 rounded-full" />
                    </div>
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
