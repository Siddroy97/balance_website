import React from 'react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import TallyHero from '@/components/tally/TallyHero';
import TallyHowItWorks from '@/components/tally/TallyHowItWorks';
import TallyKeyBenefits from '@/components/tally/TallyKeyBenefits';
import TallyFeaturesBreakdown from '@/components/tally/TallyFeaturesBreakdown';
import TallyIntegrationsSecurity from '@/components/tally/TallyIntegrationsSecurity';
import TallyCTA from '@/components/tally/TallyCTA';
import ContactModal from '@/components/ContactModal';
import { Helmet } from 'react-helmet';

const TallyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Tally</title>
      </Helmet>
      <Header />
      <TallyHero />
      <TallyHowItWorks />
      <TallyKeyBenefits />
      <TallyFeaturesBreakdown />
      <TallyIntegrationsSecurity />
      <TallyCTA />
      <Footer />
      <ContactModal />
    </div>
  );
};

export default TallyPage;
