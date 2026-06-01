"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Scissors, Droplets, Sparkles, Plus, 
  Minus, Heart, Check, Star 
} from "lucide-react";

export default function GroomingPage() {
  const [openMenu, setOpenMenu] = useState<number | null>(0);

  const spaMenu = [
    { 
      title: "The Signature Spa Bath", 
      price: "From $45",
      desc: "Perfect for a refresh between full grooms or for short-haired breeds.",
      includes: ["Deep cleansing massaging bath", "Tear-free blueberry facial", "Blow dry & brush out", "Nail trim & ear cleaning", "Signature cologne spritz"] 
    },
    { 
      title: "The Full Premium Groom", 
      price: "From $85",
      desc: "Our most popular package. A complete head-to-paw makeover.",
      includes: ["Everything in the Spa Bath", "Breed-specific or custom haircut", "Sanitary trim", "Paw pad shaving", "Gland expression (if needed)"] 
    },
    { 
      title: "The De-Shedding Treatment", 
      price: "Add $20+",
      desc: "Drastically reduce household shedding with our specialized toolkit.",
      includes: ["Pre-bath loose undercoat blowout", "De-shedding shampoo & conditioner soaking", "High-velocity blow dry", "Extensive FURminator brushing session"] 
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans text-slate-800">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#f3efe8] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-rose-200/30 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-amber-200/30 rounded-full blur-[100px] transform -translate-x-1/4 translate-y-1/4" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-rose-800 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
              Luxury Pet Spa
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 font-serif">
              Grooming & <span className="italic text-rose-700 font-light">Styling</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              More than just a haircut. We provide a calming, fear-free spa experience that leaves your pet looking gorgeous and feeling completely relaxed.
            </p>
            <button className="px-10 py-5 rounded-full bg-slate-900 text-[#f3efe8] font-bold text-lg hover:bg-slate-800 transition-colors shadow-2xl">
              Book a Spa Day
            </button>
          </motion.div>
        </div>

        {/* Floating Images Grid overlay */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-20">
          <div className="grid grid-cols-3 gap-4 md:gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl transform md:-translate-y-8">
              <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=600&auto=format&fit=crop" alt="Dog being washed" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl z-20 border-8 border-white">
              <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop" alt="Dog looking fresh" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl transform md:translate-y-8">
              <img src="https://images.unsplash.com/photo-1537151608804-ea2f1d71efd3?q=80&w=600&auto=format&fit=crop" alt="Cat grooming" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Spa Menu */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/3">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-serif">The Spa Menu</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We use premium, hypoallergenic shampoos and conditioners. Our stylists take their time to ensure your pet is never rushed or stressed during their visit.
              </p>
              <div className="bg-[#f3efe8] p-8 rounded-3xl">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-500" /> VIP Add-ons
                </h4>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex justify-between border-b border-slate-200 pb-2"><span>Nail Grinding (Dremel)</span> <span>$15</span></li>
                  <li className="flex justify-between border-b border-slate-200 pb-2"><span>Teeth Brushing</span> <span>$10</span></li>
                  <li className="flex justify-between border-b border-slate-200 pb-2"><span>Flea & Tick Bath</span> <span>$25</span></li>
                  <li className="flex justify-between"><span>Creative Color Splash</span> <span>$30+</span></li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-2/3 space-y-6">
              {spaMenu.map((item, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                  <button 
                    onClick={() => setOpenMenu(openMenu === idx ? null : idx)}
                    className="w-full text-left p-8 flex items-center justify-between group hover:bg-[#faf9f6] transition-colors"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-rose-700 transition-colors">{item.title}</h3>
                      <p className="text-rose-600 font-bold tracking-wider mt-1">{item.price}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors ${openMenu === idx ? 'border-rose-500 text-rose-500' : 'border-slate-200 text-slate-400 group-hover:border-rose-300'}`}>
                      {openMenu === idx ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openMenu === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-8 pt-0 border-t border-slate-100 bg-[#faf9f6]">
                          <p className="text-lg text-slate-600 mb-6">{item.desc}</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {item.includes.map((inc, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                                <span className="text-slate-700">{inc}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Meet the Stylists */}
      <section className="py-24 bg-[#f3efe8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 font-serif">Meet Your Pet's Stylists</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Our certified master groomers have years of experience handling all breeds, temperaments, and coat types.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Jessica R.", role: "Lead Master Stylist", spec: "Poodles & Doodles" },
              { name: "David M.", role: "Senior Groomer", spec: "Large Breeds & De-shedding" },
              { name: "Sarah K.", role: "Feline Specialist", spec: "Cats & Senior Pets" },
              { name: "Amanda T.", role: "Bather/Brusher", spec: "Puppy's First Groom" }
            ].map((stylist, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 transform group-hover:-translate-y-4 transition-transform duration-300">
                  <img src={`https://i.pravatar.cc/200?img=${idx + 30}`} alt={stylist.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{stylist.name}</h3>
                <p className="text-rose-700 font-bold text-sm mb-2">{stylist.role}</p>
                <p className="text-slate-500 text-sm">Spec: {stylist.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
