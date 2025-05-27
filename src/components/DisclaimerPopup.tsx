
import React from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DisclaimerPopupProps {
  open: boolean;
  onAccept: () => void;
}

const DisclaimerPopup = ({ open, onAccept }: DisclaimerPopupProps) => {
  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md bg-stage-dark border border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gold-gradient">Legal Disclaimer & Terms of Use</DialogTitle>
        </DialogHeader>
        
        <div className="py-4 text-white/80 text-sm max-h-[60vh] overflow-y-auto space-y-4">
          <p><strong>Covered Tools:</strong> This disclaimer applies to all StageMaster AI Suite tools including but not limited to: Theater Set Design GPT, Costume Design GPT, Choreography GPT, Stage Lighting GPT, Playwriter GPT, Movie Script Writer GPT, Movie Scene Maker GPT, Movie Maker AI Studio, Music Video Maker GPT, Commercial Scene Maker GPT, and any future tools added to our platform.</p>
          
          <p><strong>Usage Limitations:</strong> Our AI tools are available with unlimited access for ChatGPT Plus subscribers. Free ChatGPT accounts have limited interactions and may experience usage restrictions. Access depends on OpenAI's availability and policies.</p>
          
          <p><strong>No Warranties:</strong> All tools are provided "AS IS" and "AS AVAILABLE" without warranties of any kind, express or implied. AI WEB TOOLS LLC disclaims all warranties including merchantability, fitness for a particular purpose, and non-infringement.</p>
          
          <p><strong>Creative Assistance Only:</strong> Our AI tools provide creative suggestions and conceptual designs. Outputs are NOT professional advice and should not replace qualified professionals in engineering, architecture, safety, legal, or medical matters.</p>
          
          <p><strong>Safety & Implementation:</strong> Users are solely responsible for ensuring all generated designs, choreography, lighting setups, and technical elements meet safety standards and building codes before implementation.</p>
          
          <p><strong>Intellectual Property:</strong> While you retain rights to your inputs, AI-generated outputs may contain elements from training data. Users are responsible for ensuring compliance with copyright and intellectual property laws.</p>
          
          <p><strong>Limitation of Liability:</strong> AI WEB TOOLS LLC shall not be liable for any damages, losses, or harm resulting from use of our tools, including but not limited to property damage, personal injury, or financial loss.</p>
          
          <p>By clicking "I AGREE", you acknowledge reading and accepting these terms and assume all risks associated with using our AI tools.</p>
        </div>
        
        <DialogFooter>
          <Button 
            onClick={onAccept}
            className="w-full bg-gold-gradient text-stage-dark hover:opacity-90 transition-opacity"
          >
            I AGREE TO THESE TERMS
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerPopup;
