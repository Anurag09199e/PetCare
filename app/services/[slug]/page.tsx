"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
    Stethoscope, Syringe, Bone,
    Scissors, Activity, Shield,
    CheckCircle2, Star, Clock, Users
} from "lucide-react";
import ServiceHero from "@/app/components/ServiceHero";
import FAQAccordion from "@/app/components/FAQAccordion";
import ServiceCardSimple from "@/app/components/ServiceCardSimple";
import CTASection from "@/app/components/CTASection";

// Mock database for services
const SERVICES_DATA: Record<string, any> = {
    "wellness-exams": {
        title: "Wellness ",
        description: "Comprehensive physical checkups to ensure your pet's long-term health and catch issues early.",
        icon: Stethoscope,
        content: "Our wellness exams are the cornerstone of preventative care. We perform a nose-to-tail evaluation to monitor your pet's overall health, including weight, dental health, joint function, and internal organ performance.",
        benefits: [
            "Early detection of hidden health issues",
            "Personalized nutrition and exercise plans",
            "Baseline records for lifelong health tracking",
            "Expert advice on behavior and aging"
        ],
        faqs: [
            { question: "How often should my pet have a wellness exam?", answer: "We recommend annual exams for adult pets and bi-annual exams for senior pets (7+ years) to catch age-related issues early." },
            { question: "What should I bring to the appointment?", answer: "Please bring any previous medical records, a list of current medications/supplements, and a fresh stool sample if required." },
            { question: "Are wellness exams covered by insurance?", answer: "Most pet insurance plans cover wellness exams under their preventative care or 'wellness' riders. Check with your provider for specifics." },
            { question: "Will my pet need blood tests?", answer: "Depending on age and health status, we may recommend annual blood work to monitor organ function and check for parasites." }
        ]
    },
    "surgery": {
        title: "Surgical Procedures",
        description: "Safe, monitored surgical procedures ranging from routine spays/neuters to advanced operations.",
        icon: Shield,
        content: "Our state-of-the-art surgical suite is equipped for both soft tissue and orthopedic procedures. We prioritize safety with advanced anesthesia monitoring and comprehensive pain management protocols.",
        benefits: [
            "Advanced anesthesia monitoring technology",
            "Sterile, climate-controlled surgical environment",
            "Pre-anesthetic blood screening for safety",
            "Post-operative recovery monitoring and care"
        ],
        faqs: [
            { question: "Is anesthesia safe for my pet?", answer: "While every procedure has risks, we perform pre-surgical blood work and use specialized monitoring equipment to ensure the highest safety standards." },
            { question: "How long is the recovery period?", answer: "Recovery varies by procedure. Soft tissue surgeries usually take 10-14 days, while orthopedic surgeries can take several weeks." },
            { question: "Will my pet be in pain?", answer: "We use multi-modal pain management before, during, and after surgery to ensure your pet remains as comfortable as possible." },
            { question: "Can I stay with my pet during surgery?", answer: "For safety and sterility reasons, owners cannot be in the surgical suite, but we will provide updates as soon as the procedure is finished." }
        ]
    }
};

const RELEVANT_SERVICES = [
    { title: "Vaccinations", desc: "Complete immunization schedules for dogs and cats.", icon: Syringe, href: "/services/vaccinations" },
    { title: "Dental Care", desc: "Professional cleaning and oral health surgery.", icon: Bone, href: "/services/dental-care" },
    { title: "Diagnostics", desc: "Advanced lab work and imaging for fast results.", icon: Activity, href: "/services/diagnostics" }
];

export default function ServicePage() {
    const params = useParams();
    const slug = params.slug as string;

    // Fallback to wellness-exams if slug not found in mock data
    const data = SERVICES_DATA[slug] || SERVICES_DATA["wellness-exams"];

    return (
        <div className="bg-slate-50 min-h-screen">
            <ServiceHero
                title={data.title}
                description={data.description}
                category="Our Services"
            />

            {/* Service Details */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-50 text-teal-700 font-bold text-sm mb-6">
                                <CheckCircle2 className="w-4 h-4" /> About This Service
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">
                                Why Professional {data.title} Matters
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {data.content}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {data.benefits.map((benefit: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-100">
                                        <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                                            <Star className="w-3.5 h-3.5 fill-current" />
                                        </div>
                                        <span className="text-slate-700 font-medium text-sm">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />

                            <h3 className="text-2xl font-bold mb-8 relative z-10">Care Excellence</h3>
                            <div className="space-y-8 relative z-10">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-teal-400">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Appointment Time</h4>
                                        <p className="text-slate-400 text-sm">Usually takes 30-45 minutes depending on complexity.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-teal-400">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Expert Team</h4>
                                        <p className="text-slate-400 text-sm">Performed by our lead veterinarians and licensed technicians.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h4 className="font-bold mb-2">Need immediate help?</h4>
                                <p className="text-slate-400 text-sm mb-4">If your pet is showing emergency signs, please visit us immediately.</p>
                                <Link href="tel:7865426070" className="text-xl font-black text-teal-400">(786) 542-6070</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white border-y border-slate-100 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Common Questions</h2>
                        <p className="text-lg text-slate-600">Find answers to frequently asked questions about our {data.title.toLowerCase()} service.</p>
                    </div>

                    <FAQAccordion items={data.faqs} />
                </div>
            </section>

            {/* Relevant Services */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">You May Also Need</h2>
                            <p className="text-lg text-slate-600">Explore other healthcare services we provide at Dr. Ajay Sood Dog & Cat Clinic.</p>
                        </div>
                        <Link href="/" className="text-teal-600 font-bold hover:text-teal-700 transition-colors">View All Services →</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {RELEVANT_SERVICES.map((service, idx) => (
                            <ServiceCardSimple
                                key={idx}
                                title={service.title}
                                description={service.desc}
                                icon={service.icon}
                                href={service.href}
                                idx={idx}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
