
import React from 'react';
import { ArrowRight } from 'lucide-react';

const PaybackSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 max-w-4xl mx-auto">
      {/* Key metrics */}
      <div className="space-y-6 text-center">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-2 h-2 bg-[#D6C2E5] rounded-full"></div>
          <span className="text-[#2E003E] text-lg">
            CAC recouped <span className="font-plus-jakarta font-bold">&lt; 60 days</span> with intro SaaS <span className="font-plus-jakarta font-bold">$199</span>/provider/mo
          </span>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <div className="w-2 h-2 bg-[#D6C2E5] rounded-full"></div>
          <span className="text-[#2E003E] text-lg">
            <span className="font-plus-jakarta font-bold">1-day</span> widget install, <span className="font-plus-jakarta font-bold">zero IT lift</span>
          </span>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <div className="w-2 h-2 bg-[#D6C2E5] rounded-full"></div>
          <span className="text-[#2E003E] text-lg">
            <span className="font-plus-jakarta font-bold">85%</span> gross margin; ARPU scales to <span className="font-plus-jakarta font-bold">$425</span> via upgrades
          </span>
        </div>
      </div>

      {/* Visual arrow graphic */}
      <div className="flex items-center justify-center space-x-8">
        {/* CAC Box */}
        <div className="bg-white border-2 border-[#2E003E] rounded-lg px-8 py-6">
          <div className="text-center">
            <div className="text-2xl font-plus-jakarta font-bold text-[#2E003E]">CAC</div>
            <div className="text-sm text-[#2E003E] mt-1">Customer Acquisition</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center">
          <ArrowRight size={48} className="text-[#D6C2E5]" strokeWidth={3} />
          <div className="text-[#D6C2E5] font-plus-jakarta font-bold mt-2 text-lg">
            &lt; 60 days
          </div>
        </div>

        {/* ARR Box */}
        <div className="bg-white border-2 border-[#2E003E] rounded-lg px-8 py-6">
          <div className="text-center">
            <div className="text-2xl font-plus-jakarta font-bold text-[#2E003E]">ARR</div>
            <div className="text-sm text-[#2E003E] mt-1">Annual Recurring Revenue</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaybackSlide;
