
import React from 'react';

const CompetitionSlide = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="relative h-64">
          {/* Quadrant grid */}
          <div className="absolute inset-0 border border-gray-300"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-gray-300"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300"></div>
          
          {/* Axis labels */}
          <div className="absolute -bottom-6 left-0 text-sm text-gray-600">Task Management</div>
          <div className="absolute -bottom-6 right-0 text-sm text-gray-600">Prevention</div>
          <div className="absolute -left-16 top-0 text-sm text-gray-600 transform -rotate-90 origin-center">Enterprise</div>
          <div className="absolute -left-16 bottom-0 text-sm text-gray-600 transform -rotate-90 origin-center">Micro-clinic</div>
          
          {/* Balance Health - top right */}
          <div className="absolute top-8 right-8 bg-[#2E003E] text-white px-3 py-2 rounded-lg font-bold">
            Balance Health
          </div>
          
          {/* Competitors */}
          <div className="absolute top-8 left-8 bg-gray-400 text-white px-3 py-2 rounded-lg">Silna</div>
          <div className="absolute bottom-8 left-8 bg-gray-400 text-white px-3 py-2 rounded-lg">Kraftx</div>
          <div className="absolute bottom-8 right-8 bg-gray-400 text-white px-3 py-2 rounded-lg">Valerie</div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionSlide;
