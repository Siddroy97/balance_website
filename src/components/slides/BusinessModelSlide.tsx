
import React from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';

const BusinessModelSlide = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4 text-left">
        <div className="flex items-center space-x-3">
          <DollarSign className="text-[#D6C2E5]" size={24} />
          <span>Base SaaS <span className="text-[#D6C2E5] font-bold">$199/provider/mo</span> → ARPU <span className="text-[#D6C2E5] font-bold">$425</span> with upgrades</span>
        </div>
        <div className="flex items-center space-x-3">
          <TrendingUp className="text-[#D6C2E5]" size={24} />
          <span><span className="text-[#D6C2E5] font-bold">85–90%</span> software margin</span>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center justify-between h-16">
          <div className="bg-[#2E003E] text-white px-4 py-2 rounded text-center flex-1 mx-1">
            <div className="font-bold">$199</div>
            <div className="text-xs">Base</div>
          </div>
          <div className="text-[#D6C2E5] text-2xl">→</div>
          <div className="bg-[#D6C2E5] text-[#2E003E] px-4 py-2 rounded text-center flex-1 mx-1">
            <div className="font-bold">$299</div>
            <div className="text-xs">+ Scribe</div>
          </div>
          <div className="text-[#D6C2E5] text-2xl">→</div>
          <div className="bg-gradient-to-r from-[#2E003E] to-[#D6C2E5] text-white px-4 py-2 rounded text-center flex-1 mx-1">
            <div className="font-bold">$425</div>
            <div className="text-xs">Full Suite</div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#2E003E] text-white p-4 rounded">
        <div className="flex justify-between items-center text-sm">
          <span>HIPAA ready</span>
          <span>·</span>
          <span>HITRUST roadmap</span>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelSlide;
