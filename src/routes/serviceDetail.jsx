import React from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, Clock, ShieldCheck, Star } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();
  
  // In a real app, you'd fetch this from a CMS or local data
  const title = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/services" className="inline-flex items-center gap-2 text-primary font-heading text-sm font-bold uppercase tracking-widest mb-12 hover:-translate-x-1 transition-transform">
          <ArrowLeft className="w-4 h-4" />
          Back to Treatments
        </Link>

        <div className="bg-bg-soft/40 backdrop-blur-md rounded-[3rem] p-8 md:p-16 border border-bg-soft shadow-xl shadow-primary/5">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <span className="font-heading text-[10px] tracking-[0.3em] font-bold text-primary uppercase mb-4 block">
                Treatment Detail
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark mb-8">
                {title}
              </h1>
              
              <div className="space-y-6 font-body text-dark/60 leading-relaxed font-light">
                <p>
                  Experience the highest standard of care with our {title} treatment. 
                  Our approach blends traditional expertise with modern, mindful practices 
                  to ensure your comfort and long-term oral health.
                </p>
                <p>
                  We utilize state-of-the-art technology and high-quality materials 
                  to provide results that are both functional and naturally beautiful. 
                  Every session is tailored to your unique needs, ensuring a serene 
                  experience from start to finish.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-bg-soft">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-dark/40 uppercase tracking-widest">Duration</p>
                    <p className="text-sm font-heading font-bold text-dark">45-90 Mins</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-dark/40 uppercase tracking-widest">Guarantee</p>
                    <p className="text-sm font-heading font-bold text-dark">5+ Year Warranty</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 bg-bg-soft rounded-3xl p-8 border border-bg-soft shadow-sm">
              <h4 className="font-heading text-sm font-bold text-dark mb-6 uppercase tracking-wider">Why Choose Us?</h4>
              <ul className="space-y-4">
                {[
                  'Mindful Approach',
                  'Expert Precision',
                  'Holistic Care',
                  'Modern Studio'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-body text-dark/60">
                    <Star className="w-3 h-3 text-primary fill-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-10 py-4 bg-cta text-white font-heading font-bold rounded-full hover-lift shadow-lg shadow-primary/20 text-xs uppercase tracking-widest">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
