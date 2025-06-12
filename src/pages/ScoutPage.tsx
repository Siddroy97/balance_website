import React from 'react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import ContactModal from '@/components/ContactModal';
import { Clock, DollarSign, CheckCircle, Radar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const ScoutPage = () => {
  const handleOpenContactModal = () => {
    console.log('ScoutPage: Dispatching openContactModal event');
    const event = new CustomEvent('openContactModal');
    window.dispatchEvent(event);
  };
  return <div className="min-h-screen bg-white">
      <Helmet>
        <title>Scout</title>
      </Helmet>
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1a0b1f] via-[#2E003E] to-[#3d1448] py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D6C2E5]/10 via-transparent to-[#2E003E]/20 opacity-60"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-24 h-24 bg-gradient-to-br from-[#D6C2E5] to-white rounded-full flex items-center justify-center mx-auto mb-8">
                <Radar className="text-[#2E003E]" size={48} />
              </div>
              <h1 className="text-5xl md:text-6xl font-plus-jakarta font-bold text-white mb-6">
                Scout: Your 5-Second PA Sentry
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 font-plus-jakarta leading-relaxed">
                Instant PA requirement detection that saves time, money, and sanity.
              </p>
              <Button onClick={handleOpenContactModal} size="lg" className="bg-gradient-to-r from-[#D6C2E5] to-white text-[#2E003E] hover:from-white hover:to-[#D6C2E5] px-8 py-4 text-lg font-plus-jakarta font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg">
                Try Scout Now
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Why We Built Scout */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-plus-jakarta font-bold text-[#2E003E] mb-6">
                Why We Built Scout
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-plus-jakarta leading-relaxed">
                The prior authorization burden is crushing independent practices.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl font-plus-jakarta font-bold text-[#D6C2E5] mb-2">13 hrs/week</div>
                <p className="text-gray-600 font-plus-jakarta">Physicians spend on prior-auth admin (AMA 2024)</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-plus-jakarta font-bold text-[#D6C2E5] mb-2">15%</div>
                <p className="text-gray-600 font-plus-jakarta">Of requested PAs never needed (CAQH 2023)</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-plus-jakarta font-bold text-[#D6C2E5] mb-2">Revenue Loss</div>
                <p className="text-gray-600 font-plus-jakarta">Small clinics bleed revenue and patient slots in the manual "Do I even need a PA?" gap</p>
              </div>
            </div>
          </div>
        </section>

        {/* What Scout Does */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-plus-jakarta font-bold text-[#2E003E] mb-6">
                What Scout Does
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-plus-jakarta font-semibold text-[#2E003E]">Instant Coverage Check</h3>
                  <p className="text-gray-600 font-plus-jakarta">Real-time 270/271 ping flags PA requirement in &lt; 5s (avg 3.2s)</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-plus-jakarta font-semibold text-[#2E003E]">Rule-Perfect Accuracy</h3>
                  <p className="text-gray-600 font-plus-jakarta">Reverse-engineers the latest payer-policy updates nightly → &gt; 97% decision accuracy</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-plus-jakarta font-semibold text-[#2E003E]">No-PA Cancellation</h3>
                  <p className="text-gray-600 font-plus-jakarta">Auto-cancels ~ 15% of unneeded PAs, saving $11 and 10 min per visit</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-plus-jakarta font-semibold text-[#2E003E]">Data Capture</h3>
                  <p className="text-gray-600 font-plus-jakarta">Logs plan⇄CPT hits and doc-list seeds for every query</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-plus-jakarta font-medium">Patient: John Smith</span>
                    <span className="text-sm text-gray-500 font-plus-jakarta">CPT: 99213</span>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-plus-jakarta font-semibold">
                    ✓ No PA Needed
                  </div>
                  <p className="text-sm text-gray-600 mt-2 font-plus-jakarta">Response time: 3.1 seconds</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-plus-jakarta font-bold text-[#2E003E] mb-6">
                How It Works
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#D6C2E5] rounded-full flex items-center justify-center mx-auto text-white font-plus-jakarta font-bold text-xl">1</div>
                <h3 className="text-xl font-plus-jakarta font-semibold text-[#2E003E]">Embed & Go Live</h3>
                <p className="text-gray-600 font-plus-jakarta">1-day widget install in any EHR or browser</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#D6C2E5] rounded-full flex items-center justify-center mx-auto text-white font-plus-jakarta font-bold text-xl">2</div>
                <h3 className="text-xl font-plus-jakarta font-semibold text-[#2E003E]">Simple UI</h3>
                <p className="text-gray-600 font-plus-jakarta">Enter patient, code, payer → click "Check PA"</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#D6C2E5] rounded-full flex items-center justify-center mx-auto text-white font-plus-jakarta font-bold text-xl">3</div>
                <h3 className="text-xl font-plus-jakarta font-semibold text-[#2E003E]">Immediate Result</h3>
                <p className="text-gray-600 font-plus-jakarta">Green badge for "No PA Needed" or red "PA Required," plus doc checklist link</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-plus-jakarta font-bold text-[#2E003E] mb-6">
                Impact Metrics
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <Clock className="w-16 h-16 text-[#D6C2E5] mx-auto" />
                <div className="text-3xl font-plus-jakarta font-bold text-[#2E003E]">10 min/visit</div>
                <p className="text-gray-600 font-plus-jakarta">2+ hrs/day back for clinical work</p>
              </div>
              <div className="text-center space-y-4">
                <DollarSign className="w-16 h-16 text-[#D6C2E5] mx-auto" />
                <div className="text-3xl font-plus-jakarta font-bold text-[#2E003E]">$11/visit</div>
                <p className="text-gray-600 font-plus-jakarta">$22k/provider/year saved</p>
              </div>
              <div className="text-center space-y-4">
                <CheckCircle className="w-16 h-16 text-[#D6C2E5] mx-auto" />
                <div className="text-3xl font-plus-jakarta font-bold text-[#2E003E]">30%</div>
                <p className="text-gray-600 font-plus-jakarta">Denial reduction through upstream avoidance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        
      </div>
      <Footer />
      <ContactModal />
    </div>;
};
export default ScoutPage;