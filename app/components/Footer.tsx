import Link from "next/link";
import { Heart, Github, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="bg-teal-600 p-2 rounded-xl">
                                <Heart className="h-5 w-5 text-white fill-white" />
                            </div>
                            <span className="font-extrabold text-2xl tracking-tight text-white group-hover:text-teal-400 transition-colors">
                                DD's MaxxPet
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8">
                            Redefining veterinary care with compassion, expertise, and a state-of-the-art facility designed for your pet's comfort.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white transition-colors">
                                <Twitter className="h-4 w-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white transition-colors">
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white transition-colors">
                                <Github className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link href="#services" className="text-slate-400 hover:text-teal-400 transition-colors text-sm font-medium">Treatments & Services</Link></li>
                            <li><Link href="#doctors" className="text-slate-400 hover:text-teal-400 transition-colors text-sm font-medium">Our Veterinarians</Link></li>
                            <li><Link href="#about" className="text-slate-400 hover:text-teal-400 transition-colors text-sm font-medium">About the Clinic</Link></li>
                            <li><Link href="#locations" className="text-slate-400 hover:text-teal-400 transition-colors text-sm font-medium">Find a Location</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Client Portal</h3>
                        <ul className="space-y-4">
                            <li><Link href="/book" className="text-slate-400 hover:text-teal-400 transition-colors text-sm font-medium">Book Appointment</Link></li>
                            <li><Link href="/records" className="text-slate-400 hover:text-teal-400 transition-colors text-sm font-medium">Medical Records</Link></li>
                            <li><Link href="/prescriptions" className="text-slate-400 hover:text-teal-400 transition-colors text-sm font-medium">Prescription Refills</Link></li>
                            <li><Link href="/faq" className="text-slate-400 hover:text-teal-400 transition-colors text-sm font-medium">Pet Parent FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-slate-400">
                                <MapPin className="w-5 h-5 text-teal-500 shrink-0" />
                                <span>7337 SW 8th St<br />Miami, FL 33144</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-400">
                                <Phone className="w-5 h-5 text-teal-500 shrink-0" />
                                <span>+1 (786) 542-6070</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-400">
                                <Mail className="w-5 h-5 text-teal-500 shrink-0" />
                                <span>hello@maxxpet.com</span>
                            </li>
                        </ul>
                        <div className="mt-6 p-4 rounded-xl bg-slate-800 border border-slate-700">
                            <p className="text-xs text-teal-400 font-bold uppercase mb-1">Emergency 24/7</p>
                            <p className="text-white font-bold">1-800-PET-EMRG</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm font-medium">
                        &copy; {new Date().getFullYear()} DD's MaxxPet. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-sm font-medium text-slate-500 hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="text-sm font-medium text-slate-500 hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
