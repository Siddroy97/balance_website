import React from 'react';
import { Building, Users, TrendingUp, Shield } from 'lucide-react';
const UseCases = () => {
  return <section className="py-24 bg-gradient-to-br from-[#1a0b1f] via-[#2E003E] to-[#0f051a] relative overflow-hidden">
      {/* Breathing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D6C2E5]/6 to-transparent animate-[pulse_14s_ease-in-out_infinite]"></div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-[#D6C2E5]/10 to-transparent rounded-full blur-2xl animate-[pulse_8s_ease-in-out_infinite_2s]"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-[#D6C2E5]/8 to-transparent rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite_4s]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title text-4xl font-plus-jakarta font-bold text-white mb-6">
            Built for Healthcare Providers
          </h2>
          <p className="section-title text-xl text-gray-300 max-w-3xl mx-auto font-plus-jakarta leading-relaxed">
            Whether you're a solo practitioner or managing multiple locations, our platform scales to meet your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <div className="animate-card bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-10 border border-white/20 hover:border-[#D6C2E5]/50 transition-all duration-300 space-y-6">
            <div className="w-14 h-14 bg-gradient-to-br from-[#D6C2E5] to-white rounded-lg flex items-center justify-center mb-8 transform hover:scale-110 transition-transform duration-300">
              <Building className="text-[#2E003E]" size={28} />
            </div>
            <h3 className="text-2xl font-plus-jakarta font-bold text-white mb-6">
              Independent Clinics
            </h3>
            <p className="text-gray-300 font-plus-jakarta mb-8 leading-relaxed">
              Perfect for small practices looking to eliminate admin overhead and improve cash flow without hiring additional staff.
            </p>
            <div className="space-y-3 text-gray-400 font-plus-jakarta">
              <div className="feature-grid-item flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#D6C2E5] rounded-full"></div>
                <span>Reduce staff burden by 80%</span>
              </div>
              <div className="feature-grid-item flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#D6C2E5] rounded-full"></div>
                <span>Faster patient throughput</span>
              </div>
              <div className="feature-grid-item flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#D6C2E5] rounded-full"></div>
                <span>Immediate ROI within 30 days</span>
              </div>
            </div>
          </div>

          <div className="animate-card bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-10 border border-white/20 hover:border-[#D6C2E5]/50 transition-all duration-300 space-y-6">
            <div className="w-14 h-14 bg-gradient-to-br from-[#D6C2E5] to-white rounded-lg flex items-center justify-center mb-8 transform hover:scale-110 transition-transform duration-300">
              <Users className="text-[#2E003E]" size={28} />
            </div>
            <h3 className="text-2xl font-plus-jakarta font-bold text-white mb-6">
              Multi-site Groups
            </h3>
            <p className="text-gray-300 font-plus-jakarta mb-8 leading-relaxed">
              Standardize operations across locations with centralized intelligence and consistent workflows.
            </p>
            <div className="space-y-3 text-gray-400 font-plus-jakarta">
              <div className="feature-grid-item flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#D6C2E5] rounded-full"></div>
                <span>Unified reporting dashboard</span>
              </div>
              <div className="feature-grid-item flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#D6C2E5] rounded-full"></div>
                <span>Consistent processes</span>
              </div>
              <div className="feature-grid-item flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#D6C2E5] rounded-full"></div>
                <span>Scalable implementation</span>
              </div>
            </div>
          </div>

          <div className="animate-card bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-10 border border-white/20 hover:border-[#D6C2E5]/50 transition-all duration-300 space-y-6">
            <div className="w-14 h-14 bg-gradient-to-br from-[#D6C2E5] to-white rounded-lg flex items-center justify-center mb-8 transform hover:scale-110 transition-transform duration-300">
              <TrendingUp className="text-[#2E003E]" size={28} />
            </div>
            <h3 className="text-2xl font-plus-jakarta font-bold text-white mb-6">
              Revenue Optimization
            </h3>
            <p className="text-gray-300 font-plus-jakarta mb-8 leading-relaxed">
              Maximize collections with faster approvals, fewer denials, and optimized claim submissions.
            </p>
            <div className="space-y-3 text-gray-400 font-plus-jakarta">
              <div className="feature-grid-item flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#D6C2E5] rounded-full"></div>
                <span>40% reduction in denials</span>
              </div>
              <div className="feature-grid-item flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#D6C2E5] rounded-full"></div>
                <span>60% faster reimbursement</span>
              </div>
              <div className="feature-grid-item flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#D6C2E5] rounded-full"></div>
                <span>Improved cash flow</span>
              </div>
            </div>
          </div>
        </div>

        {/* HIPAA Compliance Section */}
        <div className="module-showcase bg-gradient-to-r from-[#D6C2E5]/90 to-white/90 backdrop-blur-lg rounded-2xl p-12 text-center mb-20 border border-white/30">
          <Shield className="mx-auto mb-6 transform hover:scale-110 transition-transform duration-300 text-[#2E003E]" size={56} />
          <h3 className="text-3xl font-plus-jakarta font-bold mb-6 text-[#2E003E]">
            HIPAA Compliant & Secure
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-[#2E003E]/80 font-plus-jakarta leading-relaxed">Enterprise-grade security with end-to-end encryption and rigorous data protection protocols. Your patient data is always secure and private.</p>
          <div className="flex flex-wrap justify-center gap-8 text-[#2E003E]/70 font-plus-jakarta">
            <div className="feature-grid-item flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#2E003E] rounded-full"></div>
              <span>HIPAA Compliant</span>
            </div>
            
            <div className="feature-grid-item flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#2E003E] rounded-full"></div>
              <span>End-to-End Encryption</span>
            </div>
            <div className="feature-grid-item flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#2E003E] rounded-full"></div>
              <span>Regular Security Audits</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default UseCases;