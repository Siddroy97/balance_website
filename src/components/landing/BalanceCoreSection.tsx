
import React from 'react';
import { Brain, Target, Zap } from 'lucide-react';

const BalanceCoreSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-[#2E003E] mb-4 font-plus-jakarta">
            The Balance Health Core
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-plus-jakarta">
            Our AI-powered platform transforms healthcare operations through intelligent automation
          </p>
        </div>

        {/* Desktop Layout - Restored original diagram */}
        <div className="hidden lg:flex items-center justify-center min-h-[500px] relative">
          {/* Central Balance Health Logo */}
          <div className="relative z-10 w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-[#D6C2E5]">
            <img 
              src="/lovable-uploads/b7217f96-2a4c-431c-bfd3-8584b9837cfd.png" 
              alt="Balance Health Logo" 
              className="w-20 h-20 rounded-full"
            />
          </div>

          {/* Machine Learning Card - Left */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-72">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#D6C2E5] rounded-lg flex items-center justify-center mr-3">
                  <Brain className="w-6 h-6 text-[#2E003E]" />
                </div>
                <h3 className="text-lg font-semibold text-[#2E003E] font-plus-jakarta">Machine Learning</h3>
              </div>
              <p className="text-gray-600 text-sm font-plus-jakarta">
                Advanced algorithms that learn from healthcare data patterns
              </p>
            </div>
            {/* Connecting Line */}
            <div className="absolute top-1/2 right-0 w-24 h-0.5 bg-gradient-to-r from-[#D6C2E5] to-transparent transform translate-x-full -translate-y-0.5"></div>
          </div>

          {/* Continuous Optimization Card - Top */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-72">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#D6C2E5] rounded-lg flex items-center justify-center mr-3">
                  <Target className="w-6 h-6 text-[#2E003E]" />
                </div>
                <h3 className="text-lg font-semibold text-[#2E003E] font-plus-jakarta">Continuous Optimization</h3>
              </div>
              <p className="text-gray-600 text-sm font-plus-jakarta">
                Real-time improvements based on performance metrics
              </p>
            </div>
            {/* Connecting Line */}
            <div className="absolute bottom-0 left-1/2 w-0.5 h-24 bg-gradient-to-b from-[#D6C2E5] to-transparent transform -translate-x-0.5 translate-y-full"></div>
          </div>

          {/* Pattern Recognition Card - Right */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-72">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#D6C2E5] rounded-lg flex items-center justify-center mr-3">
                  <Zap className="w-6 h-6 text-[#2E003E]" />
                </div>
                <h3 className="text-lg font-semibold text-[#2E003E] font-plus-jakarta">Pattern Recognition</h3>
              </div>
              <p className="text-gray-600 text-sm font-plus-jakarta">
                Intelligent detection of trends and anomalies in data
              </p>
            </div>
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-24 h-0.5 bg-gradient-to-l from-[#D6C2E5] to-transparent transform -translate-x-full -translate-y-0.5"></div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden space-y-8">
          {/* Central Logo */}
          <div className="flex justify-center mb-12">
            <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-[#D6C2E5]">
              <img 
                src="/lovable-uploads/b7217f96-2a4c-431c-bfd3-8584b9837cfd.png" 
                alt="Balance Health Logo" 
                className="w-16 h-16 rounded-full"
              />
            </div>
          </div>

          {/* Cards in vertical stack */}
          <div className="space-y-6">
            {/* Machine Learning Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mx-4">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#D6C2E5] rounded-lg flex items-center justify-center mr-3">
                  <Brain className="w-6 h-6 text-[#2E003E]" />
                </div>
                <h3 className="text-lg font-semibold text-[#2E003E] font-plus-jakarta">Machine Learning</h3>
              </div>
              <p className="text-gray-600 text-sm font-plus-jakarta">
                Advanced algorithms that learn from healthcare data patterns
              </p>
            </div>

            {/* Continuous Optimization Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mx-4">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#D6C2E5] rounded-lg flex items-center justify-center mr-3">
                  <Target className="w-6 h-6 text-[#2E003E]" />
                </div>
                <h3 className="text-lg font-semibold text-[#2E003E] font-plus-jakarta">Continuous Optimization</h3>
              </div>
              <p className="text-gray-600 text-sm font-plus-jakarta">
                Real-time improvements based on performance metrics
              </p>
            </div>

            {/* Pattern Recognition Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mx-4">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#D6C2E5] rounded-lg flex items-center justify-center mr-3">
                  <Zap className="w-6 h-6 text-[#2E003E]" />
                </div>
                <h3 className="text-lg font-semibold text-[#2E003E] font-plus-jakarta">Pattern Recognition</h3>
              </div>
              <p className="text-gray-600 text-sm font-plus-jakarta">
                Intelligent detection of trends and anomalies in data
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BalanceCoreSection;
