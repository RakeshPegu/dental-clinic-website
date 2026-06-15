import React from 'react';
import { 
  Activity, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Linkedin 
} from 'lucide-react';
import { Link } from 'react-router';

const FooterSection = () => {
  return (
    <footer className="bg-white border-t border-bg-soft relative overflow-hidden">
      {/* Decorative Leaf Element */}
      <div className="absolute -top-12 -left-12 w-64 h-64 opacity-[0.03] pointer-events-none rotate-45">
        <img 
          src="https://cdn.jsdelivr.net/npm/game-icons-transparent@latest/svgs/lorc/falling-leaf.svg" 
          alt="Decorative Leaf" 
          className="w-full h-full text-primary"
          style={{ filter: 'sepia(1) saturate(0) opacity(0.2)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Activity className="w-6 h-6 text-primary" />
              <span className="font-heading text-xl font-bold text-dark tracking-tight">
                Serene Smile
              </span>
            </Link>
            <p className="font-body text-dark/60 leading-relaxed font-light max-w-sm mb-8">
              Bringing harmony to your oral health through mindful dentistry and 
              personalized care in a serene, professional environment.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-bg-soft flex items-center justify-center text-dark/40 hover:bg-primary  hover:border-primary transition-all duration-300 hover-lift"
                >
                  <social.icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading text-xs font-bold text-dark mb-8 uppercase tracking-[0.2em]">
              Get in Touch
            </h4>
            <ul className="space-y-4 font-body text-dark/60 font-light text-sm">
              <li className="flex items-center gap-3 group cursor-pointer hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span>hello@serenesmile.com</span>
              </li>
            </ul>
          </div>

          {/* Visit Us Column */}
          <div>
            <h4 className="font-heading text-xs font-bold text-dark mb-8 uppercase tracking-[0.2em]">
              Clinic Address
            </h4>
            <div className="flex items-start gap-3 font-body text-dark/60 font-light text-sm">
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <span>123 Serenity Way,<br />Austin, TX 78701</span>
            </div>
          </div>

          {/* Working Hours Column */}
          <div>
            <h4 className="font-heading text-xs font-bold text-dark mb-8 uppercase tracking-[0.2em]">
              Opening Hours
            </h4>
            <ul className="space-y-4 font-body text-dark/60 font-light text-sm">
              <li className="flex flex-col gap-1">
                <span className="font-bold text-dark/80 text-[10px] uppercase tracking-wider">Mon - Fri</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-bold text-dark/80 text-[10px] uppercase tracking-wider">Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="text-primary italic font-medium pt-2">
                Sunday: Closed for Mindfulness
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-bg-soft flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-dark/30">
          <p>© {new Date().getFullYear()} Serene Smile. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy_policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms_condition" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
