import React from "react";
import { Activity, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col md:flex-row  overflow-hidden border-b ">

      {/* Sidebar */}
      <div className="hidden md:flex w-20 items-center justify-center border-r border-primary/10">
        <span className="rotate-270 whitespace-nowrap text-[10px] font-bold tracking-[0.3em] uppercase text-primary/70">
          Holistic Dental Care — Est. 2024
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-6 py-16 md:px-16 lg:px-24">

        {/* Brand */}
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full border border-primary/20">
            <Activity
              className="w-5 h-5 text-primary"
              strokeWidth={1.5}
            />
          </div>

          <span className="font-heading text-sm font-bold text-primary tracking-[0.2em] uppercase">
            Serene Smile Dental
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-dark leading-[1.05] mb-8">
          Mindful Dentistry
          <br />
          <span className="text-primary font-normal italic">
            for a Healthier You.
          </span>
        </h1>

        {/* Description */}
        <p className="font-body text-lg md:text-xl text-muted max-w-xl mb-12 leading-relaxed font-light">
          Experience dentistry redesigned for your absolute comfort.
          Our Japandi-inspired studio merges natural warmth with
          modern precision for stress-free oral health.
        </p>

        {/* CTA + Rating */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-14">

          <a
            href="/booking"
            className="
              px-10 py-5
              bg-cta
              text-dark
              font-heading
              font-bold
              rounded-full
              uppercase
              tracking-[0.15em]
              shadow-lg
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            Book Consultation
          </a>

          <div className="flex flex-col">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#C8A27A] text-[#C8A27A]"
                />
              ))}
            </div>

            <span className="text-xs font-heading font-medium text-muted uppercase tracking-wide">
              4.9 / 5 Based on 500+ Patients
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-12 border-t border-primary/10 pt-8">

          <div className="flex flex-col">
            <span className="text-3xl font-heading font-bold text-primary">
              12k+
            </span>

            <span className="text-[10px] font-heading font-bold text-muted uppercase tracking-[0.2em]">
              Smiles Refined
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl font-heading font-bold text-primary">
              15+
            </span>

            <span className="text-[10px] font-heading font-bold text-muted uppercase tracking-[0.2em]">
              Years Expertise
            </span>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-2/5 min-h-[500px] md:min-h-full relative group">

        <img
          src="https://images.pexels.com/photos/33829559/pexels-photo-33829559.jpeg"
          alt="Peaceful Dental Studio"
          className="
            absolute inset-0
            w-full h-full
            object-cover
            grayscale-[10%]
            group-hover:grayscale-0
            transition-all
            duration-700
          "
        />

        {/* Japandi Color Overlay */}
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-50" />

        {/* Floating Quote Card */}
        <div
          className="
            absolute
            bottom-8
            right-8
            bg-background/90
            backdrop-blur-md
            p-6
            rounded-[24px]
            border border-primary/10
            shadow-2xl
            max-w-[220px]
          "
        >
          <p className="font-heading text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">
            Our Space
          </p>

          <p className="font-body text-sm text-dark/70 leading-relaxed italic">
            "Designed to feel like home, so you can breathe easy."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;