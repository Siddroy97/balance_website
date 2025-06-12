
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const handleGetStarted = () => {
    console.log('CTASection: Dispatching openContactModal event');
    const event = new CustomEvent('openContactModal');
    window.dispatchEvent(event);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#2E003E] to-[#1a0b1f] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D6C2E5]/5 to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-[#D6C2E5]/10 to-transparent rounded-full blur-2xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-plus-jakarta font-bold text-white mb-6">
          Ready to Transform Your Practice?
        </h2>
        <p className="text-xl text-gray-300 mb-8 font-plus-jakarta leading-relaxed">
          Join hundreds of independent clinics already saving time and increasing revenue with our integrated platform.
        </p>
        <div className="flex justify-center">
          <Button 
            onClick={handleGetStarted}
            size="lg"
            className="bg-gradient-to-r from-[#D6C2E5] to-white text-[#2E003E] hover:from-white hover:to-[#D6C2E5] px-8 py-4 text-lg font-plus-jakarta font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
