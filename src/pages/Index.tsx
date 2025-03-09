
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ToolsSection from '@/components/ToolsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import DisclaimerSection from '@/components/DisclaimerSection';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "StageMaster AI Suite | Advanced AI Tools for Theater Production";
  }, []);

  return (
    <div className="bg-stage-dark min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <ToolsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <DisclaimerSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
