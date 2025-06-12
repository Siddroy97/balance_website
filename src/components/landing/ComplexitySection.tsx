
import React from 'react';
import { Shield, Clock, TrendingUp } from 'lucide-react';

const ComplexitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#2E003E] via-[#1a0b1f] to-[#0f051a] relative overflow-hidden">
      {/* Breathing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D6C2E5]/5 via-transparent to-[#D6C2E5]/10 animate-[pulse_8s_ease-in-out_infinite]"></div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#D6C2E5]/10 to-transparent rounded-full blur-3xl animate-[pulse_5s_ease-in-out_infinite_1s]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#D6C2E5]/8 to-transparent rounded-full blur-3xl animate-[pulse_7s_ease-in-out_infinite_3s]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl font-plus-jakarta font-bold text-white mb-6">
            We handle the complexity so you don't have to
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-card text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20 hover:border-[#D6C2E5]/50 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D6C2E5] to-white rounded-full flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform duration-300">
              <Shield className="text-[#2E003E]" size={32} />
            </div>
            <h3 className="text-xl font-plus-jakarta font-bold text-white mb-4">
              Instant Coverage Verification
            </h3>
            <p className="text-gray-300 font-plus-jakarta">
              Real-time eligibility checks and PA requirement detection in under 5 seconds. 
              No more waiting on hold or denied claims.
            </p>
          </div>

          <div className="animate-card text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20 hover:border-[#D6C2E5]/50 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D6C2E5] to-white rounded-full flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform duration-300">
              <Clock className="text-[#2E003E]" size={32} />
            </div>
            <h3 className="text-xl font-plus-jakarta font-bold text-white mb-4">
              Automated Documentation
            </h3>
            <p className="text-gray-300 font-plus-jakarta">
              AI generates perfect PA packets and claims documentation automatically. 
              Say goodbye to manual paperwork and rejected submissions.
            </p>
          </div>

          <div className="animate-card text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20 hover:border-[#D6C2E5]/50 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D6C2E5] to-white rounded-full flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform duration-300">
              <TrendingUp className="text-[#2E003E]" size={32} />
            </div>
            <h3 className="text-xl font-plus-jakarta font-bold text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-300 font-plus-jakarta">
              Our system gets smarter as you get more success with our system. 
              Each processed claim improves predictions for faster approvals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplexitySection;
