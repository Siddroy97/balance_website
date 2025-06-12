
import React from 'react';

const TeamSlide = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <div className="w-20 h-20 bg-[#2E003E] rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold">SR</div>
          <h4 className="font-bold text-sm">Siddhartha Roy</h4>
          <p className="text-xs text-gray-600">ex-Kahana Product</p>
        </div>
        <div className="text-center">
          <div className="w-20 h-20 bg-[#D6C2E5] rounded-lg mx-auto mb-3 flex items-center justify-center text-[#2E003E] font-bold">CTO</div>
          <h4 className="font-bold text-sm">Chief Technology Officer</h4>
          <p className="text-xs text-gray-600">ex-Epic FHIR lead</p>
        </div>
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-[#2E003E] to-[#D6C2E5] rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold">RCM</div>
          <h4 className="font-bold text-sm">RCM Ops Lead</h4>
          <p className="text-xs text-gray-600">15 yrs billing</p>
        </div>
      </div>
      
      <div className="bg-[#D6C2E5]/20 p-6 rounded-lg text-center">
        <div className="text-4xl font-bold text-[#2E003E] mb-2">3</div>
        <p className="text-lg">Design-partner clinics live</p>
        <div className="flex justify-center space-x-4 mt-4">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TeamSlide;
