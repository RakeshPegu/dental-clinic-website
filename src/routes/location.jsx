import React, { useEffect } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Navigation, 
  Car, 
  Bus, 
  Accessibility ,
  Leaf
} from 'lucide-react';
import { useLocation } from 'react-router';

const LocationPage = () => {
  const locations = useLocation()
  const pathname = locations.pathname === '/location'
  useEffect(()=>{
    document.getElementById('location')?.scrollIntoView({behavior:'smooth'})    

  }, [pathname])
  return (
    <div className="min-h-screen pb-24">
      {/* Serene Hero Section */}
      <section className="relative px-6 pt-20 pb-12 max-w-7xl mx-auto text-center overflow-hidden">
        <div className="relative z-10 mb-12">
          <span className="font-heading text-[10px] tracking-[0.3em] font-bold text-primary uppercase mb-4 block">
            Visit Our Studio
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-dark leading-[1.1] mb-4">
            Find Your Serene Smile
          </h1>
          <p className="font-body text-lg text-primary italic font-light">
            An oasis of calm in the heart of the city.
          </p>
        </div>

        {/* Hero Banner Image */}
        <div className="relative w-full aspect-[21/10] rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/5 mb-20">
          <img 
            src="https://images.pexels.com/photos/8251251/pexels-photo-8251251.jpeg" 
            alt="Serene Dental Clinic Interior" 
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-20" />
        </div>
      </section>

      {/* Bilateral Location & Hours Split */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start"  id='location' >
        {/* Left Column - Details */}
        <div className="space-y-6">
          {/* Address Card */}
          <div className="bg-bg-soft/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-bg-soft shadow-lg hover-lift transition-all">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-dark mb-2 uppercase tracking-wider">Address</h3>
                <p className="font-body text-dark/60 leading-relaxed font-light text-lg">
                  123 Serenity Way, Austin, TX 78701
                </p>
              </div>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-primary/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-primary/10 shadow-lg hover-lift transition-all translate-x-4 md:translate-x-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="w-full">
                <h3 className="font-heading text-lg font-bold text-dark mb-4 uppercase tracking-wider">Operating Hours</h3>
                <ul className="space-y-3 font-body text-dark/60 font-light">
                  <li className="flex justify-between border-b border-primary/5 pb-2">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-dark">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-primary/5 pb-2">
                    <span>Saturday</span>
                    <span className="font-semibold text-dark">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between text-primary font-medium italic">
                    <span>Sunday</span>
                    <span>Closed for Mindfulness</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-bg-soft/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-bg-soft shadow-lg hover-lift transition-all">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-dark/40 uppercase tracking-widest">Call Us</p>
                  <p className="font-heading font-bold text-dark">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-dark/40 uppercase tracking-widest">Email Us</p>
                  <p className="font-heading font-bold text-dark">hello@serenesmile.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Map */}
        <div className="relative group lg:h-[600px]">
          <div className="w-full h-full bg-bg-soft rounded-[3rem] overflow-hidden border border-bg-soft shadow-2xl relative">
            {/* Map Placeholder Image */}
            <img 
              src="https://images.pexels.com/photos/27486719/pexels-photo-27486719.jpeg" 
              alt="Studio Location Map" 
              className="w-full h-full object-cover  opacity-90"
            />
            
            {/* Custom Styled Map Tint */}
            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />

            {/* Map Marker Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary drop-shadow-2xl animate-bounce">
              <MapPin className="w-16 h-16 fill-primary/20" />
            </div>

            {/* Directions Floating Button */}
            <div className="absolute bottom-8 left-8">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=123+Serenity+Way+Austin+TX+78701"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white/90 backdrop-blur-md text-primary font-heading font-bold rounded-2xl shadow-xl hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-widest text-xs"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Parking & Accessibility Section */}
      <section className="max-w-7xl mx-auto px-6 mt-20 border-t border-bg-soft pt-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
              <Car className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-dark mb-2 uppercase tracking-wider text-sm">Parking</h4>
            <p className="font-body text-dark/60 text-sm leading-relaxed font-light">
              Complimentary parking available in the rear lot. Entrance via Oak Alley.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
              <Bus className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-dark mb-2 uppercase tracking-wider text-sm">Public Transit</h4>
            <p className="font-body text-dark/60 text-sm leading-relaxed font-light">
              5-minute walk from the Downtown Metro Station.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
              <Accessibility className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-dark mb-2 uppercase tracking-wider text-sm">Accessibility</h4>
            <p className="font-body text-dark/60 text-sm leading-relaxed font-light">
              Fully wheelchair accessible. Please let us know if you require special accommodations.
            </p>
          </div>
        </div>
      </section>

      {/* Final Gentle CTA */}
      <section className=" max-w-4xl  mx-auto px-6 mt-32 text-center pb-12 ">
      <div className='relative p-16 border-2  overflow-hidden  bg-gray-400 border-bg-soft 
        rounded-[4rem] shadow-sm shadow-primary/20 
        bg-gradient-to-b from-transparent 
        to-primary/5 backdrop-blur-sm'>
        <div className='absolute right-5 top-3   w-1/2 h-full opacity-10 pointer-events-none'>
          <Leaf className='w-full h-full rotate-45 translate-x-1/3 -translate-y-1/4'/>
        </div>
       <div className='max-w-3xl relative z-10 '>
          <h2 className="font-heading text-3xl font-bold text-dark mb-8">Ready to visit?</h2>
          <a 
            href="/#contact"
            className="inline-block px-12 py-5 bg-cta text-black font-heading font-bold rounded-full hover-lift shadow-xl shadow-primary/20 uppercase tracking-widest text-sm transition-all duration-300"
          >
            Book Your Visit
          </a>
        </div>
        </div>

       </section>
    </div>
  );
};

export default LocationPage;
