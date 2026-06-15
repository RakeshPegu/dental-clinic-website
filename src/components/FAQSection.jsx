import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How often should I visit a dentist?",
    answer: "We recommend a routine checkup and cleaning every six months to maintain optimal oral health and detect potential issues early."
  },
  {
    question: "Is teeth whitening safe?",
    answer: "Yes, professional teeth whitening is a safe and effective way to brighten your smile. We use gentle, tested materials to ensure your enamel remains protected."
  },
  {
    question: "How long does a root canal take?",
    answer: "Most root canal treatments can be completed in one or two visits, typically lasting 60 to 90 minutes each, depending on the complexity of the tooth."
  },
  {
    question: "Do you accept insurance?",
    answer: "We accept most major dental insurance plans. Our team can help you verify your coverage and maximize your benefits before your treatment."
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "In case of an emergency, call our office immediately. We prioritize urgent cases and will do our best to see you as soon as possible for pain relief and treatment."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Context */}
          <div className="lg:sticky lg:top-32">
            <span className="font-heading text-[10px] tracking-[0.3em] font-bold text-primary uppercase mb-4 block">
              Patient Inquiries
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark leading-tight mb-8">
              Clear your mind <br />
              <span className="text-primary font-normal italic">before your visit.</span>
            </h2>
            <p className="font-body text-lg text-dark/60 leading-relaxed font-light mb-12 max-w-md">
              It's natural to have questions. We believe in transparency and 
              mindful communication to ensure you feel completely at ease.
            </p>
            
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-bg-soft shadow-xl shadow-primary/5">
              <img 
                src="https://images.unsplash.com/photo-1765490526065-be638071263d?q=80&w=500" 
                alt="Zen Stones" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`group shadow-lg backdrop-blur-md rounded-3xl border transition-all duration-500 hover-lift overflow-hidden
                  ${openIndex === index ? 'border-primary/20 bg-primary/5' : 'border-bg-soft'}
                `}
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-content-${index}`}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-6"
                >
                  <span className={`font-heading text-lg font-bold transition-colors duration-300
                    ${openIndex === index ? 'text-primary' : 'text-dark group-hover:text-primary'}
                  `}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-primary shrink-0 transition-transform duration-500
                    ${openIndex === index ? 'rotate-180' : ''}
                  `}>
                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <div 
                  id={`faq-content-${index}`}
                  role="region"
                  className={`transition-all duration-500 ease-in-out overflow-hidden
                    ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="px-8 pb-8 pt-2 flex gap-6">
                    <div className="w-1 rounded-full bg-primary shrink-0" />
                    <p className="font-body text-dark/60 leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
