import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const TallyHero = () => {
  const handleTryDemo = () => {
    const event = new CustomEvent('openContactModal');
    window.dispatchEvent(event);
  };

  const handleViewDemo = () => {
    window.open('/tally-demo', '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-[#1a0b1f] via-[#2E003E] to-[#3d1448] pt-24 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D6C2E5]/10 via-transparent to-[#2E003E]/20 animate-pulse opacity-60"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#D6C2E5]/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[#D6C2E5]/15 to-transparent rounded-full blur-3xl"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-plus-jakarta font-bold text-white mb-6">
              Never Miss a Doc Again
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-plus-jakarta leading-relaxed">
              Tally instantly lists the exact payer-required forms and bundles them into a single packet—so you submit clean authorizations every time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => {
                  const event = new CustomEvent('openContactModal');
                  window.dispatchEvent(event);
                }}
                size="lg"
                className="bg-gradient-to-r from-[#D6C2E5] to-white text-[#2E003E] hover:from-white hover:to-[#D6C2E5] px-8 py-4 text-lg font-plus-jakarta font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg rounded-md"
              >
                Try Tally Demo
              </Button>
            </div>
          </div>
          
          {/* Demo Preview */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="font-plus-jakarta font-medium text-sm">Tally Demo Preview</span>
                <span className="text-xs text-gray-500">Real-time packet building</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="text-xs text-gray-600 font-plus-jakarta font-semibold">Document Checklist</div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-xs">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Referral Form</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <span>Insurance Card</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Medical Records</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-gray-600 font-plus-jakarta font-semibold">Packet Preview</div>
                  <div className="bg-gray-100 rounded p-2 text-xs">
                    <div className="flex items-center space-x-1 mb-1">
                      <div className="w-4 h-5 bg-red-500 rounded-sm"></div>
                      <span>Document 1</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-5 bg-red-500 rounded-sm"></div>
                      <span>Document 2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#2E003E] text-white text-center py-2 rounded text-xs font-plus-jakarta font-semibold">
                Build Packet (14 pages)
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TallyHero;
