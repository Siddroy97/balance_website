
import React from 'react';
import { Clock, Users, BarChart3 } from 'lucide-react';

const ProblemSlide = () => {
  return (
    <div className="space-y-8">
      <blockquote className="text-3xl italic text-[#2E003E] text-center border-l-4 border-[#D6C2E5] pl-6">
        "I spend more time on the phone than with patients." — Dr Patel
      </blockquote>
      <div className="space-y-4 text-left">
        <div className="flex items-center space-x-3">
          <Clock className="text-[#D6C2E5]" size={24} />
          <span>Physicians lose <span className="text-[#D6C2E5] font-bold">13 hrs/week</span> to PA (AMA 2024)</span>
        </div>
        <div className="flex items-center space-x-3">
          <Users className="text-[#D6C2E5]" size={24} />
          <span><span className="text-[#D6C2E5] font-bold">94%</span> say PA delays care</span>
        </div>
        <div className="flex items-center space-x-3">
          <BarChart3 className="text-[#D6C2E5]" size={24} />
          <span><span className="text-[#D6C2E5] font-bold">15%</span> of PAs were never needed</span>
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex justify-between items-end h-32">
          <div className="bg-[#2E003E] w-16 h-20 rounded-t flex items-end justify-center text-white text-sm pb-2">Care</div>
          <div className="bg-[#D6C2E5] w-16 h-28 rounded-t flex items-end justify-center text-[#2E003E] text-sm pb-2">PA</div>
        </div>
        <p className="text-center text-sm mt-2 text-gray-600">Weekly Hours: Patient Care vs Prior Auth</p>
      </div>
    </div>
  );
};

export default ProblemSlide;
