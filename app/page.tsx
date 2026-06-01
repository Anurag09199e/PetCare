"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart, Shield, Stethoscope, Scissors,
  Syringe, Bone, Activity, Clock,
  MapPin, Phone, Mail, ChevronRight,
  ChevronLeft, ChevronDown, ChevronUp, Award,
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

const sliderVariants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? 90 : -90,
    z: -500,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    rotateY: 0,
    z: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    rotateY: direction < 0 ? 90 : -90,
    z: -500,
    opacity: 0,
    scale: 0.8,
  }),
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    "/images/veterinary-hero.png",
    "/images/ajay1.jpg",
    "/images/ajayshood.jpg",
    "/images/ajaysood.jpg",
    "/images/sood1.jpg",
    "/images/sood2.jpg",

  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // 6 seconds autoplay

    return () => clearInterval(timer);
  }, [slides.length, currentSlide]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans">

      {/* Full Immersive Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden" style={{ perspective: "1500px" }}>

        {/* 3D Image Carousel */}
        <div className="absolute inset-0 z-0 w-full h-full flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={sliderVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 1.2,
                ease: [0.25, 1, 0.5, 1], // Smooth easing 1200ms
              }}
              className="absolute inset-0 w-full h-full origin-center shadow-2xl"
              style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
            >
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${slides[currentSlide]}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="absolute inset-y-0 left-4 md:left-8 z-30 flex items-center">
          <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-lg">
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-4 md:right-8 z-30 flex items-center">
          <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-lg">
            <ChevronRight className="w-6 h-6" />
          </button>
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
                  Dr. Ajay Sood Dog & Cat Clinic
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
            <h2 className="text-4xl md:text-5xl font-black text-teal-950 mb-6 font-serif tracking-tight">
              Treatments & Services
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Comprehensive veterinary care tailored to your pet's unique needs — from preventative<br className="hidden md:block" /> medicine to advanced surgery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { category: "COUNSELLING", title: "Pets Consultation in Preet Vihar", desc: "Expert guidance to help you build a loving bond with your new pet from day one.", img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=600&auto=format&fit=crop", href: "/services/wellness-exams" },
              { category: "PREVENTATIVE", title: "Pets Vaccination in Preet Vihar", desc: "Complete vaccination programs to protect your pet from dangerous and life-threatening diseases.", img: "https://images.unsplash.com/photo-1628009368231-7bb7cbcb8127?q=80&w=600&auto=format&fit=crop", href: "/services/vaccinations" },
              { category: "GROOMING", title: "Pets Grooming in Preet Vihar", desc: "From soothing baths to nail trimming — we make sure your pet looks and feels their best.", img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=600&auto=format&fit=crop", href: "/services/grooming-spa" },
              { category: "MEDICAL", title: "Pets Dental Care in Preet Vihar", desc: "Complete dental care to keep your pet's teeth strong, breath fresh, and gums healthy.", img: "https://images.unsplash.com/photo-1537151608804-ea2f1d71efd3?q=80&w=600&auto=format&fit=crop", href: "/services/dental-care" },
              { category: "DIAGNOSTICS", title: "Pets Diagnostics in Preet Vihar", desc: "State-of-the-art laboratory and imaging services for quick and accurate medical diagnoses.", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop", href: "/services/diagnostics" },
              { category: "SURGERY", title: "Pets Surgery in Preet Vihar", desc: "Safe, monitored surgical procedures ranging from routine spays/neuters to advanced operations.", img: "https://images.unsplash.com/photo-1584820927498-cafe2c1ddcc8?q=80&w=600&auto=format&fit=crop", href: "/services/surgery" },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-100"
              >
                <div className="w-full h-52 overflow-hidden bg-slate-100">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-teal-700 font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4 block">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <Link href={service.href} className="inline-flex items-center gap-2 text-sm font-extrabold text-teal-800 hover:text-teal-600 transition-colors mt-auto">
                    Learn More <span className="text-lg leading-none">&rarr;</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Our Care */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-4 block">
                  The PetCare Difference
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-serif tracking-tight">
                  Benefits of Our Care
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  We believe that exceptional veterinary care goes beyond just treating illnesses. We focus on creating a supportive, transparent, and comforting environment for both pets and their families.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Personalized Treatment Plans", desc: "Tailored medical approaches for your pet's specific age, breed, and lifestyle needs.", icon: Heart },
                  { title: "Stress-Free Environment", desc: "Fear-free handling techniques and a calming clinic atmosphere to minimize anxiety.", icon: Shield },
                  { title: "Transparent Pricing", desc: "Clear upfront costs with no hidden fees or surprises. You are always informed.", icon: Award }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=800&auto=format&fit=crop"
                  alt="Happy dog looking at veterinarian"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-6 md:p-8">
                  <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl w-full shadow-lg border border-white/20">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex -space-x-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                            <img src={`https://i.pravatar.cc/100?img=${i + 12}`} alt="Client" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="font-bold text-slate-900 text-lg">Trusted by 5,000+ Happy Pet Parents</p>
                  </div>
                </div>
              </motion.div>
            </div>
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

      {/* Our Founder */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
              <div>
                <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-4 block">Meet The Founder</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                  Dedicated to the well-being of your furry family members.
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  With over 20 years of experience in veterinary medicine, Dr. Ajay Sood founded this clinic with a simple mission: to provide world-class medical care with a compassionate, personal touch.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  His pioneering work in minimally invasive surgery and preventative care has made the clinic a beacon of hope for pet owners across the region.
                </p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Quote className="w-10 h-10 text-teal-200 shrink-0" />
                <p className="text-lg font-medium text-slate-700 italic">
                  "Every pet deserves to live a long, happy, and pain-free life. That's not just our job, it's our calling."
                </p>
              </div>
              <Link href="/founder" className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-lg inline-block text-center">
                Read More
              </Link>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <img src="/images/ajaysood.jpg" alt="Dr. Ajay Sood" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-3xl font-black text-white mb-1">Dr. Ajay Sood</h3>
                    <p className="text-teal-400 font-bold">Founder & Chief Veterinarian</p>
                  </div>
                </div>
              </div>
            </div>
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
                      <h4 className="font-bold text-slate-900 mb-1">Dr. Ajay Sood Dog & Cat Clinic</h4>
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
