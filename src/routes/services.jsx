import React from 'react'; 
import { Sparkles, Stethoscope, ShieldHalf, Anchor, Grid, Zap, Scissors, Smile, Clock, ArrowRight } from 'lucide-react'; 
import { Link } from 'react-router'; 

const services = [ 
  { 
    id: 'teeth-cleaning', 
    title: 'Teeth Cleaning', 
    description: 'Gentle plaque removal and polishing using ultrasonic water therapies.', 
    icon: Sparkles 
  }, 
  { 
    id: 'dental-checkups', 
    title: 'Dental Checkups', 
    description: 'Thorough examinations focusing on holistic oral health and early detection.', 
    icon: Stethoscope 
  }, 
  { 
    id: 'root-canal', 
    title: 'Root Canal Treatment', 
    description: 'Pain-free restorative endodontics designed to save your natural tooth.', 
    icon: ShieldHalf 
  }, 
  { 
    id: 'dental-implants', 
    title: 'Dental Implants', 
    description: 'Permanent, natural-looking solutions for missing teeth with precision care.', 
    icon: Anchor 
  }, 
  { 
    id: 'braces-aligners', 
    title: 'Braces & Aligners', 
    description: 'Invisible alignment solutions for a naturally balanced, confident smile.', 
    icon: Grid 
  }, 
  { 
    id: 'teeth-whitening', 
    title: 'Teeth Whitening', 
    description: 'Professional whitening treatments for a safe and luminous transformation.', 
    icon: Zap 
  }, 
  { 
    id: 'tooth-extraction', 
    title: 'Tooth Extraction', 
    description: 'Safe and comfortable removal when restorative care is no longer an option.', 
    icon: Scissors 
  }, 
  { 
    id: 'pediatric-dentistry', 
    title: 'Pediatric Dentistry', 
    description: 'Specialized, gentle dental care designed to nurture healthy habits in children.', 
    icon: Smile 
  }, 
  { 
    id: 'emergency-care', 
    title: 'Emergency Dental Care', 
    description: 'Urgent relief and compassionate care when you need immediate assistance.', 
    icon: Clock 
  }
]
const ServicesPage = () => { 
  return ( 
    <div className="bg-backgroun min-h-screen pb-24"> 
      {/* Header Section */} 
      <section className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto overflow-hidden"> 
        <div className="relative z-10 max-w-3xl"> 
          <span className="font-heading text-[10px] tracking-[0.3em] font-bold text-primary uppercase mb-4 block"> 
            Treatments 
          </span> 
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-dark leading-[1.1] mb-8"> 
            Restorative care, <br /> 
            <span className="text-primary font-normal italic">tailored to your rhythm.</span> 
          </h1> 
          <p className="font-body text-lg text-dark/60 max-w-xl leading-relaxed font-light"> 
            From routine checkups to complex restorations, our treatments are designed to flow with your body's natural healing process. Experience dentistry that respects your peace. 
          </p> 
        </div> 
        {/* Decorative background element */} 
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.05] pointer-events-none"> 
          <img src="https://images.pexels.com/photos/8944068/pexels-photo-8944068.jpeg" alt="Zen Garden Pattern" className="w-full h-full object-cover grayscale" /> 
        </div> 
      </section> 
      {/* Services Grid */} 
      <section className="max-w-7xl mx-auto px-6"> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-16"> 
          {services.map((service, index) => ( 
            <Link to={`/services/${service.id}`} key={service.id} className={
              `group block shadow-xl backdrop-blur-md p-8 border transition-all duration-500 hover-lift  hover:shadow-xl hover:shadow-primary/5
               ${index % 3 === 1 ? 'lg:mt-16' : ''} ${index % 2 === 1 ? 'md:mt-8 lg:mt-0' : ''}
                rounded-tr-[3rem] rounded-bl-3xl rounded-tl-xl rounded-br-xl`} 
            > 
              <div className="relative mb-6"> 
                <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-2xl border border-primary/20 relative z-10 group-hover:scale-110 transition-transform duration-500"> 
                  <service.icon className="w-7 h-7 text-primary" strokeWidth={1.5} /> 
                </div> 
                {/* Outgrowth effect on hover */} 
                <div className="absolute -inset-2 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 blur-xl" /> 
              </div> 
              <h3 className="font-heading text-xl font-bold text-dark mb-3 tracking-tight"> 
                {service.title} 
              </h3> 
              <p className="font-body text-sm text-dark/60 leading-relaxed mb-6 font-light"> 
                {service.description} 
              </p> 
              <div className="flex items-center gap-2 text-primary font-heading text-xs font-bold uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity"> 
                Explore Details <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" /> 
              </div> 
            </Link> 
          ))} 
        </div> 
      </section> 
      {/* Bottom CTA */} 
      <section className="max-w-5xl mx-auto px-6 mt-32"> 
        <div className="relative bg-gray-400 rounded-[2.5rem] p-12 md:p-16 overflow-hidden shadow-2xl shadow-primary/20 text-center"> 
          {/* Background Decorative Icon */} 
          <Clock className="absolute -bottom-8 -right-8 w-64 h-64 text-white opacity-5 pointer-events-none" /> 
          <div className="relative z-10"> 
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"> 
              Make wellness a habit. <br className="hidden md:block" /> Schedule your bi-annual checkup. 
            </h2> 
            <a href="/#contact" className="inline-block px-10 py-4 bg-cta text-black font-heading font-bold rounded-full hover-lift text-sm uppercase tracking-widest transition-all shadow-lg" 
            > 
              Book Your Ritual 
            </a> 
          </div> 
        </div> 
      </section> 
    </div> 
  ); 
}; 

export default ServicesPage;