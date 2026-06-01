"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  motion, AnimatePresence, useScroll, useTransform, useInView, useSpring, animate 
} from "framer-motion";
import { 
  Shield, CheckCircle2, Syringe, Heart, ChevronDown, 
  ChevronRight, Phone, Calendar, Star, AlertTriangle, User,
  Activity, Info, Quote, Bone, Sparkles, Plus, MapPin
} from "lucide-react";
import Link from "next/link";

// -------------------------------------------------------------
// Component: StatCounter
// -------------------------------------------------------------
const StatCounter = ({ end, suffix = "", label }: { end: number, suffix?: string, label: string }) => {
  const nodeRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(0, end, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toLocaleString() + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, end, suffix]);

  return (
    <div className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-xl">
      <h3 ref={nodeRef} className="text-4xl md:text-5xl font-black text-cyan-400 mb-2">0{suffix}</h3>
      <p className="text-slate-300 font-medium">{label}</p>
    </div>
  );
};

// -------------------------------------------------------------
// Main Page Component
// -------------------------------------------------------------
export default function InteractiveVaccinationsPage() {
  const { scrollYProgress } = useScroll();
  const timelineScaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // State for Age-Based Tool
  const [activeAge, setActiveAge] = useState("puppy");

  // State for FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const ageData: Record<string, any> = {
    puppy: {
      title: "Puppy & Kitten (0-6 Months)",
      desc: "Crucial core vaccines to build initial immunity against deadly diseases.",
      core: ["DAPPv (Distemper, Adenovirus, Parvovirus, Parainfluenza)", "FVRCP for Kittens", "Rabies (at 16 weeks)"],
      nonCore: ["Bordetella (Kennel Cough)", "Leptospirosis", "Feline Leukemia (FeLV)"],
      icon: Bone
    },
    adult: {
      title: "Adult Pet (1-6 Years)",
      desc: "Annual and 3-year boosters to maintain high antibody levels.",
      core: ["Rabies (1 or 3 year)", "DAPPv Booster (3 year)", "FVRCP Booster (3 year)"],
      nonCore: ["Annual Bordetella", "Annual Leptospirosis", "Lyme Disease (if active outdoors)"],
      icon: Activity
    },
    senior: {
      title: "Senior Pet (7+ Years)",
      desc: "Tailored immunity support based on aging immune systems and health conditions.",
      core: ["Rabies (required by law)", "Titers Testing (alternative to over-vaccination)"],
      nonCore: ["Bordetella (if boarding)", "Canine Influenza"],
      icon: Heart
    }
  };

  const faqs = [
    { q: "Are vaccines safe for my pet?", a: "Yes. The vast majority of pets experience no adverse side effects. Mild lethargy or soreness at the injection site is normal for 24-48 hours. Vaccines undergo rigorous safety testing." },
    { q: "Do indoor-only cats really need vaccines?", a: "Absolutely. Rabies is required by law, and airborne viruses or viruses brought in on your shoes/clothes can infect indoor cats. Furthermore, indoor cats can accidentally escape." },
    { q: "What is a 'Titer Test'?", a: "A titer test is a blood test that measures the level of antibodies in your pet's blood. For senior pets, we can sometimes use this to determine if a booster is necessary or if they still have immunity." },
    { q: "How soon can my puppy go to the dog park?", a: "We strongly advise waiting until 2 weeks AFTER their final round of puppy shots (around 16-18 weeks of age) to ensure full immunity against Parvovirus." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 overflow-hidden pt-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 py-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[55%] space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-cyan-300 font-bold text-sm shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <Sparkles className="w-4 h-4" /> Next-Generation Pet Immunity
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]">
              Protect Your Pet's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Future.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Advanced, personalized vaccination protocols designed to shield your furry family members from dangerous diseases without over-vaccination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#book" className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900 font-black text-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all transform hover:-translate-y-1 text-center">
                Book Vaccination
              </Link>
              <Link href="#roadmap" className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-bold text-lg border border-white/20 hover:bg-white/20 transition-all text-center">
                Explore Roadmap
              </Link>
            </div>
          </motion.div>

          <div className="w-full lg:w-[45%] relative h-[400px] md:h-[600px]">
            {/* Animated Pet Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000&auto=format&fit=crop" 
                alt="Happy Dogs" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            </motion.div>

            {/* Floating 3D Syringe Element */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:top-10 md:-left-12 p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.3)] z-20 flex flex-col items-center gap-3"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center shadow-inner">
                <Syringe className="w-8 h-8 text-slate-900" />
              </div>
              <span className="text-white font-black text-sm tracking-wider uppercase">Safe Dose</span>
            </motion.div>

            {/* Floating Shield Element */}
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 md:bottom-20 md:-right-10 p-5 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.3)] z-20 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-inner">
                <Shield className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <p className="text-white font-black leading-tight">99.9%</p>
                <p className="text-slate-300 text-xs font-bold uppercase tracking-wider">Efficacy Rate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Success Statistics */}
      <section className="relative -mt-16 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCounter end={25000} suffix="+" label="Vaccines Administered" />
          <StatCounter end={100} suffix="%" label="Safety Protocols Met" />
          <StatCounter end={15} suffix=" Yrs" label="Clinical Experience" />
        </div>
      </section>

      {/* 4. Vaccine Benefits Section */}
      <section className="py-32 relative overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Why Our Protocols <span className="text-cyan-600">Stand Out</span></h2>
            <p className="text-xl text-slate-600">We utilize modern immunology practices to ensure your pet gets exactly what they need—nothing more, nothing less.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Purest Vaccines", desc: "We source only ultra-purified, adjuvant-free vaccines to dramatically reduce the risk of allergic reactions.", icon: Activity, color: "text-rose-500", bg: "bg-rose-50" },
              { title: "Tailored Schedules", desc: "No cookie-cutter plans. We assess your pet's specific lifestyle, location, and breed before recommending any shot.", icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-50" },
              { title: "Fear-Free Injections", desc: "Using micro-needles, distraction techniques, and treats, your pet won't even realize they got a shot.", icon: Heart, color: "text-amber-500", bg: "bg-amber-50" }
            ].map((benefit, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-lg border border-slate-200/50 relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${benefit.bg} rounded-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150`} />
                <div className={`w-16 h-16 rounded-2xl ${benefit.bg} flex items-center justify-center ${benefit.color} mb-8 relative z-10 shadow-sm`}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 relative z-10">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed relative z-10">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Age-based Vaccine Recommendation Tool */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Interactive Care Plan</h2>
              <p className="text-slate-400 text-lg">Select your pet's life stage to see our recommended vaccination protocol.</p>
            </div>
            
            {/* Age Selector Tabs */}
            <div className="flex bg-slate-800 p-2 rounded-full border border-slate-700">
              {Object.keys(ageData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveAge(key)}
                  className={`px-6 py-3 rounded-full font-bold transition-all ${activeAge === key ? 'bg-cyan-500 text-slate-900 shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAge}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center shadow-2xl"
              >
                <div className="w-full lg:w-1/3">
                  <div className="w-20 h-20 rounded-3xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-8 border border-cyan-500/30">
                    {React.createElement(ageData[activeAge].icon, { className: "w-10 h-10" })}
                  </div>
                  <h3 className="text-3xl font-black mb-4">{ageData[activeAge].title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">{ageData[activeAge].desc}</p>
                </div>
                
                <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-700">
                    <h4 className="flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-wider text-sm mb-6">
                      <Shield className="w-5 h-5" /> Core Vaccines
                    </h4>
                    <ul className="space-y-4">
                      {ageData[activeAge].core.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                          <span className="text-slate-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-700">
                    <h4 className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-sm mb-6">
                      <Plus className="w-5 h-5" /> Lifestyle/Non-Core
                    </h4>
                    <ul className="space-y-4">
                      {ageData[activeAge].nonCore.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                          <span className="text-slate-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 2 & 5. Interactive Vaccination Roadmap Timeline */}
      <section id="roadmap" className="py-32 bg-slate-50 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">The Journey to Immunity</h2>
            <p className="text-xl text-slate-600">A visual roadmap of a typical pet's first year of vaccinations.</p>
          </div>

          <div className="relative">
            {/* Center Line Background */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1.5 bg-slate-200 transform md:-translate-x-1/2 rounded-full" />
            
            {/* Animated Fill Line */}
            <motion.div 
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-teal-500 transform md:-translate-x-1/2 origin-top rounded-full z-10"
              style={{ scaleY: timelineScaleY }}
            />

            <div className="space-y-24">
              {[
                { age: "6-8 Weeks", title: "The First Shield", desc: "Puppies and kittens receive their first core combination vaccines (DAPPv/FVRCP). This begins their primary defense.", side: "left" },
                { age: "10-12 Weeks", title: "Building Strength", desc: "The crucial first boosters are administered. We also assess lifestyle risks to introduce non-core vaccines like Bordetella.", side: "right" },
                { age: "14-16 Weeks", title: "Complete Protection", desc: "The final round of puppy/kitten boosters, plus the legally required Rabies vaccine. They are now fully protected!", side: "left" },
                { age: "1 Year", title: "Adult Immunity", desc: "The first annual exam as an adult. Boosters are given to ensure the immune system remains robust.", side: "right" }
              ].map((step, idx) => (
                <div key={idx} className={`relative flex items-center justify-end md:justify-center ${step.side === 'left' ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-cyan-500 z-20 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                  
                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: step.side === 'left' ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`w-[calc(100%-4rem)] md:w-[45%] ${step.side === 'left' ? 'ml-auto md:ml-0 md:pr-12' : 'ml-auto md:pl-12'}`}
                  >
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-400 to-teal-500" />
                      <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 font-bold text-sm mb-4">
                        {step.age}
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Emergency Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-r from-rose-500 to-orange-500 rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
            <AlertTriangle className="w-96 h-96" />
          </div>
          <div className="relative z-10 flex items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-black mb-2">Bitten by a wild animal?</h3>
              <p className="text-rose-100 text-lg">Rabies exposure is a medical emergency. Do not wait for an appointment.</p>
            </div>
          </div>
          <div className="relative z-10 shrink-0">
            <Link href="tel:7865426070" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-rose-600 rounded-full font-black text-xl hover:bg-rose-50 transition-colors shadow-lg">
              <Phone className="w-6 h-6" /> Call Emergency Now
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h2 className="text-4xl font-black text-slate-900">Loved by Pet Parents</h2>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-12 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory hide-scrollbar">
          {[
            { name: "Sarah Jenkins", pet: "Bella (Golden Retriever)", text: "The fear-free approach is real! Bella usually shakes at the vet, but she didn't even notice her vaccines today." },
            { name: "Mark Torres", pet: "Oliver & Leo (Cats)", text: "I appreciated how Dr. Sood explained exactly why indoor cats still need the FVRCP vaccine. Very transparent." },
            { name: "Emily Chen", pet: "Max (Rescue Mix)", text: "The timeline and reminders they set up for Max's puppy shots kept me completely organized. Amazing clinic!" }
          ].map((test, idx) => (
            <div key={idx} className="min-w-[350px] max-w-[400px] snap-center bg-white p-8 rounded-3xl shadow-lg border border-slate-100 shrink-0">
              <div className="flex gap-1 text-amber-400 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-slate-700 text-lg italic mb-8">"{test.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${idx + 20}`} alt="User" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{test.name}</h4>
                  <p className="text-slate-500 text-sm">Parent of {test.pet}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Vaccination FAQs</h2>
          <p className="text-slate-600 text-lg">Everything you need to know about protecting your pet.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-bold text-slate-900">{faq.q}</span>
                <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-cyan-600' : ''}`} />
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA Section */}
      <section id="book" className="py-24 bg-slate-900 text-center px-4 sm:px-6 lg:px-8 border-t-[10px] border-cyan-500">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Protect Your Pet?</h2>
          <p className="text-xl text-slate-400 mb-10">Schedule an appointment today. Our friendly team will assess your pet's lifestyle and build a custom vaccination plan.</p>
          <button className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 text-slate-900 font-black text-xl hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all transform hover:-translate-y-1">
            Book Appointment Now
          </button>
        </div>
      </section>

      {/* Global styles for hide-scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
