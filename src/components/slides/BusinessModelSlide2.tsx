
import React from 'react';

const BusinessModelSlide2 = () => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-plus-jakarta font-bold text-[#2E003E] mb-6">High-Margin SaaS, Easy Upsells</h2>
      </div>

      {/* Bullet points */}
      <div className="space-y-3 text-lg mb-16">
        <div className="flex items-start">
          <span className="text-[#2E003E] mr-3">•</span>
          <span className="text-[#2E003E]">Base SaaS: $199 /provider/mo, annual contract → 85% GM</span>
        </div>
        <div className="flex items-start">
          <span className="text-[#2E003E] mr-3">•</span>
          <span className="text-[#2E003E]">Add-ons: Doc-Packet +$100, Mini-Scribe +$100, usage ≈ $26 ⇒ ARPU $425 at Month 18</span>
        </div>
        <div className="flex items-start">
          <span className="text-[#2E003E] mr-3">•</span>
          <span className="text-[#2E003E]">Future: 0.5% rev-share on paid claims</span>
        </div>
      </div>

      {/* Horizontal Funnel */}
      <div className="flex items-center justify-center space-x-0 mt-16">
        {/* Left block - Subscription */}
        <div className="bg-[#D6C2E5] px-12 py-12 text-center relative" style={{ clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)' }}>
          <div className="text-2xl font-plus-jakarta font-bold text-[#2E003E] mb-2">Subscription</div>
          <div className="text-xl text-[#2E003E]">$199</div>
        </div>
        
        {/* Middle block - Add-ons */}
        <div className="bg-[#D6C2E5] px-10 py-10 text-center relative -ml-4" style={{ clipPath: 'polygon(15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%, 0 50%)' }}>
          <div className="text-2xl font-plus-jakarta font-bold text-[#2E003E] mb-2">Add-ons</div>
          <div className="text-xl text-[#2E003E]">+$200</div>
        </div>
        
        {/* Right block - Usage & Rev-share */}
        <div className="bg-[#D6C2E5] px-8 py-8 text-center relative -ml-4" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 15% 100%, 0 50%)' }}>
          <div className="text-lg font-plus-jakarta font-bold text-[#2E003E] mb-2">Usage &</div>
          <div className="text-lg font-plus-jakarta font-bold text-[#2E003E] mb-2">Rev-share</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelSlide2;
