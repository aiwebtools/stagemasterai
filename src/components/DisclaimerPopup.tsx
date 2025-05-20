
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
          <DialogTitle className="text-xl font-bold text-gold-gradient">Legal Disclaimer</DialogTitle>
        </DialogHeader>
        
        <div className="py-4 text-white/80 text-sm max-h-[60vh] overflow-y-auto space-y-4">
          <p><strong>Usage Terms:</strong> StageMaster AI Suite tools are available with <strong>unlimited access for ChatGPT Plus subscribers</strong>. Free ChatGPT accounts have limited interactions and may experience usage restrictions after several prompts.</p>
          
          <p><strong>Disclaimer of Liability:</strong> The StageMaster AI Suite tools are provided "as is" and "as available" without warranties of any kind, either express or implied. AI WEB TOOLS LLC does not warrant that the tools will be error-free, secure, or uninterrupted.</p>
          
          <p><strong>No Professional Advice:</strong> Our AI tools generate creative suggestions and designs based on your inputs, but these outputs should not be considered professional engineering, architectural, or safety advice.</p>
          
          <p><strong>Copyright and Ownership:</strong> You retain ownership of your inputs to our tools. The outputs generated are provided for your use, but may contain elements created by AI algorithms trained on a diverse dataset.</p>
          
          <p><strong>Usage Limitations:</strong> StageMaster AI Suite tools are intended for creative assistance in theatrical productions. The tools should not be used to generate content that is illegal, harmful, deceptive, or violates the rights of others.</p>
          
          <p>By clicking "I AGREE", you acknowledge that you have read, understood, and agree to be bound by this disclaimer.</p>
        </div>
        
        <DialogFooter>
          <Button 
            onClick={onAccept}
            className="w-full bg-gold-gradient text-stage-dark hover:opacity-90 transition-opacity"
          >
            I AGREE
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerPopup;
