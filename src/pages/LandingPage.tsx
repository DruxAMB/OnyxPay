import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WhatItDoes from '../components/WhatItDoes';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Metrics from '../components/Metrics';
import Partners from '../components/Partners';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <Features />
      <WhatItDoes />
      <HowItWorks />
      <Testimonials />
      <Metrics />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;