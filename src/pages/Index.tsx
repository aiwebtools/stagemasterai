import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import ToolsSection from '@/components/ToolsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import DisclaimerSection from '@/components/DisclaimerSection';
import DisclaimerPopup from '@/components/DisclaimerPopup';
import FloatingButton from '@/components/FloatingButton';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  
  useEffect(() => {
    // Check if the user has already accepted the disclaimer
    const hasAcceptedDisclaimer = localStorage.getItem('disclaimerAccepted');
    
    if (!hasAcceptedDisclaimer) {
      // Show the disclaimer after a short delay to ensure all content is loaded
      const timer = setTimeout(() => {
        setShowDisclaimer(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAcceptDisclaimer = () => {
    // Save to localStorage that user has accepted
    localStorage.setItem('disclaimerAccepted', 'true');
    setShowDisclaimer(false);
    
    // Show a confirmation toast
    toast({
      title: "Disclaimer Accepted",
      description: "Thank you for accepting our terms. Enjoy using StageMaster AI Suite!",
      duration: 5000,
    });
  };

  return (
    <div className="bg-stage-dark min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <VideoSection />
        <ToolsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <DisclaimerSection />
      </main>
      
      <Footer />
      <FloatingButton />
      
      <DisclaimerPopup 
        open={showDisclaimer} 
        onAccept={handleAcceptDisclaimer} 
      />
    </div>
  );
};

export default Index;
