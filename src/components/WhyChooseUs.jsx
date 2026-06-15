import React from 'react';
import { 
  UserCheck, 
  Microscope, 
  Wallet, 
  HeartPulse, 
  Sofa, 
  CalendarCheck 
} from 'lucide-react';

const benefits = [
  {
    icon: UserCheck,
    title: "Experienced Dentists",
    desc: "Decades of combined expertise delivering precision and empathy in every procedure."
  },
  {
    icon: Microscope,
    title: "Modern Equipment",
    desc: "State-of-the-art diagnostics ensuring minimally invasive and highly accurate treatments."
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    desc: "Clear, accessible pricing models with no hidden fees, respecting your investment in health."
  },
  {
    icon: HeartPulse,
    title: "Emergency Care",
    desc: "Prioritized emergency appointments because your comfort cannot wait."
  },
  {
    icon: Sofa,
    title: "Comfortable Environment",
    desc: "A minimalist, anxiety-free studio designed like a retreat rather than a clinic."
  },
  {
    icon: CalendarCheck,
    title: "Easy Appointment Booking",
    desc: "Effortless digital booking designed to flow with your busy lifestyle."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24  overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 opacity-[0.05] pointer-events-none rotate-12">
        <img 
          src="https://images.unsplash.com/photo-1567372704182-ec2ea042c937?q=80&w=1000" 
          alt="Zen ripples" 
          className="w-full h-full object-cover rounded-full grayscale"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 max-w-2xl">
          <span className="font-heading text-[10px] tracking-[0.3em] font-bold text-primary uppercase mb-4 block">
            The Serene Standard
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark leading-tight">
            Dentistry shaped around <br />
            <span className="text-primary font-normal italic">your peace of mind.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`group p-10 shadow-xl backdrop-blur-md border border-primary/5 transition-all duration-500 hover-lift  hover:shadow-xl hover:shadow-primary/5
                ${index % 3 === 1 ? 'lg:translate-y-12' : ''}
                ${index % 2 === 1 ? 'md:translate-y-8 lg:translate-y-0' : ''}
              `}
              style={{
                borderRadius: index % 3 === 0 ? '60px 40px 80px 30px' : 
                             index % 3 === 1 ? '40px 80px 30px 60px' : 
                             '80px 30px 60px 40px'
              }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-heading text-xl font-bold text-dark mb-4 tracking-tight">
                {benefit.title}
              </h3>
              
              <p className="font-body text-sm text-dark/60 leading-relaxed font-light">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
