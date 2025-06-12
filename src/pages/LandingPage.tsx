import React from 'react';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import ComplexitySection from '@/components/landing/ComplexitySection';
import ProductModules from '@/components/landing/ProductModules';
import BalanceCoreSection from '@/components/landing/BalanceCoreSection';
import UseCases from '@/components/landing/UseCases';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import ContactModal from '@/components/ContactModal';
import { Helmet } from 'react-helmet';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Balance Health</title>
      </Helmet>
      <Header />
      <div className="pt-16">
        <Hero />
        <ComplexitySection />
        <ProductModules />
        <BalanceCoreSection />
        <UseCases />
        <CTASection />
        <Footer />
      </div>
      <ContactModal />
    </div>
  );
};

export default LandingPage;
