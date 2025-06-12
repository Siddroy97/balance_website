
import React from 'react';
import { CheckCircle, Clock, Shield } from 'lucide-react';

const TallyKeyBenefits = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-plus-jakarta font-bold text-[#2E003E] mb-6">
            Key Benefits
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <CheckCircle className="text-[#D6C2E5] mb-6" size={48} />
            <h3 className="text-2xl font-plus-jakarta font-bold text-[#2E003E] mb-4">
              Zero Missing-Doc Denials
            </h3>
            <p className="text-gray-600 font-plus-jakarta leading-relaxed">
              Drop denials from ~35% to &lt; 5%.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <Clock className="text-[#D6C2E5] mb-6" size={48} />
            <h3 className="text-2xl font-plus-jakarta font-bold text-[#2E003E] mb-4">
              20+ Minutes Saved per PA
            </h3>
            <p className="text-gray-600 font-plus-jakarta leading-relaxed">
              Auto-add docs, merge, and format in seconds.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <Shield className="text-[#D6C2E5] mb-6" size={48} />
            <h3 className="text-2xl font-plus-jakarta font-bold text-[#2E003E] mb-4">
              Built-In Audit Trail
            </h3>
            <p className="text-gray-600 font-plus-jakarta leading-relaxed">
              Every checkbox and upload is logged for compliance and quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TallyKeyBenefits;
