
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
            Legal Disclaimer & Terms of Use
          </h2>
          
          <div className="glass-card p-6 md:p-8 text-white/80 text-sm space-y-4">
            <p><strong>Scope of Services:</strong> This disclaimer governs the use of all StageMaster AI Suite tools provided by AI WEB TOOLS LLC, including but not limited to: Theater Set Design GPT, Costume Design GPT, Choreography GPT, Stage Lighting GPT, Playwriter GPT, Movie Script Writer GPT, Movie Scene Maker GPT, Movie Maker AI Studio, Music Video Maker GPT, Commercial Scene Maker GPT, and any additional tools that may be added to our platform.</p>
            
            <p><strong>Service Availability:</strong> Our AI tools are accessible through third-party platforms including OpenAI's ChatGPT. Unlimited access is available to ChatGPT Plus subscribers, while free accounts may experience usage limitations. Service availability depends on third-party platform policies and technical infrastructure beyond our control.</p>
            
            <p><strong>Disclaimer of Warranties:</strong> ALL TOOLS AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. AI WEB TOOLS LLC EXPRESSLY DISCLAIMS ALL WARRANTIES INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, RELIABILITY, AND UNINTERRUPTED SERVICE.</p>
            
            <p><strong>Not Professional Advice:</strong> Our AI tools generate creative concepts, designs, and suggestions for entertainment and educational purposes only. OUTPUTS ARE NOT PROFESSIONAL ADVICE and should never replace consultation with qualified professionals including but not limited to: structural engineers, electrical engineers, safety inspectors, architects, choreographers, legal advisors, or medical professionals.</p>
            
            <p><strong>Safety and Implementation Responsibility:</strong> Users assume complete responsibility for reviewing, testing, and validating all AI-generated content before implementation. This includes but is not limited to: structural integrity of set designs, electrical safety of lighting systems, physical safety of choreography, building code compliance, and performer safety measures. AI WEB TOOLS LLC is not responsible for any accidents, injuries, or damages resulting from implementation of AI-generated designs or suggestions.</p>
            
            <p><strong>Intellectual Property and Content:</strong> While users retain ownership of their original inputs, AI-generated outputs may incorporate elements derived from publicly available training data. Users are solely responsible for ensuring their use of AI-generated content complies with applicable copyright, trademark, and intellectual property laws. AI WEB TOOLS LLC makes no representations regarding the originality or intellectual property status of AI-generated content.</p>
            
            <p><strong>Third-Party Services:</strong> Our platform integrates with services operated by OpenAI, ChatGPT, and other third parties. We are not responsible for the content, availability, privacy policies, terms of service, or practices of these third-party services. Use of integrated services is subject to their respective terms and conditions.</p>
            
            <p><strong>Prohibited Uses:</strong> Users may not use our tools to generate content that is: illegal under applicable law, harmful to individuals or groups, defamatory, infringing on third-party rights, obscene, threatening, or violates any platform policies.</p>
            
            <p><strong>Limitation of Liability:</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, AI WEB TOOLS LLC, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES ARISING FROM OR RELATED TO YOUR USE OF OUR TOOLS, INCLUDING BUT NOT LIMITED TO: PROPERTY DAMAGE, PERSONAL INJURY, FINANCIAL LOSS, LOSS OF PROFITS, DATA LOSS, OR BUSINESS INTERRUPTION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
            
            <p><strong>Indemnification:</strong> Users agree to indemnify, defend, and hold harmless AI WEB TOOLS LLC from any claims, damages, losses, costs, or expenses arising from their use of our tools, violation of these terms, or infringement of third-party rights.</p>
            
            <p><strong>Modifications:</strong> We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice. This disclaimer may be updated periodically, and continued use constitutes acceptance of any changes.</p>
            
            <p><strong>Governing Law:</strong> These terms are governed by the laws of the jurisdiction where AI WEB TOOLS LLC is incorporated, without regard to conflict of law principles.</p>
            
            <p><strong>Severability:</strong> If any provision of this disclaimer is found to be unenforceable, the remaining provisions shall remain in full force and effect.</p>
            
            <p className="font-semibold text-white">BY USING ANY STAGEMASTER AI SUITE TOOLS, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THIS DISCLAIMER AND ASSUME ALL RISKS ASSOCIATED WITH USE OF OUR SERVICES.</p>
            
            <p className="text-xs text-white/50 mt-6">Last updated: December 2024</p>
            
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
