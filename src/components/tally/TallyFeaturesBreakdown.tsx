
import React from 'react';

const TallyFeaturesBreakdown = () => {
  const features = [
    {
      feature: "Dynamic Checklist",
      benefit: "Always up-to-date payer & CPT rules"
    },
    {
      feature: '"Why?" Tooltips',
      benefit: "Inline explanations remove guesswork"
    },
    {
      feature: "Auto-Upload",
      benefit: "Pulls docs from chart with one click"
    },
    {
      feature: "Packet Preview",
      benefit: "Thumbnails & page count guarantee accuracy"
    },
    {
      feature: "Download or e-Submit",
      benefit: "Works via clearing-house API or PDF export"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-plus-jakarta font-bold text-[#2E003E] mb-6">
            Features Breakdown
          </h2>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-plus-jakarta font-bold text-[#2E003E] text-lg">Feature</th>
                  <th className="text-left py-4 px-6 font-plus-jakarta font-bold text-[#2E003E] text-lg">Benefit</th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-white transition-colors duration-200">
                    <td className="py-6 px-6 font-plus-jakarta font-semibold text-[#2E003E]">{item.feature}</td>
                    <td className="py-6 px-6 font-plus-jakarta text-gray-600">{item.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TallyFeaturesBreakdown;
