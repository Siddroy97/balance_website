
import React from 'react';

const TallyHowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-plus-jakarta font-bold text-[#2E003E] mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-plus-jakarta">
            Three simple steps to eliminate missing-doc denials forever
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D6C2E5] to-[#2E003E] rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-white font-plus-jakarta font-bold text-xl">1</span>
            </div>
            <h3 className="text-2xl font-plus-jakarta font-bold text-[#2E003E] mb-4">
              Select Payer & Procedure
            </h3>
            <p className="text-gray-600 font-plus-jakarta leading-relaxed">
              We auto-detect the CPT and payer from your order—no typing required.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D6C2E5] to-[#2E003E] rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-white font-plus-jakarta font-bold text-xl">2</span>
            </div>
            <h3 className="text-2xl font-plus-jakarta font-bold text-[#2E003E] mb-4">
              Tally Your Docs
            </h3>
            <p className="text-gray-600 font-plus-jakarta leading-relaxed">
              Tally shows a dynamic checklist of required documents with "Why?" tooltips.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D6C2E5] to-[#2E003E] rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-white font-plus-jakarta font-bold text-xl">3</span>
            </div>
            <h3 className="text-2xl font-plus-jakarta font-bold text-[#2E003E] mb-4">
              Build & Submit
            </h3>
            <p className="text-gray-600 font-plus-jakarta leading-relaxed">
              Click "Build Packet" to merge PDFs into a compliant PA packet for download or e-submission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TallyHowItWorks;
