import React from "react";

const transformations = [
  {
    id: 1,
    treatment: "Teeth Whitening",
    description:
      "Professional whitening treatment for a brighter and healthier smile.",
    before:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800",
    after:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800",
  },
  {
    id: 2,
    treatment: "Dental Veneers",
    description:
      "Smile makeover using custom-crafted porcelain veneers.",
    before:
      "https://images.unsplash.com/photo-1588776814546-ec7e5c6f0d5f?w=800",
    after:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800",
  },
  {
    id: 3,
    treatment: "Orthodontic Treatment",
    description:
      "Alignment correction resulting in a more balanced smile.",
    before:
      "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=800",
    after:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800",
  },
];

function SmileTransformations() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-primary/10 border border-primary/10 text-primary text-xs font-heading font-bold tracking-[0.2em] uppercase mb-6">
            Patient Results
          </span>

          <h2 className="font-heading text-5xl md:text-6xl font-bold text-dark mb-6">
            Beautiful Smile
            <br />
            <span className="text-primary italic font-normal">
              Transformations
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-dark/60 text-lg leading-relaxed">
            Real treatment journeys showcasing the care, precision,
            and confidence our patients experience.
          </p>
        </div>

        {/* Gallery */}
        <div className="space-y-12">

          {transformations.map((item) => (
            <div
              key={item.id}
              className="bg-bg-soft border border-primary/10 rounded-[36px] overflow-hidden shadow-xl"
            >
              <div className="grid lg:grid-cols-2">

                {/* Before */}
                <div className="relative">
                  <img
                    src={item.before}
                    alt="Before Treatment"
                    className="w-full h-[350px] object-cover"
                  />

                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full">
                    <span className="font-heading text-xs font-bold tracking-widest uppercase text-dark">
                      Before
                    </span>
                  </div>
                </div>

                {/* After */}
                <div className="relative">
                  <img
                    src={item.after}
                    alt="After Treatment"
                    className="w-full h-[350px] object-cover"
                  />

                  <div className="absolute top-5 left-5 bg-primary text-white px-4 py-2 rounded-full">
                    <span className="font-heading text-xs font-bold tracking-widest uppercase">
                      After
                    </span>
                  </div>
                </div>

              </div>

              {/* Content */}
              <div className="p-8 md:p-10">

                <span className="text-primary font-heading text-xs font-bold tracking-[0.2em] uppercase">
                  {item.treatment}
                </span>

                <p className="mt-4 text-dark/70 leading-relaxed max-w-3xl">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* Disclaimer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-dark/40 italic">
            Individual treatment outcomes may vary depending on each
            patient's dental condition and treatment plan.
          </p>
        </div>

      </div>
    </section>
  );
}

export default SmileTransformations;