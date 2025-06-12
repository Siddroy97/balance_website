import React from 'react';
import { Search, FileText, PenTool, Radar } from 'lucide-react';
import SolutionSlide from '@/components/slides/SolutionSlide';

const ProductModules = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0f051a] via-[#1a0b1f] to-[#2E003E] relative overflow-hidden">
      {/* Breathing gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D6C2E5]/5 to-transparent animate-[pulse_10s_ease-in-out_infinite]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-[#D6C2E5]/15 to-transparent rounded-full blur-2xl animate-[pulse_6s_ease-in-out_infinite_2s]"></div>
      <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-gradient-to-l from-[#D6C2E5]/12 to-transparent rounded-full blur-2xl animate-[pulse_8s_ease-in-out_infinite_4s]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title text-4xl font-plus-jakarta font-bold text-white mb-6">
            Three Modules, One Seamless Workflow
          </h2>
          <p className="section-title text-xl text-gray-300 max-w-3xl mx-auto font-plus-jakarta leading-relaxed">
            From prevention to payment, our integrated modules work together to eliminate admin friction and maximize revenue.
          </p>
        </div>

        {/* Scout - Featured with Demo */}
        <div className="module-showcase bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#D6C2E5] to-white rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <Radar className="text-[#2E003E]" size={28} />
                </div>
                <div>
                  <span className="text-sm font-plus-jakarta font-semibold text-[#D6C2E5] uppercase tracking-wide">Prevent</span>
                  <h3 className="text-3xl font-plus-jakarta font-bold text-white">Scout</h3>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 font-plus-jakarta leading-relaxed">
                PA requirement detection in under 5 seconds. Know before you treat whether prior authorization is needed, 
                preventing denials and delays.
              </p>
              
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="feature-grid-item space-y-2">
                  <div className="stat-number text-4xl font-plus-jakarta font-bold text-[#D6C2E5]">&lt;5s</div>
                  <div className="text-gray-400 font-plus-jakarta text-sm">PA Decision Time</div>
                </div>
                <div className="feature-grid-item space-y-2">
                  <div className="stat-number text-4xl font-plus-jakarta font-bold text-[#D6C2E5]">10 min</div>
                  <div className="text-gray-400 font-plus-jakarta text-sm">Time Saved Per Patient</div>
                </div>
                <div className="feature-grid-item space-y-2">
                  <div className="stat-number text-4xl font-plus-jakarta font-bold text-[#D6C2E5]">$11</div>
                  <div className="text-gray-400 font-plus-jakarta text-sm">Cost Saved Per Check</div>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <SolutionSlide />
            </div>
          </div>
        </div>

        {/* Other Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Tally */}
          <div className="animate-card bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-10 border border-white/20 hover:border-[#D6C2E5]/50 transition-all duration-300 space-y-6">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-[#D6C2E5] to-white rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <FileText className="text-[#2E003E]" size={28} />
              </div>
              <div>
                <span className="text-sm font-plus-jakarta font-semibold text-[#D6C2E5] uppercase tracking-wide">Prepare</span>
                <h3 className="text-2xl font-plus-jakarta font-bold text-white">Tally</h3>
              </div>
            </div>
            <p className="text-gray-300 font-plus-jakarta text-lg leading-relaxed mb-8">
              Auto-generates perfect PA packets by bundling required documentation, medical notes, and supporting evidence.
            </p>
            <div className="space-y-3 text-gray-400 font-plus-jakarta">
              <div className="feature-grid-item flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#D6C2E5] rounded-full"></div>
                <span>Medical record extraction</span>
              </div>
              <div className="feature-grid-item flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#D6C2E5] rounded-full"></div>
                <span>Document verification</span>
              </div>
              <div className="feature-grid-item flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#D6C2E5] rounded-full"></div>
                <span>Compliance checking</span>
              </div>
            </div>
          </div>

          {/* Nora */}
          <div className="animate-card bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-10 border border-white/20 hover:border-[#D6C2E5]/50 transition-all duration-300 space-y-6">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-[#D6C2E5] to-white rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <PenTool className="text-[#2E003E]" size={28} />
              </div>
              <div>
                <span className="text-sm font-plus-jakarta font-semibold text-[#D6C2E5] uppercase tracking-wide">Automate</span>
                <h3 className="text-2xl font-plus-jakarta font-bold text-white">Nora</h3>
              </div>
            </div>
            <p className="text-gray-300 font-plus-jakarta text-lg leading-relaxed mb-8">
              AI scribe that converts clinical notes into clean, submittable claims with proper coding and documentation.
            </p>
            <div className="space-y-3 text-gray-400 font-plus-jakarta">
              <div className="feature-grid-item flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#D6C2E5] rounded-full"></div>
                <span>Clinical note processing</span>
              </div>
              <div className="feature-grid-item flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#D6C2E5] rounded-full"></div>
                <span>Automated coding</span>
              </div>
              <div className="feature-grid-item flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#D6C2E5] rounded-full"></div>
                <span>Claims optimization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductModules;
