import React from 'react';
import { PhoneCall, AlertCircle } from 'lucide-react';

const EmergencySection = () => {
  return (
    <section id="emergency" className="py-12  ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative  border bg-gray-400 rounded-[3rem] p-10 md:p-16 overflow-hidden shadow-2xl shadow-primary/20">
          {/* Background Decorative Element - Abstract Waves */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.05] pointer-events-none">
            <svg viewBox="0 0 400 400" className="w-full h-full text-black fill-current">
              <path d="M0,100 Q100,0 200,100 T400,100 V400 H0 Z" />
            </svg>
          </div>

          {/* Glowing Accent */}
          <div className="absolute -top-24 -left-24 w-64 h-64  rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full border border-white/20 mb-6 backdrop-blur-sm">
                <AlertCircle className="w-5 h-5 text-accent" color='red' />
                <span className="font-heading text-xs font-bold text-red-500 uppercase tracking-widest">
                  Emergency Relief
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                DENTAL EMERGENCY?
              </h2>
              <p className="font-body text-lg text-black leading-relaxed font-light max-w-xl">
                Many patients visit us while in pain, and we are here for you. 
                Our team prioritizes urgent appointments for prompt, compassionate care 
                and rapid relief.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-6 shrink-0">
              <div className="text-center lg:text-right">
                <p className="font-heading text-sm font-bold text-black uppercase tracking-[0.2em] mb-2">
                  Call us immediately
                </p>
                <a 
                  href="tel:+919876543210" 
                  className="font-heading text-3xl md:text-5xl font-bold text-gray-950 hover:text-accent transition-colors duration-300 tracking-tight block mb-2"
                >
                  +91 XXXXX XXXXX
                </a>
              </div>
              
              <a 
                href="tel:+919387356020"
                className="group flex items-center gap-4 px-10 py-5 bg-white text-primary font-heading font-bold rounded-full hover-lift shadow-xl shadow-black/10 uppercase tracking-widest text-sm transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <PhoneCall className="w-4 h-4" />
                </div>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
