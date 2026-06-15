import React from 'react';
import { ShieldCheck, Clock, Award, Leaf } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Gentle Approach",
      desc: "Our team focuses on patient comfort first, utilizing mindful techniques to minimize anxiety.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Modern Precision",
      desc: "With 25 years of expertise, we blend traditional craftsmanship with the latest dental technology.",
      color: "bg-bg-soft text-dark/70"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Elite Care",
      desc: "Our doctors hold advanced certifications in restorative and cosmetic dentistry excellence.",
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section id="about" className="py-24 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64  rounded-full blur-3xl" />
            <h2 className="font-heading text-sm font-bold text-primary tracking-[0.3em] uppercase mb-6">
              Our Philosophy
            </h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold text-dark leading-tight mb-8">
              Dentistry is not merely science; it is the restoration of confidence.
            </h3>
            <p className="font-body text-lg text-dark/60 leading-relaxed font-light mb-8">
              At Serene Smile, we believe that dental care should be a restorative experience for both your health and your mind. Our studio is designed to alleviate the traditional clinic feel, replacing it with a serene environment inspired by Japanese minimalism.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                <img src="https://i.pravatar.cc/100?u=dentist" alt="Dr. Maya" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-heading text-sm font-bold text-dark">Dr. Maya Collins</p>
                <p className="text-xs font-heading font-medium text-dark/40 uppercase tracking-widest">Lead Practitioner</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((f, i) => (
              <div key={i} className="group shadow-lg p-8 bg-ivory backdrop-blur-sm rounded-3xl border border-bg-soft hover-lift hover:shadow-md transition-all">
                <div className="flex gap-6 items-start">
                  <div className={`p-4 rounded-2xl ${f.color} transition-colors`}>
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-dark mb-2">{f.title}</h4>
                    <p className="font-body text-dark/60 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Overlay */}
        <div className="relative border rounded-[3rem] bg-gray-400 overflow-hidden  p-12 md:p-20 text-black shadow-xl shadow-primary/20">
          <div className="absolute top-0  right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <Leaf className="w-full h-full rotate-45 translate-x-1/3 -translate-y-1/4" />
          </div>
          <div className="max-w-3xl relative z-10">
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-8 uppercase tracking-tight">
              Our mission is to provide compassionate, personalized care that makes advanced treatment accessible.
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-4">
                {['Gentle treatment with modern technology', 'Preventive care designed around you'].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 font-heading font-medium text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    {t}
                  </li>
                ))}
              </ul>
              <button className="self-start px-8 py-4  bg-white text-primary font-heading font-bold rounded-full hover:bg-white/90 transition-all uppercase text-xs tracking-widest drop-shadow-2xl shadow-lg border-1 border-gray-950 shadow-black/5">
                Read Our Full Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
