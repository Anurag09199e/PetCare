"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Shield, Stethoscope, ChevronRight, Quote, Bone } from "lucide-react";
import Link from "next/link";

export default function FounderPage() {
  const photos = [
    "/images/ajaysood.jpg",
    "/images/ajayshood.jpg",
    "/images/ajay1.jpg",
    "/images/sood1.jpg",
    "/images/sood2.jpg",
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/images/ajaysood.jpg" alt="Background" className="w-full h-full object-cover blur-sm" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-400 font-bold tracking-wider uppercase text-sm mb-4 block">
              Meet The Founder
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 font-serif">
              Dr. Ajay Sood
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Chief Veterinarian and passionate advocate for animal welfare, bringing over two decades of expertise to the pets of our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Biography Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-8 md:p-16">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Col - Biography */}
            <div className="w-full lg:w-3/5 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">A Lifelong Dedication to Animal Health</h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Dr. Ajay Sood is a highly esteemed veterinary physician with a deep-rooted passion for animal care. Since establishing the clinic, his unwavering commitment has been to provide world-class, compassionate medical treatment to all pets that walk through our doors.
                  </p>
                  <p>
                    His journey began over 20 years ago, driven by a childhood love for animals and a desire to make a meaningful difference in their lives. After graduating at the top of his veterinary class, Dr. Sood specialized in advanced surgical procedures and preventative medicine.
                  </p>
                  <p>
                    Throughout his career, he has successfully treated thousands of animals, handling everything from routine wellness exams to complex, life-saving emergency surgeries. His approach combines state-of-the-art medical technology with a gentle, fear-free handling technique that puts both pets and their owners at ease.
                  </p>
                </div>
              </div>

              <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
                <Quote className="w-12 h-12 text-teal-300 mb-4" />
                <p className="text-xl font-medium text-slate-800 italic leading-relaxed mb-6">
                  "Our pets are family. They give us unconditional love, and in return, it is our absolute duty to provide them with the highest standard of care, comfort, and compassion. That is the philosophy this clinic is built upon."
                </p>
                <p className="font-bold text-teal-700">— Dr. Ajay Sood</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Areas of Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Advanced Surgery", icon: Stethoscope },
                    { title: "Preventative Care", icon: Shield },
                    { title: "Internal Medicine", icon: Heart },
                    { title: "Veterinary Orthopedics", icon: Bone }
                  ].map((area, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                        <area.icon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-slate-800">{area.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col - Stats & Focus Image */}
            <div className="w-full lg:w-2/5 space-y-8">
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl">
                <img src="/images/ajaysood.jpg" alt="Dr. Ajay Sood Portrait" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                  <div className="w-full">
                    <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-4">
                      <span className="text-white/80">Experience</span>
                      <span className="text-white font-bold text-xl">20+ Years</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-4">
                      <span className="text-white/80">Happy Pets Treated</span>
                      <span className="text-white font-bold text-xl">10,000+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Awards</span>
                      <span className="text-white font-bold text-xl">15+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 font-serif">Moments & Memories</h2>
          <p className="text-lg text-slate-600">A glimpse into Dr. Sood's life, clinic work, and the furry friends he treats.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={src} 
                alt={`Dr. Ajay Sood Photo ${idx + 1}`} 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop";
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Trust Your Pet with the Best</h2>
        <p className="text-lg text-slate-600 mb-8">
          Experience the compassionate care and medical excellence that Dr. Sood and his team provide every single day.
        </p>
        <Link href="/#services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-teal-600 text-white font-bold text-lg hover:bg-teal-700 transition-colors shadow-lg hover:shadow-teal-600/25">
          View Our Services <ChevronRight className="w-5 h-5" />
        </Link>
      </section>

    </div>
  );
}
