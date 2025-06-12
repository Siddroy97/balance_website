
import React from 'react';
import { Target, Zap, Shield } from 'lucide-react';

const PaybackSlideVariation2 = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4 text-left">
        <div className="flex items-center space-x-3">
          <Zap className="text-[#D6C2E5]" size={24} />
          <span><span className="text-[#D6C2E5] font-bold">Instant</span> PA decisions = <span className="text-[#D6C2E5] font-bold">40% faster</span> patient flow</span>
        </div>
        <div className="flex items-center space-x-3">
          <Target className="text-[#D6C2E5]" size={24} />
          <span>Cut administrative overhead by <span className="text-[#D6C2E5] font-bold">65%</span></span>
        </div>
        <div className="flex items-center space-x-3">
          <Shield className="text-[#D6C2E5]" size={24} />
          <span>Prevent <span className="text-[#D6C2E5] font-bold">$180k</span> in denied claims annually</span>
        </div>
      </div>

      {/* Visual comparison chart */}
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-plus-jakarta font-semibold text-[#2E003E] mb-2">Before vs After Balance Health</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Before */}
          <div className="space-y-3">
            <h4 className="font-plus-jakarta font-semibold text-red-600 text-center">Before</h4>
            <div className="space-y-2">
              <div className="bg-red-100 p-3 rounded text-center">
                <div className="text-red-700 font-bold text-lg">3-7 days</div>
                <div className="text-red-600 text-xs">PA decision time</div>
              </div>
              <div className="bg-red-100 p-3 rounded text-center">
                <div className="text-red-700 font-bold text-lg">28%</div>
                <div className="text-red-600 text-xs">Claim denial rate</div>
              </div>
              <div className="bg-red-100 p-3 rounded text-center">
                <div className="text-red-700 font-bold text-lg">$89k</div>
                <div className="text-red-600 text-xs">Annual admin costs</div>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="space-y-3">
            <h4 className="font-plus-jakarta font-semibold text-green-600 text-center">After</h4>
            <div className="space-y-2">
              <div className="bg-green-100 p-3 rounded text-center">
                <div className="text-green-700 font-bold text-lg">&lt; 5 sec</div>
                <div className="text-green-600 text-xs">PA decision time</div>
              </div>
              <div className="bg-green-100 p-3 rounded text-center">
                <div className="text-green-700 font-bold text-lg">7%</div>
                <div className="text-green-600 text-xs">Claim denial rate</div>
              </div>
              <div className="bg-green-100 p-3 rounded text-center">
                <div className="text-green-700 font-bold text-lg">$42k</div>
                <div className="text-green-600 text-xs">Annual admin costs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow and savings */}
        <div className="mt-6 flex items-center justify-center">
          <div className="bg-[#D6C2E5] text-[#2E003E] px-4 py-2 rounded-full font-plus-jakarta font-bold">
            = $47k Annual Savings
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-[#2E003E] to-[#D6C2E5] text-white p-4 rounded">
        <p className="text-sm text-center">
          Typical mid-size practice breaks even in <span className="font-bold">8 months</span> and saves <span className="font-bold">$235k</span> over 5 years.
        </p>
      </div>
    </div>
  );
};

export default PaybackSlideVariation2;
