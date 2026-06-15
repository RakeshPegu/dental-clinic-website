import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className=" shadow-lg rounded-[3rem] p-12 md:p-20 border border-bg-soft ">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-heading text-[10px] tracking-[0.3em] font-bold text-primary uppercase mb-6 block">
                Get in Touch
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark leading-tight mb-8">
                Ready to start your <br />
                <span className="text-primary font-normal italic">journey to a serene smile?</span>
              </h2>
              <p className="font-body text-lg text-dark/60 leading-relaxed font-light mb-12">
                We're here to answer any questions you may have about our treatments 
                or to help you schedule your first visit to our mindful studio.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-dark/40 uppercase tracking-widest">Call Us</p>
                    <p className="font-heading font-bold text-dark">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-dark/40 uppercase tracking-widest">Email Us</p>
                    <p className="font-heading font-bold text-dark">hello@serenesmile.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-dark/40 uppercase tracking-widest">Visit Us</p>
                    <p className="font-heading font-bold text-dark">123 Serenity Way, Austin, TX</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-bg-soft shadow-sm shadow-primary/5">
              <h3 className="font-heading text-xl font-bold text-dark mb-8">Send us a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[10px] font-bold text-black/40 uppercase tracking-widest mb-2">Name</label>
                  <input type="text" className="w-full bg-ivory border border-bg-soft rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors text-dark" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-dark/40 uppercase tracking-widest mb-2">Email</label>
                  <input type="email" className="w-full bg-ivory border border-bg-soft rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors text-dark" placeholder="Your Email" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-ivory uppercase tracking-widest mb-2">Message</label>
                  <textarea rows="4" className="w-full bg-ivory border border-bg-soft rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors text-dark" placeholder="How can we help?"></textarea>
                </div>
                <button className="w-full py-4 bg-cta text-black font-heading font-bold rounded-xl hover-lift shadow-lg shadow-primary/10 text-xs uppercase tracking-widest transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
