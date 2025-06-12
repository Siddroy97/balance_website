
import React from 'react';

const MarketSlide = () => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl font-plus-jakarta font-bold text-[#2E003E] mb-6">$10B Greenfield</h2>
      </div>

      {/* Bullet points */}
      <div className="space-y-3 text-lg">
        <div className="flex items-start">
          <span className="text-[#2E003E] mr-3">•</span>
          <span className="text-[#2E003E]">Independent clinics (&lt;3 sites): $7.4B TAM, $1.8B SAM</span>
        </div>
        <div className="flex items-start">
          <span className="text-[#2E003E] mr-3">•</span>
          <span className="text-[#2E003E]">Multi-site outpatient groups: $2.6B TAM, $0.9B SAM</span>
        </div>
        <div className="flex items-start">
          <span className="text-[#2E003E] mr-3">•</span>
          <span className="text-[#2E003E]">Yr-3 target SOM: $113M ARR (&lt;5% of SAM)</span>
        </div>
      </div>

      {/* Market cards and percentages */}
      <div className="flex justify-center items-center space-x-16 mt-12">
        {/* Left side - Market cards */}
        <div className="space-y-4">
          {/* TAM Card */}
          <div className="bg-[#2E003E] text-white px-8 py-6 rounded-lg text-center min-w-[320px]">
            <div className="text-3xl font-bold mb-2">$10B</div>
            <div className="text-lg">Total Addressable Market</div>
          </div>
          
          {/* SAM Card */}
          <div className="bg-[#8B5A9B] text-white px-8 py-6 rounded-lg text-center min-w-[320px]">
            <div className="text-3xl font-bold mb-2">$2.7B</div>
            <div className="text-lg">Serviceable Addressable Market</div>
          </div>
          
          {/* SOM Card */}
          <div className="bg-[#B39BC8] text-white px-8 py-6 rounded-lg text-center min-w-[320px]">
            <div className="text-3xl font-bold mb-2">$113M</div>
            <div className="text-lg">Year - 3 Target (&lt;5% of SAM)</div>
          </div>
        </div>

        {/* Right side - Percentage circles */}
        <div className="flex flex-col space-y-8">
          {/* 72% circle */}
          <div className="w-24 h-24 bg-[#2E003E] rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">72%</span>
          </div>
          
          {/* 28% circle */}
          <div className="w-24 h-24 bg-[#B39BC8] rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">28%</span>
          </div>
        </div>
      </div>

      {/* Sources footnote */}
      <div className="text-center mt-8">
        <p className="text-xs text-gray-500">Sources: AMA 2024, MGMA 2023, SK&A 2024.</p>
      </div>
    </div>
  );
};

export default MarketSlide;
