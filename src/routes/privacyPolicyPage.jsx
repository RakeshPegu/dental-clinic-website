import { ShieldCheck } from "lucide-react";

function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/10 mb-6">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-heading font-bold text-xs tracking-[0.2em] uppercase">
              Privacy Policy
            </span>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl font-bold text-dark leading-tight mb-6">
            Your Privacy,
            <br />
            <span className="text-primary italic font-normal">
              Our Responsibility
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-dark/60 leading-relaxed">
            We are committed to protecting your personal information and
            maintaining the confidentiality of all data shared through our
            website and services.
          </p>

          <div className="mt-6 text-sm text-dark/40 uppercase tracking-widest font-heading">
            Effective Date: January 1, 2026
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-bg-soft border border-primary/10 rounded-[40px] p-8 md:p-12 lg:p-16 shadow-xl">

          <div className="space-y-14">

            {/* Introduction */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                1. Introduction
              </h2>

              <div className="space-y-4 text-dark/70 leading-relaxed">
                <p>
                  Welcome to <strong>[Clinic Name]</strong>.
                </p>

                <p>
                  This Privacy Policy explains how we collect, use, store,
                  and protect information provided through our website.
                </p>

                <p>
                  We are committed to safeguarding your privacy and ensuring
                  that all personal information is handled responsibly,
                  securely, and transparently.
                </p>

                <p>
                  By using our website, you agree to the practices described
                  in this Privacy Policy.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                2. Information We Collect
              </h2>

              <div className="space-y-8">

                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">
                    Personal Information
                  </h3>

                  <ul className="space-y-2 text-dark/70">
                    <li>• Full Name</li>
                    <li>• Phone Number</li>
                    <li>• Email Address</li>
                    <li>• Address (if provided)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">
                    Appointment Information
                  </h3>

                  <ul className="space-y-2 text-dark/70">
                    <li>• Preferred appointment date</li>
                    <li>• Preferred appointment time</li>
                    <li>• Treatment inquiries</li>
                    <li>• Messages submitted through forms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">
                    Technical Information
                  </h3>

                  <ul className="space-y-2 text-dark/70">
                    <li>• IP address</li>
                    <li>• Browser type and version</li>
                    <li>• Device information</li>
                    <li>• Operating system</li>
                    <li>• Cookies and tracking technologies</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                3. How We Use Information
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Schedule appointments",
                  "Contact patients",
                  "Respond to inquiries",
                  "Improve services",
                  "Website analytics",
                  "Send appointment reminders",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white rounded-2xl p-4 border border-primary/10"
                  >
                    <p className="text-dark/70">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                4. Cookies & Tracking Technologies
              </h2>

              <p className="text-dark/70 leading-relaxed">
                We may use cookies and similar technologies to improve website
                functionality, remember user preferences, analyze visitor
                behavior, and enhance overall user experience.
              </p>

              <p className="text-dark/70 leading-relaxed mt-4">
                You may disable cookies through your browser settings, though
                some website features may not function as intended.
              </p>
            </section>

            {/* Sharing */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                5. Information Sharing
              </h2>

              <p className="text-dark/70 leading-relaxed mb-6">
                We may share information with trusted service providers that
                assist in operating our services.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Hosting Providers",
                  "Appointment Management Software",
                  "Email Service Providers",
                  "Analytics Providers",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white rounded-2xl p-4 border border-primary/10"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-primary/5 border border-primary/10">
                <p className="font-semibold text-dark">
                  We do not sell, rent, or trade personal information to
                  third parties.
                </p>
              </div>
            </section>

            {/* Security */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                6. Data Security
              </h2>

              <ul className="space-y-3 text-dark/70">
                <li>• HTTPS encryption</li>
                <li>• Secure hosting infrastructure</li>
                <li>• Access controls and authentication</li>
                <li>• Regular software and security updates</li>
                <li>• Internal security procedures</li>
              </ul>
            </section>

            {/* Health Information */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                7. Patient Health Information
              </h2>

              <p className="text-dark/70 leading-relaxed">
                Any health-related information submitted through our website
                is treated confidentially and used solely for appointment
                preparation, patient communication, and providing dental
                services.
              </p>
            </section>

            {/* Retention */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                8. Data Retention
              </h2>

              <p className="text-dark/70 leading-relaxed">
                We retain personal information only for as long as necessary
                to provide services, comply with legal obligations, maintain
                business records, and fulfill medical record requirements.
              </p>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                9. User Rights
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Access your information",
                  "Correct inaccurate information",
                  "Request deletion",
                  "Withdraw consent",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white rounded-2xl p-4 border border-primary/10"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Third Party */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                10. Third-Party Services
              </h2>

              <p className="text-dark/70 leading-relaxed mb-4">
                Our website may use trusted third-party services including:
              </p>

              <ul className="space-y-3 text-dark/70">
                <li>• Google Maps</li>
                <li>• Google Analytics</li>
                <li>• Online Booking Systems</li>
                <li>• Payment Gateways (if applicable)</li>
              </ul>

              <p className="text-dark/70 leading-relaxed mt-5">
                These services operate under their own privacy policies.
              </p>
            </section>

            {/* Children */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                11. Children's Privacy
              </h2>

              <p className="text-dark/70 leading-relaxed">
                Our website is not intended for children under the age
                required by applicable law without parental or guardian
                consent.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                12. Changes to This Policy
              </h2>

              <p className="text-dark/70 leading-relaxed">
                We may update this Privacy Policy periodically. Any changes
                will be posted on this page together with a revised effective
                date.
              </p>
            </section>

            {/* Contact */}
            <section className="border-t border-primary/10 pt-12">
              <h2 className="font-heading text-3xl font-bold text-dark mb-8">
                13. Contact Information
              </h2>

              <div className="bg-white rounded-[28px] border border-primary/10 p-8">
                <div className="space-y-4 text-dark/70">
                  <p>
                    <strong>Clinic Name:</strong> [Clinic Name]
                  </p>

                  <p>
                    <strong>Email:</strong> info@clinic.com
                  </p>

                  <p>
                    <strong>Phone:</strong> +91 XXXXX XXXXX
                  </p>

                  <p>
                    <strong>Address:</strong> Full Clinic Address Here
                  </p>
                </div>
              </div>
            </section>

          </div>

        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;