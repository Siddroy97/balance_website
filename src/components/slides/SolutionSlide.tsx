import React, { useState, useEffect } from 'react';
import { Search, CheckCircle, Clock, User, Shield } from 'lucide-react';

const SolutionSlide = () => {
  const [demoStep, setDemoStep] = useState(0);
  const [typedName, setTypedName] = useState('');

  const mockPatient = {
    name: 'John Smith',
    insurance: 'BlueCross BlueShield',
    eligible: true,
    paRequired: false
  };

  // Auto-loop the demo animation with slower timing
  useEffect(() => {
    const runDemoLoop = () => {
      // Reset to step 0
      setDemoStep(0);
      setTypedName('');
      
      // Step 1: Start typing animation (after 1500ms)
      setTimeout(() => {
        setDemoStep(1);
        // Type "John Smith" character by character
        const name = mockPatient.name;
        let currentIndex = 0;
        const typeInterval = setInterval(() => {
          if (currentIndex <= name.length) {
            setTypedName(name.substring(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typeInterval);
          }
        }, 150); // 150ms per character
      }, 1500);
      
      // Step 2: Checking eligibility (after 4500ms - accounting for typing time)
      setTimeout(() => setDemoStep(2), 4500);
      
      // Step 3: PA Check (after 7000ms)
      setTimeout(() => setDemoStep(3), 7000);
      
      // Step 4: Results (after 9500ms)
      setTimeout(() => setDemoStep(4), 9500);
      
      // Hold results for 3 seconds, then restart (after 13000ms)
      setTimeout(() => runDemoLoop(), 13000);
    };

    // Start the first loop
    runDemoLoop();
  }, []);

  return (
    <div className="space-y-8">
      {/* Responsive Demo Container */}
      <div
        className="bg-white border-2 border-gray-200 rounded-lg p-4 sm:p-6 max-w-2xl mx-auto shadow-sm flex flex-col min-h-[520px] overflow-auto md:h-[650px] md:overflow-hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom,2rem)' }}
      >
        <div className="flex-1 space-y-4 sm:space-y-5">
          {/* Step 1: Search */}
          <div className={`transition-all duration-1000 ease-in-out ${demoStep >= 1 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
            <div className="flex items-center space-x-3 mb-3">
              <Search size={18} className={`transition-all duration-700 ${demoStep === 1 ? 'text-[#D6C2E5] animate-pulse' : demoStep > 1 ? 'text-green-500' : 'text-gray-300'}`} />
              <span className={`font-plus-jakarta text-sm transition-all duration-700 ${demoStep === 1 ? 'text-[#D6C2E5] font-medium' : demoStep > 1 ? 'text-gray-600' : 'text-gray-400'}`}>
                Searching Patient...
              </span>
              <div className={`transition-all duration-700 ${demoStep > 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <CheckCircle size={14} className="text-green-500" />
              </div>
            </div>
            <div className={`bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border transition-all duration-700 ${demoStep >= 1 ? 'border-[#D6C2E5]/30' : 'border-gray-200'}`}>
              <div className="flex items-center space-x-2">
                <User size={14} className="text-gray-400" />
                <span className="text-sm font-plus-jakarta font-medium">
                  {typedName}
                  {demoStep === 1 && typedName.length < mockPatient.name.length && (
                    <span className="animate-pulse">|</span>
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Step 2: Checking eligibility */}
          <div className={`transition-all duration-1000 ease-in-out delay-300 ${demoStep >= 2 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
            <div className="flex items-center space-x-3 mb-3">
              <Shield size={18} className={`transition-all duration-700 ${demoStep === 2 ? 'text-[#D6C2E5] animate-pulse' : demoStep > 2 ? 'text-green-500' : 'text-gray-300'}`} />
              <span className={`font-plus-jakarta text-sm transition-all duration-700 ${demoStep === 2 ? 'text-[#D6C2E5] font-medium' : demoStep > 2 ? 'text-gray-600' : 'text-gray-400'}`}>
                Checking Insurance Eligibility...
              </span>
              <div className={`transition-all duration-700 ${demoStep > 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <CheckCircle size={14} className="text-green-500" />
              </div>
            </div>
            <div className={`bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg border transition-all duration-700 ${demoStep >= 2 ? 'border-blue-200' : 'border-gray-200'}`}>
              <div className="text-sm space-y-1">
                <div className="font-plus-jakarta font-medium">
                  <span>Insurance: {mockPatient.insurance}</span>
                </div>
                <div className={`font-plus-jakarta text-xs transition-all duration-1000 ${demoStep >= 3 ? 'opacity-100 text-orange-600' : 'opacity-0'}`}>
                  ✓ Pinging provider API...
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: PA Check */}
          <div className={`transition-all duration-1000 ease-in-out delay-600 ${demoStep >= 3 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
            <div className="flex items-center space-x-3 mb-3">
              <Clock size={18} className={`transition-all duration-700 ${demoStep === 3 ? 'text-[#D6C2E5] animate-pulse' : demoStep > 3 ? 'text-green-500' : 'text-gray-300'}`} />
              <span className={`font-plus-jakarta text-sm transition-all duration-700 ${demoStep === 3 ? 'text-[#D6C2E5] font-medium' : demoStep > 3 ? 'text-gray-600' : 'text-gray-400'}`}>
                Checking PA Requirements...
              </span>
              <div className={`transition-all duration-700 ${demoStep > 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <CheckCircle size={14} className="text-green-500" />
              </div>
            </div>
            {demoStep >= 4 && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200 shadow-sm mb-3">
                <div className="text-sm space-y-1">
                  <div className="text-green-600 font-plus-jakarta font-semibold flex items-center space-x-1">
                    <CheckCircle size={12} />
                    <span>PA Check Complete</span>
                  </div>
                  <div className="text-green-700 font-plus-jakarta text-xs">PA Required: <span className="font-medium">No</span></div>
                </div>
              </div>
            )}
          </div>

          {/* Final Result */}
          <div className={`transition-all duration-1000 ease-in-out delay-900 ${demoStep === 4 ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-8 scale-95'}`}>
            {demoStep === 4 && (
              <div
                className="bg-[#2E003E] p-3 sm:p-4 rounded-lg text-white shadow-lg"
                style={{ marginBottom: 'env(safe-area-inset-bottom,2rem)' }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1 sm:mb-2">
                      <span className="font-plus-jakarta font-semibold text-xs sm:text-sm">Proceed with Treatment</span>
                    </div>
                    <div className="space-y-1 text-xs opacity-90 font-plus-jakarta">
                      <div>Patient eligible</div>
                      <div>No PA required</div>
                    </div>
                  </div>
                  <div className="text-right ml-0 sm:ml-4 w-full sm:w-auto">
                    <div className="text-xs opacity-75 mb-0.5 font-plus-jakarta">Response Time</div>
                    <div className="font-plus-jakarta font-bold text-base sm:text-lg">3.2s</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSlide;
