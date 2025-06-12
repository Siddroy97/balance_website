import React from 'react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { DollarSign, Clock, AlertTriangle } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const MissionPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Mission</title>
      </Helmet>
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-plus-jakarta font-bold text-[#2E003E] mb-6 md:mb-8 leading-tight">
              Small clinics should heal patients, not drown in paperwork.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-plus-jakarta mb-8 md:mb-12 leading-relaxed">
              If you can tap to pay for pizza, you should tap to care.
            </p>
          </motion.div>
        </section>

        {/* Our Approach */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-plus-jakarta font-bold text-[#2E003E] mb-12 md:mb-16 text-center">
              Our Approach
            </h2>
            
            <div className="space-y-8 md:space-y-12">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-plus-jakarta font-bold text-[#2E003E] mb-3 md:mb-4">Scout</h3>
                <p className="text-base md:text-lg text-gray-600 font-plus-jakarta">
                  In 5 seconds, see if a PA is even required.
                </p>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-plus-jakarta font-bold text-[#2E003E] mb-3 md:mb-4">Tally</h3>
                <p className="text-base md:text-lg text-gray-600 font-plus-jakarta">
                  Bundle the exact payer-required documents with one click.
                </p>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-plus-jakarta font-bold text-[#2E003E] mb-3 md:mb-4">Nora</h3>
                <p className="text-base md:text-lg text-gray-600 font-plus-jakarta">
                  File a fully coded, PA-perfect claim before checkout.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-plus-jakarta font-bold text-[#2E003E] mb-12 md:mb-16 text-center">
              Why It Matters
            </h2>
            
            <div className="space-y-8 md:space-y-8">
              {/* First Stat - Mobile Stack */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-[#D6C2E5] flex-shrink-0" />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2">
                  <span className="text-2xl md:text-3xl font-plus-jakarta font-bold text-[#2E003E]">$175 B+</span>
                  <span className="text-sm md:text-lg text-gray-600 font-plus-jakarta">wasted on admin every year</span>
                </div>
              </div>

              {/* Second Stat - Mobile Stack */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <Clock className="w-6 h-6 md:w-8 md:h-8 text-[#D6C2E5] flex-shrink-0" />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2">
                  <div className="flex items-baseline space-x-1 sm:space-x-2 justify-center sm:justify-start">
                    <span className="text-2xl md:text-3xl font-plus-jakarta font-bold text-[#2E003E]">39</span>
                    <span className="text-sm md:text-lg text-gray-600 font-plus-jakarta">PA errands &</span>
                  </div>
                  <div className="flex items-baseline space-x-1 sm:space-x-2 justify-center sm:justify-start">
                    <span className="text-2xl md:text-3xl font-plus-jakarta font-bold text-[#2E003E]">13 hrs/week</span>
                    <span className="text-sm md:text-lg text-gray-600 font-plus-jakarta">lost per physician</span>
                  </div>
                </div>
              </div>

              {/* Third Stat - Mobile Stack */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-[#D6C2E5] flex-shrink-0" />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2">
                  <div className="flex items-baseline space-x-1 sm:space-x-2 justify-center sm:justify-start">
                    <span className="text-sm md:text-lg text-gray-600 font-plus-jakarta">Denial rework costs</span>
                    <span className="text-2xl md:text-3xl font-plus-jakarta font-bold text-[#2E003E]">$25–$117</span>
                  </div>
                  <div className="flex items-baseline space-x-1 sm:space-x-2 justify-center sm:justify-start">
                    <span className="text-sm md:text-lg text-gray-600 font-plus-jakarta">per claim;</span>
                    <span className="text-2xl md:text-3xl font-plus-jakarta font-bold text-[#2E003E]">60%</span>
                    <span className="text-sm md:text-lg text-gray-600 font-plus-jakarta">go unfixed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Small-Clinic Crunch */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-plus-jakarta font-bold text-[#2E003E] mb-8 md:mb-12 text-center">
              The Small-Clinic Crunch
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-plus-jakarta leading-relaxed text-center">
              "Razor-thin margins and post-COVID staffing shortages make admin overhead the No. 1 threat to community practices. Every delayed PA means slower care and unstable cash flow."
            </p>
          </div>
        </section>

        {/* Join the Movement */}
        <section className="py-12 md:py-20 bg-[#2E003E] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-plus-jakarta font-bold text-white mb-6 md:mb-8">
              Join the Movement
            </h2>
            <p className="text-base md:text-xl lg:text-2xl text-gray-300 font-plus-jakarta leading-relaxed">
              Whether you're a clinician swamped by forms, an engineer who loves elegant systems, or an investor who knows care should feel as fast as tap-to-pay, Balance Health invites you to help clinics focus on patients — not paperwork.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MissionPage;
