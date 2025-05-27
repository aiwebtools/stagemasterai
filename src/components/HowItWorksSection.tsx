import React from 'react';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { PenTool, Film, ExternalLink } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Choose Your Creative Tool",
      description: "Select from our suite of specialized AI tools - whether you need set design, costumes, choreography, lighting, or scriptwriting assistance."
    },
    {
      title: "Provide Your Requirements",
      description: "Tell the AI about your specific vision, including style preferences, technical constraints, and creative goals."
    },
    {
      title: "Review AI-Generated Content",
      description: "Receive detailed designs, scripts, or creative direction tailored to your requirements within minutes."
    },
    {
      title: "Refine and Implement",
      description: "Request adjustments as needed, then download or save the final output to bring your creative vision to life."
    }
  ];

  return (
    <section id="how-it-works" className="py-10 md:py-20 bg-black/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white backdrop-blur-sm mb-4 inline-block">
            Intuitive Process
          </span>
          <h2 className="headline text-3xl md:text-4xl mb-4">
            How StageMaster AI Suite Works
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our creative AI tools streamline your process with a simple four-step workflow that works for all tools in our suite.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-8 md:mb-12">
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a 
              href="https://playwritergpt.lovable.app/"
              target="_blank" 
              rel="noopener noreferrer"
              className="interactive-button bg-gold-gradient"
            >
              <span className="text-stage-dark flex items-center gap-2 font-semibold">
                <PenTool size={18} /> Try PlayWriter GPT <ExternalLink size={16} />
              </span>
            </a>
            <a 
              href="https://moviescriptwritergpt.lovable.app/"
              target="_blank" 
              rel="noopener noreferrer"
              className="interactive-button bg-green-gradient"
            >
              <span className="text-stage-dark flex items-center gap-2 font-semibold">
                <Film size={18} /> Try Movie Script Writer <ExternalLink size={16} />
              </span>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
};

export default HowItWorksSection;
