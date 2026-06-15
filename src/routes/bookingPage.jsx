import { Calendar, Clock, Phone, MessageCircle } from "lucide-react";

function BookingPage() {
  return (
    <section className="min-h-screen bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-heading font-bold text-xs tracking-widest uppercase mb-5">
            Appointment Booking
          </span>

          <h1 className="font-heading text-5xl md:text-6xl font-bold text-dark leading-tight mb-6">
            Begin Your Journey to a
            <br />
            <span className="text-primary italic font-normal">
              Healthier Smile
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-dark/60 text-lg leading-relaxed">
            Schedule your consultation at a time that works best for you.
            We are committed to making your visit comfortable, relaxing,
            and stress-free.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Form */}
          <div className="bg-bg-soft rounded-[32px] p-8 md:p-10 border border-primary/10 shadow-xl">

            <form className="space-y-6">

              <div>
                <label className="block text-sm font-heading font-bold uppercase tracking-wider text-dark/70 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 rounded-2xl border border-primary/10 bg-white outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="block text-sm font-heading font-bold uppercase tracking-wider text-dark/70 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-5 py-4 rounded-2xl border border-primary/10 bg-white outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="block text-sm font-heading font-bold uppercase tracking-wider text-dark/70 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-2xl border border-primary/10 bg-white outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm font-heading font-bold uppercase tracking-wider text-dark/70 mb-2">
                    Preferred Date
                  </label>

                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />

                    <input
                      type="date"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border border-primary/10 bg-white outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-heading font-bold uppercase tracking-wider text-dark/70 mb-2">
                    Preferred Time
                  </label>

                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />

                    <input
                      type="time"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border border-primary/10 bg-white outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

              </div>

              <div>
                <label className="block text-sm font-heading font-bold uppercase tracking-wider text-dark/70 mb-2">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your dental concerns..."
                  className="w-full px-5 py-4 rounded-2xl border border-primary/10 bg-white resize-none outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-cta text-black font-heading font-bold rounded-full uppercase tracking-widest shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all duration-300"
              >
                Book Appointment
              </button>

            </form>
          </div>

          {/* Contact Card */}
          <div className="flex flex-col justify-center">

            <div className="bg-white border border-primary/10 rounded-[32px] p-10 shadow-xl">

              <span className="text-primary font-heading font-bold uppercase tracking-widest text-xs">
                Need Immediate Assistance?
              </span>

              <h2 className="text-4xl font-heading font-bold text-dark mt-4 mb-6">
                We're Here
                <br />
                To Help
              </h2>

              <p className="text-dark/60 leading-relaxed mb-10">
                If you'd prefer to speak with our team directly, feel free
                to call us or send a WhatsApp message. We'll help you find
                the most suitable appointment slot.
              </p>

              <div className="space-y-5">

                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <p className="font-heading font-bold text-dark">
                      Call Clinic
                    </p>
                    <p className="text-dark/50 text-sm">
                      +91 99999 99999
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <p className="font-heading font-bold text-dark">
                      WhatsApp Us
                    </p>
                    <p className="text-dark/50 text-sm">
                      Quick appointment booking
                    </p>
                  </div>
                </a>

              </div>

              {/* Decorative Quote */}
              <div className="mt-10 pt-8 border-t border-primary/10">
                <p className="italic text-dark/50 leading-relaxed">
                  "A calm environment creates a better dental experience.
                  That's why every detail of our clinic is designed around
                  your comfort."
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default BookingPage;