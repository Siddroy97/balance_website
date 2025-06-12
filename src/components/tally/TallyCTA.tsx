
import React from 'react';
import { Button } from '@/components/ui/button';

const TallyCTA = () => {
  const handleBookDemo = () => {
    console.log('TallyCTA: Dispatching openContactModal event');
    const event = new CustomEvent('openContactModal');
    window.dispatchEvent(event);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#2E003E] to-[#1a0b1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-plus-jakarta font-bold text-white mb-6">
          Ready to eliminate missing-doc denials?
        </h2>
        <div className="flex justify-center">
          <Button 
            onClick={handleBookDemo}
            size="lg"
            className="bg-gradient-to-r from-[#D6C2E5] to-white text-[#2E003E] hover:from-white hover:to-[#D6C2E5] px-8 py-4 text-lg font-plus-jakarta font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg rounded-md"
          >
            Book a 15-min demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TallyCTA;
