import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

const Hero = () => {
  useGSAPAnimations();

  return (
    <section className="bg-gradient-to-br from-[#1a0b1f] via-[#2E003E] to-[#3d1448] min-h-screen flex items-center relative overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D6C2E5]/10 via-transparent to-[#2E003E]/20 animate-pulse opacity-60"></div>
      
      {/* Breathing gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#D6C2E5]/20 to-transparent rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[#D6C2E5]/15 to-transparent rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite_2s]"></div>
      
      <div className="parallax-bg absolute inset-0 bg-gradient-to-br from-[#D6C2E5]/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-plus-jakarta font-bold text-white mb-4 sm:mb-6 lg:mb-8">
            Revenue Engine for{' '}
            <span className="text-[#D6C2E5] bg-gradient-to-r from-[#D6C2E5] to-white bg-clip-text text-transparent">Independent Clinics</span>
          </h1>
          
          <p className="hero-subtitle text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 lg:mb-10 font-plus-jakarta leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
            Instant coverage checks, auto-generated PA packets, and AI-driven one-click claims—wiping out admin work and getting you paid faster.
          </p>
          
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => {
                console.log('Get Started button clicked');
                const event = new CustomEvent('openContactModal');
                window.dispatchEvent(event);
              }}
              size="lg"
              className="bg-gradient-to-r from-[#D6C2E5] to-white text-[#2E003E] hover:from-white hover:to-[#D6C2E5] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-plus-jakarta font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg rounded-md"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
