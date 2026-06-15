import { FileText } from "lucide-react";

function TermsAndConditions() {
  return (
    <section className="min-h-screen bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/10 text-primary mb-6">
            <FileText className="w-5 h-5" />
            <span className="font-heading font-bold text-xs tracking-[0.2em] uppercase">
              Terms & Conditions
            </span>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl font-bold text-dark leading-tight mb-6">
            Terms &
            <br />
            <span className="text-primary italic font-normal">
              Conditions
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-dark/60 leading-relaxed">
            Please read these Terms and Conditions carefully before using
            our website or booking services through our online platform.
          </p>

          <div className="mt-6 text-sm text-dark/40 uppercase tracking-widest font-heading">
            Effective Date: January 1, 2026
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-bg-soft border border-primary/10 rounded-[40px] p-8 md:p-12 lg:p-16 shadow-xl">

          <div className="space-y-14">

            {/* 1 */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                1. Acceptance of Terms
              </h2>

              <p className="text-dark/70 leading-relaxed">
                By accessing and using this website, you agree to be bound by
                these Terms and Conditions. If you do not agree with any part
                of these terms, please discontinue use of the website.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                2. About the Clinic
              </h2>

              <div className="bg-white rounded-[28px] border border-primary/10 p-8">
                <div className="space-y-4 text-dark/70">
                  <p>
                    <strong>Clinic Name:</strong> [Clinic Name]
                  </p>

                  <p>
                    <strong>Address:</strong> [Clinic Address]
                  </p>

                  <p>
                    <strong>Email:</strong> info@clinic.com
                  </p>

                  <p>
                    <strong>Phone:</strong> +91 XXXXX XXXXX
                  </p>
                </div>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                3. Website Purpose
              </h2>

              <p className="text-dark/70 leading-relaxed mb-5">
                This website is provided to offer information and resources
                related to our dental services.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Information About Dental Services",
                  "Online Appointment Booking",
                  "General Educational Content",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white border border-primary/10 rounded-2xl p-5"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* 4 */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                4. No Medical Advice
              </h2>

              <div className="bg-primary/5 border border-primary/10 rounded-[28px] p-8">
                <p className="text-dark/70 leading-relaxed">
                  Information on this website is provided for general
                  informational purposes only and should not be considered
                  professional medical or dental advice.
                </p>

                <p className="text-dark/70 leading-relaxed mt-4">
                  Users should consult a qualified dentist directly for
                  diagnosis, treatment recommendations, and professional
                  healthcare advice.
                </p>
              </div>
            </section>

            {/* 5 */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                5. Appointment Booking Terms
              </h2>

              <ul className="space-y-3 text-dark/70">
                <li>
                  • Appointment requests are subject to confirmation by the
                  clinic.
                </li>
                <li>
                  • Booking an appointment does not guarantee treatment.
                </li>
                <li>
                  • The clinic reserves the right to reschedule appointments
                  when necessary.
                </li>
                <li>
                  • Patients must provide accurate and complete information
                  during booking.
                </li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                6. Cancellation & Rescheduling Policy
              </h2>

              <p className="text-dark/70 leading-relaxed">
                Patients are requested to provide at least 24 hours' notice
                for appointment cancellations or changes whenever possible.
              </p>

              <p className="text-dark/70 leading-relaxed mt-4">
                Any cancellation fees, if applicable, will be communicated
                before the appointment. Rescheduling requests remain subject
                to appointment availability.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                7. Emergency Situations
              </h2>

              <div className="bg-white border border-primary/10 rounded-[28px] p-8">
                <p className="text-dark/70 leading-relaxed">
                  This website and its contact forms should not be used for
                  dental emergencies.
                </p>

                <p className="text-dark/70 leading-relaxed mt-4">
                  Online inquiries may not be monitored continuously. In the
                  event of an emergency, please contact the clinic directly
                  by phone or seek immediate medical attention.
                </p>
              </div>
            </section>

            {/* 8 */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                8. Fees & Pricing Disclaimer
              </h2>

              <p className="text-dark/70 leading-relaxed">
                Any prices displayed on this website are provided for
                informational purposes only and may change without notice.
              </p>

              <p className="text-dark/70 leading-relaxed mt-4">
                Final treatment costs may vary depending on examination
                findings, treatment complexity, and individual patient needs.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                9. User Responsibilities
              </h2>

              <p className="text-dark/70 leading-relaxed mb-5">
                Users agree not to:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Submit false or misleading information",
                  "Attempt unauthorized access",
                  "Disrupt website operations",
                  "Upload harmful or malicious content",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white rounded-2xl border border-primary/10 p-5"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* 10 */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                10. Intellectual Property
              </h2>

              <p className="text-dark/70 leading-relaxed">
                All content on this website, including logos, images, text,
                graphics, branding, and design elements, is the property of
                the clinic unless otherwise stated.
              </p>

              <p className="text-dark/70 leading-relaxed mt-4">
                Content may not be copied, reproduced, distributed, or used
                without prior written permission.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                11. Third-Party Links
              </h2>

              <p className="text-dark/70 leading-relaxed">
                This website may contain links to third-party websites for
                convenience and informational purposes.
              </p>

              <p className="text-dark/70 leading-relaxed mt-4">
                The clinic is not responsible for the content, privacy
                practices, availability, or policies of third-party websites.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                12. Limitation of Liability
              </h2>

              <ul className="space-y-3 text-dark/70">
                <li>• Temporary website downtime</li>
                <li>• Technical interruptions or errors</li>
                <li>
                  • Decisions made solely based on information available on
                  the website
                </li>
                <li>
                  • Losses resulting from unauthorized access beyond our
                  reasonable control
                </li>
              </ul>
            </section>

            {/* 13 */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                13. Privacy Reference
              </h2>

              <p className="text-dark/70 leading-relaxed">
                The collection and use of personal information through this
                website are governed by our Privacy Policy.
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                14. Changes to Terms
              </h2>

              <p className="text-dark/70 leading-relaxed">
                We reserve the right to modify these Terms and Conditions at
                any time. Updated versions will be posted on this page with a
                revised effective date.
              </p>
            </section>

            {/* 15 */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">
                15. Governing Law
              </h2>

              <p className="text-dark/70 leading-relaxed">
                These Terms and Conditions shall be governed by and construed
                in accordance with the laws of India.
              </p>
            </section>

            {/* 16 */}
            <section className="border-t border-primary/10 pt-12">
              <h2 className="font-heading text-3xl font-bold text-dark mb-8">
                16. Contact Information
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
                    <strong>Address:</strong> [Clinic Address]
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

export default TermsAndConditions;