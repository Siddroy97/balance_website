
import React from 'react';
import { TrendingUp, DollarSign, Clock } from 'lucide-react';

const PaybackSlideVariation1 = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4 text-left">
        <div className="flex items-center space-x-3">
          <Clock className="text-[#D6C2E5]" size={24} />
          <span>ROI in <span className="text-[#D6C2E5] font-bold">6 months</span> → Break-even at <span className="text-[#D6C2E5] font-bold">month 8</span></span>
        </div>
        <div className="flex items-center space-x-3">
          <TrendingUp className="text-[#D6C2E5]" size={24} />
          <span>Save <span className="text-[#D6C2E5] font-bold">$47k/year</span> per provider in admin costs</span>
        </div>
        <div className="flex items-center space-x-3">
          <DollarSign className="text-[#D6C2E5]" size={24} />
          <span>Reduce claim denials by <span className="text-[#D6C2E5] font-bold">73%</span></span>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
        <div className="text-center mb-6">
          <h3 className="text-lg font-plus-jakarta font-semibold text-[#2E003E] mb-2">Implementation Timeline</h3>
        </div>
        
        <div className="space-y-4">
          {/* Month 1-2 */}
          <div className="flex items-center space-x-4">
            <div className="w-16 text-center">
              <div className="bg-[#2E003E] text-white px-2 py-1 rounded text-xs font-bold">M1-2</div>
            </div>
            <div className="flex-1 bg-red-100 h-3 rounded-full relative">
              <div className="bg-red-400 h-3 rounded-full w-full"></div>
              <span className="absolute right-2 top-0 text-xs text-red-700 font-medium">Setup Cost: $12k</span>
            </div>
          </div>

          {/* Month 3-6 */}
          <div className="flex items-center space-x-4">
            <div className="w-16 text-center">
              <div className="bg-[#D6C2E5] text-[#2E003E] px-2 py-1 rounded text-xs font-bold">M3-6</div>
            </div>
            <div className="flex-1 bg-yellow-100 h-3 rounded-full relative">
              <div className="bg-yellow-400 h-3 rounded-full w-full"></div>
              <span className="absolute right-2 top-0 text-xs text-yellow-700 font-medium">Savings: $24k</span>
            </div>
          </div>

          {/* Month 7+ */}
          <div className="flex items-center space-x-4">
            <div className="w-16 text-center">
              <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">M7+</div>
            </div>
            <div className="flex-1 bg-green-100 h-3 rounded-full relative">
              <div className="bg-green-500 h-3 rounded-full w-full"></div>
              <span className="absolute right-2 top-0 text-xs text-green-700 font-medium">Net Profit: $47k/year</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#2E003E] text-white p-4 rounded">
        <p className="text-sm text-center">
          Average client sees <span className="text-[#D6C2E5] font-bold">312% ROI</span> by year 1 with <span className="text-[#D6C2E5] font-bold">zero downtime</span> during implementation.
        </p>
      </div>
    </div>
  );
};

export default PaybackSlideVariation1;
