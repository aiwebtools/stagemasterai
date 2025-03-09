
import React from 'react';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { PenTool, ExternalLink } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Choose Your Tool",
      description: "Select the specialized AI tool that matches your production needs, whether set design, costumes, choreography, or lighting."
    },
    {
      title: "Provide Your Requirements",
      description: "Tell the AI about your production specifics, including style preferences, technical constraints, and creative vision."
    },
    {
      title: "Review AI-Generated Designs",
      description: "Receive detailed designs, blueprints, or directions tailored to your requirements within minutes."
    },
    {
      title: "Refine and Implement",
      description: "Request adjustments as needed, then download or save the final output to implement in your production."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-black/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white backdrop-blur-sm mb-4 inline-block">
            Process
          </span>
          <h2 className="headline text-3xl md:text-4xl mb-4">
            How StageMaster AI Works
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our AI tools streamline your creative process with a simple four-step workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="glass-card p-6 relative">
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center mb-4">
                <span className="text-stage-dark font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-white/70">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <YouTubeEmbed videoId="KKldzg40wEI" title="StageMaster AI Suite Demo" />
          
          <div className="mt-6 flex justify-center">
            <a 
              href="https://playwritergpt.lovable.app/"
              target="_blank" 
              rel="noopener noreferrer"
              className="interactive-button bg-gold-gradient"
            >
              <span className="text-stage-dark flex items-center gap-2 font-semibold">
                <PenTool size={18} /> TRY PLAYWRITER GPT NOW <ExternalLink size={16} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
