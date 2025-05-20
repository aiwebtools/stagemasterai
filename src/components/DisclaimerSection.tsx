
import React from 'react';
import { Button } from "@/components/ui/button";
import { toast } from '@/hooks/use-toast';

const DisclaimerSection = () => {
  const handleReviewDisclaimer = () => {
    // Remove the acceptance from localStorage so the popup will show again
    localStorage.removeItem('disclaimerAccepted');
    
    // Refresh the page to trigger the disclaimer popup
    window.location.reload();
    
    toast({
      title: "Disclaimer Reset",
      description: "The disclaimer will appear when the page refreshes.",
      duration: 3000,
    });
  };

  return (
    <section id="disclaimer" className="py-16 bg-black/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="headline text-2xl md:text-3xl mb-6 text-center">
            Legal Disclaimer
          </h2>
          
          <div className="glass-card p-6 md:p-8 text-white/80 text-sm space-y-4">
            <p><strong>Usage Terms:</strong> StageMaster AI Suite tools are available with <strong>unlimited access for ChatGPT Plus subscribers</strong>. Free ChatGPT accounts have limited interactions and may experience usage restrictions after several prompts per hour.</p>
            
            <p><strong>Disclaimer of Liability:</strong> The StageMaster AI Suite tools are provided "as is" and "as available" without warranties of any kind, either express or implied. AI WEB TOOLS LLC does not warrant that the tools will be error-free, secure, or uninterrupted.</p>
            
            <p><strong>No Professional Advice:</strong> Our AI tools generate creative suggestions and designs based on your inputs, but these outputs should not be considered professional engineering, architectural, or safety advice. All designs, particularly those involving structural elements, rigging, electrical systems, or performer safety, should be reviewed and approved by qualified professionals before implementation.</p>
            
            <p><strong>Copyright and Ownership:</strong> You retain ownership of your inputs to our tools. The outputs generated are provided for your use, but may contain elements created by AI algorithms trained on a diverse dataset. While we believe the outputs are available for your use, we cannot guarantee they are free from third-party intellectual property rights in all jurisdictions.</p>
            
            <p><strong>Usage Limitations:</strong> StageMaster AI Suite tools are intended for creative assistance in theatrical productions. The tools should not be used to generate content that is illegal, harmful, deceptive, or violates the rights of others.</p>
            
            <p><strong>Third-Party Services:</strong> Our tools link to services operated by OpenAI (ChatGPT) and other third parties. We are not responsible for the content, privacy policies, or practices of these third-party services. Use of linked services is subject to their respective terms and conditions.</p>
            
            <p><strong>Limitation of Liability:</strong> To the maximum extent permitted by law, AI WEB TOOLS LLC and its affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the StageMaster AI Suite tools.</p>
            
            <p><strong>Changes to Services:</strong> We reserve the right to modify, suspend, or discontinue any aspect of the StageMaster AI Suite tools at any time without prior notice.</p>
            
            <p>By using the StageMaster AI Suite tools, you acknowledge that you have read, understood, and agree to be bound by this disclaimer. This disclaimer may be updated from time to time without notice.</p>
            
            <p className="text-xs text-white/50 mt-6">Last updated: June 2025</p>
            
            <div className="flex justify-center mt-8">
              <Button 
                onClick={handleReviewDisclaimer}
                className="bg-white/10 hover:bg-white/20 text-white"
              >
                Review Full Disclaimer Again
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
